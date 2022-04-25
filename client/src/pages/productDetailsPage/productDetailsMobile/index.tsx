import React, {FC} from 'react'
import {IProduct} from '../../../interfaces/interfaces'


interface Props {
  product: IProduct | null
}

const ProductDetailsMobile: FC<Props> = ({product}) => {
  return (
    <div>
      <div>
        <h6 className="title is-size-6 mb-0">Name:</h6>
        <div className="mb-2">
          <p>{product?.name}</p>
        </div>
      </div>
      <hr className="dropdown-divider mb-1"/>
      <div>
        <h6 className="title is-size-6 mb-0">Description:</h6>
        <div className="mb-2">
          <p>{product?.description}</p>
        </div>
      </div>
      <hr className="dropdown-divider mb-1"/>
      <div className="is-flex is-justify-content-space-around">
        <div className="">
          <h6 className="title is-size-6 mb-0">Type:</h6>
          <div className="mb-2">
            <p>{product?.type}</p>
          </div>
        </div>
        <div className="">
          <h6 className="title is-size-6 mb-0">Brand:</h6>
          <div className="mb-2">
            <p>{product?.brand}</p>
          </div>
        </div>
      </div>
      <hr className="dropdown-divider mb-1"/>
      <div>
        <h6 className="title is-size-6 mb-0">In Stock?:</h6>
        <div className="mb-2">
          {
            product?.quantityInStock! > 0 ?
              <p className="has-text-success-dark">In Stock</p>
              :
              <p className="has-text-danger-dark">Out of Stock</p>
          }
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsMobile