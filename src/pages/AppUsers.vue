<template>
  <div class="container">
    <div class="mt-4">
      <h1>Usuarios</h1>
      <p>Panel de administración de usuarios</p>
      <hr />
    </div>
    <form @submit.prevent="onSubmit">
      <div class="input-group mb-3 w-50">
        <span class="input-group-text" id="basic-addon1">
          <i class="fas fa-search"></i>
        </span>
        <input
          v-model="filter"
          type="text"
          class="form-control"
          placeholder="Filtro"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </form>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Mail</th>
            <th scope="col">Rol</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>
              <span v-if="user.role === 'ADMIN'" class="badge bg-primary">Admin</span>
              <span v-else class="badge bg-secondary">User</span>
            </td>
            <td>
              <div class="d-flex gap-2">
                <button v-if="user.role == 'ADMIN'" class="btn btn-sm btn-warning">
                  Quitar admin
                </button>
                <button v-else class="btn btn-sm btn-primary">Dar admin</button>
                <button class="btn btn-sm btn-danger">Eliminar</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { getUsers } from '../utils/proxy'
import { ref } from 'vue'

const users = ref([])

const filter = ref('')

getUsers().then((res) => {
  users.value = res.data
})

function onSubmit() {
  getUsers(filter.value.trim()).then((res) => {
    users.value = res.data
  })
}
</script>
