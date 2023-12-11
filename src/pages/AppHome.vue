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
          <h5>Salas</h5>
          <div class="table-responsive">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Jugadores</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Sala 1</td>
                  <td>3</td>
                  <td>
                    <button class="btn btn-primary" @click="play">Jugar</button>
                  </td>
                </tr>
              </tbody>
            </table>
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
import router from '@/router';

function play(){
  router.push('/game');
}
</script>