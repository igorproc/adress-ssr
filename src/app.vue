<template>
  <div class="main">
    <AppHeader />
    <main>
      <router-view v-slot="{ Component }">
        <Suspense>
          <component :is="Component" />
        </Suspense>
      </router-view>
    </main>
    <AppGlobalScope />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/common/AppHeader.vue'
import AppGlobalScope from '@/components/common/AppGlobalScope.vue'
</script>
