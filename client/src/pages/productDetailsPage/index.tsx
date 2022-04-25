import React, {useEffect} from 'react'
import {useAppDispatch, useAppSelector} from '../../utils/hooks'
import ProductActions from '../../redux/productSlice/productActions'
import {useParams} from 'react-router-dom'
import ProductDetailsDesktop from './productDetailsDesktop'
import useViewPort from '../../utils/viewPort'
import ProductDetailsMobile from './productDetailsMobile'
import productBox from '../../assets/images/productBox.jpeg'

const ProductDetailsPage = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const viewPort = useViewPort()
  const {product, isLoading} = useAppSelector(state => state.productSlice)

  useEffect(() => {
    dispatch(ProductActions.GetProductById(params.id as unknown as number))
  }, [dispatch, params.id])

  return (
    <div>
      <h1 className="title has-text-centered-mobile">Product Details</h1>
      {isLoading && <p className="title">Loading....</p>}
      <div className="columns">
        <div className="column is-half">
          <figure className="image is-4by3 is-fullwidth">
            <img src={product?.pictureUrl || productBox} alt={product?.name}/>
          </figure>
        </div>
        <div className="column is-half">
          <h3 className="title is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-centered">
            {product?.name}
          </h3>
          <hr
            className={`dropdown-divider ${viewPort === 'mobile' || viewPort === 'tablet' || viewPort === 'untilDesktop' ? 'mb-2' : 'mb-5'}`}/>
          <h4 className="title is-5" style={{color: 'purple'}}>€ {product?.price}</h4>

          {
            viewPort === 'mobile' || viewPort === 'tablet' || viewPort === 'untilDesktop' ?
              <ProductDetailsMobile product={product}/>
              :
              <table className="table is-fullwidth is-striped">
                <ProductDetailsDesktop product={product}/>
              </table>
          }

        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage