import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import {request} from './network/request'
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


request({
  url:'/home/multidata/'
},res => {
  console.log(res)
},err => {
  console.log(err)
})