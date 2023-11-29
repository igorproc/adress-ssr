<template>
  <div class="app-search-map">
    <yandex-map
      :settings="{
        location: {
          center: coordinates,
          zoom: 17
        },
      }"
      width="100%"
      height="100%"
    >
      <yandex-map-default-scheme-layer />
    </yandex-map>
  </div>
</template>

<script setup lang="ts">
import {YandexMap, YandexMapDefaultSchemeLayer} from 'vue-yandex-maps'

interface Props {
  coordinates: number[]
}

const props = defineProps<Props>()
const { coordinates } = toRefs(props)
</script>

<style lang="scss">
.app-search-map {
  margin-left: 1rem;
}
</style>
