<template>
   <div class="entrada-envolvedor" >
      <div class="label" >
         <label :for="nome" >{{ nome }}</label>
         <div class="erro" >{{ erro }}</div>
      </div>
      <input :id="nome" type="text" :valor="valor" @input="entrada" />
   </div>
   
</template>

<script>


export default {
   name: 'Entrada',
   props: {
      nome: { type: String, required: true },
      regras: { type: Object },
      valor: { type: String }
   },
   computed: {
      erro() {
         if (this.regras.requerido && !this.valor) {
            return 'Requerido'
         }
         
         if (this.regras.min && this.valor.length < this.regras.min ) {
            return `Deve entrar com no mínimo ${this.regras.min}`
         }
         
         return ''
      }
   },
   methods: {
      entrada($evento) {
         this.$emit('update', { valor: $evento.target.value, nome: this.nome })
      }
   }
}
</script>

<style scoped >
   .entrada-envolvedor {
      display: flex;
      flex-direction: column;
   }

   .erro {
      color: red;
   }

   .label {
      display: flex;
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
