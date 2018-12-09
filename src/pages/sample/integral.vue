<template>
    <div class="integral">
        <ul class="sample-list flex-box">
            <router-link :to="{name:'detail'}" tag="li" class="item" v-for="item in productList">
                <div class="img-box flex-box flex-center"><span class="tag">新品</span><img src="../../assets/images/sample-big.png" alt=""></div>
                <div class="s-name">{{item.Product_Name}}</div>
                <div class="price">积分：999分</div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            page: 0,
            PageSize: 10,
            productList: []
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