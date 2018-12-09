<template>
    <div class="search">
        <div class="input-group flex-box flex-center">
            <span class="icon search"></span><input type="text" placeholder="搜索样品">
        </div>
        <ul class="search-list">
            <li>6100 - Electronics Bonding</li>
            <li>1230 - Performance Label Materials</li>
            <li>1570 - B&CSD Fire Protection Products</li>
        </ul>
        <div class="btn-group flex-box flex-center">
            <button class="btn reaset">重置</button>
            <button class="btn confirm">确认</button>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.search{
    .input-group{
        border:1px solid #CCCDCD;
        border-width: 1px 0;
        margin-top:.3rem;
        background: #fff;
        .icon{
            width: .32rem;
            height: .36rem;
            background: url("../../assets/images/search.png") center no-repeat;
            background-size: contain;
            margin-right: .2rem;
        }
        input{
            height: .55rem;
            border: none;
            padding: 0;
            outline: none;
        }
    }
    .search-list{
        margin: .27rem 0 .66rem;
        padding: .18rem .5rem .6rem;
        background: #fff;
        li{
            border-bottom: 1px solid #B5B5B6;
            padding: .1rem 0;
            margin-bottom: .2rem;
        }
    }
    .btn{
        height: .77rem;
        text-align: center;
        box-sizing: border-box;
        width: 3.2rem;
        padding:0;
        border:none;
        &.reaset{
            border: 1px solid  #C9CACA;
            border-bottom-left-radius: .2rem;
            border-top-left-radius: .2rem;
            color: #898989;
        }
        &.confirm{
            background: #E70022;
            border-bottom-right-radius: .2rem;
            border-top-right-radius: .2rem;
            color: #fff;
        }
    }
}
</style>