<template>
  <div class="space">
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
  </div>
</template>

<style lang="scss" >

$spacing: 2560px;
$time01: 60s;
$time02: 120s;
$time03: 180s;
$time04: 400s;

@function particles($max) {
  $val: 0 0 white;
  @for $i from 1 through $max {
    $val: #{$val}, random($spacing)+px random($spacing)+px white;
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
