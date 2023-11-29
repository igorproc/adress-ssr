<template>
  <header class="app-header">
    <AppLogo />
  </header>
</template>

<script setup lang="ts">
import AppLogo from './AppLogo.vue'
</script>

<style lang="scss">
.app-header {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
