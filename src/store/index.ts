import { searchApi } from '@/api/search'
import type { TGetDetailIInfo, TPlaceItem } from '@/types/api'

interface IIndexStoreState {
  placeDetailInfo: null | TGetDetailIInfo
  placeItems: null | TPlaceItem[]
}

export const useIndexStore = defineStore('index-store', {
  state: (): IIndexStoreState => ({
    placeDetailInfo: null,
    placeItems: null,
  }),
  actions: {
    async updatePlaceItems (searchValue: string) {
      const data = await searchApi.getBySimpleQuery(searchValue)
      if (!data) {
        this.placeItems = null
        return
      }

      this.placeItems = data
    },
    async getDetailInfoAboutPlace (item: TPlaceItem) {
      try {
        const osmType = item.osm_type[0].toUpperCase()
        if (!osmType) {
          return
        }

        const data = await searchApi.getDetailInfoById({ osmId: item.osm_id, osmType })
        if (!data) {
          return
        }

        this.placeDetailInfo = data
      } catch (error) {
        throw new Error(error)
      }
    },
  },
})
