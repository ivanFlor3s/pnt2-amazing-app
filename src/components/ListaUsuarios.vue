<template>
  <h4>Puntajes</h4>
  <div class="d-flex flex-column gap-2" >
    <div v-for="player in game.users" :key="player.id">
      <div class="d-flex justify-content-between">
        <div class="mb-2">
          <span class="me-2">{{ player.userName }}</span>
          <span v-if="esMiUsuario(player)" class=" badge bg-secondary">Tu</span>
        </div>
  
        <span>{{ player.puntaje }} Puntos </span>
      </div>
      
      <ProgressBar :puntaje="player.puntaje" v-if="props.mostrarBarra"></ProgressBar>
    </div>
  </div>
</template>

<script setup>

import { gameStore } from '../stores/game-state'
import { socket } from '../utils/socket';
import ProgressBar from './ProgressBar.vue';

const game = gameStore()

const props = defineProps({
  mostrarBarra: {
    type: Boolean,
    required: false
  }})

  const esMiUsuario = (player) =>{
    console.log('player', player)
    return player?.id === socket.id
  }

</script>
