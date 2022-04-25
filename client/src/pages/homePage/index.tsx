import React, {FC, useEffect} from 'react'
import {useAppDispatch, useAppSelector} from '../../utils/hooks'
import {RootState} from '../../redux/store'
import ProductActions from '../../redux/productSlice/productActions'
import ProductList from '../../components/catalog/productList'

const HomePage: FC = () => {
  const dispatch = useAppDispatch()
  const {products} = useAppSelector(({productSlice}: RootState) => productSlice)

  useEffect(() => {
    dispatch(ProductActions.GetAll())
  }, [dispatch])

  return (
    <>
      <ProductList products={products}/>
    </>
  )
}

export default HomePage