<template>
    <div class="sample-detail grayBg site-main">
        <top-hd :title="hdTitle" class="m-hd"></top-hd>
        <div class="container">
            <div class="sample-Album section">
                <div class="slide-img">
                    <ul>
                        <li><img src="../../assets/images/detailImg.png" alt=""></li>
                    </ul>
                </div>
                <div class="sample-name flex-box flex-center">
                    <h3 class="flex-1">{{pdetail.Product_Name}}</h3> 
                    <div class="price">积分: 999分</div>
                </div>
            </div>
            <div class="sample-info section">
                <div><div class="label">样品类别</div><div class="text">70002474032</div> </div>
                <div><div class="label">货号/SKU</div><div class="text">{{pdetail.Product_Sku}}</div></div>
                <div><div class="label">是否非标</div><div class="text">70002474032</div></div>
                <div><div class="label">单位</div><div class="text">70002474032</div></div>
                <div><div class="label">原包装规格</div><div class="text">70002474032</div></div>
            </div>
            <div class="sample-intr section mb0">
                <div class="hd">
                    <h3>样品介绍</h3>
                </div>
                <div class="bd">
                    {{pdetail.Product_Desc}}
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
                    <div class="col label">单位：</div>
                    <div class="col flex-1">L</div>
                </div>
                <div class="row">
                    <div class="col label">兑换：</div>
                    <div class="col flex-1">
                        <div class="num-control">
                            <span class="cut" @click="cut">-</span>
                            <input type="number" v-model="changeNum" class="num">
                            <span class="add" @click="add">+</span>
                        </div>
                    </div>
                </div>
                <div class="row mt20">
                     <div class="col label"></div>
                      <div class="col flex-1"><button @click="onSubmit" class="btn">立即兑换</button></div>
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
            isLayer: false,
            changeNum: 1,
            pdetail: {}
        }
    },
    created() {
        let pId = this.$route.query.id;
        this.$post('/api/WxWeb/GetProductList',{'Product_ID':pId}).then(res=> {
            this.pdetail =res.result[0];
        })
    },
    methods: {
        exchange () {
            this.isLayer = true;
        },
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
            this.$router.push({
                name: 'fillOrder',
                query: {
                    'pId': this.pdetail.Product_ID,
                    'num': this.changeNum
                }
            })
        }
    },
    components: {
        topHd,
    },
}
</script>
<style lang="scss">
.sample-detail{
    position: relative;
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
            overflow: hidden;
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
        top: 50%;
        width: 90%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: #fff;
        padding: 20px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        .row{
            display: flex;
            text-align: center;
            align-items: center;
            padding:.2rem 0;
            .label{
                width: 1rem;
                text-align: right;
            }
            .num-control{
                display: flex;
                justify-content: center;
                align-items: center;
                .num{
                    border: none;
                    padding: 0;
                    height: .5rem;
                    text-align: center;
                    width: 1.3rem;
                }
                span{
                    font-size: .3rem;
                    background: #ccc;
                    display: inline-block;
                    height: .5rem;
                    width: .5rem;
                    line-height: .5rem;
                }
            }
        }
    }
    .btn{
        width: 3rem;
        height: .55rem;
        display: block;
        margin:0 auto;
        line-height: .55rem;
        background: #E60321;
        font-size: .26rem;
        color:#fff;
        border-radius: .2rem;
        border: none;
    }
}
</style>