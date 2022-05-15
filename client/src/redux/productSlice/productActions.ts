import {AppDispatch} from '../store'
import {getAll, getProductById, isLoading} from './productSlice'
import {callApi} from '../../utils/callApi'
import {IProduct} from '../../interfaces/interfaces'

class ProductActions {

  GetAll = () => async (dispatch: AppDispatch) => {
    dispatch(isLoading())
    callApi.get<IProduct[]>('/Product')
      .then(res => dispatch(getAll(res.data)))
      .catch(err => console.log(err))
  }

  GetProductById = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(isLoading())
    callApi.get(`Product/${id}`)
      .then(res => dispatch(getProductById(res.data)))
      .catch(err => console.log(err))
  }

}

export default new ProductActions()