<template>
   <ul>
      <li v-for="(valor, propriedade) in animais" :key="propriedade" >
         O {{propriedade}} faz {{valor}}
      </li>
   </ul>

</template>

<script>


export default {
   name: 'App',
   data() {
      return {
         animais: {
            cachorro: 'au au', gato: 'miau', passaro: 'bentivi'
         }
      }
   },
   components: {
     
   }


}
</script>

<style>


</style>
