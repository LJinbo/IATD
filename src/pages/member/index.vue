<template>
    <div class="memberIndex grayBg">
        <div class="userInfo">
            <top-hd :title="hdTitle"></top-hd>
            <div class="info mt30 flex-box flex-justify-center">
                <div class="col-1">
                    <div class="Avatar">
                        <img src="../../assets/images/Avatar.png" alt="">
                    </div>
                    <p>{{userType}}</p>
                </div>
                <div class="col-2">
                    <p class="user-name" v-text="userInfo.User_Name||userInfo.User_Cell">Nick Name</p>
                    <!-- <p class="AccountInfo flex-box flex-center">
                        <span>冻结：500分</span>
                        <span>剩余积分：1000</span>
                    </p> -->
                </div>
            </div>
        </div>
        <div class="memberNavs">
            <div class="row flex-box flex-center">
                <router-link :to="{name: 'orders'}" tag="div" class="item">
                    <img src="../../assets/images/memberIcon1.png" alt="">
                    <p>我的订单</p>
                </router-link>
                <router-link :to="{name: 'hot'}" tag="div" class="item">
                    <img src="../../assets/images/memberIcon2.png" alt="">
                    <p>样品申请</p>
                </router-link>
                <router-link :to="{name: 'history'}" tag="div" class="item">
                    <img src="../../assets/images/memberIcon3.png" alt="">
                    <p>历史积分</p>
                </router-link>
            </div>
            <div class="row flex-box flex-center">
                <router-link :to="{name: 'approval'}" tag="div" class="item">
                    <img src="../../assets/images/memberIcon4.png" alt="">
                    <p>在线审批</p>
                </router-link>
                <router-link :to="{name: 'memberInfo'}" tag="div" class="item">
                    <img src="../../assets/images/memberIcon5.png" alt="">
                    <p>我的信息</p>
                </router-link>
                <router-link :to="{name: 'receiver'}" tag="div" class="item">
                    <img src="../../assets/images/memberIcon6.png" alt="">
                    <p>地址信息</p>
                </router-link>
            </div>
        </div>
        <div class="moreMode flex-box flex-center">
            更多特权 敬请期待<i></i>
        </div>
    </div>
</template>
<script>
import topHd from '../../components/topHd' 
export default {
    data () {
        return {
             hdTitle: '3M IATD 会员中心',
             userInfo: {}
        }
    },
    created() {
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        console.log(this.userInfo);
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
    components: {
        topHd,
    }
}
</script>
<style lang="scss">
.memberIndex{
    background: #E6E6E6;
}
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
    .col-2{
        margin: .25rem 0 0 .35rem;
        .user-name{
            color: #fff;
            font-size: .32rem;
            margin-bottom: .22rem;
        }
        .AccountInfo{
            height: .46rem;
            border: 1px solid #fff;
            border-radius: .2rem;
            color:#fff;
            font-size: .2rem;
            max-width: 4rem;
            span{
                padding:0 .1rem;
                border-right: 1px solid #fff;
                &:last-child{
                    border-right:none;
                }
            }
        }
    }
}
.memberNavs{
    border: 1px solid #CBCCCC;
    border-width: 1px 0 1px 0;
    background: #fff;
    padding: 0 .8rem;
    margin-bottom: .4rem;
    .row{
        border-bottom: 1px solid #B5B5B6;
        &:last-child{
            border-bottom: none;
        }
    }
    .item{
        flex: 1;
        padding: .58rem 0;
        text-align: center;
        img{
            width: .59rem;
            height: .59rem;
        }
        p{
            margin-top: .3rem;
            color: #7d7d7d;
            font-size: .26rem;
        }
    }
}
.moreMode{
    border:1px solid #C9CACA;
    border-width: 1px 0 1px 0;
    height: .8rem;
    text-align: center;
    background: #fff;
    color: #7d7d7d;
    i{
        display: inline-block;
        width: .46rem;
        height: 5px;
        background: url("../../assets/images/more.png") center no-repeat;
        background-size: 100%;
        margin-left: .1rem;
    }
}
</style>
