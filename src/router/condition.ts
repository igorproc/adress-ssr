interface IConditionStoreState {
  additionalDataModalOfPlaceIsOpen: boolean
}

export const useConditionStore = defineStore('condition-store', {
  state: (): IConditionStoreState => ({
    additionalDataModalOfPlaceIsOpen: false
  }),
  actions: {
    openAdditionalDataModal() {
      this.additionalDataModalOfPlaceIsOpen = true
    },
    closeAdditionalDataModal() {
      this.additionalDataModalOfPlaceIsOpen = false
    }
  }
})
