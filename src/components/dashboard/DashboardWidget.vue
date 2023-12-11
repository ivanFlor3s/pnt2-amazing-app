<template>
  <div class="d-flex flex-md-row gap-3">
    <div class="border border-1 p-2 px-3 shadow bg-body-tertiary rounded">
      <h4 class="mb-3" style="max-width: 10ch;">{{ props.titulo }}</h4>
      <div class="d-flex justify-content-between">
        <div>
          <span class="fs-4">1</span>
          <span class="fs-6">/ 10</span>
        </div>
        <i class="fa-solid fa-arrow-up fs-4" style="transform: rotate(45deg)"></i>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  titulo: {
    type: String,
    required: true
  }
})
</script>
