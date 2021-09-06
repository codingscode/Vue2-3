<template>
   <div id="app" >
      <h1 v-once >{{ titulo }}</h1>
      <p>
         {{ mostrarTitulo() }}
      </p>
      <p>{{vinculoHTML}}</p>
      
   </div>

</template>

<script>


export default {
   name: 'App',
   data() {
      return {
         titulo: 'olá mundo com vue',
         vinculoHTML: '<a href="https://codigoonclick.com" >Código OnClick</a>'
      }
   },
   methods: {
      mostrarTitulo() {
         this.titulo = 'olá mundo desse methods'
         return this.titulo
      }
   },
   components: {
     
   }


}
</script>

<style>


</style>
