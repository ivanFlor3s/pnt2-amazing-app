<template>
  <h4>Puntajes</h4>

  <div v-for="player in game.users" :key="player.id">
    <div class="d-flex justify-content-between">
      <span>{{ player.userName }}</span>
      <span>{{ player.puntaje }} Puntos </span>
    </div>
    
    <ProgressBar :puntaje="player.puntaje" v-if="props.mostrarBarra"></ProgressBar>
  </div>
</template>

<script setup>

import { gameStore } from '../stores/game-state'
import ProgressBar from './ProgressBar.vue';
const game = gameStore()

const props = defineProps({
  mostrarBarra: {
    type: Boolean,
    required: false
  }})

</script>
