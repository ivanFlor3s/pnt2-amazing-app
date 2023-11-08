<template>
  <div
    class="nasa-image" 
    :style="{ background: 'no-repeat center/cover url(' + props.imagen + ')', minHeight: '100vh'}"

  >
    <div class="p-3 text-white">
      <div class="d-flex flex-column justify-content-between h-100">
        <article class="p-2 rounded bg-text text-balance">
          <h1>{{ props.titulo }}</h1>
          <p v-if="mostrarFecha">Fecha de foto tomada: {{ props.fecha }}</p>
        </article>
        <section class="mt-3">
          <button class="btn btn-primary" @click="selectOption()">Opcion</button>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  imagen: {
    type: String,
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
  fecha: {
    type: String,
    required: true
  },    
  descripcion: {
    type: String,
    required: true
  },
  mostrarBoton: {
    type: Boolean,
    default: false
  },
  mostrarFecha: {
    type: Boolean,
    default: false
  }
})


const emit = defineEmits(['seleccionado'])
const selectOption = () => {
    emit("seleccionado")
}

</script>

<style>
.nasa-image{
   max-width: 50%;
}

</style>