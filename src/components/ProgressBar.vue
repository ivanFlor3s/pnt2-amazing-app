<template>
  <div class="progress">
    <div
      class="progress-bar"
      role="progressbar"
      :style="{ width: porcentaje + '%' }"
      aria-valuenow="0"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  puntaje: {
    type: Number,
    required: true
  }})
  
const porcentaje = computed(() => {
  return (props.puntaje * 100) / 20
})


</script>
