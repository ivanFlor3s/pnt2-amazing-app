<template>
  <div class="login-page">
    <div class="wallpaper-login">
      <div class="container">
        <div class="title">
          <h1>¡Bienvenido al juego de la NASA!</h1>
        </div>
        <div class="card login" v-bind:class="{ error: emptyFields }">
          <h1>Identificate</h1>
          <form @submit.prevent class="form-group">
            <div class="mb-3">
              <label for="exampleInputText" class="form-label"> Nombre Usuario:</label>
              <input
                :class="{ 'is-invalid': nombreInvalido && submitted }"
                v-model="nombreUser"
                type="text"
                class="form-control"
                id="exampleInputText"
              />
            </div>
            <div v-if="(nombreInvalido && submitted)" class="mb-4" >
              <small class="text-danger">
                Selecciona un nombre de usuario con al menos 4 caracteres
              </small>
            </div>
            <button type="submit" @click="submit()" class="btn btn-primary">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import router from '@/router'
import { socket } from '../utils/socket';

const nombreUser = ref('')
const emptyFields = ref(false)
const submitted = ref(false)

const submit = () => {
  submitted.value = true
  if (!nombreInvalido.value) {
    socket.emit('join server', nombreUser.value)
    router.push('game')
  } else {
    emptyFields.value = true;
  }
}




const nombreInvalido = computed(() => nombreUser.value.length < 4)

</script>

<style>
.title {
  text-align: left;
  margin-top: 50px;
  font-family: Arial Black;
  font-weight: bold;
  font-size: 30px;
  color: #fff;
  text-shadow:
    0 1px 0 #130707,
    0 2px 0 #362f2f,
    0 3px 0 #554a4a,
    0 4px 0 #5e5b5b,
    0 5px 0 #acacac,
    0 6px 1px rgba(0, 0, 0, 0.1),
    0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3),
    0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
}

p {
  line-height: 1rem;
}

.card {
  padding: 20px;
  margin-top: 15%;
  margin-bottom: 25%;
}

.form-group {
  input {
    margin-bottom: 20px;
  }
}

.login-page {
  align-items: center;
  display: flex;
  height: 100vh;

  .wallpaper-login {
    background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
      no-repeat center center;
    background-size: cover;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  h1 {
    margin-bottom: 1.5rem;
  }
}

.error {
  animation-name: errorShake;
  animation-duration: 0.3s;
}

@keyframes errorShake {
  0% {
    transform: translateX(-25px);
  }
  25% {
    transform: translateX(25px);
  }
  50% {
    transform: translateX(-25px);
  }
  75% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
