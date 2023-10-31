<template>
    <div class="d-flex justify-content-center align-items-center"  style="background: no-repeat center/cover url( 'https://media.giphy.com/media/biHH61yRTp0RZGNvxi/giphy.gif' ); min-height: 100vh">
        <div class="custom-card " style="min-width: 20rem;">
            <div class="p-3">
                <h1 class="text-center">Ganaste!!!</h1>
                <ListaUsuarios :mostrar-barra="false"></ListaUsuarios>
                <a  @click="volverAJugar()" class="btn btn-primary mt-3">Volver a jugar</a>
            </div>
        </div>
    </div> 
</template>

<script setup>
import ListaUsuarios from '../components/ListaUsuarios.vue';
import router from '@/router'
import { appStateStore } from '../stores/appState';

const appStore = appStateStore()

function volverAJugar(){
    appStore.reiniciarPuntos();
    router.push('game')
}

</script>
<style></style>