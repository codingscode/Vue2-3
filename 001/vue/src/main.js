import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('capitalize', function(string) {
   var primeiroCaract = string.charAt(0).toUpperCase()
   var restoCaract = string.slice(1, string.length)
   return primeiroCaract + restoCaract
})


new Vue({
   render: h => h(App),
}).$mount('#app')
