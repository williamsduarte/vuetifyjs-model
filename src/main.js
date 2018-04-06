// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@/styles/global.css'

// window._ = require('lodash');
try {
  window.$ = window.jQuery = require('jquery')
} catch (e) {}

window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

Vue.use(Vuetify, { theme: {
  primary: '#3949AB',
  secondary: '#5C6BC0',
  accent: '#9c27b0',
  error: '#f44336',
  warning: '#FFC107',
  info: '#2196f3',
  success: '#4caf50'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
