<template>
   <div>
      Vue 3
      <Outro />
      <outro cor="white" fundo="green" desabilitado="true" />
   </div>
</template>

<script>

import Outro from './components/Outro.vue'

export default {
  name: 'App',
  components: {
     Outro  
  }

}
</script>

<style  >
#app {
  
}
</style>
