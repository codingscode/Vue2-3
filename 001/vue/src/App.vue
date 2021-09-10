<template>
   <div id="app" >
      A carteira está {{estaAtivo === 'ativado' ? 'ativa' : 'desativada' }}     
   </div>

</template>

<script>
/*


*/


export default {
   name: 'App',
   data() {
      return {
         estaAtivo: 'ativado'
         
      }
   },
   computed: {

      
   },
   methods: {
     
   },
   components: {
     
   }


}
</script>

<style>


</style>
