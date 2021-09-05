<template>
   <div id="app">
      <form action="" >
         <input type="text" v-model="entrada" ><br>
         <input type="checkbox" value="opcao-1" v-model="opcoes" >Opção 1
         <input type="checkbox" value="opcao-2" v-model="opcoes" >Opção 2
         <input type="checkbox" value="opcao-3" v-model="opcoes" >Opção 3         
         <p>Você selecionou {{opcoes.join(', ')}}</p>
      </form>
   </div>

   
</template>

<script>


export default {
   name: 'App',
   data() {
      return {
         entrada: 'olá',
         opcoes: []
      }
   },
   components: {
     
   }


}
</script>

<style>


</style>
