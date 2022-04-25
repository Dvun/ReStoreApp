import {IconDefinition} from '@fortawesome/free-regular-svg-icons'

export interface IProduct {
  id: number
  name: string,
  description: string
  price: number,
  pictureUrl: string
  type: string
  brand: string
  quantityInStock: number
}

export interface INavbarStartItems {
  id: number
  label: string
  icon: IconDefinition
  path: string
}