<template>
  <div class="app-search">
    <AppSearchHeader />
    <div class="app-search__data">
      <div>
        <div v-if="!indexStore.placeItems" class="data__empty-blank">
          <span>Ничего нет</span>
        </div>
        <AppSearchList
          v-else
          :items-list="indexStore.placeItems"
          @on-select-address="onSelectedAddress"
        />
      </div>
      <AppSearchMap
        v-if="mapIsVisible && mapCoordinates"
        :coordinates="mapCoordinates"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIndexStore } from '@/store'

import AppSearchHeader from '@/components/search/AppSearchHeader.vue'
import AppSearchList from '@/components/search/list/AppSearchList.vue'
import AppSearchMap from '@/components/search/AppSearchMap.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const indexStore = useIndexStore()

const selectedAddressId = ref(0)
const mapIsVisible = ref(false)

const mapCoordinates = computed(() => {
  if (!selectedAddressId.value || !indexStore.placeItems) {
    return
  }
  const placeCandidate = indexStore.placeItems.find((item) => item.place_id === selectedAddressId.value)
  if (!placeCandidate) {
    return
  }
  return [ Number(placeCandidate.lon), Number(placeCandidate.lat) ]
})

const onSelectedAddress = async (selectedAddress: number) => {
  mapIsVisible.value = true
  selectedAddressId.value = selectedAddress
}

if (route.query?.search) {
  await indexStore.updatePlaceItems(route.query.search as string)
}
</script>

<style lang="scss">
.app-search {
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &__data {
    width: 100%;
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 3fr 9fr;
  }
}
</style>
