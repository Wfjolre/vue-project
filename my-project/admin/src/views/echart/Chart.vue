<template>
<div>
<div :id="chartsID" style="width:100%; height:400px;" ></div>
  <input type="text" v-model="inputVal" @input="sendMsg">
</div>
  
</template>

<script>
const echarts = require('echarts');

export default {
    name:'Chart',
    props:['callbackdata','chartid'],
    data(){
        return {
            inputVal:'',
            chartsID:this.$props.chartid,
            optionsData:this.$props.callbackdata
        }
    },
    methods:{
        createTable : function(){
            const myChart = echarts.init(document.getElementById(this.chartsID));
            myChart.clear();
            myChart.resize();
            // 绘制图表
            myChart.setOption(this.optionsData);
            console.log('done.......');
        },
        sendMsg(){
            this.$emit('hanlde',this.inputVal)
        }
    },
    mounted(){
        this.createTable();
    },
    watch:{
        callbackdata:function(val,oldVal){
            console.log('1111====='+JSON.stringify(val));
            this.optionsData=val;
            this.createTable();
        },
        chartid:function(val,oldVal){
            this.chartsID=val;
        }
    }
}
</script>

<style>

</style>