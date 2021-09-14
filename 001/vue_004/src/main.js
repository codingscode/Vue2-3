import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.component('saludo', {
   template: '<h1>Olá - Introdução a componentes</h1>'
})

Vue.component('titulo', {
   template: '<h3>Lista de Frameworks</h3>'
})

Vue.component('lista-frameworks', {
   template: '<ul><li>Vue.js</li><li>Angular</li><li>ReactJs</li></ul>'
})

new Vue({
  el: '#app'
  
})
