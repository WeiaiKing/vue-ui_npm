import Vue from 'vue'
import App from './App.vue'
import akButton from '../packages/Button.vue'

Vue.config.productionTip = false
Vue.use(akButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
