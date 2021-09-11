<template>
   <div class="entrada-envolvedor" >
      <div class="label" >
         <label :for="nome" >{{ nome }}</label>
         <div class="erro" >Erro</div>
      </div>
      <input :id="nome" type="text"  />
   </div>
   
</template>

<script>


export default {
   name: 'Entrada',
   props: {
      nome: { type: String, required: true },
      regras: { type: Object }
   }
}
</script>

<style scoped >
   .entrada-envolvedor {
      display: flex;
      flex-direction: column;
   }

   .label {
      display: flex;
      color: red;
      justify-content: space-between;
   }
   
   input {
      background: none;
      color: black;
      border: 1px solid silver;
      border-radius: 5px;
      padding: 10px;
      font-size: 16px;
      margin: 5px 0;
   }
   
</style>
