import {IProduct} from '../../interfaces/interfaces'

export interface IInitialState {
  products: IProduct[]
  isLoading: boolean
  isError: string | null
  product: IProduct | null
}