<template>
  <div>
    <el-col :span="12" class="nan">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title"><router-link to="/index">首页</router-link></span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>数据管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">用户列表</el-menu-item>
            <el-menu-item index="1-2">商家列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item index="1-3">食品列表</el-menu-item>
          <el-submenu index="1-4">
            <template slot="title">订单列表</template>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>添加数据</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">添加商铺</el-menu-item>
            <el-menu-item index="1-2">添加商品</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">图表</span>
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>图表</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">用户分布</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>编辑</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">文本编辑</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">管理员设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>说明</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">说明</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>

    <!--<div class="left">-->
    <!--<el-table-->
    <!--:data="tableData"-->
    <!--style="width: 100%">-->
    <!--<el-table-column-->
    <!--prop="date"-->
    <!--label="店铺名称"-->
    <!--width="180">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
    <!--prop="name"-->
    <!--label="店铺介绍"-->
    <!--width="180">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
    <!--prop="address"-->
    <!--label="店铺地址">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
    <!--prop="address"-->
    <!--label="操作">-->
    <!--</el-table-column>-->
    <!--</el-table>-->
    <!--</div>-->


    <div class="header">
      <p>首页</p>
      <img src="//elm.cangdu.org/img/default.jpg" class="avator">
    </div>
    <div class="div2">数据统计</div>
    <div class="div3">
    <span class="n1">当日数据:</span>
    <span class="n2">新增用户</span>
    <span class="n3">新增订单</span>
    <span class="n4">新增管理员</span>
    </div>
    <div class="div4">
    <span class="n5">总数据:</span>
    <span class="n2">注册用户</span>
    <span class="n3">订单</span>
    <span class="n4">管理员</span>
    </div>
    <div class="div5">
    <div id="myChart" :style="{width: '800px', height: '800px'}"></div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        isCollapse: true,
        // tableData: [{
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // }, {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }]

      }

    },
    mounted(){
      this.drawLine();
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath);
      },
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '走势图',
            subtext: '纯属虚构'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['最高气温','最低气温']
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2019-04-22','2019-04-23','2019-04-24','2019-04-25','2019-04-26','2019-04-27','2019-04-28']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} °C'
            }
          },
          series: [
            {
              name:'新注册用户',
              type:'line',
              data:[11, 11, 15, 13, 12, 13, 10],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
            {
              name:'新增订单',
              type:'line',
              data:[1, -2, 2, 5, 3, 2, 0],
              markPoint: {
                data: [
                  {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'},
                  [{
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  }, {
                    symbol: 'circle',
                    label: {
                      normal: {
                        position: 'start',
                        formatter: '最大值'
                      }
                    },
                    type: 'max',
                    name: '最高点'
                  }]
                ]
              }
            }
          ]
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .left{
    margin-left: 300px;
    position: fixed;
    top: 40px;
  }
  .nan{
    width: 30%;
    height: 100%;
  }
  .header{
    width: 100%;
    height: 50px;
    background: #EFF2F7;
  }
  .header p{
    position: absolute;
    left: 230px;
    line-height: 50px;
    color: grey;
  }
  .div2{
    margin: 20px auto;
    position: fixed;
    left: 700px;
    font-size: 25px;
  }
  .div3{
    width: 100%;
    margin-top: 70px;
    position: fixed;
    left: 230px;
  }
  .div4{
    width: 100%;
    margin-top: 120px;
    position: fixed;
    left: 230px;
  }
  .n5{
    display: inline-block;
    width: 150px;
    height: 40px;
    background:#20A0FF;
    border-radius: 5px;
    color: white;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
  }
  .n1{
    display: inline-block;
    width: 150px;
    height: 40px;
    background: #FF9800;
    border-radius: 5px;
    color: white;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
  }
  .n2{
    display: inline-block;
    width: 150px;
    height: 40px;
    background: #EFF2F7;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    color: grey;
  }
  .n3{
    display: inline-block;
    width: 150px;
    height: 40px;
    background: #EFF2F7;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    color: grey;
  }
  .n4{
    display: inline-block;
    width: 150px;
    height: 40px;
    background: #EFF2F7;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    color: grey;
  }
  #myChart{
    margin-left: 400px;
    margin-top: 200px;
  }
  .avator{
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    margin-left: 1000px;
  }
</style>
