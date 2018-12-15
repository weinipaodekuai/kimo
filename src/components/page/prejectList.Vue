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
                    <span>项目列表</span>
                </h5>
            </div>

            <div class="suc-panel basic-panel">
              <div class="table_panel">
                <div class="demo-input-suffix">
                  <el-input
                    placeholder="搜索项目名称"
                    suffix-icon="el-icon-search" 
                    v-model="code" @keyup.native="searchInfo(code,'')">
                  </el-input>
                  <el-input
                    placeholder="搜索客户名称"
                    suffix-icon="el-icon-search" 
                    v-model="codetype" @keyup.native="searchInfo('',codetype)">
                  </el-input>
                   <el-select
                      v-model="codetype"
                      @change="searchInfo('',codetype)"
                      placeholder="筛选服务状态">
                      <el-option
                          v-for="item in allstatus"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                      </el-option>
                    </el-select>
                  <el-button class="el-button addbtn" @click="addData" type="primary">创建项目</el-button>
                </div>
                <div class="div_line"></div>
                <el-table ref="singleTable" :data="getAllGoods" highlight-current-row border
                @current-change="handleCurrentChange" style="width: 97%;margin: 0 1.5%;">
                    <el-table-column prop="id" label="ID" align="center"></el-table-column>
                    <el-table-column prop="code" label="项目编码" align="center"></el-table-column>
                    <el-table-column prop="type" label="客户名称" align="center"></el-table-column>
                    <el-table-column prop="type" label="项目地址" align="center"></el-table-column>
                    <el-table-column prop="type" label="服务期间" align="center"></el-table-column>
                    <el-table-column prop="type" label="状态" align="center"></el-table-column>
                    <el-table-column prop="type" label="巡检计划" align="center"></el-table-column>
                    <el-table-column prop="type" label="巡检发布" align="center"></el-table-column>
                    <el-table-column prop="type" label="巡检完成" align="center"></el-table-column>
                    <el-table-column label="服务" align="center">                        
                        <template slot-scope="scope">
                            <el-button @click="editData(scope.row)" type="text" size="small">巡检计划</el-button>
                            <el-button @click="deleteData(scope.row)" type="text" size="small">服务请求</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center">                        
                        <template slot-scope="scope">
                            <el-button @click="editData(scope.row)" type="text" size="small">基础信息</el-button>
                            <el-button @click="deleteData(scope.row)" type="text" size="small">服务说明</el-button>
                            <el-button @click="deleteData(scope.row)" type="text" size="small">设备清单</el-button>
                            <el-button @click="deleteData(scope.row)" type="text" size="small">联系人</el-button>
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
  name: "prejectList",
  data() {
    return {
      code:'',
      codetype:'',
      code2:'',
      codetype2:'',
      allstatus: [
        {label:'筛选服务状态',value:''},
        {label:'创建中',value:'1'},
        {label:'未开始',value:'2'},
        {label:'服务中',value:'3'},
        {label:'已结束',value:'4'},
      ],
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
    this.$store.state.adminheadernum = "2";
    this.$store.state.adminacnavnum = "4-2";
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
    searchInfo(code,codetype){

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
.table_panel{
  padding: 20px 0px;
}
.el-input{
  width: 200px !important;
  margin-left: 20px;
}
.el-select{
  width: 150px !important;
  margin-left: 20px;
}
.addbtn {
  float: right;
  margin-right: 20px;
  width: 100px;
}
</style>
