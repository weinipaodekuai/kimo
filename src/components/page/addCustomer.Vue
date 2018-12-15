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
                    <span>编辑客户</span>
                </h5>
            </div>

            <div class="suc-panel basic-panel">
                <p>客户信息</p>
                <el-form :model="dataForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item class="form-item" prop="name">
                        <label>客户名称</label>
                        <el-input v-model="dataForm.name" placeholder="请输入客户名称" class="el-select"></el-input>
                    </el-form-item>                    
                    <el-form-item class="form-item" prop="nickname">
                        <label>客户简称</label>
                        <el-input v-model="dataForm.nickname" placeholder="请输入客户简称，不可重复" class="el-select"></el-input>
                    </el-form-item>                    
                    <el-form-item class="form-item" prop="customer">
                        <label>我方客户代表</label>
                        <el-input v-model="dataForm.customer" placeholder="请输入我方客户代表" class="el-select"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item">
                        <el-button class="cancel" @click="submitForm(dataForm)">取消</el-button>
                        <el-button class="el-button" type="primary" @click="submitForm(dataForm)">提交</el-button>
                    </el-form-item>
                </el-form>
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
  name: "addCustomer",
  data() {
    return {
      dataForm: {
        name: "",
        nickname: "",
        customer: ""
      },
      ptype: "3"
    };
  },
  components: {
    "Index-Header": Header,
    "Index-AccountAside": AccountAside,
    "Index-bottom": Bottom
  },
  created() {
    this.$store.state.adminheadernum = "2";
    this.$store.state.adminacnavnum = "4-1";
  },
  mounted() {
    var bh = window.innerHeight;
    $("body").css("height", bh);
  },
  methods: {
    submitForm(data) {  
      this.$router.push({name:'customerList'});    
      // $.ajax({
      //   type: "post",
      //   url: commonURL("/fd_api/editPwd"),
      //   data: {
      //     id: this.loginData.id,
      //     pwd: passwordchangeForm.password,
      //     newpwd: passwordchangeForm.new_password,
      //     npwd: passwordchangeForm.confirm_password
      //   },
      //   success: res => {
      //     if (res.code == 1) {
      //       alert(res.msg);
      //       this.passwordchangeForm = {
      //         password: "",
      //         new_password: "",
      //         confirm_password: ""
      //       };
      //       localStorage.setItem('loginData','');
      //       this.$refs.Header.getNoUser();
      //       this.$refs.Header.login();
      //     }else{
      //       alert(res.msg);
      //     }
      //   }
      // });
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
  text-align: center;
}
.suc-panel p{
  width: 440px;
  margin: 50px auto 0px;
}
.demo-ruleForm{
  margin-top: 30px;
}
.form-item {
  padding-bottom: 12px;
  margin-bottom: 0 !important;
  margin-right: 100px !important;
}
.form-item .el-input{
  width: 300px;
}
.form-item:last-child{
  text-align: center;
}
.form-item label {
  display: inline-block;
  width: 100px;
  padding-right: 32px;
  font-size: 14px;
  color: #333333;
  text-align: right;
}
.form-item .el-button {
  margin-top: 30px;
  background: rgba(51, 153, 255, 1);
  width: 120px;
  border-radius: 6px;
  border: none;
  color: #fff;
  font-size: 16px;
}
.form-item-button {
  text-align: center;
  margin-top: 18px;
}
.cancel{
  background: #fff !important;
  color: #333 !important;
  border: 1px solid #333 !important;
}
</style>
