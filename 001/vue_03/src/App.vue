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

     </div>
     <button class="btn btn-primary" @click="adicionarNota" >Enviar</button>
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
          { titulo: 'ir ao cinema', texto: 'examinar filmes de estreia', encontro: new Date(Date.now()).toLocaleDateString() }
       ]
    }
  },
  methods:{
     adicionarNota() {
        let { texto, titulo } = this.nota
        this.notas.push({ texto, titulo, fecha: new Date(Date.now()).toLocaleString() })
     }
  }
}
</script>

<style>
  
   .form {
      text-align: left;
   }
  
</style>
