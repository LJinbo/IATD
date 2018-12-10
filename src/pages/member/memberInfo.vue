<template>
    <div class="memberIndex grayBg site-main">
        <div class="userInfo">
            <top-hd :title="hdTitle"></top-hd>
            <div class="info mt30 flex-box flex-center">
                <div class="col-1">
                    <div class="Avatar">
                        <img src="../../assets/images/Avatar.png" alt="">
                    </div>
                    <p>{{userType}}</p>
                </div>
                <div class="user-name" v-text="userInfo.User_Name||userInfo.User_Cell">
                </div>
            </div>
        </div>
        <div class="fillIn">
            <div class="input-group">
                <div class="label">
                    用户ID
                </div>
                <input type="text" readonly v-model.trim="userInfo.User_Id">
            </div>
            <div class="input-group">
                <div class="label">
                    用户名
                </div>
                <input type="text" v-model.trim="userInfo.User_Name">  
            </div>
            <div class="input-group">
                <div class="label">
                    城市
                </div>
                <select v-model="userInfo.City">
                    <option value="" selected>请选择城市</option>
                    <option value="shenzhen">深圳</option>
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                </select>
            </div>
            <div class="input-group">
                <div class="label">
                    公司
                </div>
                <input type="text" placeholder="填写公司" v-model.trim="userInfo.Company">
            </div>
            <div class="input-group">
                <div class="label">
                    细分市场
                </div>
                <div class="market">
                    <div class="item" :class="{'active': Market==1}" @click="switchMarket(1)"><span class="icon"></span>市场1</div>
                    <div class="item" :class="{'active': Market==2}" @click="switchMarket(2)"><span class="icon"></span>市场2</div>
                    <div class="item" :class="{'active': Market==3}" @click="switchMarket(3)"><span class="icon"></span>市场3</div>
                </div>
            </div>
            <div class="input-group">
                <div class="label">
                    销售额
                </div>
                <input type="text" placeholder="填写销售额">
            </div>
            <div class="input-group">
                <div class="label">
                    3M销售人员
                </div>
                <input type="text" placeholder="填写销售人员">
            </div>
            <div class="btn-group mt50">
                <button @click="onSubmit" class="btn">保存</button>
            </div>
        </div>
    </div>
</template>
<script>
import topHd from '../../components/topHd' 
export default {
    data () {
        return {
             hdTitle: '3M IATD 会员信息',
             userInfo: {},
             Market: 1
        }
    },
    created() {
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    },
    computed: {
        userType () {
            if(this.userInfo.User_Role_Type ==2){
                return '3M员工'
            }else if(this.userInfo.User_Role_Type ==3){
                return '经销商'
            }else if(this.userInfo.User_Role_Type ==4){
                return '授权用户'
            }
        }
    },
    methods: {
        onSubmit() {
            this.$post('/api/WxWeb/SaveUserInfo',{
                'User_Id':this.userInfo.User_Id,
                'City': this.userInfo.City,
                'User_Name': this.userInfo.User_Name,
                'Company': this.userInfo.Company,
            }).then(res=> {
                localStorage.setItem('userInfo',JSON.stringify(res.result));
                this.$Toast({
                    message: res.msg,
                    position: 'middle',
                    duration: 2000
                });
            })
        },
        switchMarket (index) {
            this.Market = index;
        }
    },
    components: {
        topHd,
    }
}
</script>
<style lang="scss">
.userInfo{
    padding-top: .4rem;
    background: url('../../assets/images/memverBg.png') top no-repeat;
    background-size: 100%;
    height: 3.45rem;
    box-sizing: border-box;
    .col-1{
        text-align: center;
        color: #fff;
        .Avatar{
            width: 1.2rem;
        }
    }
    .user-name{
        font-size: .32rem;
        color: #fff;
        margin-left: .3rem;
    }
}
.fillIn{
    .input-group{
        border: 1px solid #C9CACA;
        border-width: 1px 0;
        margin-bottom: .1rem;
        background: #fff;
        display: flex;
        padding-left: .5rem;
        align-items: center;
        .label{
            width: 1.8rem;
        }
        .market{
            padding: .4rem 0;
            .item{
                margin-bottom: .2rem;
                &:last-child{
                    margin-bottom: 0;
                }
                &.active{
                    .icon{
                        background-image: url("../../assets/images/addr-on.png");
                    }
                }
            }
            .icon{
                display: inline-block;
                width: .24rem;
                height: .22rem;
                margin-right: .2rem;
                background: url("../../assets/images/addr-off.png") no-repeat;
                background-size: .24rem .22rem;
            }
        }
        input{
            height: .65rem;
            border: none;
            font-size: .24rem;
        }
        select{
            border: none;
            height: .65rem;
        }
    }
    .btn-group{
        text-align: center;
        .btn{
            width: 80%;
            display: inline-block;
            border: none;
            padding: 0;
            background: #E70022;
            color: #fff;
            font-size: .3rem;
            height: .77rem;
            line-height: .77rem;
            border-radius: .35rem;
        }
    }
}
</style>