<script setup>
import ImagenNasa from '../components/ImagenNasa.vue'
import ListaUsuarios from '../components/ListaUsuarios.vue';
import { fetchImagesFromNasa } from '../utils/nasa-fetch'
import { ref } from 'vue'

const imagen = ref(null)
const imagen2 = ref(null)

fetchImagesFromNasa().then((data) => {
  imagen.value = data[0]
  imagen2.value = data[1]
})
</script>
<template>
     <div class="d-flex w-100">
    <ImagenNasa
      class="flex-fill"
      v-if="imagen !== null"
      :titulo="imagen.title"
      :fecha="imagen.date"
      :imagen="imagen.url"
      @imprimir="(mensaje)=>console.log(mensaje)"
    ></ImagenNasa>
    <ImagenNasa
      class="flex-fill"
      v-if="imagen2 !== null"
      :titulo="imagen2.title"
      :fecha="imagen2.date"
      :imagen="imagen2.url"
    ></ImagenNasa>
  </div>

  <div class="componenteUser bg-text text-white">
    <ListaUsuarios >
      
    </ListaUsuarios>
  </div>
</template>
<style scoped>
  .componenteUser{
    position: absolute;
    bottom: 20px;
    left: 20px;
    padding: 2px 7px;
  }
</style>

