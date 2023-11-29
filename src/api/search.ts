import axios from 'axios'

import { API_PATH_METHOD } from '@/api/config'
import type {TPlaceItem, TGetDetailIInfoPayload, TGetDetailIInfo} from '@/types/api'

export const searchApi = {
  getBySimpleQuery: async (searchValue: string) => {
    try {
      const { data } = await axios.get<TPlaceItem[]>(
        `${API_PATH_METHOD}search?q=${searchValue}&polygon_geojson=1&format=jsonv2`,
        {
          headers: {
            'Accept-Language': 'ru-RU',
          },
        },
      )
      if (!data.length) {
        return
      }

      return data
    } catch (error) {
      throw new Error(error)
    }
  },
  getDetailInfoById: async (payload: TGetDetailIInfoPayload) => {
    try {
      const { data } = await axios.get<TGetDetailIInfo>(
        `${API_PATH_METHOD}details?osmtype=${payload.osmType}&osmid=${payload.osmId}&polygon_geojson=1&format=json`,
        {
          headers: {
            'Accept-Language': 'ru-RU',
          },
        },
      )
      if (!data) {
        return
      }

      return data
    } catch (error) {
      throw new Error(error)
    }
  },
}
