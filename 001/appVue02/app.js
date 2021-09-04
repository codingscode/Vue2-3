
Vue.createApp({
   data() {
      return {
         tarefas: [],
         valor: ''
      }
   },
   methods: {
      adicionarTarefa() {
         this.tarefas.push(this.valor)
         this.valor = ''
      }
   }

}).mount('#app')



