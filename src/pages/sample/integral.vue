<template>
    <div class="integral">
        <ul class="sample-list flex-box">
            <router-link :to="{name:'detail'}" tag="li" class="item" :key="item.Product_ID"  v-for="item in productList">
                <div class="img-box flex-box flex-center">
                    <!-- <span class="tag">新品</span> -->
                    <img :src="Url+item.Product_Url" alt=""></div>
                <div class="s-name">{{item.Product_Name}}</div>
                <div class="price">积分：999分</div>
            </router-link>
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
        this.$post("/api/WxWeb/GetProductList",{'Opt': 1}).then( res=> {
            this.productList = res.result
        })
    }, 
}
</script>
<style lang="scss">
    
</style>