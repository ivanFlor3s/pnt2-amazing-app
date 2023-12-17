<template>
  <router-view></router-view>
</template>

<style scoped></style>
<script setup>
import router from '@/router'
import { socket } from './utils/socket'
import { gameStore } from './stores/game-state'
import { appStore } from './stores/app.store';


const game = gameStore()
const app = appStore()

app.setUserFromSessionStorage()

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

socket.on('ganador', (users)=> {
  const isInGame = router.currentRoute.path.includes('game')
  if(isInGame){
    router.push('result')
    game.setUsers(users)
  }
})


socket.on('ir a game', () => {
  router.push('game')
})

socket.emit('userEnterApp'); 
</script>
