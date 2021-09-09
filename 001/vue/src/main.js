import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.config.productionTip = false



Vue.filter('inicio', function(data) {
   return moment(data).format('LL')
})


new Vue({
   render: h => h(App),
}).$mount('#app')
