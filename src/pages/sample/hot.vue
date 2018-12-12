<template>
    <div class="hot">
        <ul class="sample-list flex-box">
            <router-link :to="{name:'detail',query:{id:item.Product_ID}}" :key="item.Product_ID" tag="li" class="item" v-for="item in productList">
                <div class="img-box flex-box flex-center">
                    <!-- <span class="tag">新品</span> -->
                <img :src="Url+item.Product_Url" alt=""></div>
                <div class="s-name">{{item.Product_Name}}</div>
                <div class="price">积分：999分</div>
            </router-link>
            <li class="no-content" v-if="productList.length == 0">
                <img src="../../assets/images/no-product.png" alt="">
                <div class="tip">没有找到相关的样品哦。。。</div>
            </li>
        </ul>
    </div>
</template>
<script>
import {httpUrl} from '../../assets/js/request.js'
export default {
    data () {
        return {
            page: 0,
            PageSize: 10,
            productList: [],
            Url: httpUrl
        }
    },
    created() {
        this.$post("/api/WxWeb/GetProductList",{'Opt':0}).then( res=> {
            // this.productList = res.result
            console.log(res)
        })
    },
}
</script>
<style lang="scss">
    
</style>