import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/page/home';   //后台首页》基础信息
import accountSafe from '@/components/page/accountSafe';   //后台首页》账户安全页面
import accountSafeSuc from '@/components/page/accountSafeSuc';   //后台首页》账户安全》成功页面
import deviceClass from '@/components/page/deviceClass';   //后台首页》设备类别页面
import sparepartsClass from '@/components/page/sparepartsClass';   //后台首页》备件类别页面
import manufacturerBrand from '@/components/page/manufacturerBrand';   //后台首页》厂商品牌页面

import personManage from '@/components/page/personManage';   //用户管理》成员管理页面

import customerList from '@/components/page/customerList';   //智能服务》客户列表页面
import addCustomer from '@/components/page/addCustomer';   //智能服务》新增编辑客户页面
import prejectList from '@/components/page/prejectList';   //智能服务》项目列表页面

import sparepartName from '@/components/page/sparepartName';   //备件管理》备件名称表页面
import addressManage from '@/components/page/addressManage';   //备件管理》地点管理页面


Vue.use(Router);

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/accountSafe',
      name: 'accountSafe',
      component: accountSafe
    },{
      path: '/accountSafeSuc',
      name: 'accountSafeSuc',
      component: accountSafeSuc
    },{
      path: '/deviceClass',
      name: 'deviceClass',
      component: deviceClass
    },{
      path: '/sparepartsClass',
      name: 'sparepartsClass',
      component: sparepartsClass
    },{
      path: '/manufacturerBrand',
      name: 'manufacturerBrand',
      component: manufacturerBrand
    },{
      path: '/personManage',
      name: 'personManage',
      component: personManage
    },
    
    {
      path: '/customerList',
      name: 'customerList',
      component: customerList
    },{
      path: '/addCustomer',
      name: 'addCustomer',
      component: addCustomer
    },{
      path: '/prejectList',
      name: 'prejectList',
      component: prejectList
    },
    
    {
      path: '/sparepartName',
      name: 'sparepartName',
      component: sparepartName
    },{
      path: '/addressManage',
      name: 'addressManage',
      component: addressManage
    }
  ]
});
