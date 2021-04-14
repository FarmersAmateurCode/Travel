import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index.js'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import '../node_modules/swiper/dist/css/swiper.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

// 本段更新
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
