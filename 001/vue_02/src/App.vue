<template>
   <div>
      Vue 3 <br>
      <Entrada nome="Usuario" :regras="{ requerido: true, min: 5 }" />
      <Entrada nome="Senha" :regras="{ requerido: true, min: 10 }" />
      <Outro cor="white" fundo="green" :desabilitado="!valido" />
   </div>
</template>

<script>

import Outro from './components/Outro.vue'
import Entrada from './components/Entrada.vue'

export default {
  name: 'App',
  components: {
     Outro, Entrada  
  },
  data() {
     return {
        valido: true
     }
  }

}
</script>

<style  >

body {
   font-family: arial;

}

</style>
