<template>
    <div class="fillOrder grayBg site-main">
        <top-hd :title="hdTitle" class="m-hd"></top-hd>
        <div class="addr flex-box flex-align-center">
            <div class="Avatar"><img src="../../assets/images/Avatar.png" alt=""></div>
            <div class="text">
                <p><span class="name">wyijie</span><span class="phone">138****5941</span></p>
                <p class="address">上海市XXXXXXXXXXXXXXXXXXXXXXXX</p>
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
                        <p class="goods-name">3M™ Laser Markable Label Stock</p>
                        <p class="price">积分：999分</p>
                        <div class="num-control">
                            <span class="cut">-</span>
                            <input type="number"  min="0" max="10" value="1" class="num">
                            <span class="add">+</span>
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
             hdTitle: '3M IATD 会员中心'
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
    }
</style>