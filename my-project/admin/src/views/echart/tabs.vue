<template>
    <el-tabs v-model="activeName" @tab-click="toggle">
        <el-tab-pane v-for="item in childs" :key="item.name" :label="item.label"  :name="item.name">
            <!-- <component :is="compName" :callbackdata="callbackdata"></component> -->
            <Chart :callbackdata="callbackdata" :chartid="item.name||'Bar'" :ref="item.name" @hanlde='getData'></Chart>
        </el-tab-pane>  
    </el-tabs>
  
</template>

<script>
import Chart from "./Chart";
const echarts = require('echarts');
export default {
    name:'Tabs',
    data(){
        return {
            activeName:'Bar',
            compName:'BarTable',
            callbackdata:require('./static/Bar.json'),
            childs:[{
                label:'Bar图',
                name:'Bar',
                subData:'Bar'
            },{
                label:'折线图',
                name:'Pie',
                subData:'Pie'
            },{
                label:'旭日图',
                name:'Sunburst',
                subData:'Sunburst'
            }]
        }
    },
    components:{
        Chart
    },
    methods:{
        toggle(item){
            console.log('9999'+item.name);
             this.callbackdata=require('./static/'+item.name+'.json')
        },
        getData(param){
            console.log(param);
            
        }
    }
}
</script>

<style>
.el-tabs{
    padding-left: 30px;
}
</style>