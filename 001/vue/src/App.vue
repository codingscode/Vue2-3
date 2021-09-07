<template>
   <div id="app" >
      <div v-if="eMadrugada" >
         Oi, é de madrugada.
      </div>
      <div >{{(new Date('4 January 02:50')).getHours()}}</div>
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
         return (new Date('4 Jaaaanuary 04:50')).getHours() < 6  // erro
      }
   }
   ,
   components: {
     
   }


}
</script>

<style>


</style>
