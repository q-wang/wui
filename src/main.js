// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'

import iView from 'iview'
import store from './store/store'
import i18n from './locale'
import './assets/css/cover.less'
import './assets/css/common.less'
import './assets/css/layout.less'
import VueQriously from 'vue-qriously'
import VueQrcodeReader from 'vue-qrcode-reader'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueQrcodeReader)
Vue.use(VueQriously)
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
