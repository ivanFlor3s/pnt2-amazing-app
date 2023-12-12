<template>
  <div class="card mt-5">
    <div class="card-body">
      <div class="card-title">
        <h3>Login</h3>
      </div>
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Correo electronico</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            :class="{ 'is-invalid': mostrarErrorRequiredEmail }"
          />
          <div class="invalid-feedback" v-if="mostrarErrorRequiredEmail">Campo requerido.</div>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Contraseña</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            :class="{ 'is-invalid': mostrarErrorRequiredPassword }"
          />
          <div class="invalid-feedback" v-if="mostrarErrorRequiredPassword">Campo requerido.</div>
        </div>
        <div class="mt-4 d-flex flex-column flex-sm-row justify-content-between align-content-end">
          <button type="submit" class="btn btn-primary">Ingresar</button>
          <router-link to="register">No tengo cuenta</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { login } from '../../utils/proxy'
import Swal from 'sweetalert2'
import router from '@/router'
import { appStore } from '../../stores/app.store'

const email = ref('')
const password = ref('')
const app = appStore()

let submitted = ref(false)

let mostrarErrorRequiredEmail = computed(() => {
  return submitted.value && email.value == ''
})

let mostrarErrorRequiredPassword = computed(() => {
  return submitted.value && password.value == ''
})

async function onSubmit() {
  submitted.value = true
  if (mostrarErrorRequiredEmail.value || mostrarErrorRequiredPassword.value) return
  Swal.isLoading = true
  Swal.fire({
    title: 'Iniciando sesión',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    }
  })
  try {
    const result = await login(email.value, password.value)
    app.setUser(result.data.user)
    sessionStorage.setItem('token', result.data.token)
    Swal.close()
    router.push('/home')
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.response.data.message
    })
  }
  
}
</script>
