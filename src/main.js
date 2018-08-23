// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import './assets/theme.scss'


import VueFullPage from 'vue-fullpage.js'
import VueScrollReveal from 'vue-scroll-reveal'


Vue.use(VueMaterial)
Vue.use(VueFullPage)

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '30px',
  mobile: true
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
    template: '<App/>',
    data: {
        }
})


new fullpage('#fullpage', {
    anchors: ['page1', 'page2', 'page3'],
    sectionsColor: ['#1e2733', '#8E2DE2', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab'],
    autoScrolling: true,
    scrollBar: false,
    menu: '#menu',
    afterRender: function(){
        $('#fullpage .section').each(function(index, value) {
            var id = $(this).attr('id');
            if($(this).attr('data-anchor') != undefined){
                $(this).attr('id','fullpaged-' + id);
            }
        });
    }
})


