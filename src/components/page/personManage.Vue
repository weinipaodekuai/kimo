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
                    <span>成员管理</span>
                </h5>
            </div>

            <div class="suc-panel basic-panel">
              <div class="table_panel">
                <div class="demo-input-suffix">
                  <el-button class="el-button addbtn" @click="addData" type="primary">手动从钉钉同步组织结构</el-button>
                </div>
                <div class="div_line"></div>

                <div class="content_server clearfix">
                  <div class="company_tree">
                    <el-tree
                      :data="data"
                      :props="defaultProps"
                      accordion
                      @node-click="handleNodeClick">
                    </el-tree>
                  </div>
                  <div class="table_right">
                    <el-table ref="singleTable" :data="getAllGoods" highlight-current-row border
                    @current-change="handleCurrentChange" style="width: 97%;margin: 0 1.5%;">
                        <el-table-column prop="code" label="姓名" align="center"></el-table-column>
                        <el-table-column prop="type" label="手机号" align="center"></el-table-column>
                        <el-table-column prop="type" label="邮箱" align="center"></el-table-column>
                        <el-table-column label="操作" align="center">                        
                            <template slot-scope="scope">
                                <el-button @click="editData(scope.row)" type="text" size="small">编辑</el-button>
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
  name: "personManage",
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
      total: 10,
      
        data: [{
          label: '深圳市奇摩计算机有限公司',
          children: [{
            label: '办公室',
            children: [{
              label: '办公室一号'
            },{
              label: '办公室一号'
            }]
          },{
            label: '服务部',
            children: [{
              label: '深圳服务部'
            },{
              label: '沈阳服务部'
            }],
          }],
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
    };
  },
  components: {
    "Index-Header": Header,
    "Index-AccountAside": AccountAside,
    "Index-bottom": Bottom
  },
  created() {
    this.$store.state.adminheadernum = "1";
    this.$store.state.adminacnavnum = "3-1";
  },
  mounted() {
    var bh = window.innerHeight;
    $("body").css("height", bh);
    this.getAllData();
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    handleCurrentChange(val) {
        this.currentPage = val;
    },
    getAllData(){

    },
    //查询
    searchInfo(code){

    },
    //编辑
    editData(data) {
      
    },
    //删除
    deleteData(data) {
    },
    //新增
    addData() {   
      this.$router.push({name:'addCustomer'});
    },
  }
};
</script>

<style scoped>
.el-container {
  height: 100%;
}
.table_panel{
  height: 100%;
  padding-top: 20px;
}
.el-input{
  width: 200px !important;
  margin-left: 20px;
}
.addbtn {
  margin-left: 20px;
  width: 300px;
}
.div_line{
  margin: 20px 0 0 0;
}
.content_server{
  height: 100%;
}
.company_tree{
  width: 30%;
  height: 100%;    
  min-height: 500px;
  max-height: 800px;
  float: left;
  border-right: 1px solid rgb(201, 201, 201);
}
.el-tree{
  padding: 20px;
}
.table_right{
  width: 70%;
  float: left;
  padding: 20px;
}
</style>
