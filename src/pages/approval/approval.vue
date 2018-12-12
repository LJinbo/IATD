<template>
    <div class="approval grayBg site-main">
        <top-hd :title="hdTitle" class="m-hd"></top-hd>
        <div class="container">
            <div class="tabs">
                <ul class="flex-box">
                    <li :class="{'active': acTab == 'all'}" @click="switchTab('all',0)">全部</li>
                    <li :class="{'active': acTab == 'wait'}" @click="switchTab('wait',1)">待审核</li>
                    <li :class="{'active': acTab == 'error'}" @click="switchTab('error',2)">审核失败</li>
                    <li :class="{'active': acTab == 'success'}" @click="switchTab('success',3)">审核通过</li>
                </ul>
            </div>
            <ul class="approval-list">
                <li class="item" :key="item.Order_ID"  v-for="item in approvalList">
                    <div class="approval-Status flex-box flex-space-between">
                        <div class="num">
                            订单编号：<span>{{item.Order_Number}}}</span>
                        </div>
                        <div class="Status" v-html="Order_Status[item.Order_Status]"></div>
                    </div>
                    <div class="goods-info flex-box flex-align-center">
                        <div class="goods-img"><img src="../../assets/images/sample-s.png" alt=""></div>
                        <div class="text flex-1">
                            <p class="name">{{item.Order_Product_Name}}</p>
                            <!-- <p class="price">积分：99分</p> -->
                        </div>
                        <div class="goods-num">
                            x<span>{{item.Order_Quantity}}</span>
                        </div>
                    </div>
                    <div class="approval-info flex-box">
                        <div class="col-1 flex-1">
                            <p class="flex-box flex-space-between">
                                <!-- <span>总积分：180 分</span> -->
                                </p>
                            <p>申请时间：{{item.Order_CreateTime}}</p>
                            <p>申请人：{{User_Role_Type[item.User_Role_Type]}} （姓名：{{item.User_Name}}）</p>
                        </div>
                        <div class="col-2" v-if="item.Order_Status==1">
                            <router-link :to="{name: 'approvalDetail',query:{id:item.Order_ID,status:item.Order_Status}}" class="btn on" tag="p">立即审核</router-link>
                        </div>
                          <div class="col-2" v-if="item.Order_Status!=1">
                            <router-link :to="{name: 'approvalDetail',query:{id:item.Order_ID,status:item.Order_Status,source:1}}" class="btn" tag="p">查看详情</router-link>
                        </div>
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
             hdTitle: '3M IATD 我的审批',
             acTab: 'all',
             approvalList:[],
             type:0,
             Order_Status: {
                1:'<span style="color:#f7590b !important;">待审核</span>',
                2:'<span style="color:red !important;">审核失败</span>',
                3:'<span style="color:#1ab394 !important;">审核通过</span>',
                4:'<span style="color:#c2c2c2 !important;">取消</span>'
            },
            User_Role_Type:{
                2:'3M员工',
                3:'3M 经销商',
                4:'3M 授权用户'
            }
        }
    },
    created() {
        this.switchTab('all',0);
    },
    methods: {
        switchTab(el,type) {
            this.type=type;
            this.acTab = el;
            this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
            this.$post('/api/WxWeb/SreachExamineList',{'Product_Owner':this.userInfo.User_Id,'Order_Status': this.type}).then(res=> {
                console.log(res);
                this.approvalList = res.result
            })
        }
    },
    components: {
        topHd,
    }
}
</script>
<style lang="scss">
.approval{
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
    .approval-list{
        margin-top: .3rem;
        .item{
            margin-bottom: .15rem;
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
    .approval-info{
        color: #898989;
        margin-top: .15rem;
        p{
            line-height: 1.3;
        }
        .col-2{
            position: relative;
            .btn{
                width:1.2rem;
                line-height: 1;
                border: 1px solid #B8B9B9;
                padding: 0 .1rem;
                border-radius: .1rem;
                padding: 0.1rem 0.2rem;
                position: absolute;
                right: 0;
                bottom: 0;
                &.on{
                    border-color: #e70022;
                    color: #e70022;
                }
            }
        }
    }
}
</style>
