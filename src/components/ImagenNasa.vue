<template>
  <div
    class="nasa-image" 
    :style="{ background: 'no-repeat center/cover url(' + imagen + ')', minHeight: '100vh'}"

  >
    <div class="p-3 text-white">
      <div class="d-flex flex-column justify-content-between h-100">
        <article class="p-2 rounded bg-text text-balance">
          <h1>{{ titulo }}</h1>
          <p>Fecha de foto tomada: {{ fecha }}</p>
        </article>
        <section class="mt-3">
          <button class="btn btn-primary">Opcion</button>
        </section>
      </div>
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
.bg-text{
  background-color: rgba(0,0,0,0.3);
}
</style>