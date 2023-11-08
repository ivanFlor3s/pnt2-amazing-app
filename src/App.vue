<template>
  <router-view></router-view>
</template>

<style scoped></style>
<script setup>
import router from '@/router'
import { socket } from './utils/socket'
import { gameStore } from './stores/game-state'

router.push('login')

const game = gameStore()

socket.on('new user', (params) => {
//   console.log('params cuando new user', params)
  game.setUsers(params.users)
})
//  state.totalConnecions = params.total

socket.on('user disconnected', (users) => {
//   console.log('params cuando user disconnected', users)
  game.setUsers(users)
})

socket.on('actualizar puntos', (users)=> {
   game.setUsers(users)
})

</script>
