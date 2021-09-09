<template>
   <div id="app" >
      <table>
         <thead>
            <tr>
               <th>Item</th>
               <th>Preço</th>               
            </tr>
         </thead>
         <tbody>
            <tr v-for="(cada, i) in inventario" :key="i" >
               <td>{{cada.nome}}</td>
               <td>{{cada.preco}}</td>              
            </tr>
         </tbody>
      </table>
      
   </div>

</template>

<script>
/*


*/

export default {
   name: 'App',
   data() {
      return {
         inventario: [
            {nome: 'Galaxy', preco: '250'},
            {nome: 'iPhone', preco: '450'},
            {nome: 'iPad', preco: '389.50'},
            {nome: 'Laptop Gamer', preco: '665.99'}                                    
         ]         
      }
   },
   methods: {
      
      
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
