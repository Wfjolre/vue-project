// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from './utils/fetch'
import { currency } from "./views/shopping-cart/currency";

import './styles/index.css'
// import './styles/index.less'

Vue.use(VueRouter);
Vue.use(ElementUI)
Vue.filter('currency',currency)
Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

  beforeCreate: function () {
    console.group('beforeCreate 创建前');
    console.log("el: " + this.$el);
    console.log("data: " + this.$data);
    console.log("message: " + this.message)
},
created: function () {
    console.group('created 创建完毕');
    if (sessionStorage.getItem('store')) {
        this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
      }
      // 在页面刷新时将store保存到sessionStorage里
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('store', JSON.stringify(this.$store.state))
      })
    console.log("el: " + this.$el);
    console.log("data: " + this.$data + JSON.stringify(this.$data));
    console.log("message: " + this.message)
},
beforeMount: function () {
    console.group('beforeMount 挂载前');
    console.log("el: " + this.$el);
    console.log("data: " + this.$data);
    console.log("message: " + this.message)
},
mounted: function () {
    console.group('mounted 挂载结束');
    console.log("el: " + this.$el);
    console.log("data: " + this.$data);
    console.log("message: " + this.message)
    window.sessionStorage.setItem("store",JSON.stringify(this.$store.state))
},
beforeUpdate: function () {
    console.group('beforeUpdate 更新前');
    console.log("el: " + this.$el);
    console.log("data: " + this.$data);
    console.log("message: " + this.message)
},
updated: function () {
    console.group('updated 更新完成');
    console.log("el: " + this.$el);
    console.log("data: " + this.$data);
    console.log("message: " + this.message)
},
beforeDestroy: function () {
    console.group('beforeDestroy 销毁前');
    console.log("el: " + this.$el);
    console.log("data: " + this.$data);
    console.log("message: " + this.message)
},
destroyed: function () {
    console.group('destroyed 销毁完成');
    console.log("el: " + this.$el);
    console.log("data: " + this.$data);
    console.log("message: " + this.message)
}
})
