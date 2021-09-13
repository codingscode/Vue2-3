<template>
   <div>
      Vue 3 <br>
      <Entrada nome="Usuario" :regras="{ requerido: true, min: 5 }" :valor="usuario.valor" 
               @update="atualizar" />
      <Entrada nome="Senha" :regras="{ requerido: true, min: 10 }" :valor="senha.valor"
               @update="atualizar" />
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
        usuario: {
           valor: '', valido: false
        },
        senha: {
           valor: '', valido: false
        }
     }
  },
  computed: {
     valido() {
        return this.usuario.valido && this.senha.valido
     }
  },
  methods: {
     atualizar(payload) {
        console.log(payload)
        this[payload.nome.toLowerCase()] = { valor: payload.valor, valido: payload.valido }
     }
  }

}
</script>

<style  >

body {
   font-family: arial;

}

</style>
