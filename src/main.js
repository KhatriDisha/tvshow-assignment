import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'

Vue.prototype.$http = axios

export const eventBus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
