<template>
   <div id="app" >
      {{contador}}
   </div>

</template>

<script>
/*

*/


export default {
   name: 'App',
   data() {
      return {
         contador: 0
         
      }
   },
   watch: {
      estaAtivo:function() {
         console.log('troca do valor de estado')
      }
   },
   computed: {

      
   },
   methods: {
       aumentar() {
          this.contador += 1
       }
   },
   components: {
     
   }


}
</script>

<style>


</style>
