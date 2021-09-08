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
      <button @click="aumentarContador" >Somar +1</button>
      <p>{{ contador }}</p>
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
         contadorInicial: 0
      }
   },
   methods: {
      mostrarTitulo() {
         this.titulo = 'olá deste methods'
         return this.titulo
      },
      aumentarContador() {
         this.contador++
      },
      setarContador() {
         this.contador = this.contadorInicial
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


</style>
