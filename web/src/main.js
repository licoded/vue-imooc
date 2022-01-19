import Vue from 'vue'
import App from './App.vue'
import router from 'router/index.js'
import store from './store/index.js'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// import base css
import 'assets/stylus/index.styl'
import 'assets/theme/index.styl'

// register custom base component
import Mooc from './register.js'
Vue.use(Mooc)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
