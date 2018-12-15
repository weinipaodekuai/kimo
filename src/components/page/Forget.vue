<template>
  <div class="bg">
    <div class="login-box">
      <div class="login-tit">
        <p>重置密码</p>
      </div>
      <div class="login-item">
        <ul>
          <li>
            <span class="icon icon-user-login"></span>
            <input type="text" v-model="mobile" placeholder="请输入手机号">
          </li>
          <li class="confir-li">
            <span class="icon icon-user-login"></span>
            <input type="text" v-model="code" class="confir-input" placeholder="请输入验证码">
            <a class="">发送验证码</a>
          </li>
          <li>
            <span class="icon icon-user-pswd"></span>
            <input type="password" v-model="password" placeholder="8-12位，包含大小写字母和数字">
          </li>
          <li>
            <span class="icon icon-user-pswd"></span>
            <input type="password" v-model="password2" placeholder="再次输入新密码">
          </li>
          <li>
            <div class="btn btn-login" @click="goSuccess">提交</div>
          </li>
        </ul>
        <div class="forget">
          <a @click="goLogin">去登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  name: "Forget",
  data() {
    return {
      mobile: "",
      password: "",
      password2: "",
      code:''
    };
  },
  components: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
    
    goLogin() {
      this.$router.push({name:'Login'});
    },
    goSuccess(){
      this.$router.push({name:'Success'});
    }
  }};
</script>

<style scoped>

.bg {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgb(26, 188, 156);
}
.login-box {
  text-align: center;
  width: 300px;
  background: #fff;
  padding: 43px 25px 38px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -175px;
  margin-top: -280px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.349019607843137);
  box-sizing: content-box;
}

.login-tit {
  font-weight: 700;
  color: rgb(26, 188, 156);
  line-height: 54px;
}
.login-tit h2 {
  font-size: 32px;
}
.login-tit p {
  font-size: 24px;
}

.login-item {
    margin-top: 10px;
}
.login-item input{
  border: none;
  outline: none;
  height:40px;
  margin-top:5px;
  margin-left: 28px;
  font-size: 15px;
  color: #666;
  width: 220px;
}

.login-item ul li {
    height: 50px;
    border-radius: 2px;
    border: 1px #ccc solid;
    margin-bottom: 18px;
    position: relative;
    border-radius: 3px;
}
.login-item ul li:last-child{
  margin-bottom:10px;
}
.login-item ul li .icon {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 35px;
    height: 35px;
}
.icon-user-login {
    background:url(../../assets/images/person.png) no-repeat;
    background-size: 100% 100%;
}
.icon-user-pswd{
    background:url(../../assets/images/lock.png) no-repeat;
    background-size: 100% 100%;
}

.btn{
  width: 100%;
  height: 50px;
  background: rgb(26, 188, 156);
  cursor: pointer;
  line-height: 50px;
  color: #fff;
  font-size: 18px;
  border-radius: 3px;
}

.forget a{
  float: right;
  font-size: 14px;
  color: #3399FF;
}

.confir-li a{
  /* float: right; */
  display: inline-block;
  width: 90px;
  font-size: 15px;
  cursor: pointer;
  color: #3399FF;
}
.confir-li .confir-input{
  width: 130px;
}
.confir-li a.act{
  color: #ccc;
  cursor: default;
}




</style>