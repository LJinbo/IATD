<template>
    <div class="history grayBg site-main">
        <top-hd :title="hdTitle" class="m-hd"></top-hd>
        <div class="history-list">
            <div class="item">
                <div class="hd flex-box flex-space-between flex-align-center">
                    <p class="col-1"><span class="icon"></span>2018年11月</p> 
                    <p class="col-2"><span>获得：<i>233</i></span> <span>使用：<i>425</i></span></p>
                </div>
                <div class="bd">
                    <div class="row">
                        <div class="col-1">
                            <p>3M 员工奖励积分</p>
                            <p class="desc">2018-10-31 15:00</p>
                        </div>
                        <div class="num add">
                            +300
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <p>兑换样品</p>
                            <p>3M™ Thermal Transfer Label Material 7861 Clear Polyester, 27 in x 1668 ft, 1</p>
                            <p class="desc">2018-11-02 15:00</p>
                        </div>
                        <div class="num cut">
                            -22
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <p>3M 员工奖励积分</p>
                            <p class="desc">2018-10-31 15:00</p>
                        </div>
                        <div class="num add">
                            +300
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="hd flex-box flex-space-between flex-align-center">
                    <p class="col-1"><span class="icon"></span>2018年11月</p> 
                    <p class="col-2"><span>获得：<i>233</i></span> <span>使用：<i>425</i></span></p>
                </div>
                <div class="bd">
                    <div class="row">
                        <div class="col-1">
                            <p>3M 员工奖励积分</p>
                            <p class="desc">2018-10-31 15:00</p>
                        </div>
                        <div class="num add">
                            +300
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <p>兑换样品</p>
                            <p>3M™ Thermal Transfer Label Material 7861 Clear Polyester, 27 in x 1668 ft, 1</p>
                            <p class="desc">2018-11-02 15:00</p>
                        </div>
                        <div class="num cut">
                            -22
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <p>3M 员工奖励积分</p>
                            <p class="desc">2018-10-31 15:00</p>
                        </div>
                        <div class="num add">
                            +300
                        </div>
                    </div>
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
             hdTitle: '3M IATD 历史积分'
        }
    },
    components: {
        topHd,
    }
}
</script>
<style lang="scss">
    .history{
        .history-list{
            margin-top: .2rem;
        }
        .item{
            margin-bottom: .15rem;
            &:last-child{
                margin-bottom: 0;
            }
        }
        .hd{
            background: #fff;
            height: .6rem;
            border:1px solid #CCCDCD;
            border-width: 1px 0;
            padding: 0 .5rem;
            font-size: .26rem;
            .col-1{
                line-height: .34rem;
            }
            .col-2{
                span{
                     margin-left: .1rem;
                }
            }
            .icon{
                display: inline-block;
                width: .34rem;
                height: .34rem;
                background: url("../../assets/images/date-icon.png") no-repeat;
                background-size: contain;
                vertical-align: text-bottom;
                margin-right: .2rem;
            }
        }
        .bd{
            margin-top: .05rem;
            .row{
                padding: .3rem .5rem .25rem;
                background: #fff;
                border-bottom: 1px solid #E6E6E6;
                display: flex;
                align-items: center;
                &:last-child{
                    border-bottom: none;
                }
                .col-1{
                    flex:1;
                    line-height: 1.5;
                }
                .desc{
                    color: #898989;
                }
                .num{
                    min-width: 1.5rem;
                    text-align: right;
                    &.cut{
                        color:#e35349;
                    }
                }
            }
        }
    }
</style>