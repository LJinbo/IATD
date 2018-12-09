<template>
    <div class="sample grayBg">
        <top-hd :title="hdTitle" class="m-hd"></top-hd>
        <div class="tabs">
            <ul class="flex-box">
                <router-link :to="{name: 'hot'}" tag="li">人气排序</router-link>
                <router-link :to="{name: 'integral'}" tag="li">积分排序</router-link>
                <router-link :to="{name: 'search'}" tag="li">分类查询</router-link>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import topHd from '../../components/topHd' 
export default {
    data () {
        return {
             hdTitle: '3M IATD 样品列表'
        }
    },
    components: {
        topHd,
    },
}
</script>
<style lang="scss">
.sample{
    .tabs{
        padding: .25rem .4rem .15rem;
        border-bottom: 1px solid #CACBCC;
        li{
            flex: 1;
            text-align: center;
            color: #595757;
            width: 1px;
            &.router-link-active{
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
    .sample-list{
        padding: .5rem;
        flex-wrap: wrap;
        .item{
            width: 3.15rem;
            margin-right: .15rem;
            padding: .2rem .3rem;
            box-sizing: border-box;
            background: #fff;
            border: 1px solid #CDCECE;
            border-radius: .2rem;
            margin-bottom: .15rem;
            text-align: center;
            &:nth-child(2n){
                margin-right: 0;
            }
            .img-box{
                position: relative;
            }
            .tag{
                position: absolute;
                width: .53rem;
                height: .53rem;
                background: #E70022;
                line-height: .53rem;
                text-align: center;
                color: #fff;
                border-radius: 50%;
                top:0;
                right: -.2rem;
            }
            .s-name{
                font-size: .2rem;
                line-height: 1.3;
            }
            .price{
                margin-top: .1rem;
                color: #e70022;
            }
        }
    }
}
</style>