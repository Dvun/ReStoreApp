import {combineReducers} from '@reduxjs/toolkit'
import productSlice from './productSlice/productSlice'
import errorSlice from './errorSlice/errorSlice'

const rootState = combineReducers({
  productSlice: productSlice,
  errorSlice: errorSlice
})

export default rootState