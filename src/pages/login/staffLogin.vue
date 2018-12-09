<template>
    <div class="staff form-container">
        <form method="post" @submit.prevent="onSubmit()">
            <div class="input-group">
                <input type="text" placeholder="请输入员工PIN" v-model.trim="PIN" required>
                <i class="icon user-icon"></i>
            </div>
            <div class="input-group">
                <input type="text" placeholder="请输入手机号码" v-model.trim="iphone" required>
                <i class="icon phone-icon"></i>
            </div>
            <div class="input-group">
                <input type="text" placeholder="请输入图片验证码" v-model.trim="iCode" required>
                <div class="code-img flex-box flex-align-center" @click="switchCode()"><canvas id="canvasCode" width="60px" height="30px" class="canvasCode"></canvas></div>
            </div>
            <div class="btn-group mt50">
                <button type="submit" class="btn" :disabled ="IsDisabled">登录</button>
            </div>
        </form>
    </div>
</template>
<script>
import {createCode} from '../../assets/js/util.js'
export default {
    data () {
        return {
           PIN : '',
           iphone: '',
           iCode: '', //输入验证码
           code: '',   //生成的验证码
           IsDisabled: false
        }
    },
    created() {
        this.$nextTick( () => {
            this.code = createCode();
        })
    },
    methods: {
        onSubmit() {
            if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.iphone)){
                console.log('请输入正确的手机号码')
                return false;
            }else if(this.code.toLocaleLowerCase() == this.iCode || this.code == this.iCode){
                this.IsDisabled = true;
                this.$post('/api/WxWeb/UserLogin',{'User_Role_Type':'2','User_Name': this.PIN,'User_Cell': this.iphone}).then( res =>{
                    console.log(res);
                     this.IsDisabled = false;
                    if(res.status == 1){
                        this.$router.push({name: 'member'});
                        localStorage.setItem('userInfo',JSON.stringify(res.result));
                    }else{
                        this.code = createCode();
                    }
                })
            }else {
                console.log('验证码错误')
                this.code = createCode();
                return false;
            }
        },
        switchCode () {
            this.code = createCode();
        }
    }
}
</script>
<style lang="">
    
</style>
