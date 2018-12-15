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
                    <span>基本信息</span>
                </h5>
            </div>

            <div class="suc-panel basic-panel">
                <div class="setPassword">
                  设置密码
                </div>
                <el-form :model="dataForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item class="form-item" prop="password">
                        <label>旧密码</label>
                        <el-input v-model="dataForm.password" placeholder="请输入旧密码" class="el-select"></el-input>
                    </el-form-item>                    
                    <el-form-item class="form-item" prop="new_password">
                        <label>新密码</label>
                        <el-input v-model="dataForm.new_password" placeholder="请输入新密码" class="el-select" @blur="checkOne(dataForm)"></el-input>
                    </el-form-item>                    
                    <el-form-item class="form-item" prop="confirm_password">
                        <label>确认密码</label>
                        <el-input v-model="dataForm.confirm_password" placeholder="再次输入新密码" class="el-select" @blur="checkTwo(dataForm)"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item">
                        <el-button class="el-button" type="primary" @click="submitForm(dataForm)">确定</el-button>
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
  name: "accountSafe",
  data() {
    return {
      dataForm: {
        password: "",
        new_password: "",
        confirm_password: ""
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
    this.$store.state.adminheadernum = "0";
    this.$store.state.adminacnavnum = "1-2";
  },
  mounted() {
    var bh = window.innerHeight;
    $("body").css("height", bh);
  },
  methods: {
    checkOne(dataForm) {
      if (dataForm.password == dataForm.new_password) {
        alert("新密码于原密码相同");
        return false;
      }
    },
    checkTwo(dataForm) {
      if (dataForm.new_password != dataForm.confirm_password) {
        alert("两次密码不相同!");
        return false;
      }
    },
    submitForm(data) {  
      this.$router.push({name:'accountSafeSuc'});    
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
.setPassword{
  margin-top: 80px;
  font-size: 18px;
}
.demo-ruleForm{
  margin-top: 80px;
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
  width: 56px;
  padding-right: 42px;
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
</style>
