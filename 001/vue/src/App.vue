<template>
   <ul>
      <li v-for="(cada, indice) in 5" :key="indice" >{{ 6 - cada }}</li>
   </ul>

</template>

<script>


export default {
   name: 'App',
   data() {
      return {
         contador: 7
      }
   },
   components: {
     
   }


}
</script>

<style>


</style>
