<template>
    <div class="hot">
        <ul class="sample-list flex-box">
            <router-link :to="{name:'detail'}" tag="li" class="item">
                <div class="img-box flex-box flex-center"><span class="tag">新品</span><img src="../../assets/images/sample-big.png" alt=""></div>
                <div class="s-name">3M™ Tamper Evident Label 
Materials</div>
                <div class="price">积分：999分</div>
            </router-link>
            <router-link :to="{name:'detail'}" tag="li" class="item">
                <div class="img-box flex-box flex-center"><img src="../../assets/images/sample-big.png" alt=""></div>
                <div class="s-name">3M™ Tamper Evident Label 
Materials</div>
                <div class="price">积分：999分</div>
            </router-link>
            <router-link :to="{name:'detail'}" tag="li" class="item">
                <div class="img-box flex-box flex-center"><img src="../../assets/images/sample-big.png" alt=""></div>
                <div class="s-name">3M™ Tamper Evident Label 
Materials</div>
                <div class="price">积分：999分</div>
           </router-link>
            <router-link :to="{name:'detail'}" tag="li" class="item">
                <div class="img-box flex-box flex-center"><img src="../../assets/images/sample-big.png" alt=""></div>
                <div class="s-name">3M™ Tamper Evident Label 
Materials</div>
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
            PageSize: 10
        }
    },
    created() {
        this.$post("/api/WxWeb/GetProductList",{'Opt': 1}).then( res=> {
            console.log(res);
        })
    },
}
</script>
<style lang="scss">
    
</style>