<template>
    <div class="fillOrder grayBg site-main">
        <top-hd :title="hdTitle" class="m-hd"></top-hd>
        <div class="addr flex-box flex-align-center">
            <div class="Avatar"><img src="../../assets/images/Avatar.png" alt=""></div>
            <div class="text">
                <p><span class="name">{{selectAddr.User_Name}}</span><span class="phone">{{selectAddr.User_Phone}}</span></p>
                <p class="address">{{selectAddr.ProvinceName}}{{selectAddr.Cname}}{{selectAddr.Aname}}{{selectAddr.User_Street}}</p>
            </div>
        </div>
        <div class="goods-info">
            <h3>商品信息</h3>
            <ul>
                <li>
                    <div class="goods-img">
                        <img src="../../assets/images/sample-s.png" alt="">
                    </div>
                    <div class="goods-text">
                        <p class="goods-name">{{pdetail.Product_Name}}</p>
                        <p class="price">积分：999分</p>
                        <div class="num-control">
                            <span class="cut" @click="cut">-</span>
                            <input type="number" v-model="changeNum" class="num">
                            <span class="add" @click="add">+</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="fillInfo">
            <div class="input-group">
                <div class="label">
                    项目名称
                </div>
                <input type="text" v-model.trim="orderform.OrderDetails_ProjectName">  
            </div>
            <div class="input-group">
                <div class="label">
                    客户公司名称
                </div>
                <input type="text" v-model.trim="orderform.OrderDetails_CustomerName">  
            </div>
            <div class="input-group">
                <div class="label">
                    应用描述
                </div>
                <input type="text" v-model.trim="orderform.OrderDetails_Application">  
            </div>
            <div class="input-group">
                <div class="label">
                    细分市场
                </div>
                <input type="text" v-model.trim="orderform.OrderDetails_Agora">  
            </div>
            <div class="input-group">
                <div class="label">
                    所在省份
                </div>
                <input type="text" v-model.trim="orderform.OrderDetails_Provinve">  
            </div>
            <div class="input-group">
                <div class="label">
                    销售邮箱
                </div>
                <input type="text" v-model.trim="orderform.OrderDetails_Email">  
            </div>
            <div class="btn-group mt50">
                <button class="btn" :disabled ="IsDisabled" @click="onSubmit">提交</button>
            </div>
        </div>
    </div>
</template>
<script>
import topHd from '../../components/topHd' 
export default {
    data () {
        return {
             hdTitle: '3M IATD 会员中心',
             pdetail: {},
             pId: '',
             User_Name: '',
             changeNum: 1,
             addr: [],
             userInfo: {},
             activeaddrId: '',
             IsDisabled: false,
             orderform: {
                OrderID: '',
                OrderDetails_ProjectName: '',
                OrderDetails_CustomerName: '', 
                OrderDetails_Application: '', 
                OrderDetails_Agora: '', 
                OrderDetails_Provinve: '', 
                OrderDetails_Email: ''
             }
        }
    },
    created() {
        this.pId = this.$route.query.pId;
        this.changeNum = this.$route.query.num;
        this.$post('/api/WxWeb/GetProductList',{'Product_ID':this.pId}).then(res=> {
            this.pdetail =res.result[0];
        })
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.$post('/api/WxWeb/GetAddress',{'UserID': this.userInfo.User_Id}).then(res => {
            console.log(res);
            this.addr = res.result
        })
    },
    methods: {
        cut() {
            this.changeNum -=1;
            if(this.changeNum<1){
                this.changeNum = 1;
            }
        },
        add() {
            this.changeNum +=1;
        },
        onSubmit () {
            this.$post('/api/WxWeb/SaveOrder',{
                'Order_UserID':this.userInfo.User_Id,
                'Product_ID': this.pId,
                'Order_Quantity': this.changeNum,
                'Order_AddressId': this.activeaddrId
            }).then(res =>{
                this.orderform.orderform = res.result;
                if(this.orderform.orderform){
                    this.$post('/api/WxWeb/SaveOrderDetails',this.orderform).then(res=>{
                        this.$Toast({
                            message: res.msg,
                            position: 'middle',
                            duration: 2000
                        });
                        let s = setTimeout( () => {
                            clearTimeout(s)
                            this.$router.push({name: 'success'});
                        },2000)
                    })
                }
            })
        }
    },
    computed: {
        selectAddr () {
            for (let i = 0;i<this.addr.length;i++){
                if(this.addr[i].User_IsDeafult == 1){
                    this.activeaddrId = this.addr[i].ID;
                    return this.addr[i];
                }
            }
        }
    },
    components: {
        topHd,
    }
}
</script>
<style lang="scss">
    .fillOrder{
        .addr{
            margin-top: .25rem;
            height: 1.1rem;
            padding: 0 .55rem;
            background: #fff;
            border:1px solid #CCCDCD;
            border-width: 1px 0;
            margin-bottom: .2rem;
            .Avatar{
                width: .9rem;
                height: .9rem;
                margin-right: .28rem;
            }
            .name{
                margin-right: .15rem;
            }
            .address{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-top: .1rem;
            }
        }
        .goods-info{
            background: #fff;
            padding: 0 .55rem;
            h3{
                padding:.25rem 0 .1rem 0;
                border-bottom: 1px solid #C9CACA;
            }
            li{
                padding: .15rem 0;
                display: flex;
                .goods-img{
                    width: 1.45rem;
                    margin-right: .4rem;
                }
                .price{
                    color: #e70022;
                }
                .goods-name{
                    color: #3e3a39;
                    font-size: .26rem;
                    margin-bottom: .1rem;
                }
                .goods-text{
                    flex:1;
                }
            }
            .num-control{
                margin-top: .15rem;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                font-size: .2rem;
                text-align: center;
                span{
                    height: .29rem;
                    width: .29rem;
                    line-height: .29rem;
                    background:#DDDDDE;
                }
                input{
                    text-align: center;
                    height: .29rem;
                    line-height: .29rem;
                    border:none;
                    padding: 0 .05rem;
                    width: .5rem;
                    outline: none;
                    background:#DDDDDE;
                    margin: 0 2px;
                }
            }
        }
        .fillInfo{
            margin-top:.5rem;
            .input-group{
                border: 1px solid #C9CACA;
                border-width: 1px 0;
                margin-bottom: .1rem;
                background: #fff;
                display: flex;
                padding: 0  .5rem;
                align-items: center;
                .label{
                    width: 2rem;
                }
                input{
                    height: .65rem;
                    border: none;
                    font-size: .24rem;
                    flex:1;
                }
            }
            .btn{
                width: 70%;
                display: block;
                margin: 0 auto;
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