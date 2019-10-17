<template>
  <div id="box">
      <div id="info">
           学号:
            <el-input type="text" v-model="sNo" clearable></el-input>
            姓名:
            <el-input type="text" v-model.trim="name" clearable></el-input>
            年龄:
            <el-input type="text" v-model="age" clearable></el-input>
            <br>
            <el-button @click="submit" type="primary" id="submit" :disabled="!(sNo&&name&&age)">提交 </el-button>
      </div>
      <div>
          <el-table :data="infos" border fixed>
            <el-table-column prop="sNo" label="学号" ></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="samll" @click="remove(scope.$index,infos)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
      </div>
      
  </div>
</template>

<script>
import { log } from 'util';
export default {
    name:'Foo',
    data:function(){
        return {
            sNo:'',
            name:'',
            age:'',
            infos: []
        }
    },
    methods:{
        beforeDestroy:function(){
            console.log('destroy..........');
            
        },
        submit:function(){
            this.infos.push({
                name:this.name,
                age:this.age,
                sNo:this.sNo
            });
            this.name="";
            this.age="";
            this.sNo="";
        },
        remove:function(p1,p2){
            console.log(p1+"--------"+JSON.stringify(p2[p1]));
            this.infos.splice(p1,1)
            
        }
    }
}
</script>

<style>
#box{
    height: 600px;
    overflow: scroll;
}
</style>