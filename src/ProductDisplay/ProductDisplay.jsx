import React, { useContext } from 'react'
//import './ProductDisplay.css'
import star_icon from '../assets/Assets/star_icon.png'
import star_dull_icon from '../assets/Assets/star_dull_icon.png'
import { ShopContext } from '../Pages/ShopContext'
import { useState } from 'react'

export default function ProductDisplay(props) {
  const { product } = props
  const { addToCart } = useContext(ShopContext)
  const [selectedSize, setSelectedSize] = useState('M')
  const sizes = ['S', 'M', 'L', 'XL', 'XXL']
  return (
    <main className='product-display mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 pb-14 sm:px-8 md:grid-cols-2 md:px-12 lg:gap-16 lg:px-20'>
      <div className="flex flex-col-reverse gap-4 sm:grid sm:grid-cols-[72px_1fr] sm:items-start">
        <div className="product-display-img-list flex gap-3 overflow-x-auto sm:grid sm:grid-cols-1">
          {[1, 2, 3, 4].map((thumbnail) => <img key={thumbnail} src={product.image} alt={`${product.name} view ${thumbnail}`} loading='lazy' className='h-20 w-16 shrink-0 object-cover opacity-75 transition-opacity hover:opacity-100 sm:h-[92px] sm:w-[72px]' />)}
        </div>
        <div className="product-display-img flex min-h-[360px] items-center justify-center bg-[#e6d8d2] px-4 sm:min-h-[540px]">
          <img src={product.image} alt={product.name} loading='lazy' className='max-h-[520px] w-full object-contain transition-transform duration-500 hover:scale-105' />
        </div>
      </div>
      <div className="flex w-full flex-col gap-5 py-2">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b24835]">New season / {product.category}</p>
        <h1 className='text-3xl font-black leading-tight tracking-tight text-[#1e2524] sm:text-4xl'>{product.name}</h1>
        <div className="product-display-right-star flex gap-2">
          <img src={star_icon} alt="star_icon-1" loading='lazy' />
          <img src={star_icon} alt="star-icon-2" loading='lazy' />
          <img src={star_icon} alt="star-icon-3" loading='lazy'/>
          <img src={star_icon} alt="star-icon-4" loading='lazy' />
          <img src={star_dull_icon} alt="" />
          <p className="text-sm text-[#77736f]">4.8 (122 reviews)</p>
        </div>
        <div className="product-display-right-prices flex items-baseline gap-4 border-b border-[#dedbd7] pb-5">
          <div className="product-display-right-price-new text-2xl font-black text-[#b24835]">${product.new_price}</div>
          <div className="product-display-right-price-old text-sm text-[#77736f] line-through">${product.old_price}</div>
        </div>
        <div className="text-base leading-7 text-[#5f625f]">
          A lightweight, easy-to-style piece designed for comfortable everyday wear, with a polished silhouette that works from day to night.
        </div>
        <div className="product-display-right-size flex flex-col gap-3">
          <h2 className='text-sm font-bold uppercase tracking-[0.12em] text-[#1e2524]'>Select size <span className="font-normal normal-case tracking-normal text-[#77736f]">({selectedSize})</span></h2>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => <button type="button" key={size} onClick={() => setSelectedSize(size)} className={`flex h-12 w-12 items-center justify-center border text-sm font-bold transition-colors ${selectedSize === size ? 'border-[#1e2524] bg-[#1e2524] text-white' : 'border-[#c9b7ae] text-[#1e2524] hover:border-[#b24835]'}`}>{size}</button>)}
          </div>
        </div>
        <button onClick={() => addToCart(product.id)} className='mt-2 w-full bg-[#1e2524] p-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#b24835]'>Add to cart</button>
        <div className="flex flex-col gap-2 border-t border-[#dedbd7] pt-4 text-sm text-[#77736f]">
          <p><span className='font-bold text-[#1e2524]'>Category:</span> {product.category}</p>
          <p><span className='font-bold text-[#1e2524]'>Tags:</span> Modern, Latest</p>
        </div>
      </div>
    </main>
  )
}
