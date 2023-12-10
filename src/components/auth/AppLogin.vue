<template>
  <div class="card mt-5">
    <div class="card-body">
      <div class="card-title">
        <h3>Login</h3>
      </div>
      <form>
        
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Correo electronico</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mt-4 d-flex flex-column flex-sm-row justify-content-between align-content-end">
          <button type="submit" class="btn btn-primary">Ingresar</button>
          <router-link to="register">No tengo cuenta</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
