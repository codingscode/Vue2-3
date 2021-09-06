<template>
   <div id="app" >
      <h1>{{ titulo }}</h1>
      {{ mostrarTitulo() }}
   </div>

</template>

<script>


export default {
   name: 'App',
   data() {
      return {
         titulo: 'olá mundo com vue'
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
