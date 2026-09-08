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
  if (!product) {
    return (
      <main className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-5 px-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b24835]">Product unavailable</p>
        <h1 className="text-3xl font-black text-[#1e2524]">We could not find that piece.</h1>
        <a href="/" className="bg-[#1e2524] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white">Back to shop</a>
      </main>
    )
  }
  return (
    <main className="w-full">
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Descriptionbox/>
      <RelatedProduct />
    </main>
  )
}
