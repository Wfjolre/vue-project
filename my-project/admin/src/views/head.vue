<template>
<div class="head">
    <el-row>
        <el-dropdown trigger="click">
             <div class="demo-avator">
                <el-avatar icon="el-icon-user-solid" size="small" style="vertical-align: middle"></el-avatar>
                {{userName}}
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="logout()">{{userName?'退出登录':'请登录'}}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-row>
   
</div>
 
</template>

<script>
const name= window.sessionStorage.getItem('user') ? JSON.parse(window.sessionStorage.getItem('user')).userName:'';
export default {
name:"App",
computed:{
    userName(){
        return name?name:''
    }
},
methods:{
    logout(){
        this.$store.dispatch('logout');
        this.$router.push({name:'login'})
    }
}
}
</script>

<style lang="scss">
body{
    padding: 0;
    margin: 0;
    background-color:rgb(245, 245, 245);
}
.head{
    width: 100%;
    height:50px;
    color: #ffffff;
    background-color:#333;
    text-align: right;
   .demo-avator{
       display: inline-block;
       padding-right: 20px;
       line-height: 50px;
   }
}
</style>