<template>
  <div id="app">
     <h3>{{ titulo }}</h3>
     <div class="form" >
        <div class="form-group" >
           <label  >Título</label>
           <input class="form-control" type="text" v-model="nota.titulo" >
        </div>
        <div class="form-group" >
           <label  >Texto</label>
           <textarea class="form-control" v-model="nota.texto" ></textarea>
        </div>
       <button class="btn btn-primary mt-2" @click="adicionarNota" >Enviar</button>

     </div>
     <div class="col-sm-12" >
        <div class="col-sm-4 nota" v-for="(cada, i) in notas" :key="i" >
           <div class="card" >
             <div class="card-block" >
                <div class="card-title" >
                   {{ cada.titulo }}
                </div>
                <div class="card-subtitle mb-2 text-muted" >{{ cada.encontro }}</div>
                <div class="card-text" >{{ cada.texto }}</div>    
             </div>   
           </div>
        </div>
     </div>
  </div>  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
       titulo: 'Gestão de notas',
       nota: { titulo: '', texto: '' },
       notas: [
          { titulo: 'ir ao cinema', texto: 'examinar filmes de estreia', encontro: new Date(Date.now()).toLocaleString() }
       ]
    }
  },
  methods:{
     adicionarNota() {
        let { texto, titulo } = this.nota
        this.notas.push({ texto, titulo, encontro: new Date(Date.now()).toLocaleString() })
     }
  }
}
</script>

<style>
  
   .form {
      text-align: left;
   }
  
   .card {
      text-align: left;
      border: 1px solid #2c3e50;
      border-radius: 4px;
      padding-left: 8px;
      padding-right: 8px; 
   }
   
   .nota {
      padding: 5px;
   }
   
   
  
</style>
