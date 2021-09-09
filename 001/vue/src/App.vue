<template>
   <div id="app" >
     {{ 'olá vue' | capitalize }}
      
   </div>

</template>

<script>
/*
Vue.filter('capitalize', function(string) {
   var primeiroCaract = string.charAt(0).toUpperCase()
   var restoCaract = string.slice(1, string.length)
   return primeiroCaract + restoCaract
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
