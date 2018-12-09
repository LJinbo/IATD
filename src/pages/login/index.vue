<template>
    <div>
    <top-hd :title="hdTitle" class="l-hd"></top-hd>
    <div class="login-img">
        <img src="../../assets/images/login-img.jpg">
    </div>
    <div class="loginMode flex-box flex-center">
        <router-link :to="{name:'staffView'}" tag="div" class="flex-1"><span class="icon staff"></span>3M员工</router-link>
        <router-link :to="{name:'dealerView'}" tag="div" class="flex-1"><span class="icon dealer"></span>经销商</router-link>
        <router-link :to="{name:'userView'}" tag="div" class="flex-1"><span class="icon user"></span>授权用户</router-link>
    </div>
    <router-view></router-view>
    </div>
</template>
<script>
import topHd from '../../components/topHd' 
export default {
    data () {
        return {
            hdTitle: 'IATD 样品管理系统'
        }
    },
    components: {
        topHd,
    }
}
</script>
<style lang="scss">
    .loginMode{
        height: 1.27rem;
        border-bottom:1px solid #C9CACA;
        margin-bottom: .68rem;
        div {
            text-align: center;
            font-size: .26rem;
            color: #727171;
            position: relative;
            padding: .1rem 0;
            .icon{
                width: .35rem;
                display: block;
                height: .35rem;
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                margin: auto;
                margin-bottom: .16rem;
            }
            .staff{
                background-image: url('../../assets/images/login-tit-icon1.png');
            }
            .dealer{
                background-image: url('../../assets/images/login-tit-icon2.png');
            }
            .user{
                background-image: url('../../assets/images/login-tit-icon3.png');
            }
            &.router-link-active:before{
                content: '';
                position: absolute;
                width: .36rem;
                height: .28rem;
                left: 50%;
                transform: translateX(-50%);
                bottom: -.4rem;
                background: url('../../assets/images/arr-fill-d.png') center no-repeat;
                background-size: contain;
            }
        }
    }
    .form-container{
        width: 5.68rem;
        margin: 0 auto;
        .input-group{
            border-bottom: 1px solid #B5B6B6;
            display: flex;
            padding: 0 .1rem;
            margin-bottom: .22rem;
            input{
                border:none;
                padding:0;
                height: .65rem;
                flex: 1;
                outline: none;
                box-sizing: border-box;
            }
            .icon{
                display: inline-block;
                width: .28rem; 
                height: .65rem;
                background: url("../../assets/images/form-icon1.png") center no-repeat;
                background-size: contain;
                &.phone-icon{
                    background-image: url("../../assets/images/form-icon2.png");
                }
                &.code-icon{
                    width: .35rem; 
                    background-image: url("../../assets/images/form-icon3.png");
                }
            }
            .code-img{
                overflow: hidden;
                width: 60px;
                height: .65rem;
            }
        }
        .btn{
            width: 100%;
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
</style>
