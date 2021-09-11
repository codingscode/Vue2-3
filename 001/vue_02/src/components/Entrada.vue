<template>
   <div>
      <label :for="nome" >{{ nome }}</label>
      <input type="text"  />
   </div>
   
</template>

<script>


export default {
   name: 'Entrada',
   props: {
      nome: { type: String, required: true }
   }
}
</script>

<style scoped >
   div {
      display: flex;
      flex-direction: column;
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
