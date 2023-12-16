<template>
  <div class="d-inline">
    <span class="badge bg-black me-2" v-for="user in game.getUsers" :key="user.id" >
        <i class="fa-regular fa-user"></i>  
        {{ user.userName }}
    </span>
  </div>
</template>

<script setup>
import { gameStore } from '../../stores/game-state'

const game = gameStore();

</script>