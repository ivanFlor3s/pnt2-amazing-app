<template>
  <div class="card mt-5">
    <div class="card-body">
      <div class="card-title">
        <h3>Registrar</h3>
      </div>
      <form>
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="name" />
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="lastName" />
          </div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Correo electronico</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
          <label for="validatePassword" class="form-label">Confirmar contraseña</label>
          <input type="password" class="form-control" id="validatePassword" />
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


</script>
