import {AppDispatch} from '../store'
import {getAll, getProductById, isLoading} from './productSlice'
import {callApi} from '../../utils/callApi'

class ProductActions {

  GetAll = () => async (dispatch: AppDispatch) => {
    dispatch(isLoading())
    callApi.get('/Products')
      .then(res => dispatch(getAll(res.data)))
      .catch(err => console.log(err))
  }

  GetProductById = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(isLoading())
    callApi.get(`products/${id}`)
      .then(res => dispatch(getProductById(res.data)))
      .catch(err => console.log(err))
  }

}

export default new ProductActions()