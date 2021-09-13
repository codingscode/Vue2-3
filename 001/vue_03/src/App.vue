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
  </div>  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
       titulo: 'Gestão de notas',
       nota: { titulo: '', texto: '' }
    }
  },
  methods:{
   
  }
}
</script>

<style>
  
   .form {
      text-align: left;
   }
  
</style>
