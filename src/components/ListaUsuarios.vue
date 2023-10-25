<template>
  <h4>Puntajes</h4>
  <div class="d-flex justify-content-between">
    <span>{{ appState.username }}</span>
    <span>{{ appState.puntaje }} Puntos </span>
  </div>
  
  <ProgressBar v-if="props.mostrarBarra"></ProgressBar>
</template>

<script setup>

import { appStateStore } from '../stores/appState'
import ProgressBar from './ProgressBar.vue';
const appState = appStateStore()
const props = defineProps({
  mostrarBarra: {
    type: Boolean,
    required: false
  }})

</script>
