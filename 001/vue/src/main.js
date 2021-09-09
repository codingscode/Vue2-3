import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var accounting = require("accounting")

Vue.filter('moeda', function(valor) {
   return accounting.formatMoney(valor)
})


new Vue({
   render: h => h(App),
}).$mount('#app')
