<template>
    <div class="container">
        <h1>Identificate</h1>
        <form  @submit.prevent>
            <div class="mb-3">
                <label for="exampleInputText" class="form-label"> Nombre Usuario</label>
                <input :class="{'is-invalid':nombreUser.length < 4}" v-model="nombreUser" type="text" class="form-control" id="exampleInputText">
            </div>
            <button type="submit" @click="submit()" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import router from '@/router'
 const nombreUser = ref('')
 const submit = ()=>{
    if(nombreUser.value.length > 4){
        router.push('game')
    }
 }
</script>
