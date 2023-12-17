<template>
    <div class="d-flex justify-content-center align-items-center"  style="background: no-repeat center/cover url( 'https://media.giphy.com/media/biHH61yRTp0RZGNvxi/giphy.gif' ); min-height: 100vh">
        <div class="custom-card " style="min-width: 20rem;">
            <div class="p-3">
                <h1 class="text-center">Ganaste {{game.users.find(x => x.winner).userName }}!!!</h1>
                <ListaUsuarios :mostrar-barra="false"></ListaUsuarios>
                <a  @click="volverAHome()" class="btn btn-primary mt-3">Volver a home</a>
            </div>
        </div>
    </div> 
</template>

<script setup>
import ListaUsuarios from '../components/ListaUsuarios.vue';
import router from '@/router'
import { gameStore } from '../stores/game-state';


const game = gameStore()

function volverAHome(){
    router.push('home')
    game.$reset()
}

</script>
<style></style>