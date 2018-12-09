<template>
    <div class="editReceiver container">
        <form action="#">
            <div class="input-group">
                <label>姓名</label>
                <input type="text">
            </div>
            <div class="input-group">
                <label>手机号码</label>
                <input type="text">
            </div>
            <div class="input-group">
                <label>邮政编码</label>
                <input type="text">
            </div>
            <div class="input-group">
                <label>所在区域</label>
                <input type="text">
            </div>
            <div class="input-group">
                <label>详细地址</label>
                <input type="text">
            </div>
            <div class="checkbox-group">
                <input type="checkbox">
                设为默认地址
            </div>
            <div class="btn-group save">
                <button type="submit" class="btn">保存</button>
            </div>
            <div class="btn-group">
                <button type="submit" class="btn">删除</button>
            </div>
        </form>
    </div>
</template>
<script>
export default{
    
}
</script>
<style lang="scss">
</style>