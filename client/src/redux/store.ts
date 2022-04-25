import {configureStore} from '@reduxjs/toolkit'
import rootState from './rootState'

const store = configureStore({
  reducer: rootState
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export {store}