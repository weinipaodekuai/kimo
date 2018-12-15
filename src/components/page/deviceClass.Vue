<template>
  <div style="height:100%;">
    <Index-Header></Index-Header>
    <el-container>
      <el-aside style="width:180px;height:100%;">
        <Index-AccountAside style="height:100%;"></Index-AccountAside>
      </el-aside>
      <el-container class="clearfix" style="background:#f5f5f5">
        <el-main class="">

          <div class="suc-bg">
            <div class="suc-head">
                <h5>
                    <span>设备类别</span>
                </h5>
            </div>

            <div class="suc-panel basic-panel">
              <p>设备类别</p>
              <div class="table_panel">
                <div class="demo-input-suffix">
                  新增类别
                  <el-input
                    placeholder="请输入设备类别编码"
                    v-model="code"
                    clearable>
                  </el-input>
                  <el-input
                    placeholder="请输入设备类别"
                    v-model="codetype"
                    clearable>
                  </el-input>
                  <el-button class="el-button addbtn" @click="addData" type="primary">增加</el-button>
                </div>
                <div class="div_line"></div>
                <div class="demo-input-suffix">
                  类别列表
                  <el-input
                    placeholder="搜索设备类别编码"
                    suffix-icon="el-icon-search" 
                    v-model="code2" @keyup.native="searchInfo(code2,'')">
                  </el-input>
                  <el-input
                    placeholder="搜索设备类别"
                    suffix-icon="el-icon-search" 
                    v-model="codetype2" @keyup.native="searchInfo('',codetype2)">
                  </el-input>
                </div>
                <el-table ref="singleTable" :data="getAllGoods" highlight-current-row border
                @current-change="handleCurrentChange" style="width:100%;margin-top: 10px;">
                    <el-table-column prop="id" label="序号" align="center"></el-table-column>
                    <el-table-column prop="code" label="设备类别编码" align="center"></el-table-column>
                    <el-table-column prop="type" label="设备类别" align="center"></el-table-column>
                    <el-table-column label="操作" align="center">                        
                        <template slot-scope="scope">
                            <el-button @click="editData(scope.row)" type="text" size="small">编辑</el-button>
                            <el-button @click="deleteData(scope.row)" type="text" size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="pageindex">
                  <el-pagination background @current-change="handleCurrentChange"
            :current-page.sync="currentPage" :page-size="pagesize" layout="prev, pager, next" :total="total">
                  </el-pagination>
                </div> 
              </div>
            </div>
          </div>

        </el-main>
        <Index-bottom></Index-bottom>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "../common/Header";
import Bottom from "../common/bottomNav";
import AccountAside from "../common/AccountAside";
import axios from "axios";
import Vue from "vue";
import commonURL from "../../assets/js/ajax";
import $ from "../../assets/js/jquery-3.3.1.min";
import wx from "weixin-js-sdk";
import moment from "moment";

export default {
  name: "deviceClass",
  data() {
    return {
      code:'',
      codetype:'',
      code2:'',
      codetype2:'',
      getAllGoods:[
        {
        id:'1',
        code: 'tk',
        type: '计算机'
        },{
        id:'2',
        code: 'dl',
        type: '服务器'
        }
      ],
      pagesize: 6,
      currentPage: 1,
      total: 10
    };
  },
  components: {
    "Index-Header": Header,
    "Index-AccountAside": AccountAside,
    "Index-bottom": Bottom
  },
  created() {
    this.$store.state.adminheadernum = "0";
    this.$store.state.adminacnavnum = "2-1";
  },
  mounted() {
    var bh = window.innerHeight;
    $("body").css("height", bh);
    this.getAllData();
  },
  methods: {
    handleCurrentChange(val) {
        this.currentPage = val;
    },
    getAllData(){

    },
    //查询
    searchInfo(code,type){

    },
    //编辑
    editData(data) {
      
    },
    //删除
    deleteData(data) {
    },
    //新增
    addData() {   
    },
  }
};
</script>

<style scoped>
.el-container {
  height: 100%;
}

.basic-panel {
  padding: 50px 0 150px 0;
}
.suc-panel p{
  width: 200px;
  margin: 0 0 0 150px;
}
.table_panel{
  padding: 20px 150px;
}
.el-input{
  width: 200px !important;
  margin-left: 20px;
}
.addbtn {
  float: right;
  margin-right: 20px;
  width: 100px;
}
</style>
