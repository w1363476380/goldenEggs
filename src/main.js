// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Eggs from './components/eggs/eggs.vue'
import Ipage from './components/invite/invite.vue'
import Rules from './components/rules.vue'


Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.component('rules',Rules)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { 
  	App,
		Eggs,
		Ipage,
  },  
})
