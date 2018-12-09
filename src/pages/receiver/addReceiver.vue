<template>
    <div class="addReceiver container">
        <form method="post" @submit.prevent="onSubmit">
            <div class="input-group">
                <label>姓名</label>
                <input type="text" v-model.trim="name">
            </div>
            <div class="input-group">
                <label>手机号码</label>
                <input type="text" v-model.trim="phone">
            </div>
            <div class="input-group">
                <label>邮政编码</label>
                <input type="text" v-model.trim="User_Code">
            </div>
            <div class="input-group">
                <label>所在区域</label>
                <select v-model="User_Province" class="selectItem" @change="selectChange('province')">
                    <option value="" selected>请选择省</option>
                    <option :value="item.Pcode" v-for="item in provinceList">{{item.ProvinceName}}</option>
                </select>
                <select v-model="User_City" class="selectItem" @change="selectChange('city')">
                    <option value="" selected>请选择市</option>
                    <option :value="item.Ccode" v-for="item in cityList">{{item.Cname}}</option>
                </select>
                <select v-model="User_Area" class="selectItem">
                    <option value="" selected>请选择区/县</option>
                    <option :value="item.Acode" v-for="item in areaList">{{item.Aname}}</option>
                </select>
            </div>
            <div class="input-group">
                <label>详细地址</label>
                <input type="text" v-model.trim="User_Street">
            </div>
            <div class="checkbox-group">
                <input type="checkbox">
                设为默认地址
            </div>
            <div class="btn-group save">
                <button type="submit" class="btn">保存</button>
            </div>
        </form>
    </div>
</template>
<script>
export default{
    data () {
        return {
            userInfo: '',
            name: '',
            phone: '',
            User_Code: '',
            User_IsDeafult: false,
            User_Province: '',
            User_City: '',
            User_Area: '',
            addres: [],
            User_Street: ''
        }
    },
    created() {
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.$fetch('/api/WxWeb/GetProvinceList').then( res => {
            console.log(res);
            this.addres = res;
        })
    },
    computed: {
        provinceList () {
            this.User_City = '';
            return this.addres.province
        },
        cityList () {
            let city = this.addres.city;
            if(city){
                let arr = [];
                for(let i =0;i<city.length;i++){
                    if(city[i].PCode == this.User_Province){
                        console.log(city[i]);
                        arr.push(city[i]);
                    }
                }
                return arr;
            }
        },
        areaList () {
            let area = this.addres.area;
            if(area){
                let arr =[]
                for(let i =0;i<area.length;i++){
                    if(area[i].Ccode == this.User_City){
                        arr.push(area[i]);
                    }
                }
                return arr;
            }
        }
    },
    methods: {
        selectChange (name) {
            if( name == 'province'){
                this.User_City = '';
            }
            this.User_Area = '';
        },
        onSubmit () {
            this.$post('/api/WxWeb/SaveAddress',{'UserID':this.userInfo.User_Id,'User_Province': this.User_Province,'User_City': this.User_City,'User_Area': this.User_Area,'User_Street': this.User_Street,'User_Code': this.User_Code,'User_Phone':this.phone,'User_Name': this.name,'User_IsDeafult':'1'}).then( res=> {
                this.$Toast({
                    message: res.msg,
                    position: 'middle',
                    duration: 2000
                });
            })
        }
    }
    
}
</script>
<style lang="scss">
    
</style>