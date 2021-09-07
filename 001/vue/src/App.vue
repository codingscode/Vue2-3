<template>
   <div id="app" >
      <div v-show="eMadrugada" >
         Oi, é de madrugada.
      </div>
   </div>

</template>

<script>


export default {
   name: 'App',
   data() {
      return {
         eMadrugada: true
      }
   },
   methods: {
      
   },
   components: {
     
   }


}
</script>

<style>


</style>
