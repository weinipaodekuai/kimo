<template>
    <div>
      <el-aside class="account_aside" style="width:180px; height:100%;">
        <el-col :span="24">
          <el-menu :default-openeds="['1','2','3','4','5','6','7','8','9','10','11','12','13','14']" :default-active="acNavselected" :active="acNavselected" class="el-menu-vertical-demo menu-new"
            @open="handleOpen" @close="handleClose" @select="selectItems"
            background-color="#fff" text-color="#333" router>
            
            <!-- 后台首页左侧导航 -->
            <el-submenu index="1" v-if="this.$store.state.adminheadernum == '0'">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span style="font-size:16px;">账户设置</span>
              </template>
              <el-menu-item-group>
                <router-link to="/">
                  <el-menu-item index="1-1" class="left-nav">
                    基本信息
                  </el-menu-item>
                </router-link>
                <router-link to="/accountSafe">
                  <el-menu-item index="1-2" class="left-nav">
                    账户安全
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2" v-if="this.$store.state.adminheadernum == '0'">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span style="font-size:16px;">标注数据</span>
              </template>
              <el-menu-item-group>
                <router-link to="/deviceClass">
                  <el-menu-item index="2-1" class="left-nav">
                    设备类型
                  </el-menu-item>
                </router-link>
                <router-link to="/sparepartsClass">
                  <el-menu-item index="2-2" class="left-nav">
                    备件类型
                  </el-menu-item>
                </router-link>
                <router-link to="/manufacturerBrand">
                  <el-menu-item index="2-3" class="left-nav">
                    厂商品牌
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            
            <!-- 用户管理左侧导航 -->
            <el-submenu index="3" v-if="this.$store.state.adminheadernum == '1'">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span style="font-size:16px;">用户管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="/personManage">
                  <el-menu-item index="3-1" class="left-nav">
                    成员管理
                  </el-menu-item>
                </router-link>
                <router-link to="/roleAuthorization">
                  <el-menu-item index="3-2" class="left-nav">
                    角色权限
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            
            <!-- 智能服务左侧导航 -->
            <el-submenu index="4" v-if="this.$store.state.adminheadernum == '2'">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span style="font-size:16px;">项目管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="/customerList">
                  <el-menu-item index="4-1" class="left-nav">
                    客户列表
                  </el-menu-item>
                </router-link>
                <router-link to="/prejectList">
                  <el-menu-item index="4-2" class="left-nav">
                    项目列表
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5" v-if="this.$store.state.adminheadernum == '2'">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span style="font-size:16px;">服务管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="/serverRequest">
                  <el-menu-item index="5-1" class="left-nav">
                    服务请求
                  </el-menu-item>
                </router-link>
                <router-link to="/inspectingManage">
                  <el-menu-item index="5-2" class="left-nav">
                    巡检管理
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>

            <!-- 备件管理左侧导航 -->
            <el-submenu index="8" v-if="this.$store.state.adminheadernum == '4'">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span style="font-size:16px;">基础数据</span>
              </template>
              <el-menu-item-group>
                <router-link to="/sparepartName">
                  <el-menu-item index="8-1" class="left-nav">
                    备件名称表
                  </el-menu-item>
                </router-link>
                <router-link to="/addressManage">
                  <el-menu-item index="8-2" class="left-nav">
                    地点管理
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="9" v-if="this.$store.state.adminheadernum == '4'">
              <template slot="title">
                <!-- <i class="icon_img left-icons"></i> -->
                <i class="el-icon-menu"></i>
                <span style="font-size:16px;">库存管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="/">
                  <el-menu-item index="9-1" class="left-nav">
                    生成入出库单
                  </el-menu-item>
                </router-link>
                <router-link to="/">
                  <el-menu-item index="9-2" class="left-nav">
                    入出库单列表
                  </el-menu-item>
                </router-link>
                <router-link to="/">
                  <el-menu-item index="9-3" class="left-nav">
                    入出库报表
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="10" v-if="this.$store.state.adminheadernum == '4'">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span style="font-size:16px;">备件保管</span>
              </template>
              <el-menu-item-group>
                <router-link to="/">
                  <el-menu-item index="10-1" class="left-nav">
                    保管收货
                  </el-menu-item>
                </router-link>
                <router-link to="/">
                  <el-menu-item index="10-2" class="left-nav">
                    备件调拨
                  </el-menu-item>
                </router-link>
                <router-link to="/">
                  <el-menu-item index="10-3" class="left-nav">
                    备件领用
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="11" v-if="this.$store.state.adminheadernum == '4'">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span style="font-size:16px;">备件报表</span>
              </template>
              <el-menu-item-group>
                <router-link to="/">
                  <el-menu-item index="11-1" class="left-nav">
                    实时存量
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
        </el-col>
      </el-aside>
    </div>
</template>
<script>
export default {
  name: "AccountAside",
  data() {
    return {
      acNavselected: "",
      loginData: "",
      isShow: true,
      isHide: false,
      auth_status:''
    };
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    getNavType() {
      this.acNavselected = this.$store.state.adminacnavnum;
    },
    selectItems(index) {
      this.$store.state.adminacnavnum = index;
    }
  },
  mounted() {
    this.acNavselected = this.$store.state.adminacnavnum;
    if(!!localStorage.getItem("loginData")){
      this.loginData = JSON.parse(localStorage.getItem("loginData"));
      if(this.loginData.auth_status == 1){
        this.auth_status = '已认证';
      }else{
        this.auth_status = '未认证';
      }
    }
  },
  watch: {
    // 监测store.state
    "$store.state.adminacnavnum": "getNavType"
  }
};
</script>
<style>
.account_aside{
  background-color: rgb(252, 252, 252) !important;
  color: #333;
}

/*重新修改的样式*/
.el-aside .side-head-title {
  text-align: center;
  font-size: 14px;
}
.account_aside .el-submenu__title {
  color: #333 !important;
  background-color: rgb(249, 249, 249) !important;
  text-align: center;
  border-bottom: 1px solid #E3E3E3;
  border-bottom-color: #E3E3E3 !important;
  font-size: 20px;
  padding-left: 0px !important;
}
.account_aside .el-submenu__title:hover{
  color: rgb(26, 188, 156) !important;
}
.account_aside .el-submenu .el-menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #E3E3E3;
}
.account_aside .el-submenu__icon-arrow {
  margin-top: 0px;
}
.account_aside .el-menu-item {
  font-size: 15px;
  height: 50px !important;
  line-height: 50px;
  color: #333 !important;
  background-color: rgb(252, 252, 252) !important;
  padding-left: 0px !important;
}
.account_aside .el-menu-item.is-active {
  color: rgb(26, 188, 156) !important;
  border-left: none;
}
.account_aside .el-menu-item:hover {
  color: rgb(26, 188, 156) !important;
  border-left: none;
}
.account_aside .el-menu {
  border-right: none;
  background-color: rgb(252, 252, 252) !important;
}
.left-nav {
  text-align: center;
  padding: 0 20px !important;
}
.el-submenu .el-menu-item{
  min-width: 180px;
}
.el-menu-item-group__title{
  padding: 0 !important;
}
.left-icons {
  padding: 10px;
  margin-right: 10px;
}
.icon_img{
  background: url(../../assets/images/addr.png) no-repeat center;
  background-size: 100%;
}
</style>

