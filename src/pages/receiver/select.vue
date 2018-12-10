<template>
    <div class="container">
        <ul class="list">
            <li :class="{'active': item.User_IsDeafult}" :key="item.ID" @click="selectAddr" v-for="item in addresList">
                <div class="select"></div>
                <div class="message">
                    <p><span class="name">{{item.User_Name}}</span><span class="phone">{{item.User_Phone}}</span></p>
                    <p class="address">{{item.ProvinceName}}&nbsp;{{item.Cname}}{{item.Aname}}{{item.User_Street}}</p>
                </div>
                <div class="edit" @click="editReceiver(item)"></div>
            </li>
        </ul>
        <router-link :to="{name:'addReceiver'}" tag="button" class="btn add-address longBtn"><span class="addr-icon"></span>添加新收货人</router-link>
    </div>
</template>
<script>
export default{
    data () {
        return {
            userInfo: {},
            addresList: [],
        }
    },
    created () {
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.$post('/api/WxWeb/GetAddress',{'UserID': this.userInfo.User_Id}).then(res => {
            console.log(res);
            this.addresList = res.result
        })
    },
    methods: {
        editReceiver(obj) {
            let sObj = JSON.stringify(obj);
            localStorage.setItem('editReceiver',sObj);
            this.$router.push({name: 'editReceiver'});
        },
        selectAddr (obj) {
            let sObj = JSON.stringify(obj);
            localStorage.setItem('selectReceiver',sObj);
        }
    }
}
</script>
<style lang="scss">
.list{
    li{
        height: 1.25rem;
        border: 1px solid #CCCDCD;
        border-width: 1px 0;
        background:#fff;
        margin-bottom:8px;
        display: flex;
        align-items: center;
        padding:0 .55rem;
        .message{
            flex:1;
            p{
                .name{
                    margin-right: .2rem;
                }
                &.address{
                    margin-top:.15rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
        .select,.edit{
            width: .4rem;
            height: .4rem;
        }
        .select{
            background: url('../../assets/images/addr-off.png') center no-repeat;
             background-size: .37rem .35rem;
             margin-right: .33rem;
        }
        .edit{
            background: url('../../assets/images/edit-off.png') center no-repeat;
            background-size: .39rem .37rem;
        }
        &.active{
            background: #C9CACB;
            border-color: #fff;
            .select{
                background: url('../../assets/images/addr-on.png') center no-repeat;
                background-size: .37rem .35rem;
                margin-right: .33rem;
            }
            .edit{
                background: url('../../assets/images/edit-on.png') center no-repeat;
                background-size: .36rem .35rem;
            }
        }
    }
}
.btn.add-address{
    .addr-icon{
        display: inline-block;
        width: .4rem;
        height: .4rem;
        background: url("../../assets/images/addr-icon.png") center no-repeat;
        background-size: .37rem .35rem;
        vertical-align: middle;
        margin-right: .15rem;
    }
    margin-top: .7rem;
}
</style>