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
                  <span>重置成功</span>
                </h5>
            </div>

            <div class="suc-panel">
                <p>密码重置成功</p>
                <div class="suc-go">
                    <router-link :to="{name:'accountSafe'}">确定</router-link>
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
  name: "accountSafeSuc",
  data() {
    return {
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
  methods: {}
};
</script>

<style scoped>
.el-container {
  height: 100%;
}


</style>
