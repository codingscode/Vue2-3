import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('capitalize', function(string) {
   var [primeiroCaract, ...restoCaract] = string
   return primeiroCaract.toUpperCase() + restoCaract.join('')
})


new Vue({
   render: h => h(App),
}).$mount('#app')
