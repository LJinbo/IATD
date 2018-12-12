<template>
    <div class="approvalDetail grayBg site-main">
        <top-hd :title="hdTitle" class="m-hd"></top-hd>
        <div class="container">
            <div class="status flex-box flex-center section">
                <div class="status-icon wait flex-box flex-center"><i class="icon"></i><div v-html="Order_Status[item.Order_Status]"></div></div>
                <div class="addr">
                    <p><span class="name">{{item.User_Name}}</span><span>{{item.User_Phone}}</span></p>
                    <p>{{item.ProvinceName+item.Cname+item.Aname +item.User_Street}}</p>
                </div>
            </div>
            <div class="goods-info section">
                <div class="hd flex-box flex-space-between">样品信息</div>
                <div class="bd">
                    <ul>
                        <li class="item flex-box flex-center">
                            <div class="goods-img"><img src="../../assets/images/sample-s.png" alt=""></div>
                            <div class="text-info flex-1">
                                <div class="goods-name">{{item.Order_Product_Name}}</div>
                            </div>
                            <div class="num">x<span>{{item.Order_Quantity}}</span></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="order-detail section">
                <div class="hd flex-box flex-space-between">订单信息</div>
                <div class="bd">
                    <ul>
                        <li>
                            <span class="label">SKU：</span>
                            <span class="content">{{item.Product_Sku}}</span>
                        </li>
                        <li>
                            <span class="label">数量：</span>
                            <span class="content">{{item.Order_Quantity}}</span>
                        </li>
                        <li>
                            <span class="label">单位：</span>
                            <span class="content">{{item.Product_Unit}}</span>
                        </li>
                        <li>
                            <span class="label">申请人：</span>
                            <span class="content">{{item.User_Name}}</span>
                        </li>
                        <!-- <li>
                            <span class="label">剩余积分：</span>
                            <span class="content">0012345678</span>
                        </li>
                        <li>
                            <span class="label">抵扣积分：</span>
                            <span class="content">0012345678</span>
                        </li> -->
                    </ul>
                </div>
            </div>
            <div class="receiver-info section">
                <div class="hd flex-box flex-space-between">收件人信息</div>
                <div class="bd">
                    <ul>
                        <li>
                            <span class="label">收件人姓名：</span>
                            <span class="content">{{item.Addr_User_Name}}</span>
                        </li>
                        <li>
                            <span class="label">公司：</span>
                            <span class="content">{{item.OrderDetails_CustomerName}}</span>
                        </li>
                        <li>
                            <span class="label">电话：</span>
                            <span class="content">{{item.User_Phone}}</span>
                        </li>
                        <li>
                            <span class="label">邮编：</span>
                            <span class="content">{{item.User_Code}}</span>
                        </li>
                        <li>
                            <span class="label">省市区：</span>
                            <span class="content">{{item.ProvinceName+item.Cname+item.Aname}}</span>
                        </li>
                        <li>
                            <span class="label">详细地址：</span>
                            <span class="content">{{item.User_Street}}</span>
                        </li>
                    </ul>
                    <div class="order-info">
                        <p class="order-num flex-box"><span>订单编号：</span> <span>{{item.Order_Number}}</span></p>
                        <p class="flex-box"><span>提交时间：</span><span>{{item.Order_CreateTime}}</span> </p>
                    </div>
                </div>
            </div>
            <div class="operating section flex-box flex-space-between flex-align-center" v-if="status==1">
                <div></div>
                <div class="btn-group flex-box">
                    <div class="btn no" href="javacript:;" @click="saveExamine(item.Order_ID,2)">审核驳回</div>
                    <div class="btn yes" href="javacript:;" @click="saveExamine(item.Order_ID,3)">审核通过</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import topHd from '../../components/topHd' 
export default {
    data () {
        return {
             item:{},
             hdTitle: '3M IATD 订单详情',
             status:0,
             Order_Status: {
                1:'<span style="color:#f7590b !important;">等待审核</span>',
                2:'<span style="color:red !important;">审核失败</span>',
                3:'<span style="color:#1ab394 !important;">审核通过</span>',
                4:'<span style="color:#c2c2c2 !important;">取消</span>'
            },
        }
    },
    created() {
        let oId = this.$route.query.id;
        let status=this.$route.query.status;
        let source=this.$route.query.source;//来源如果的等于1表示审核列表过来的，来源等于2表示订单列表过来的
        if(source==1){
            this.status=status;
        }
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.$post('/api/WxWeb/SreachExamineList',{'Product_Owner':this.userInfo.User_Id,'Order_ID': oId}).then(res=> {
            if(res.result){
                this.item = res.result[0];
                console.info(this.userInfo );
            }
        })
    },
     methods: {
        saveExamine(sOrder_ID,type) {
            this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
            this.$post('/api/WxWeb/SaveExamine',{'Order_ID':sOrder_ID ,'Order_Status':type,'Order_CheckUserID': this.userInfo.User_Id,'Order_CheckUserName':this.userInfo.User_Name}).then(res=> {
                console.log(res);
                if(res.status==1){
                    this.item.Order_Status=type;
                    this.status=type;
                     this.$Toast({
                        message:"恭喜您，提交审核成功！",
                        position: 'middle',
                        duration: 2000
                    });
                }else{
                     this.$Toast({
                        message:"很遗憾，您提交的审核失败！",
                        position: 'middle',
                        duration: 2000
                    });
                }
            })
        }
    },
    components: {
        topHd,
    }
}
</script>
<style lang="scss">
.approvalDetail{
    .section{
        border:1px solid #C9CACA;
        background: #fff;
        margin-bottom: .2rem;
        padding: .2rem .5rem;
        .hd{
            padding: .15rem 0;
            border-bottom: 1px solid #C9CACA;
            font-size: .26rem;
            .icon{
                background-size: contain;
                width: 8px;
                background: url("../../assets/images/arr-r.png") center no-repeat;
            }
        }
        .bd{
            color: #898989;
            font-size: .24rem;
            padding: .15rem 0;
            li{
                display: flex;
                margin-bottom: .15rem;
                .label{
                    width: 1.65rem;
                }
                .content{
                    flex: 1;
                }
            }
        }
    }
    .status-icon{
        margin-right: .3rem;
        .icon{
            display: inline-block;
            width: .38rem;
            height: .38rem;
            background: url("../../assets/images/wait-icon.png") center no-repeat;
            background-size: contain;
            margin-right: .1rem;
        }
    }
    .addr{
        color: #595757;
        line-height: 1.5;
    }
    .order-info{
        padding: .15rem 0;
        border-top: 1px solid #C9CACA;
        p{
            margin-bottom: .15rem;
            span:first-child{
                width: 1.65rem;
            }
        }
    }
    .goods-info{
        .item{
            padding: .2rem .3rem .2rem 0;
        }
        .goods-img{
            width: 1.1rem;
            height: 1.1rem;
            margin-right: .3rem;
        }
        .goods-name{
            margin-bottom: .1rem;
        }
        .num{
            color:#e35349;
        }
    }
    .price{
        color: #e35349;
    }
    .operating{
        .btn{
            height: .46rem;
            line-height: .46rem;
            border-radius: .1rem;
            padding: 0.1rem .3rem;
            background: #9FA0A0;
            color: #fff;
            margin: 0 3px;
            &.yes{
                background: #E70022;
            }
        }
    }
}
</style>
