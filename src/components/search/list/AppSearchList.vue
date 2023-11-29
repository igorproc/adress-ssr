<template>
  <div class="app-search-list">
    <AppSearchItem
      v-for="place in itemsList"
      :key="place.place_id"
      :item="place"
      @on-select-address="onSelectAddress"
    />
  </div>
</template>

<script setup lang="ts">
import type { TPlaceItem } from '@/types/api'

import AppSearchItem from '@/components/search/list/AppSearchItem.vue'

interface Props {
  itemsList: TPlaceItem[]
}
interface Emits {
  (name: 'onSelectAddress', placeId: number): () => void
}

const props = defineProps<Props>()
const { itemsList } = toRefs(props)
const emits = defineEmits<Emits>()

const onSelectAddress = (placeId: number) => {
  emits('onSelectAddress', placeId)
}
</script>

<style lang="scss">
.app-search-list {
  overflow-y: auto;
  height: calc(100vh - 12rem);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style>
