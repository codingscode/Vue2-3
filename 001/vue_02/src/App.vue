<template>
   <div>
      Vue 3 <br>
      <Entrada nome="Usuario" :regras="{ requerido: true, min: 5 }" :valor="usuarionome.valor" 
               @update="atualizar" />
      <Entrada nome="Senha" :regras="{ requerido: true, min: 10 }" :valor="senha.valor" />
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
        valido: true,
        usuarionome: {
           valor: 'sdfs', valido: false
        },
        senha: {
           valor: '', valido: false
        }
     }
  },
  methods: {
     atualizar(valor) {
        console.log(valor)
     }
  }

}
</script>

<style  >

body {
   font-family: arial;

}

</style>
