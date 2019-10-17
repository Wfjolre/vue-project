<template>
    <div>

        <el-container>
            <el-header>
                <Head></Head>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <Left></Left>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>

<!-- 
      <Head></Head>
  <div class="content " >
      <div class="left">
          <Left></Left>
      </div>
      <div class="right clearfix">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
      </div>
  </div> -->
  </div>
</template>

<script>
import Left from './left';
import Head from "./head";
export default {
name:"List",
components:{
    Head,
    Left
}
}
</script>

<style lang="scss">
.content{
    display: flex;
    padding: 20px;
    width: 100%;
    min-width: 300px;
    .left{
        border: 1px solid #333333;
        width: 20%;
    }
    .right{
        border: 1px solid #454545;
        width: 70%;
        height:600px;
    }
}
 .clearfix::after{
        zoom: 1;
        content: " ";
        display:inline-block;
        clear: both;
        overflow: hidden;
        visibility: hidden;
        height: 0;
        line-height: 0;
    }
</style>