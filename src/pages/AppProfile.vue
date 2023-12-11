<template>
    <div class="container mt-2">
        <h3>Informacion personal</h3>
        <hr>
        <form class="mt-5" @submit.prevent="onSubmit">
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
          <button type="submit" class="ms-auto btn btn-primary">Guardar</button>
        </div>
      </form>
    </div>
</template>

<script setup>

import { computed, ref } from 'vue'

const name = ref('')
const lastName = ref('')
const email = ref('')

let mostrarErrorRequiredEmail = computed(() => {
    return email.value === ''
})

let mostrarErrorRequiredLastName = computed(() => {
    return lastName.value === ''
})

let mostrarErrorRequiredName = computed(() => {
    return name.value === ''
})


</script>