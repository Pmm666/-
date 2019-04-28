<template>
  <div id="div2">
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
              <el-menu-item index="1-1"><router-link to="/userList">用户列表</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="/shop">商家列表</router-link></el-menu-item>
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
    </div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 80%"
    >
      <el-table-column type="index" width="220"></el-table-column>
      <el-table-column property="id" label="订单ID" width="220"></el-table-column>
      <el-table-column property="total_amount" label="总价格" width="220"></el-table-column>
      <el-table-column property="status_bar.title" label="订单状态"> </el-table-column>
      <!--<el-table-column property="" label="操作">-->
        <!--<span><button class="bian">编辑</button></span>-->
        <!--<span><button class="del">删除</button></span>-->
      <!--</el-table-column>-->
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        background
        layout="total,prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
  export default {
    data() {
      return {
        tableData: [],
        currentRow: null,
        currentPage1: 5
      };
    },
    created() {
      axios.get("https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined").then(
        item => {
          console.log(item.data);
          this.tableData = item.data;
        }
      );
// this.list = this.$route.params.headername;
    },
    beforeCreate() {
      axios.get("https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined").then(
        item => {
          console.log(item);
        }
      );
    },
    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
// axios.get("https://elm.cangdu.org/v1/users/list?offset=4&limit=20").then(item => {
// console.log(item);
// });
      }
    }
  };
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .nan{
    width: 200px;
  }
  .block{
    margin-left: 200px;
  }
  .del{
    background: red;
    color: white;
    border: none;
    width: 40px;
    height: 20px;
    border-radius: 5px;
    text-align: center;
    /*font-size: 10px;*/
  }
  .bian{
    background: white;
    border: 1px solid gainsboro;
    border-radius: 5px;
  }
  .tian{
    background: white;
    border: 1px solid gainsboro;
    border-radius: 3px;
  }
</style>
