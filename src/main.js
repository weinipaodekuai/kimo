// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './Vuex/store';
import ElementUI from 'element-ui';
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common.css';
import $ from './assets/js/jquery-3.3.1.min';
import wx from 'weixin-js-sdk'
import './assets/js/ajax';
import 'vue-directive-image-previewer/dist/assets/style.css';
import preview from 'vue-photo-preview';
import 'vue-photo-preview/dist/skin.css';
import moment from 'moment';
window.jQuery = $;
window.$ = $;
Vue.mixin({
  created () {
    this.$moment = moment
  }
})
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueDirectiveImagePreviewer);
Vue.use(preview);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
