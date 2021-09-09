<template>
   <div id="app" >
      A revolução francesa foi em: {{ inicioRevFranc | inicio }}      
   </div>

</template>

<script>
/*
Vue.filter('inicio', function(data) {
   return moment(data).format('LL')
})

*/

export default {
   name: 'App',
   data() {
      return {
         inicioRevFranc: '1789-05-05'
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
