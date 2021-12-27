import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false

/* var componente1 = Vue.extend({
   template: '<h1>Olá - Introdução a componentes</h1>'
}) */

var componente2 = Vue.extend({
   template: '<h3>Lista de Frameworks</h3>'
})

var componente3 = Vue.extend({
   template: '<ul><li>Vue.js</li><li>Angular</li><li>ReactJs</li></ul>'
})


Vue.component('componente-saludo', {
    data() {
       return {
          titulo: 'Olá - Introdução Componentes'
       }
    },
    methods: {
       display() {
          console.log('Olá');
       }
    }
})
Vue.component('componente-titulo', componente2)
Vue.component('componente-lista', componente3)


new Vue({
  el: '#app'
  
})
