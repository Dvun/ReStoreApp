import React, {FC} from 'react'
import {IProduct} from '../../../interfaces/interfaces'

interface Props {
  product: IProduct | null
}

const ProductDetailsPageDesktop: FC<Props> = ({product}) => {
  return (
    <tbody>
    <tr>
      <th>Name:</th>
      <td>{product?.name}</td>
    </tr>
    <tr>
      <th>Description:</th>
      <td>{product?.description}</td>
    </tr>
    <tr>
      <th>Type:</th>
      <td>{product?.type}</td>
    </tr>
    <tr>
      <th>Brand:</th>
      <td>{product?.brand}</td>
    </tr>
    <tr>
      <th>In Stock?:</th>
      <td>
        {
          product?.quantityInStock! > 0 ?
            <p className="has-text-success-dark">In Stock</p>
            :
            <p className="has-text-danger-dark">Out of Stock</p>
        }
      </td>
    </tr>
    </tbody>
  )
}

export default ProductDetailsPageDesktop