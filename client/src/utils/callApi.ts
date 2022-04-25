import axios from 'axios'


export const callApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API
})

callApi.interceptors.request.use(
  config => {

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

callApi.interceptors.response.use(
  config => {

    return config
  },
  error => {
    return Promise.reject(error)
  }
)