<template>
  <h4>Puntajes</h4>
  <div class="d-flex justify-content-between">
    <span>{{ appState.username }}</span>
    <span>{{ appState.puntaje }} Puntos </span>
  </div>
</template>

<script setup>
import { appStateStore } from '../stores/appState'

const appState = appStateStore()
</script>
