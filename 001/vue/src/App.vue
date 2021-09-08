<template>
   <div id="app" >
      <h1 v-once >
         {{ titulo }}
      </h1>
      <p>
         {{mostrarTitulo()}}
      </p>
      <p v-html="vinculoHTML" ></p>
      <input type="text" v-model="contadorInicial" @keyup.enter="setarContador" >
      <button @click="aumentarContador(2)" >Somar +2</button>
      <p>{{ contador }}</p>
      <p @mousemove="atualizarValores" class="aqui" >
         Valor de X: {{ x }}<br>
         Valor de Y: {{ y }}
      </p>
   </div>

</template>

<script>


export default {
   name: 'App',
   data() {
      return {
         titulo: 'olá mundo com vue',
         vinculoHTML: '<a href="https://codigoonclick.com" >Código OnClick</a>',
         contador: 1,
         contadorInicial: 0,
         x: 0,
         y: 0
      }
   },
   methods: {
      mostrarTitulo() {
         this.titulo = 'olá deste methods'
         return this.titulo
      },
      aumentarContador(valor) {
         this.contador += valor
      },
      setarContador() {
         this.contador = this.contadorInicial
      },
      atualizarValores() {
         this.x = event.clientX
         this.y = event.clientY
      }
   },
   computed: {
      
   }
   ,
   components: {
     
   }


}
</script>

<style>
#app {
   border: 3px solid lightblue;
}

.aqui {
   border: 3px solid lightgreen;
}

</style>
