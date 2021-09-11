<template>
   <div>
      <div >
          Outro componente
      </div>
      <div class="classe" :style="{color: cor, background: fundo, disable: desabilitado}" >
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
   .classe {
       background: none;
       color: black;
       border: none;
       border-radius: 5px;
       padding: 10px 40px;
       font-size: 16px;
       cursor: pointer;
              
   }

   .classe:hover {
      filter: brightness(125%);
   }

   
</style>
