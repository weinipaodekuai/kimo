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
                    <span>角色权限</span>
                </h5>
            </div>

            <div class="suc-panel basic-panel">
              <div class="table_panel">
                <div class="demo-input-suffix">
                  <el-button class="el-button addbtn" @click="addData" type="primary">新建角色</el-button>
                  <span class="cur_person">主管工程师</span>
                </div>

                <div class="div_line"></div>

                <div class="content_server clearfix">
                  <div class="company_tree">
                    <div class="list_tit">角色列表</div>
                    <ul>
                      <li><a>超级管理员</a><span @click="editMember"></span><b @click="removeMember"></b></li>
                      <li class="act"><a>工程师</a><span @click="editMember"></span><b @click="removeMember"></b></li>
                      <li><a>仓库管理员</a><span @click="editMember"></span><b @click="removeMember"></b></li>
                      <li><a>用户自建角色</a><span @click="editMember"></span><b @click="removeMember"></b></li>

                    </ul>
                    <!-- <div class="new_person">用户自建角色 <span @click="editMember"></span></div> -->
                  
                  </div>
                  <div class="table_right">

                    <el-tabs v-model="activeName" @tab-click="handleClick">
                      <el-tab-pane label="角色成员" name="first">
                        <el-table ref="singleTable" :data="getAllMember" highlight-current-row border
                    @current-change="handleCurrentChange" style="width: 85%;margin:0 1.5%;">
                            <el-table-column prop="code" label="姓名" align="center"></el-table-column>
                            <el-table-column prop="type" label="手机" align="center"></el-table-column>
                            <el-table-column prop="type" label="邮箱" align="center"></el-table-column>
                        </el-table>
                        <div class="set_member">设置成员</div>
                        <div class="pageindex">
                          <el-pagination background @current-change="handleCurrentChange"
                    :current-page.sync="currentPage" :page-size="pagesize" layout="prev, pager, next" :total="total">
                          </el-pagination>
                        </div> 
                      </el-tab-pane>

                      <el-tab-pane label="功能权限" name="second">
                        <el-table ref="singleTable" :data="getAllPower" highlight-current-row border
                    @current-change="handleCurrentChange" style="width: 85%;margin:0 1.5%;">
                            <el-table-column width="200" prop="code" label="全选" align="center"></el-table-column>
                            <el-table-column prop="type" label="权限项目" align="center"></el-table-column>
                        </el-table>
                      </el-tab-pane>
                      
                      <el-tab-pane label="数据范围" name="third">
                        <el-table ref="singleTable" :data="getAllPower" highlight-current-row border
                    @current-change="handleCurrentChange" style="width: 85%;margin:0 1.5%;">
                            <el-table-column prop="code" label="功能名称" align="center" width="200"></el-table-column>
                            <el-table-column prop="type" label="查看数据范围" align="center"></el-table-column>
                            <el-table-column prop="type" label="管理数据范围" align="center"></el-table-column>
                        </el-table>
                      </el-tab-pane>
                    </el-tabs>

                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mask" @click="close2"></div>
          <div id="personTableDialog" class="dialog">
            <div class="dialog_title">
              <span>编辑角色名称</span>
              <b @click="close2"></b>
            </div>
            <div class="dialog_content">
              <div class="login_ul clearfix">

                  <div class="login_info clearfix">
                    <label>角色：</label>
                    <el-input
                      placeholder=""
                      v-model="member_name"
                      clearable>
                    </el-input>
                  </div>

                  <div class="login_btn">
                    <button class="sure btn_sure" @click="sureEdit">确定</button>
                    <button class="cancel" @click="close2">取消</button>
                  </div>
              </div>
            </div>
          </div>


          <div id="removeMemberDialog" class="dialog">
            <div class="dialog_title">
              <span>删除确认</span>
              <b @click="close2"></b>
            </div>
            <div class="dialog_content">
              <div class="login_ul clearfix">

                  <div class="login_info clearfix" style="text-align:center;">
                    删除后不可恢复，是否继续？
                  </div>

                  <div class="login_btn">
                    <button class="sure btn_sure" @click="sureRemove">确定</button>
                    <button class="cancel" @click="close2">取消</button>
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
  name: "personPower",
  data() {
    return {
      code:'',
      codetype:'',
      code2:'',
      codetype2:'',
      member_name:'',
      // 角色成员表
      getAllMember:[
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
      // 功能权限表
      getAllPower:[
        {
        id:'1',
        code: 'true',
        type: '计算机'
        },{
        id:'2',
        code: 'dl',
        type: '服务器'
        }
      ],


      // 数据范围表
      dataRange:[
        
      ],
      
      pagesize: 6,
      currentPage: 1,
      total: 10,
      activeName: 'first',
      
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
    this.$store.state.adminacnavnum = "3-2";
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
    // tabs 选项卡
    handleClick(tab, event) {
      console.log(tab, event);
    },
    close2() {
      $(".mask").hide();
      $("#removeMemberDialog").hide();
      $("#personTableDialog").hide();
    },
    editMember(data) {
      // this.member_name = data.label;
      $(".mask").show();
      $("#personTableDialog").show();
    },
    setMember(){

    },
    removeMember(){
      $(".mask").show();
      $("#removeMemberDialog").show();
    },
    sureEdit(){

    },
    sureRemove(){

    }
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
  width: 120px;
}
.div_line{
  margin: 20px 0 0 0;
}
.content_server{
  height: 100%;
}
.company_tree{
  padding:20px;
  width: 20%;
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
  width: 80%;
  float: left;
  padding: 20px;
}

.company_tree .list_tit{
  height: 48px;
  line-height:48px;
  text-align: center;
  background: rgb(201, 201, 201);
}
.company_tree ul{

}
.company_tree li.act a{
  color:#409EFF;
}
.company_tree li{
  padding:10px 15px;
  position: relative;
}
.company_tree li:hover span,.company_tree li:hover b{
  display: block;
}
.company_tree li:hover a{
  color:#409EFF;
}


.new_person{
  padding:10px 15px;
  position: relative;
  cursor: pointer;
}
.company_tree li span{
  display: none;
  position: absolute;
  top:13px;
  right:40px;
  padding:10px;
  background: url(../../assets/images/write.png) no-repeat;
  background-size:100% 100%;
  cursor: pointer;
}
.company_tree li b{
  display: none;
  position: absolute;
  top:12px;
  right:12px;
  padding:10px;
  background: url(../../assets/images/remove.png) no-repeat;
  background-size:100% 100%;
  cursor: pointer;
}
.cur_person{
  margin-left: 15%;
  font-size: 20px;
}
.set_member{
  width: 10%;
  height:45px;
  border-radius: 3px;
  line-height: 45px;
  background:#409EFF;
  color: #fff;
  text-align: center;
  position: absolute;
  right:20px;
  top:1px;
  cursor: pointer;
}
</style>
