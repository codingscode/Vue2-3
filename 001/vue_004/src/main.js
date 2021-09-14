import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.component('saludo', {
   template: '<h1>Olá - Introdução a componentes</h1>'
})

new Vue({
  el: '#app'
  
})
