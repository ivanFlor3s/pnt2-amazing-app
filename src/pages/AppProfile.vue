<template>
  <div class="container mt-2">
    <h3>Informacion personal</h3>
    <hr />
    <form class="mt-5" @submit.prevent="onSubmit">
      <div class="mb-3">
        Rol: 
        <span class="badge fs-6" :class="{ 'bg-primary': app.isAdmin, 'bg-secondary': !app.isAdmin }">
          {{ app.isAdmin ? 'Administrador' : 'Usuario' }}
        </span>
      </div>
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
          <!-- <div class="invalid-feedback" v-if="mostrarErrorRequiredName">Campo requerido.</div> -->
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
          <!-- <div class="invalid-feedback" v-if="mostrarErrorRequiredLastName">Campo requerido.</div> -->
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
        <!-- <div class="invalid-feedback" v-if="mostrarErrorRequiredEmail">Campo requerido.</div> -->
      </div>
      <div class="mt-4 d-flex">
        <button type="submit" class="ms-auto btn btn-primary">Guardar cambios</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { appStore } from '../stores/app.store'
import { updateUser } from '../utils/proxy'
import Swal from 'sweetalert2'
const app = appStore()

const name = ref(app.user.name)
const lastName = ref(app.user.lastName)
const email = ref(app.user.email)

let mostrarErrorRequiredEmail = computed(() => {
  return email.value === ''
})

let mostrarErrorRequiredLastName = computed(() => {
  return lastName.value === ''
})

let mostrarErrorRequiredName = computed(() => {
  return name.value === ''
})

async function onSubmit() {
  try {
    Swal.isLoading = true
    Swal.fire({
      title: 'Actualizando informacion',
      text: 'Espere un momento por favor',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading()
      }
    })
    const response = await updateUser(app.user.id, name.value, lastName.value, email.value)
    console.log(response.data)
    app.setUser({ id: app.user.id, ...response.data})
    Swal.fire({
      title: 'Informacion actualizada',
      icon: 'success'
    })
  } catch (error) {
    Swal.fire({
      title: 'Error al actualizar',
      icon: 'error',
      text: error.response?.data?.message || error.message
    })
  }
}
</script>
