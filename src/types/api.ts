export type TPlaceItem = {
  place_id: number,
  licence: string,
  osm_type: string,
  osm_id: number,
  lat: string,
  lon: string,
  category: string,
  type: string,
  place_rank: number,
  importance: number,
  addresstype: string,
  name: string,
  display_name: string,
  boundingbox: string[],
  geojson: TPlaceItemGeo,
}

type TPlaceItemGeo = {
  type: 'string',
  coordinates: string[][]
}

export type TGetDetailIInfoPayload = {
  osmType: string,
  osmId: number
}

export interface TGetDetailIInfo {
  place_id: number
  parent_place_id: number
  osm_type: string
  osm_id: number
  category: string
  type: string
  admin_level: number
  localname: string
  names: { name: string }
  calculated_postcode: string
  country_code: string
  indexed_date: string
  importance: number
  calculated_importance: number
  rank_address: number
  rank_search: number
  isarea: boolean
  centroid: Centroid
  geometry: Geometry
  address: Address[]
}

export interface Centroid {
  type: string
  coordinates: number[]
}

export interface Geometry {
  type: string
  coordinates: number[]
}

export interface Address {
  localname: string
  place_id?: number
  osm_id?: number
  osm_type?: string
  class: string
  type: string
  admin_level?: number
  rank_address: number
  distance: number
  isaddress: boolean
}
