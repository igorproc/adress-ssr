<template>
  <div
    :class="{ '--open': conditionStore.additionalDataModalOfPlaceIsOpen }"
    class="app-additional-data-modal modal"
  >
    <div class="modal__dialog dialog">
      <div class="dialog__wrapper wrapper">
        <button
          class="wrapper__close-action"
          @click="conditionStore.closeAdditionalDataModal()"
        >
          &times;
        </button>
        <div class="wrapper__content">
          <AppAdditionalDataCard
            v-if="indexStore.placeDetailInfo"
            :item="indexStore.placeDetailInfo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConditionStore } from '@/router/condition'
import { useIndexStore } from '@/store'

import AppAdditionalDataCard from '@/components/search/additionalData/AppAdditionalDataCard.vue'

const conditionStore = useConditionStore()
const indexStore = useIndexStore()
</script>

<style lang="scss">
.app-additional-data-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  &.--open {
    display: block;
  }
  .modal__dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 80%;
    text-align: center;
    .dialog__wrapper {
      position: relative;
      .wrapper__content {
        padding: 2rem;
      }
      .wrapper__close-action {
        padding: 1.25rem 2rem;
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        background: inherit;
        color: #aaa;
        font-size: 2rem;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          transition: color 250ms linear;
          color: black;
        }
      }
    }
  }
}
</style>
