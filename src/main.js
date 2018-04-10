import Vue from 'vue'
import App from './App'
import router from './router'

require('@/styles/global.css')
require('@/bootstrap')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
