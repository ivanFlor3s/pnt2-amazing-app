<template>
    <div style="background: no-repeat center/cover url( 'https://media.giphy.com/media/biHH61yRTp0RZGNvxi/giphy.gif' ); min-height: 100vh">
       <div class="d-flex h-100" >
        <div class="custom-card " style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Ganaste!!</h5>
                <ListaUsuarios :mostrar-barra="false"></ListaUsuarios>
                <a href="#" class="btn btn-primary">Volver a jugar</a>
            </div>
        </div>
       </div>
       
    </div> 
</template>

<script setup>
import ListaUsuarios from '../components/ListaUsuarios.vue';

</script>
<style></style>