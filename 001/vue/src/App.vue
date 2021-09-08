<template>
   <div id="app" >
      <h1 v-once >
         {{ titulo }}
      </h1>
      <p>
         {{mostrarTitulo()}}
      </p>
      <p v-html="vinculoHTML" ></p>
      <input type="text" ><button v-on:click="aumentarContador" >Somar +1</button>
      <p>{{ contador }}</p>
   </div>

</template>

<script>


export default {
   name: 'App',
   data() {
      return {
         titulo: 'olá mundo com vue',
         vinculoHTML: '<a href="https://codigoonclick.com" >Código OnClick</a>',
         contador: 1
      }
   },
   methods: {
      mostrarTitulo() {
         this.titulo = 'olá deste methods'
         return this.titulo
      },
      aumentarContador() {
         this.contador++
      }
   },
   computed: {
      
   }
   ,
   components: {
     
   }


}
</script>

<style>


</style>
