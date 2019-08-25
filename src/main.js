import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueMsg from '../plugins/index'
Vue.config.productionTip = false

// 注册组件
Vue.use(vueMsg);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
