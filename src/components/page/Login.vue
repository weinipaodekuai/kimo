<template>
  <div class="bg">
    <div class="login-box">
      <div class="login-tit">
        <h2>KIMO</h2>
        <p>智能服务管理系统</p>
      </div>
      <div class="login-item">
        <ul>
          <li>
            <span class="icon icon-user-login"></span>
            <input type="text" v-model="username" class="noborder-input" placeholder="手机/邮箱">
          </li>
          <li>
            <span class="icon icon-user-pswd"></span>
            <input type="password" v-model="password" class="noborder-input" placeholder="请输入登录密码">
          </li>
          <li>
            <div class="btn btn-login" @click="goLogin">登录</div>
          </li>
        </ul>
        <div class="forget">
          <a @click="goForget">忘记密码</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
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
      this.$router.push({name:'home'});
    },
    goForget() {
      this.$router.push({name:'Forget'});
    },
  }
};
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
  /* height: 450px; */
  background: #fff;
  padding: 43px 25px 38px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -175px;
  margin-top: -220px;
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



</style>