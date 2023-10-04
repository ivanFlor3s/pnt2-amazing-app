<template>
  <div
    class="card nasa-image" 
    :style="{ background: 'no-repeat center/cover url(' + imagen + ')', minHeight: '100vh'}"

  >
    <div class="card-body text-white">
      <h1>{{ titulo }}</h1>
      <p>Fecha de foto tomada: {{ fecha }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
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
  }
})
</script>

<style>
.nasa-image{
   max-width: 50%;
}
</style>