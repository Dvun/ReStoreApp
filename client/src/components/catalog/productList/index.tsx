import React, {FC} from 'react'
import {IProduct} from '../../../interfaces/interfaces'
import ProductCard from '../productCard'

interface Props {
  products: IProduct[]
}

const ProductList: FC<Props> = ({products}) => {
  return (
    <ul className='columns is-mobile is-multiline is-centered'>
      {
        products.map(product => (
          <ProductCard product={product} key={product.id}/>
        ))
      }
    </ul>
  )
}

export default ProductList