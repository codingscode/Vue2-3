<template>
   <div>
      <button class="classe" :style="{color: cor, background: fundo}" :disabled="desabilitado" >
          botão
      </button>
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
         type: Boolean
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

   .classe:disabled {
      opacity: 0.5;
      border: solid 3px purple;
   }
   
</style>
