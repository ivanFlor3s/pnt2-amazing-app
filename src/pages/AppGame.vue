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

function evaluarSeleccion(opcion){
  
  const fechaDeImagenSeleccionada = opcion == 0 ? imagen.value.date : imagen2.value.date
  const fechaImagenNoSeleccionada = opcion == 0 ? imagen2.value.date : imagen.value.date
  let gano = false
  console.log(fechaDeImagenSeleccionada, fechaImagenNoSeleccionada)
  gano = Date.parse(fechaDeImagenSeleccionada) < Date.parse(fechaImagenNoSeleccionada)
  if(gano){
    alert("ganaste!")
  }

}
</script>
<template>
     <div class="d-flex w-100">
    <ImagenNasa
      class="flex-fill"
      v-if="imagen !== null"
      :titulo="imagen.title"
      :fecha="imagen.date"
      :imagen="imagen.url"
      @seleccionado="evaluarSeleccion(0)"
    ></ImagenNasa>
    <ImagenNasa
      class="flex-fill"
      v-if="imagen2 !== null"
      :titulo="imagen2.title"
      :fecha="imagen2.date"
      :imagen="imagen2.url"
      @seleccionado="evaluarSeleccion(1)"
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

