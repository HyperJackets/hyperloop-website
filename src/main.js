// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueMaterial from 'vue-material'
import './assets/theme.scss'
import 'vue-material/dist/theme/default-dark.css' // This line here
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage)
Vue.use(VueMaterial)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
    template: '<App/>',
    data: {
        options: {
            navigation: true,
            showActiveTooltip: true,
        anchors: ['page1', 'page2', 'page3'],
        }
    }
})
