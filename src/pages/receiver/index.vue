<template>
    <div class="receiver grayBg">
        <top-hd :title="hdTitle" class="m-hd"></top-hd>
        <router-view></router-view>
    </div>
</template>
<script>
import topHd from '../../components/topHd' 
export default {
    data () {
        return {
             hdTitle: '3M IATD 选择收货人'
        }
    },
    components: {
        topHd,
    },
    beforeRouteUpdate (to, from, next){
        this.hdTitle = to.meta.title;
        next();
    }
}
</script>
<style lang="scss">
.receiver{
    .container{
        margin-top: .25rem;
    }
    .input-group{
        padding: 0 .5rem;
        height: .8rem;
        border:1px solid #C9CACA;
        border-width: 1px 0;
        background: #fff;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        label{
            width: 1.8rem;
            font-size: .24rem;
        }
        input{
            flex: 1;
            border:none;
            padding:0;
            outline: none;
        }
        .selectItem{
            border: none;
            font-size: .24rem;
            width: 33%;
        }
    }
    .checkbox-group{
        padding: 0 .5rem;
        height: .8rem;
        border:1px solid #C9CACA;
        border-width: 1px 0;
        background: #fff;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        input{
            margin-right: .1rem;
        }
    }
    .btn-group{
        margin-top:.6rem;
        text-align: center;
        &.save{
            margin-top:.9rem;
        }
        button{
            width: 80%;
            border: none;
            padding: 0;
            background: #E70022;
            color: #fff;
            font-size: .3rem;
            height: .77rem;
            line-height: .77rem;
            border-radius: .35rem;
        }
    }
    .longBtn{
        display: block;
        margin: 0 auto;
        width: 80%;
    }
}

</style>
