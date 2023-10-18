<template>
  <div class="progress">
    <div
      class="progress-bar"
      role="progressbar"
      :style="{ width: appState.porcentajePuntaje + '%' }"
      aria-valuenow="0"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</template>

<script setup>
import { appStateStore } from '../stores/appState'

const appState = appStateStore()
</script>
