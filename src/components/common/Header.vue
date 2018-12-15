<template>
    <div class="clearfix">
        <el-header>
            <!-- <h5 class="clearfix">
                <label class="clearfix">
                  <img src="../../assets/images/register_icon.png">
                  <span>手机版</span>
                </label>
                <div class="header_top clearfix">
                    <a @click="login" v-if="nouser">
                        <img src="../../assets/images/login_icon.png">
                        <span class="login_name">登录</span>
                    </a>
                    <router-link to="/personaldata" v-if="havueuser">
                        <span class="login_name">{{username}}</span>
                    </router-link>
                    <div class="header_line"></div>
                    <a @click="register" v-if="nouser">
                        <img src="../../assets/images/register_icon.png">
                        <span>注册</span>
                    </a>
                    <a @click="logout" v-if="havueuser">
                        <img src="../../assets/images/logout.png">
                        <span>安全退出</span>
                    </a>
                </div>
            </h5> -->
            <el-menu :default-active="headerselected" class="el-menu-vertical-demo menu-new header_menu"
            @open="handleOpen" @close="handleClose" @select="selectItems" mode="horizontal"
            active-text-color="#ffd04b">
                <div class="logo-box">
                  <!-- <img src="../../assets/images/logo.png"> -->
                  <label>KIMO</label>
                </div>
                
                <router-link to="/">
                    <el-menu-item index="0">
                      <i class="el-icon-menu"></i>
                      <span slot="title">后台首页</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/personManage">
                    <el-menu-item index="1">
                      <i class="el-icon-menu"></i>
                      <span slot="title">用户管理</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/customerList">
                    <el-menu-item index="2">
                      <i class="el-icon-menu"></i>
                      <span slot="title">智能服务</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/newsInfos">
                    <el-menu-item index="3">
                      <i class="el-icon-menu"></i>
                      <span slot="title">采购管理</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/sparepartName">
                    <el-menu-item index="4">
                      <i class="el-icon-menu"></i>
                      <span slot="title">备件管理</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/aboutus">
                    <el-menu-item index="5">
                      <i class="el-icon-menu"></i>
                      <span slot="title">统计分析</span>
                    </el-menu-item>
                </router-link>

                <div class="account">
                  <div class="account" @click="goMyAcoount">
                    <img src="../../assets/images/login_icon.png">
                    <span>我的账号</span>
                  </div>
                  <div class="account" @click="logout">
                      <img src="../../assets/images/logout.png">
                      <span>退出登录</span>
                  </div>
                </div>
            </el-menu>
        </el-header>
        <div class="mask" @click="close"></div>
        <div id="login" class="dialog">
            <div class="dialog_title">登录</div>
            <div class="login_ul clearfix">
                <div class="login_info clearfix">
                    <label>用户名</label>
                    <input type="text" v-model="account">
                </div>
                <div class="login_info clearfix">
                    <label>密码</label>
                    <input type="password" v-model="pass">
                </div>
                <div class="login_info clearfix">
                  <span @click="forget">忘记密码</span>
                  <p>还没账号，<a @click="register">立即注册</a></p>
                </div>
                <div class="login_btn">
                    <button @click="sureLogin">登录</button>
                </div>
            </div>
        </div>
        <div id="register" class="dialog">
            <div class="dialog_title">{{rtitle}}</div>
            <div class="login_ul clearfix">
                <div class="login_info clearfix">
                    <label>昵称</label>
                    <input type="text" v-model="name">
                </div>
                <div class="login_info clearfix">
                    <label>手机号码</label>
                    <input type="number" v-model="mobile" @blur="checkMobile()" >
                </div>
                <div class="login_info clearfix">
                    <label>登录密码</label>
                    <input type="password" v-model="password" >
                </div>
                <div class="login_info clearfix">
                    <label>确认密码</label>
                    <input type="password" v-model="surepassword" @blur="check()">
                </div>
                <div class="login_info clearfix">
                    <label>验证码</label>
                    <input id="verify" type="number" class="loan_inut">
                    <label id="getVerify">
                    <span>
                        <a @click="makeIdentifyCode">获取验证码 </a><i></i>
                    </span>
                    </label>
                </div>
                <div class="Ehint"></div>
                <div class="login_btn">
                    <button @click="sureRegister" v-if="isReg">注册</button>
                    <button @click="sureForget" v-else>确认</button>
                </div>
            </div>
        </div>
        
        <div id="logoutDialog" class="dialog">
          <div class="dialog-content">确认退出?</div>
          <div class="login_btn">
              <button @click="sureLogout">确认</button>
          </div>
        </div>
    </div>
    
</template>
<script>
import commonURL from "../../assets/js/ajax";
export default {
  name: "Header",
  data() {
    return {
        name:'',
        accountImg:'',
        username:'',
        havueuser:false,
        nouser:true,
        loginData:'',
        account:'',
        pass:'',
        headerselected: "",
        loginData: "",
        mobile: "",
        password: "",
        surepassword: "",
        yzcode: '',
        InterValObj: '',  //timer变量，控制时间
        curCount: 60,  //当前剩余秒数
        isReg: true,
        rtitle: ''
    };
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    getNavType() {
      this.headerselected = this.$store.state.adminheadernum;
    },
    selectItems(index) {
      this.$store.state.adminheadernum = index;
    },
    login() {
      $(".mask").show();
      $("#login").show();
    },
    register() {
      this.rtitle = '注册';
      this.isReg = true;
      $(".mask").show();
      $("#register").show();
    },
    forget(){
      this.rtitle = '忘记密码';
      this.isReg = false;
      $(".mask").show();
      $("#register").show();
    },
    close() {
      $(".mask").hide();
      $("#login").hide();
      $("#register").hide();
      $("#logoutDialog").hide();
    },
    sureLogin() {
      if (this.account == "" || this.pass == "") {
        alert("请输入手机号和密码！");
      } else {
        $.ajax({
          type: "post",
          url: commonURL("/user_account/registerTb"),
          data: {
            mobile: this.account,
            pwd: this.pass
          },
          success: res => {
            if (res.code == -1) {
              alert(res.msg);
            } else {
              localStorage.setItem('loginData',JSON.stringify(res.data));
              this.loginData = JSON.parse(localStorage.getItem("loginData"));
              this.close();
              this.havueuser = true;
              this.nouser = false;
              this.username = res.data.username;
              this.accountImg = res.data.image_url;
            }
          }
        });
      }
    },
    checkMobile(){
      var re = /^[1][3,4,5,7,8,9][0-9]{9}$/;
      if(re.test(this.mobile)){
        $(".Ehint").hide();
      }else{
        $(".Ehint").text("请输入正确的手机号码！").show();
        setTimeout(function(){
            $(".Ehint").hide();
        },3000);
      }
    },
    check(){
      if(this.password !=  this.surepassword){
        $(".Ehint").text("两次密码不相同！").show();
        setTimeout(function(){
            $(".Ehint").hide();
        },3000);
      }
    },
    makeIdentifyCode(){
      var re = /^[1][3,4,5,7,8,9][0-9]{9}$/;
      if(re.test(this.mobile)){
          $(".Ehint").hide();
          $("#getVerify a").hide();
          $("#getVerify i").text("获取验证码");
          //获取验证码
        $.ajax(commonURL('/user_account/send'),{
          data:{
            mobile: this.mobile
          },
          dataType:'json',
          type:'post',
          success:function(data){
            if(data.code == 1){
              this.yzcode = data.data;
              this.curCount = 60;
              $("#getVerify i").text(this.curCount + "s");
              var that = this;
              this.InterValObj = window.setInterval(function(){
                if (that.curCount == 1) {                
                  window.clearInterval(that.InterValObj);
                  $("#getVerify a").show();
                  $("#getVerify a").text("重新发送");
                  $("#getVerify i").empty();
                } else {
                  that.curCount = Number(that.curCount)-1;
                  $("#getVerify i").text(that.curCount + "s");
                }
              }, 1000);
              
            }else{
              $("#getVerify a").show().text("重新发送");
              $("#getVerify i").empty();
              $(".Ehint").text("获取验证码失败，请重试！").show();
              setTimeout(function(){
                  $(".Ehint").hide();
              },3000);
            }
          },
          error:function(xhr,type,errorThrown){
            console.log('aiya',type);
          }
        });
      }else{
        $(".Ehint").text("提示：请输入正确的手机号码！").show();
        setTimeout(function(){
            $(".Ehint").hide();
        },3000);
      }
    },
    sureRegister() {
      if (this.name == "" || this.mobile == "" || this.password == ""
       || this.surepassword == "" || this.password == "") {
        alert("请输入完整信息！");
      } else {
        var Regx = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        if(!Regx.test(this.mobile)){
          alert('请输入正确的手机号！');
          return false;
        }
        if(this.password != this.surepassword){
          alert('两次密码不相同！');
          return false;
        }

        $.ajax({
          type: "post",
          url: commonURL("/user_account/register"),
          data: {
            mobile: this.mobile,
            pwd: this.password,
            passpwd: this.surepassword,
            code:$("#verify").val(),
            name: this.name
          },
          success: res => {
            if (res.code == 1) {
                this.close();
                this.login();
            } else {
              alert(res.msg);
            }
          }
        });
      }
    },
    sureForget() {
      if (this.mobile == "" || this.password == ""
       || this.surepassword == "" || this.password == "") {
        alert("请输入完整信息！");
      } else {
        var Regx = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        if(!Regx.test(this.mobile)){
          alert('请输入正确的手机号！');
          return false;
        }
        if(this.password != this.surepassword){
          alert('两次密码不相同！');
          return false;
        }

        $.ajax({
          type: "post",
          url: commonURL("/user_account/forgetPwd"),
          data: {
            mobile: this.mobile,
            pwd: this.password,
            passpwd: this.surepassword,
            code:$("#verify").val()
          },
          success: res => {
            if (res.code == 1) {
                this.close();
                this.login();
            } else {
              alert(res.msg);
            }
          }
        });
      }
    },
    logout(){
      $(".mask").show();
      $("#logoutDialog").show();
    },
    sureLogout(){
      localStorage.setItem('loginData','');
      this.havueuser = false;
      this.nouser = true;
      this.close();
      this.$router.push({name:'home'});
    },
    getNoUser(){
      this.havueuser = true;
      this.nouser = false;
      this.username = '';
      this.accountImg = require('../../assets/images/basic_img.png');
    },
    goMyAcoount(){
      if(!!localStorage.getItem("loginData")){
        this.$router.push({name:'personaldata'});
      }else{
        this.login();
      }
    }
  },
  updated(){
    if(!!localStorage.getItem("loginData")){
      this.loginData = JSON.parse(localStorage.getItem("loginData"));
      this.havueuser = true;
      this.nouser = false;
    }else{
      this.havueuser = false;
      this.nouser = true;
    }
  },
  mounted() {
    this.headerselected = this.$store.state.adminheadernum;
    
    if(!!localStorage.getItem("loginData")){
      this.loginData = JSON.parse(localStorage.getItem("loginData"));
      this.havueuser = true;
      this.nouser = false;
      this.username = this.loginData.username;
      this.accountImg = this.loginData.image_url;

      $.ajax({
        type: "post",
        url: commonURL("/user_account/getInformation"),
        data: {
          id: this.loginData.id
        },
        success: res => {        
          if(!!res.msg){
            this.accountImg = res.msg.primary_name_url;
          }
        }
      });

    }else{
      this.havueuser = false;
      this.nouser = true;
    }

  },
  watch: {
    // 监测store.state
    "$store.state.adminheadernum": "getNavType"
  }
};
</script>
<style>
.header_menu {
  width: 100%;
  height: 60px;
  margin: auto;
  background: rgb(70, 76, 91);
  color: #fff;
}
.el-header {
  width: 100%;
  height: 60px !important;
  padding: 0;
  background: rgb(70, 76, 91);
}
.header_line {
  float: left;
  width: 1px;
  height: 20px;
  margin-top: 10px;
  margin-right: 15px;
  background: #e3e3e3;
}
.login_name {
  margin-right: 15px;
}
.header_menu .el-menu-item {
  font-size: 16px;
  height: 60px;
  line-height: 60px;
  border-bottom: none;
  padding: 0px 20px;
}
.firstmenu {
  margin-left: 20px;
}
.header_menu .el-menu.el-menu--horizontal {
  border-bottom: none;
  
}
.el-menu.el-menu--horizontal {
  display: flex;
  justify-content: start;
}
.header_menu .el-menu-item span {
  color: rgb(204, 204, 204) !important;
}
.header_menu .el-menu-item.is-active span {
  /* padding: 5px; */
  color: #fff !important;
}
.header_menu .el-menu-item:hover{
  background: rgb(26, 188, 156);
}
.header_menu .el-menu-item:hover span{
  color: #fff !important;
}
.account {
  /* float: right; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}
.account img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.account span {
  float: right;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
}

.login_ul {
  width: 80%;
  margin: auto;
}
.login_info {
  float: left;
  width: 100%;
  padding: 10px 0px;
  color: #333;
  font-size: 13px;
  box-sizing: border-box;
}
.login_info label {
  float: left;
  width: 20%;
  padding: 5px 0px;
  text-align: left;
}
.login_info input {
  float: left;
  width: 75%;
  border: 1px solid #cecece;
  border-radius: 3px;
  padding: 5px 8px;
}
.login_ul p {
  text-align: right;
  padding-right: 20px;
  font-size: 13px;
}
.login_info span{
  float: left;
  margin-left: 20%;
  color: red;
  cursor: pointer;
}
.login_info p {
  float: right;
  padding-right: 20px;
  font-size: 13px;
}
.login_btn {
  float: left;
  width: 80%;
  margin-left: 10%;
  text-align: center;
}
.login_btn button {
  width: 100%;
  margin: 30px 0px;
  border: none;
  padding: 5px;
  border-radius: 5px;
  color: #212121;
  font-size: 14px;
  background: #fbd908;
  cursor: pointer;
}
a {
  color: #333;
}

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type="number"]{
    -moz-appearance: textfield;
}

.logo-box{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 150px;
  margin-right: 20px;
}
.logo-box label{
  font-size: 34px;
  font-weight: bold;
  margin-left: 20px;
}
</style>