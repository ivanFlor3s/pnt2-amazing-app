<script setup>
import ImagenNasa from '../components/ImagenNasa.vue'
import ListaUsuarios from '../components/ListaUsuarios.vue'
import { fetchImagesFromNasa } from '../utils/nasa-fetch'
import { ref } from 'vue'
import { socket } from '../utils/socket'
import { appStore } from '../stores/app.store'
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()



const app = appStore()
socket.emit('join server', app.fullName)

const imagen = ref(null)
const imagen2 = ref(null)

const mostrarFechaImg1 = ref(false)
const mostrarFechaImg2 = ref(false)

fetchImagesFromNasa().then((data) => {
  imagen.value = data[0]
  imagen2.value = data[1]
})

function evaluarSeleccion(opcion) {
  const fechaDeImagenSeleccionada = opcion == 0 ? imagen.value.date : imagen2.value.date
  const fechaImagenNoSeleccionada = opcion == 0 ? imagen2.value.date : imagen.value.date
  let gano = false

  gano = Date.parse(fechaDeImagenSeleccionada) < Date.parse(fechaImagenNoSeleccionada)

  if (gano) {
    socket.emit('nuevoPunto', socket.id)

    jsConfetti.addConfetti({
      emojis: ['🎉', '🎊', '👍'],
    })
  }
  else {
    jsConfetti.addConfetti({
      emojis: ['😢', '😭', '👎'],
    })
  }
  cambiarImagen(opcion == 0 ? 1 : 0)
}

function cambiarImagen(opcionACambiar) {
  fetchImagesFromNasa().then((data) => {
    if (opcionACambiar == 0) {
      imagen.value = data[0]
      mostrarFechaImg2.value = true
      mostrarFechaImg1.value = false
    } else {
      imagen2.value = data[0]
      mostrarFechaImg2.value = false
      mostrarFechaImg1.value = true
    }
  })
}
</script>
<template>
  <div class="d-flex w-100 position-relative">
    <ImagenNasa
      class="flex-fill"
      v-if="imagen !== null"
      :titulo="imagen.title"
      :fecha="imagen.date"
      :imagen="imagen.url"
      :mostrar-fecha="mostrarFechaImg1"
      @seleccionado="evaluarSeleccion(0)"
    ></ImagenNasa>
    <ImagenNasa
      class="flex-fill"
      v-if="imagen2 !== null"
      :titulo="imagen2.title"
      :fecha="imagen2.date"
      :imagen="imagen2.url"
      :mostrar-fecha="mostrarFechaImg2"
      @seleccionado="evaluarSeleccion(1)"
    ></ImagenNasa>
    <div class="componenteUser bg-text text-white" style="width: 300px">
    <ListaUsuarios :mostrar-barra="true"> </ListaUsuarios>
  </div>
  </div>

  
</template>
<style scoped>
.componenteUser {
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 15px;
  width: 300px;
  max-height: 250px;
  overflow: auto;
}
</style>
