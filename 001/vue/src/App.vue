<template>
   <div id="app" >
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
         return 'olá mundo com methods'
      }
   },
   components: {
     
   }


}
</script>

<style>


</style>
