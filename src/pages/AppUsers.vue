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
            <th scope="col">Fecha Creacion</th>
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
                {{ new Date(user.createdAt).toLocaleDateString() }}
            </td>
            <td>
              <div class="d-flex gap-2">
                <button v-if="user.role == 'ADMIN'" @click="changeUserRole(user.id, 'USER')" class="btn btn-sm btn-warning">
                  Quitar admin
                </button>
                <button v-else class="btn btn-sm btn-primary" @click="changeUserRole(user.id, 'ADMIN')">Dar admin</button>
                <button class="btn btn-sm btn-danger" @click="deleteUserTable(user.id)">Eliminar</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import Swal from 'sweetalert2';
import { getUsers, updateUserRole, deleteUser } from '../utils/proxy'
import { ref } from 'vue'

const users = ref([])

const filter = ref('')

refreshTable()

function onSubmit() {
    refreshTable()
}

async function refreshTable(){
    return getUsers(filter.value.trim()).then((res) => {
    users.value = res.data
  })
}

async function changeUserRole(id, role){
    Swal.fire({
        title: 'Cambiando rol',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      })
    await updateUserRole(id,role)
    await refreshTable()
    Swal.close()
}

async function deleteUserTable(id){
    const swalRef =Swal.fire({
        title: '¿Estas seguro?',
        icon: 'warning',
        showCancelButton: true,
    })

    const result = await swalRef
    if(!result.isConfirmed) return 

    Swal.fire({
        title: 'Eliminando usuario',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      })

    await deleteUser(id)
    await refreshTable()
    Swal.close()
}
</script>
