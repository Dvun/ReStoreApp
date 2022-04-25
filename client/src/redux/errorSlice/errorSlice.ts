import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {
  IBadRequestError,
  IInitialState,
  INotFoundError,
  IServer500Error,
  IUnauthorizedError,
  IValidationError
} from './interfaces'

const initialState: IInitialState = {
  isLoading: false,
  isError: null,
  notFoundError: null,
  badRequestError: null,
  server500Error: null,
  unauthorizedError: null,
  validationError: null
}

const errorSlice = createSlice({
  name: 'errorSlice',
  initialState: initialState,
  reducers: {

    isLoading: (state) => {
      state.isLoading = true
      state.isError = null
      state.notFoundError = null
      state.badRequestError = null
      state.server500Error = null
      state.unauthorizedError = null
      state.validationError = null
    },

    isError: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.isError = action.payload
      state.notFoundError = null
      state.badRequestError = null
      state.server500Error = null
      state.unauthorizedError = null
      state.validationError = null
    },

    notFoundError: (state, action: PayloadAction<INotFoundError>) => {
      state.isLoading = false
      state.notFoundError = action.payload
    },

    unauthorizedError: (state, action: PayloadAction<IUnauthorizedError>) => {
      state.isLoading = false
      state.unauthorizedError = action.payload
    },

    badRequestError: (state, action: PayloadAction<IBadRequestError>) => {
      state.isLoading = false
      state.badRequestError = action.payload
    },

    server500Error: (state, action: PayloadAction<IServer500Error>) => {
      state.isLoading = false
      state.server500Error = action.payload
    },

    validationError: (state, action: PayloadAction<IValidationError>) => {
      state.isLoading = false
      state.validationError = action.payload
    },

  }
})

export default errorSlice.reducer
export const {
  isError,
  isLoading,
  notFoundError,
  unauthorizedError,
  badRequestError,
  server500Error,
  validationError
} = errorSlice.actions




