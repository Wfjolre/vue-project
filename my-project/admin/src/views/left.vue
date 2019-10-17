<template>
    <el-row>
        <el-col>
            <el-menu default-active="2" class="el-menu-vertical-demo"
            v-for="item in list" :key="item.id">
                <el-menu-item :index="item.id" @click="openPage(item.path)"><i :class="item.icon"></i><span>{{item.message}}</span></el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
name:'Left',
data:function(){
    return{
        list:[
            {id:'1', message:"学生信息表",path:'/foo',icon:'el-icon-location'},
            {id:'2', message:"购物车",path:'/bar',icon:'el-icon-menu'},
            {id:'3', message:'任务列表', path:'/todo',icon:'el-icon-documen'},
            {id:'4', message:'图表',path:'/chart',icon:'el-icon-setting'}
        ]
    }
},
methods:{
    openPage(pageLink){
        this.$router.push(pageLink)
    }
}
}
</script>

<style>
a, a:visited,a:link,a:hover,a:active{
    text-decoration: none;
    color: black;
}
</style>