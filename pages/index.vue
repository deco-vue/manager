<template>
  <div class="container">
    <VueDraggable />
    <modal v-if="modal" />
  </div>
</template>

<script setup>
let modal = ref(false)
</script>

