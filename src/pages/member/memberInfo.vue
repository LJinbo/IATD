<template>
    <div class="memberIndex grayBg">
        <div class="userInfo">
            <top-hd :title="hdTitle"></top-hd>
            <div class="info mt30 flex-box flex-center">
                <div class="col-1">
                    <div class="Avatar">
                        <img src="../../assets/images/Avatar.png" alt="">
                    </div>
                    <p>经销商</p>
                </div>
                <div class="user-name">
                    Nick Name
                </div>
            </div>
        </div>
        <div class="fillIn">
            <div class="input-group">
                <div class="label">
                    用户ID
                </div>
                <input type="text">  
            </div>
            <div class="input-group">
                <div class="label">
                    城市
                </div>
                <select name="city" id="" placeholder="请选择城市">
                    <option value="shenzhen">深圳</option>
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                </select>
            </div>
            <div class="input-group">
                <div class="label">
                    公司
                </div>
                <input type="text" placeholder="填写公司">
            </div>
            <div class="input-group">
                <div class="label">
                    细分市场
                </div>
                <div class="market">
                    <div class="item active"><span class="icon"></span>市场1</div>
                    <div class="item"><span class="icon"></span>市场2</div>
                    <div class="item"><span class="icon"></span>市场3</div>
                </div>
            </div>
            <div class="input-group">
                <div class="label">
                    销售额
                </div>
                <input type="text" placeholder="填写销售额">
            </div>
            <div class="input-group">
                <div class="label">
                    3M销售人员
                </div>
                <input type="text" placeholder="填写销售人员">
            </div>
        </div>
    </div>
</template>
<script>
import topHd from '../../components/topHd' 
export default {
    data () {
        return {
             hdTitle: '3M IATD 会员信息'
        }
    },
    components: {
        topHd,
    }
}
</script>
<style lang="scss">
.userInfo{
    padding-top: .4rem;
    background: url('../../assets/images/memverBg.png') top no-repeat;
    background-size: 100%;
    height: 3.45rem;
    box-sizing: border-box;
    .col-1{
        text-align: center;
        color: #fff;
        .Avatar{
            width: 1.2rem;
        }
    }
    .user-name{
        font-size: .32rem;
        color: #fff;
        margin-left: .3rem;
    }
}
.fillIn{
    .input-group{
        border: 1px solid #C9CACA;
        border-width: 1px 0;
        margin-bottom: .1rem;
        background: #fff;
        display: flex;
        padding-left: .5rem;
        align-items: center;
        .label{
            width: 1.8rem;
        }
        .market{
            padding: .4rem 0;
            .item{
                margin-bottom: .2rem;
                &:last-child{
                    margin-bottom: 0;
                }
                &.active{
                    .icon{
                        background-image: url("../../assets/images/addr-on.png");
                    }
                }
            }
            .icon{
                display: inline-block;
                width: .24rem;
                height: .22rem;
                margin-right: .2rem;
                background: url("../../assets/images/addr-off.png") no-repeat;
                background-size: .24rem .22rem;
            }
        }
        input{
            height: .65rem;
            border: none;
            font-size: .24rem;
        }
        select{
            border: none;
            height: .65rem;
        }
    }
}
</style>