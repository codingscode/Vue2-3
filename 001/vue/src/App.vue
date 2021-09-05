<template>
   <div id="app">
      <h1>{{entrada}}</h1>
      <input type="text" v-model="entrada" ><br>
      <a :href="url" >Ir ao site</a>
      <pre>{{ $data}}</pre>
   </div>

   
</template>

<script>


export default {
   name: 'App',
   data() {
      return {
         entrada: 'olá',
         url: 'https://codigoonclick.com'
      }
   },
   components: {
     
   }


}
</script>

<style>


</style>
