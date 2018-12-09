<template>
    <header class="flex-box flex-space-between flex-align-center">
        <a href="javascript:;" class="back" @click="back"></a>
        <h3>{{title}}</h3>
        <div class="menu">
            <div class="memuHd"></div>
        </div>
    </header>
</template>
<script>
export default {
    props:{
        title: {
            type: String
        }
    },
    methods: {
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss">
header{
    &.m-hd{
        background: url('../assets/images/memverBg.png') no-repeat;
        background-size: 100%;
        height: 1rem;
    }
    &.l-hd{
        background: #E70022;
    }
    height: .68rem;
    .back{
        margin-left: .3rem;
        height: .68rem;
        width: .2rem;
        background: url("../assets/images/arr-l.png") center no-repeat;
        background-size: .13rem .23rem;
    }
    h3{
        font-size: .3rem;
        color: #fff;
    }
    .menu {
        .memuHd {
            margin-right: .3rem;
            width: .27rem;
            height: .68rem;
            background: url('../assets/images/menu.png') center no-repeat;
            background-size: .27rem .07rem;
        }
    }
    
}
</style>
