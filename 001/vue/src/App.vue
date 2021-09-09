<template>
   <div id="app" >
      <table>
         <thead>
            <tr>
               <th>Nome</th>
               <th>País</th>
               <th>Eletricidade</th>                              
            </tr>
         </thead>
         <tbody>
         
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
         represa: [
            {nome: 'Represa Nurek', pais: 'Tajikistão', eletricidade: 32000},
            {nome: 'Tres gargantas', pais: 'China', eletricidade: 22500},
            {nome: 'Represa Tarbela', pais: 'Paquistão', eletricidade: 3500},
            {nome: 'Represa Guri', pais: 'Venezuela', eletricidade: 10200}                                    
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
