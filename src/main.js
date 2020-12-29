import Vue from 'vue'
import App from './App.vue'
import BoostrapVue from "bootstrap-vue"
import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false
Vue.use(BoostrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
