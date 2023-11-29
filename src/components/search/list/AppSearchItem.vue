<template>
  <div class="app-search-item" @click="selectAddress">
    <span class="item__title">
      {{ item.display_name }}
    </span>
    <div class="item__bottom-section">
      <span class="section__category">{{ item.type }}</span>
      <button class="section__more-info-action" @click="openMoreInfoAboutPlace">
        Подробнее
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store'
import type { TPlaceItem } from '@/types/api'
import {useConditionStore} from '@/router/condition'

interface Emits {
  (name: 'onSelectAddress', placeId: number): () => void
}
interface Props {
  item: TPlaceItem
}

const conditionStore = useConditionStore()
const indexStore = useIndexStore()
const emits = defineEmits<Emits>()
const props = defineProps<Props>()
const { item } = toRefs(props)

const selectAddress = () => {
  emits('onSelectAddress', item.value.place_id)
}
const openMoreInfoAboutPlace = async () => {
  await indexStore.getDetailInfoAboutPlace(item.value)
  conditionStore.openAdditionalDataModal()
}
</script>

<style lang="scss">
.app-search-item {
  padding: 0.5rem 0.25rem;
  background: #F0F7FF;
  border: 2px solid #D7E7FF;
  border-radius: 5px;
  cursor: pointer;
  .item__title {
    text-align: start;
  }
  .item__bottom-section {
    margin-top: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .section__category {
      font-size: 17px;
    }
    .section__more-info-action {
      cursor: pointer;
      border: none;
      background: transparent;
      font-size: 17px;

      &:hover {
        transition: color 300ms linear;
        color: #D7E7FF;
      }
    }
  }
}
</style>
