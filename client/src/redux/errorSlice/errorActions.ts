import {AppDispatch} from '../store'
import {
  badRequestError,
  isLoading,
  notFoundError,
  server500Error,
  unauthorizedError,
  validationError
} from './errorSlice'
import axios from 'axios'
import {toast} from 'react-toastify'

class ErrorActions {

  NotFoundError = () => async (dispatch: AppDispatch) => {
    dispatch(isLoading())
    axios.get(`${process.env.REACT_APP_SERVER_API}/Buggy/not-found`)
      .then(res => console.log(res.data))
      .catch(err => {
        toast.error(err.response.data.title)
        dispatch(notFoundError(err.response.data))
      })
  }

  UnauthorizedError = () => async (dispatch: AppDispatch) => {
    dispatch(isLoading())
    axios.get(`${process.env.REACT_APP_SERVER_API}/Buggy/unauthorized`)
      .then(res => console.log(res.data))
      .catch(err => {
        toast.error(err.response.data.title)
        dispatch(unauthorizedError(err.response.data))
      })
  }

  BadRequestError = () => async (dispatch: AppDispatch) => {
    dispatch(isLoading())
    axios.get(`${process.env.REACT_APP_SERVER_API}/Buggy/bad-request`)
      .then(res => console.log(res.data))
      .catch(err => {
        toast.error(err.response.data.title)
        dispatch(badRequestError(err.response.data))
      })
  }

  Server500Error = () => async (dispatch: AppDispatch) => {
    dispatch(isLoading())
    axios.get(`${process.env.REACT_APP_SERVER_API}/Buggy/server-error`)
      .then(res => console.log(res.data))
      .catch(err => {
        toast.error(err.response.data.title)
        dispatch(server500Error(err.response.data))
      })
  }

  ValidationError = () => async (dispatch: AppDispatch) => {
    dispatch(isLoading())
    axios.get(`${process.env.REACT_APP_SERVER_API}/Buggy/validation-error`)
      .then(res => console.log(res.data))
      .catch(err => {
        toast.error(err.response.data.title)
        dispatch(validationError(err.response.data))
      })
  }

}

export default new ErrorActions()