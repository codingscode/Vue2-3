<template>
   <div>
      <div class="classe" >
          Outro componente
      </div>
      <div :style="{color: cor, background: fundo, disable: desabilitado}" >
          mais conteudo
      </div>
   </div>

</template>

<script>


export default {
   name: 'Outro',
   props: {
      cor: {
         type: String
      },
      fundo: {
         type: String
      },
      desabilitado: {
         type: String
      }
   }
   
}

</script>

<style scope>
   div {
       border: solid 1px lightblue;
   }
</style>
