<template>
  <div class="space position-relative">
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>

    <div class="bg-dark card bg-opacity-75 position-absolute start-50 top-50 translate-middle">
      <div class="card-body text-white">
        <div class="card-title">
          <h3>Home</h3>
          <p>Selecciona la opcion para jugar</p>
        </div>
        <div>
          <div class="card w-100">
            <div class="card-body">
              <div class="card-title">
                <h5>Juegos pendientes</h5>
              </div>
              <div v-if="currentGame" class="border border-1 p-3 mb-3">
                <p>Nombre: {{ currentGame.name }}</p>
                <div class="d-flex justify-content-between">
                  <div class="">
                    <p>
                      Users:
                      <UserLabel></UserLabel>
                    </p>
                    <p>Estado: <span class="badge bg-primary">En curso</span></p>
                  </div>
                  <div class="">
                    <button @click="enterGame" class="ms-auto btn h-100 btn-outline-success fs-3">
                      <i class="fas fa-play"></i>
                      Unirse
                    </button>
                  </div>
                </div>
              </div>
              <!-- <div v-else class="d-flex gap-3 justify-content-end"> -->
              <div class="d-flex gap-3 justify-content-end">
                <button class="btn btn-primary" @click="refreshCurrentGame">Refrescar</button>
                <button class="btn btn-success" @click="openNewGameModal">Crear nuevo juego</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$spacing: 2560px;
$time01: 60s;
$time02: 120s;
$time03: 180s;
$time04: 400s;

@function particles($max) {
  $val: 0 0 white;
  @for $i from 1 through $max {
    $val:
      #{$val},
      random($spacing) + px random($spacing) + px white;
  }
  @return $val;
}
@mixin particles($max) {
  box-shadow: particles($max);
}
@keyframes particles {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY($spacing * -1);
  }
}
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.space {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: black;
}
.particle,
.particle::after {
  background: transparent;
}
.particle::after {
  position: absolute;
  content: '';
  top: $spacing;
}
.particle {
  &:nth-child(1) {
    &,
    &::after {
      @include particles(600);
      width: 1px;
      height: 1px;
    }
    animation: particles $time01 linear infinite;
  }
  &:nth-child(2) {
    &,
    &::after {
      @include particles(200);
      width: 2px;
      height: 2px;
    }
    animation: particles $time02 linear infinite;
  }
  &:nth-child(3) {
    &,
    &::after {
      @include particles(100);
      width: 3px;
      height: 3px;
    }
    animation: particles $time03 linear infinite;
  }
  &:nth-child(4) {
    &,
    &::after {
      @include particles(400);
      width: 2px;
      height: 2px;
    }
    animation: particles $time04 linear infinite;
  }
}
</style>

<script setup>
import router from '@/router'
import Swal from 'sweetalert2'
import { createGame, getCurrentGame } from '../utils/proxy.js'
import UserLabel from '../components/home/UserLabel.vue'
import { ref } from 'vue'

let currentGame = ref(null)
refreshCurrentGame()

function refreshCurrentGame() {
  getCurrentGame().then((game) => {
    currentGame.value = game.data
  })
}

function enterGame() {
  console.log('enter game')
  router.push('game')
}

function openNewGameModal() {
  Swal.fire({
    title: 'Crear nuevo juego',
    html: `
      <input id="name" class="swal2-input" placeholder="Nombre del juego">
      <input type="number" id="maxScore" class="swal2-input" placeholder="Puntaje maximo">
    `,
    focusConfirm: false,
    preConfirm: () => {
      const name = Swal.getPopup().querySelector('#name').value
      const maxScore = Swal.getPopup().querySelector('#maxScore').value
      if (!name || !maxScore) {
        Swal.showValidationMessage(`Ingrese todos los campos`)
      }
      return { name, maxScore }
    }
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const gameCreated = await createGame(result.value.name, result.value.maxScore)
        currentGame.value = gameCreated.data
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ya existe un juego en curso'
        })
        refreshCurrentGame()
      }
    }
  })
}
</script>
