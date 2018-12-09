<template>
    <div class="sample-detail grayBg">
        <top-hd :title="hdTitle" class="m-hd"></top-hd>
        <div class="container">
            <div class="sample-Album section">
                <div class="slide-img">
                    <ul>
                        <li><img src="../../assets/images/detailImg.png" alt=""></li>
                    </ul>
                </div>
                <div class="sample-name flex-box flex-center">
                    <h3 class="flex-1">3M™ Adhesive Transfer Tape L2+T3, 54 in x 250 yd, 3 rolls per pallet</h3> 
                    <div class="price">积分: 999分</div>
                </div>
            </div>
            <div class="sample-info section">
                <div><div class="label">样品类别</div><div class="text">70002474032</div> </div>
                <div><div class="label">货号/SKU</div><div class="text">70002474032</div></div>
                <div><div class="label">是否非标</div><div class="text">70002474032</div></div>
                <div><div class="label">单位</div><div class="text">70002474032</div></div>
                <div><div class="label">原包装规格</div><div class="text">70002474032</div></div>
            </div>
            <div class="sample-intr section mb0">
                <div class="hd">
                    <h3>样品介绍</h3>
                </div>
                <div class="bd">
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXX
                    <div class="btn-group mt50">
                        <button href="javascript:;" class="btn" @click="exchange">立即兑换</button>
                        <!-- <router-link :to="{name: 'fillOrder'}" tag="button" class="btn"></router-link> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="detailLayer" v-show="isLayer">
            <div class="unitNum">
                <div class="row">
                    <div class="col">单位</div>
                    <div class="col">L</div>
                </div>
                <div class="row">
                    <div class="col">兑换</div>
                    <div class="col">
                        <div class="num-control">
                            <span class="cut">-</span>
                            <input type="number"  min="0" max="10" value="1" class="num">
                            <span class="add">+</span>
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
            hdTitle: '3M IATD 样品详情',
            isLayer: false
        }
    },
    methods: {
        exchange () {
            this.isLayer = true;
        }
    },
    components: {
        topHd,
    },
}
</script>
<style lang="scss">
.sample-detail{
    .container{
        margin-top: .38rem;
    }
    .sample-Album {
        .slide-img{
            li{
                height: 5rem;
                text-align: center;
            }
            img{
                max-height: 100%;
            }
        }
        .sample-name{
            padding: .3rem;
            h3{
                font-size: .26rem;
            }
            .price{
                height: .44rem;
                line-height: .44rem;
                padding: 0 .2rem;
                border-radius: .2rem;
                background: #E23024;
                color: #fff;
                margin-left: .2rem;
            }
        }
    }
    .sample-info{
        &>div{
            display: flex;
            padding: 0 .55rem;
            height: .5rem;
            line-height: .5rem;
            border-bottom: 1px solid #C9CACA;
            &:last-child{
                border-bottom: none;
            }
            .label{
                width: 1.5rem;
                margin-right: .2rem;
            }
        }
    }
    .sample-intr{
        padding: .4rem 1rem .3rem;
        .hd{
            width: 3.3rem;
            margin: 0 auto;
            font-size: .28rem;
            color: #e23024;
            height: 2px;
            background: #e23024;
            text-align: center;
            position: relative;
            h3{
                position: absolute;
                left:50%;
                transform: translateX(-50%);
                padding: 0 .2rem;
                background: #fff;
                margin-top: -.1rem;
            }
        }
        .bd{
            margin-top: .4rem;
            text-align: center;
            .btn{
                width: 3rem;
                height: .55rem;
                line-height: .55rem;
                background: #E60321;
                font-size: .26rem;
                color:#fff;
                border-radius: .2rem;
                border: none;
            }
        }
    }
    .section{
        border: 1px solid #CCCDCD;
        border-width: 1px 0;
        background: #fff;
        margin-bottom: .26rem;
        &:last-child{
            margin-bottom: 0;
        }
    }
    .detailLayer{
        position: absolute;
    }
}
</style>