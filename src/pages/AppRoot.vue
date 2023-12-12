<template>
  <div class="d-flex flex-row">
    <div  v-if="!inGameRoute" class="d-flex flex-column flex-shrink-0 bg-light vh-100" style="width: 4.5rem">
      <router-link
        to="/"
        class="d-block p-3 link-dark text-decoration-none"
        title=""
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Icon-only"
      >
        <img src="src/assets/NASA_logo.svg" width="50" alt="nasa-logo" />
        <span class="visually-hidden">Icon-only</span>
      </router-link>
      <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li class="nav-item">
          <router-link
            exact-active-class="active"
            to="/home"
            class="nav-link py-3 border-bottom"
            aria-current="page"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Home"
          >
            <i class="fa-solid fa-house"></i>
          </router-link>
        </li>
        <li v-if="app.isAdmin">
          <router-link
            exact-active-class="active"
            to="/dashboard"
            class="nav-link py-3 border-bottom"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Dashboard"
          >
            <i class="fa fa-dashboard"></i>
          </router-link>
        </li>

        <li v-if="app.isAdmin">
          <router-link
            exact-active-class="active"
            to="/users"
            class="nav-link py-3 border-bottom"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Users"
          >
            <i class="fa-regular fa-user"></i>
          </router-link>
        </li>
      </ul>
      <div class="dropdown border-top">
        <a
          href="#"
          class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser3"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="mdo"
            width="24"
            height="24"
            class="rounded-circle"
          />
        </a>
        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
          <li><router-link to="/profile" class="dropdown-item">Profile</router-link></li>
          <li><a class="dropdown-item"  href="#" @click="signOut">Sign out</a></li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup>
import router from '@/router'
import { computed } from 'vue';
import { appStore } from '../stores/app.store';

const app = appStore()
let inGameRoute = computed(() => {
  return router.currentRoute.value.path.includes('game') 
})

function signOut() {
  sessionStorage.removeItem('token')
  router.push('/login')
}
</script>
