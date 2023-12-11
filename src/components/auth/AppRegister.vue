<template>
  <div class="card mt-5">
    <div class="card-body">
      <div class="card-title">
        <h3>Registrar</h3>
      </div>
      <form @submit.prevent="onSubmit">
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="name" class="form-label">Nombre</label>
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="name"
              :class="{ 'is-invalid': mostrarErrorRequiredName }"
            />
            <div class="invalid-feedback" v-if="mostrarErrorRequiredName">Campo requerido.</div>
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label">Apellido</label>
            <input
              v-model="lastName"
              type="text"
              class="form-control"
              id="lastName"
              :class="{ 'is-invalid': mostrarErrorRequiredLastName }"
            />
            <div class="invalid-feedback" v-if="mostrarErrorRequiredLastName">Campo requerido.</div>
          </div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Correo electronico</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email"
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
        <div class="mb-3">
          <label for="validatePassword" class="form-label">Confirmar contraseña</label>
          <input
            v-model="rePassword"
            type="password"
            class="form-control"
            id="validatePassword"
            :class="{ 'is-invalid': mostrarErrorRequiredRePassword }"
          />
          <div class="invalid-feedback" v-if="mostrarErrorRequiredRePassword">Campo requerido.</div>
        </div>
        <div class="mt-4 d-flex flex-column flex-sm-row justify-content-between align-content-end">
          <button type="submit" class="btn btn-primary">Registrar</button>
          <router-link to="login">Ya tengo cuenta.</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import Swal from 'sweetalert2'
import { register } from '../../utils/proxy'
import router from '@/router'

let submitted = ref(false)

const name = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const rePassword = ref('')

let mostrarErrorRequiredName = computed(() => {
  return submitted.value && name.value == ''
})
let mostrarErrorRequiredLastName = computed(() => {
  return submitted.value && lastName.value == ''
})
let mostrarErrorRequiredEmail = computed(() => {
  return submitted.value && email.value == ''
})
let mostrarErrorRequiredPassword = computed(() => {
  return submitted.value && password.value == ''
})
let mostrarErrorRequiredRePassword = computed(() => {
  return submitted.value && rePassword.value == ''
})

async function onSubmit() {
  submitted.value = true
  const invalidForm = [
    mostrarErrorRequiredName.value,
    mostrarErrorRequiredLastName.value,
    mostrarErrorRequiredEmail.value,
    mostrarErrorRequiredPassword.value,
    mostrarErrorRequiredRePassword.value
  ].some((value) => value)

  if (invalidForm) return

  if (password.value !== rePassword.value) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Las contraseñas no coinciden'
    })
    return
  }

  Swal.isLoading = true
  try {
    await register(name.value, lastName.value, email.value, password.value)
    Swal.close()
    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: 'Ya podes iniciar sesión'
    })
    router.push('login')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.response.data.message
    })
  }
}
</script>
