import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Breadcrums/Breadcrum'
import ProductDisplay from '../ProductDisplay/ProductDisplay'
import Descriptionbox from '../Descriptionbox/Descriptionbox'
import RelatedProduct from '../RelatedProduct/RelatedProduct'

export default function Product() {
  const {all_product} = useContext(ShopContext)
  const {productId} =useParams()
  const product =all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Descriptionbox/>
      <RelatedProduct />
    </div>
  )
}
