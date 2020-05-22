// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/base/style/index.css'
import 'lib-flexible'

import About from '@/components/about.vue'
import Project from '@/components/demo.vue'
import More from '@/components/more.vue'
import Home from '@/components/home.vue'
Vue.component("About", About);
Vue.component("Project", Project);
Vue.component("More", More);
Vue.component("Home", Home);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
