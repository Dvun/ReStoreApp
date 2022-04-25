import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IInitialState} from './interfaces'
import {IProduct} from '../../interfaces/interfaces'

const initialState: IInitialState = {
  isLoading: false,
  isError: null,
  products: [],
  product: null
}

const productSlice = createSlice({
  name: 'productSlice',
  initialState: initialState,
  reducers: {

    isLoading: (state, action: PayloadAction) => {
      state.isLoading = true
      state.isError = null
    },

    isError: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.isError = action.payload
    },

    getAll: (state, action: PayloadAction<IProduct[]>) => {
      state.isLoading = false
      state.isError = null
      state.products = action.payload
    },

    getProductById: (state, action: PayloadAction<IProduct>) => {
      state.isLoading = false
      state.isError = null
      state.product = action.payload
    },

  }
})

export default productSlice.reducer
export const {
  isError,
  isLoading,
  getAll,
  getProductById
} = productSlice.actions




