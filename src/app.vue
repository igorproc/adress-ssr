<template>
  <div class="main">
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component"/>
      </Suspense>
    </router-view>
  </div>
</template>
