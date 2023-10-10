<template>
    <div>
        {{ appState.username }}
    </div>
</template>

<script setup>
    import { appStateStore } from '../stores/appState';

    const appState = appStateStore()

</script>