<template>
   <div id="app" >
     {{ 'olá Vue' | capitalize }}
      
   </div>

</template>

<script>
/*
Vue.filter('capitalize', function(string) {
   var [primeiroCaract, ...restoCaract] = string
   return primeiroCaract.toUpperCase() + restoCaract.join('')
})
*/

export default {
   name: 'App',
   data() {
      return {
         
      }
   },
   methods: {
      
      
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
