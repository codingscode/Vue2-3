<template>
   <div id="app" >
      <input type="text" v-model="nome" >
      <input type="text" id="apelido" value="Snow" >
      <button v-on:click="guardarApelido" >Guardar apelido</button>
      <output > {{ computedNomeCompleto }} </output>
   </div>

</template>

<script>
/*


*/

let apelido = 'Snow'

export default {
   name: 'App',
   data() {
      return {
         nome: 'John'
      }
   },
   methods: {
      guardarApelido() {
         apelido = this.$el.querySelector('#apelido').value
            
      }
   },
   computed: {
      computedNomeCompleto() {
         return `${this.nome} ${apelido}`
      }
   }
   ,
   components: {
     
   }


}
</script>

<style>


</style>
