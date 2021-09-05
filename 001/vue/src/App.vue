<template>
   <div id="app">
      <h1>{{entrada}}</h1>
      <input type="text" v-model="entrada" >
     
   </div>

   
</template>

<script>


export default {
   name: 'App',
   data() {
      return {
         entrada: 'olá'
      }
   },
   components: {
     
   }


}
</script>

<style>


</style>
