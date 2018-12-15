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
                <div class="">
                  <img src="../../assets/images/basic_img.png">
                </div>

                <el-form :model="dataForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item class="form-item" prop="name">
                        <label>姓名</label>
                        <el-input v-model="dataForm.name" placeholder="请输入姓名" class="el-select"></el-input>
                    </el-form-item>                    
                    <el-form-item class="form-item" prop="mobile">
                        <label>手机</label>
                        <el-input v-model="dataForm.mobile" placeholder="请输入手机号" class="el-select" @blur="checkMobile()"></el-input>
                    </el-form-item>                    
                    <el-form-item class="form-item" prop="email">
                        <label>电子邮箱</label>
                        <el-input v-model="dataForm.email" placeholder="请输入电子邮箱" class="el-select"></el-input>
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
  name: "home",
  data() {
    return {
      dataForm: {
        name: "",
        mobile: "",
        email: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" }
        ],
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入电子邮箱", trigger: "blur" }
        ]
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
    this.$store.state.adminacnavnum = "1-1";
  },
  mounted() {
    var bh = window.innerHeight;
    $("body").css("height", bh);
  },
  methods: {
    
    checkMobile() {
      var re = /^[1][3,4,5,7,8,9][0-9]{9}$/;
      if (!re.test(this.dataForm.mobile)) {
        alert("提示：请输入正确的手机号码！");
      }
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
