<template>
  <div class="app-search-header">
    <div class="header__input-container">
      <label for="app-address-search" class="container__label">
        Напишите сюда адрес, который хотите найти
      </label>
      <input
        id="app-address-search"
        v-model="searchData"
        type="text"
        aria-label="Напиши здесь что-бы найти список адрессов"
        class="container__input"
        @input="onAddressInput"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'
import { useRoute, useRouter } from 'vue-router'
import { useIndexStore } from '@/store'

const indexStore = useIndexStore()
const route = useRoute()
const router = useRouter()

const searchData = ref('')

const addressInputChanges = async (searchValue: string) => {
  if (route.query.search !== searchValue) {
    await router.replace({query: {search: encodeURI(searchValue)}})
  }
  await indexStore.updatePlaceItems(searchValue)
}

const onAddressInput = useDebounceFn(async (event: Event) => {
  const target = (<HTMLInputElement>event.target)

  await addressInputChanges(target.value)
}, 500)

if (route.query?.search) {
  searchData.value = decodeURI(route.query.search as string)
}
</script>

<style lang="scss">
.app-search-header {
  padding: 1.5rem 1rem;
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header__input-container {
    display: flex;
    flex-direction: column-reverse;

    .container__label {
      margin-top: 0.2rem;
    }

    .container__input {
      padding: 0.5rem 0.25rem;
      border: none;
      border-radius: 5px;
    }
  }
}
</style>
