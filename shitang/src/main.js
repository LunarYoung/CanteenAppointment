import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import  'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'

import './assets/css/global.css'

//注册自定义组件
import my_menu from "./components/my_menu.vue"
Vue.component("my_menu",my_menu)


import axios from "axios";


axios.defaults.baseURL="http://127.0.0.1:80"
Vue.prototype.$http=axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
