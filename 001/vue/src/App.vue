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
         //eMadrugada: true
      }
   },
   methods: {
      
   },
   computed: {
      eMadrugada() {
         return new Date().getHours() < 21
      }
   }
   ,
   components: {
     
   }


}
</script>

<style>


</style>
