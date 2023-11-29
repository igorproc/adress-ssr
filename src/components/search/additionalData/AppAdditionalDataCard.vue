<template>
  <div class="app-additional-data-card card">
    <h1 class="card__title">
      {{ item.localname }}
    </h1>
    <div class="card__table table">
      <div
        v-for="item in dataForTable"
        :key="item.id"
        :class="item.id % 2 ? '--odd' : '--even'"
        class="table__row"
      >
        <span class="table__column">{{ item.key }}</span>
        <span class="table__column">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TGetDetailIInfo } from '@/types/api'

interface Props {
  item: TGetDetailIInfo
}

const props = defineProps<Props>()
const { item } = toRefs(props)

const dataForTable = computed(() => {
  return [
    {
      id: 0,
      key: 'Name',
      value: item.value.localname,
    },
    {
      id: 1,
      key: 'Type',
      value: `${item.value.category}:${item.value.type}`,
    },
    {
      id: 2,
      key: 'Last Updated',
      value: item.value.indexed_date,
    },
    {
      id: 3,
      key: 'Admin level',
      value: item.value.admin_level,
    },
    {
      id: 4,
      key: 'Search Rating',
      value: item.value.rank_search,
    },
    {
      id: 5,
      key: 'Postcode',
      value: item.value.calculated_postcode,
    },
    {
      id: 6,
      key: 'Centre Point (lat,lon)',
      value: item.value.centroid.coordinates.join(', '),
    }
  ]
})
</script>

<style lang="scss">
.app-additional-data-card {
  display: flex;
  flex-direction: column;
  .card__title {
    text-align: start;
  }
  .card__table {
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    .table__row {
      padding: 0.5rem;
      display: flex;
      border-bottom: 1px solid black;
      &.--odd {
        background-color: rgba(0, 0, 0, 0.05);
      }
      &:last-child {
        border-bottom: none;
      }
    }
    .table__column {
      flex: 1;
      text-align: start;
    }
  }
}
</style>
