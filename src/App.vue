<script setup>
import ImagenNasa from './components/ImagenNasa.vue'
import { fetchImagesFromNasa } from './utils/nasa-fetch';
import { ref } from 'vue'

const imagen = ref(null)

fetchImagesFromNasa().then(data => {
   imagen.value = data[0];
})


</script>

<template>
  <div class="d-flex">
    <ImagenNasa v-if="imagen !== null" :titulo="imagen.title" :fecha="imagen.date" :imagen="imagen.url"></ImagenNasa>
  </div>
</template>

<style scoped>

</style>
