<template>
    <div class="approvalDetail grayBg">
        <top-hd :title="hdTitle" class="m-hd"></top-hd>
        <div class="container">
            <div class="status flex-box flex-center section">
                <div class="status-icon wait flex-box flex-center"><i class="icon"></i>等待审核</div>
                <div class="addr">
                    <p><span class="name">wyijie</span><span> 138****5941</span></p>
                    <p>上海市XXXXXXXXXXXXXXXXXXXXXXXX</p>
                </div>
            </div>
            <div class="goods-info section">
                <div class="hd flex-box flex-space-between">样品信息<i class="icon arr-r"></i></div>
                <div class="bd">
                    <ul>
                        <li class="item flex-box flex-center">
                            <div class="goods-img"><img src="../../assets/images/sample-s.png" alt=""></div>
                            <div class="text-info flex-1">
                                <div class="goods-name">3M™ Laser Markable Label Stock</div>
                                <div class="price">积分：999分</div>
                            </div>
                            <div class="num">x<span>1</span></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="order-detail section">
                <div class="hd flex-box flex-space-between">订单信息<i class="icon arr-r"></i></div>
                <div class="bd">
                    <ul>
                        <li>
                            <span class="label">SKU：</span>
                            <span class="content">0012345678</span>
                        </li>
                        <li>
                            <span class="label">数量：</span>
                            <span class="content">0012345678</span>
                        </li>
                        <li>
                            <span class="label">单位：</span>
                            <span class="content">0012345678</span>
                        </li>
                        <li>
                            <span class="label">申请人：</span>
                            <span class="content">0012345678</span>
                        </li>
                        <li>
                            <span class="label">剩余积分：</span>
                            <span class="content">0012345678</span>
                        </li>
                        <li>
                            <span class="label">抵扣积分：</span>
                            <span class="content">0012345678</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="receiver-info section">
                <div class="hd flex-box flex-space-between">收件人信息<i class="icon arr-r"></i></div>
                <div class="bd">
                    <ul>
                        <li>
                            <span class="label">收件人姓名：</span>
                            <span class="content">翁轶杰</span>
                        </li>
                        <li>
                            <span class="label">公司：</span>
                            <span class="content">3M   公司</span>
                        </li>
                        <li>
                            <span class="label">电话：</span>
                            <span class="content">3M   公司</span>
                        </li>
                        <li>
                            <span class="label">邮编：</span>
                            <span class="content">3M   公司</span>
                        </li>
                        <li>
                            <span class="label">省市区：</span>
                            <span class="content">3M   公司</span>
                        </li>
                        <li>
                            <span class="label">详细地址：</span>
                            <span class="content">3M   公司</span>
                        </li>
                    </ul>
                    <div class="order-info">
                        <p class="order-num flex-box"><span>订单编号：</span> <span>11977240</span></p>
                        <p class="flex-box"><span>提交时间：</span><span>2018-11-02 16:00</span> </p>
                    </div>
                </div>
            </div>
            <div class="operating section flex-box flex-space-between flex-align-center">
                <div>应抵扣积分：180 分</div>
                <div class="btn-group flex-box"><div class="btn no" href="javacript:;">审核驳回</div><div class="btn yes" href="javacript:;">审核通过</div></div>
            </div>
        </div>
    </div>
</template>
<script>
import topHd from '../../components/topHd' 
export default {
    data () {
        return {
             hdTitle: '3M IATD 待审核'
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
            padding: 0 .2rem;
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
