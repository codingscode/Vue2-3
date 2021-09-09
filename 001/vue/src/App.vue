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
            <tr v-for="(cada, i) in represasPorEletricidade" :key="i" >
               <td >{{ cada.nome }}</td>
               <td >{{ cada.pais }}</td>
               <td >{{ cada.eletricidade }} MegaWatts </td>
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
         represas: [
            {nome: 'Represa Nurek', pais: 'Tajikistão', eletricidade: 32000},
            {nome: 'Represa Tres gargantas', pais: 'China', eletricidade: 22500},
            {nome: 'Represa Tarbela', pais: 'Paquistão', eletricidade: 3500},
            {nome: 'Represa Guri', pais: 'Venezuela', eletricidade: 10200}                                    
         ] 
      }
   },
   computed: {
      represasPorEletricidade() {
         return [...this.represas].sort((a, b) => b.eletricidade - a.eletricidade)  // só funciona com a cópia
      }
   },
   methods: {
     
   },
   components: {
     
   }


}
</script>

<style>


</style>
