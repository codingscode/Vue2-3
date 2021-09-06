<template>
   <ul>
      <li v-for="(cada, i) in animais" :key="i" >
         O {{cada}} faz {{sons[i]}}
      </li>
   </ul>

</template>

<script>


export default {
   name: 'App',
   data() {
      return {
         animais: ['cachorro', 'gato', 'passaro'],
         sons: ['au au', 'miau', 'bentivi']
      }
   },
   components: {
     
   }


}
</script>

<style>


</style>
