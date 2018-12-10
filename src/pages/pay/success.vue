<template>
    <div class="success grayBg site-main">
        <top-hd :title="hdTitle" class="m-hd"></top-hd>
        <div class="container">
            <div class="s-icon">
                <img src="../../assets/images/success-icon.png" alt="">
            </div>
            <p class="tip">完成</p>
            <div class="text-conten">
                <p>样品申请成功，等待审核！</p>
                <span class="price">支付积分<span>180分</span></span>
            </div>
            <div class="btn-group">
                <router-link :to="{name: 'orders'}" tag="div" class="btn">查看订单</router-link>
                <router-link :to="{name: 'member'}" tag="div" class="btn">回到首页</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import topHd from '../../components/topHd' 
export default {
    data () {
        return {
             hdTitle: '3M IATD 样品申请成功'
        }
    },
    components: {
        topHd,
    }
}
</script>
<style lang="scss">
.success {
    .container{
        padding-top: 1rem;
    }
    .s-icon{
        height: 1.37rem;
        width: 1.37rem;
        margin: 0 auto;
    }
    .tip{
        font-size: .35rem;
        color: #e23024;
        text-align: center;
        margin-top: .22rem;
    }
    .text-conten{
        margin-top: .6rem;
        text-align: center;
        font-size: .32rem;
        color: #231815;
        .price{
            display: inline-block;
            height: .63rem;
            line-height: .63rem;
            border: 1px solid #9FA0A0;
            border-radius: .1rem;
            width: auto;
            padding: 0 .55rem;
            margin-top: .2rem;
            span{
                color: #e23024;
                margin-left: .2rem;
            }
        }
    }
    .btn-group{
        margin-top: 1.3rem;
        .btn{
            height: .6rem;
            line-height: .6rem;
            border-radius: .1rem;
            width: 3.5rem;
            margin: 0 auto;
            margin-bottom: .2rem;
            text-align: center;
            color: #fff;
            background: #E23024;
            font-size: .3rem;
        }
    }
}
</style>
