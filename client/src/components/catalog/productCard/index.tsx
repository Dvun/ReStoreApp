import React, {FC} from 'react'
import './styles.scss'
import productBox from '../../../assets/images/productBox.jpeg'
import {IProduct} from '../../../interfaces/interfaces'
import {Link} from 'react-router-dom'
import {useAppDispatch} from '../../../utils/hooks'
import ProductActions from '../../../redux/productSlice/productActions'

interface Props {
  product: IProduct
}

const ProductCard: FC<Props> = ({product}) => {
  const dispatch = useAppDispatch()

  return (
    <li className='column is-3-fullhd is-3-widescreen is-4-desktop'>
      <div className="card">
        <div className="card-image">
          <figure className="image is-5by3">
            <img src={product.pictureUrl || productBox} alt={product.name}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <div><p className='card-header-title is-size-6'>{product.name.substring(0, 21)}....</p></div>
            <p className='title has-text-right is-size-7'>{product.price} EUR</p>
          </div>
          <div className='card-footer'>
            <Link to='#' className='card-footer-item is-danger'>Add to cart</Link>
            <Link
              to={`product/${product.id}`}
              className='card-footer-item'
              onClick={() => dispatch(ProductActions.GetProductById(product.id))}
            >View
            </Link>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ProductCard