// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入组件
import SignIn from './components/signin.vue'
//import router from './router'

//Vue.config.productionTip = false
 //注册组件
 Vue.component('signinVue',SignIn);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  
  components: { App },
  template: '<App/>'
})
