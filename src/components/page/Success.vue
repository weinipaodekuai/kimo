<template>
    <div class="suc-bg">
        <div class="suc-head">
            <h5>
                <span>重置成功</span>
            </h5>
        </div>

        <div class="suc-panel">
            <p>密码重置成功</p>
            <div class="suc-go">
                <a @click="goLogin">去登录</a>
            </div>
        </div>

        <div class="copyright">
            <p>Copyright © www.kimocomputer.com, All Rights Reserved.</p>
            <p>Tel: 86-755-26932866    Fax: 86-755-26932099</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "Success",
  data() {
    return {
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
    }
  }        
}
</script>

<style scoped>
    .suc-bg{
        position: fixed;
        width: 100%;
        height: 100%;
        background:#f9f9f9;
    }
    .suc-head{
        height: 50px;
        border-bottom:1px solid #ddd;
    }
    .suc-head h5{
        line-height: 50px;
        width: 1440px;
        margin:0 auto ;
    }
    .suc-head h5 span{
        position: relative;
        font-size: 16px;
        color: #888;
        font-weight: 100;
    }
    .suc-head h5 span::after{
        content: '';
        position: absolute;
        left: -10px;
        top:0px;
        width: 5px;
        height:18px;
        background: rgb(26, 188, 156);
    }
    .suc-panel{
        width: 1440px;
        height: 80%;
        min-height: 500px;
        max-height: 800px;
        margin:20px auto 0;
        border:1px solid #ddd;
        background: #fff;
    }
    .suc-panel p{
        width: 810px;
        font-size: 18px;
        margin:50px auto 350px;
        border-bottom:2px solid rgba(51, 153, 255, 1);
        padding-bottom:5px;
    }
    .suc-go{
        text-align: center;
    }
    .suc-go a{
        display: inline-block;
        width: 100px;
        height: 35px;
        line-height: 35px;
        border-radius: 4px;
        color: #fff;
        background:rgba(51, 153, 255, 1);
        font-size: 15px;
    }

    .copyright{
        text-align: center;
        margin:30px auto;
    }
    .copyright p{
        font-size: 14px;
        color: #999;
        line-height: 28px;
    }




</style>