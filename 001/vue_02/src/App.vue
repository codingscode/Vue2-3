<template>
   <div>
      Vue 3
      <Outro />
      <outro cor="white" fundo="green" :desabilitado="!valido" />
   </div>
</template>

<script>

import Outro from './components/Outro.vue'

export default {
  name: 'App',
  components: {
     Outro  
  },
  data() {
     return {
        valido: true
     }
  }

}
</script>

<style  >


</style>
