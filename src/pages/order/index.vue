<template>
    <div class="orders grayBg">
        <top-hd :title="hdTitle" class="m-hd"></top-hd>
        <div class="container">
            <div class="tabs">
                <ul class="flex-box">
                    <li :class="{'active': acTab == 'all'}" @click="switchTab('all')">全部</li>
                    <li :class="{'active': acTab == 'wait'}" @click="switchTab('wait')">待审核</li>
                    <li :class="{'active': acTab == 'error'}" @click="switchTab('error')">审核失败</li>
                    <li :class="{'active': acTab == 'success'}" @click="switchTab('success')">已完成</li>
                    <li :class="{'active': acTab == 'cancel'}" @click="switchTab('cancel')">已取消</li>
                </ul>
            </div>
            <ul class="order-list">
                <li class="item">
                    <div class="order-Status flex-box flex-space-between">
                        <div class="num">
                            订单编号：<span>11977240</span>
                        </div>
                        <div class="Status">待审核</div>
                    </div>
                    <div class="goods-info flex-box flex-align-center">
                        <div class="goods-img"><img src="../../assets/images/sample-s.png" alt=""></div>
                        <div class="text flex-1">
                            <p class="name">3M™ Laser Markable Label Stock</p>
                            <p class="price">积分：99分</p>
                        </div>
                        <div class="goods-num">
                            x<span>1</span>
                        </div>
                    </div>
                    <div class="order-info">
                        <p class="flex-box flex-space-between"><span>总积分：180 分</span> <span>审核：Jimmy</span></p>
                        <p>申请时间：2018-10-31 15:00:00</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import topHd from '../../components/topHd' 
export default {
    data () {
        return {
             hdTitle: '3M IATD 我的订单',
             acTab: 'all'
        }
    },
    methods: {
        switchTab (el) {
            this.acTab = el;
        }
    },
    components: {
        topHd,
    }
}
</script>
<style lang="scss">
.orders{
    .tabs{
        padding: .25rem .4rem .15rem;
        border-bottom: 1px solid #CACBCC;
        li{
            flex: 1;
            text-align: center;
            color: #595757;
            width: 1px;
            &.active{
                color: #e70022;
                font-weight: bold;
                position: relative;
                &:before{
                    content: '';
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    background:#e70022;
                    bottom: -.15rem;
                    margin-bottom: -1px;
                }
            }
        }
    }
    .order-list{
        margin-top: .3rem;
        .item{
            margin-bottom: .25rem;
            border: 1px solid #CCCDCD;
            border-width: 1px 0;
            background: #fff;
            padding: .3rem .5rem;
            .Status{
                color: #e70022;
            }
            .goods-info{
                padding: .2rem .35rem .2rem 0;
                border-bottom: 1px solid #C9CACA;
            }
            .goods-img{
                height: 1.2rem;
                width: 1.2rem;
                margin-right: .4rem;
            }
            .goods-num{
                color:#e70022;
            }
            .price{
                color: #898989;
                margin-top: .15rem;
            }
        }
    }
    .order-info{
        color: #898989;
        margin-top: .15rem;
        p{
            line-height: 1.3;
        }
    }
}
</style>
