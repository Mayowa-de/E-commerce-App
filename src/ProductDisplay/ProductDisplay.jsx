import React, { useContext } from 'react'
//import './ProductDisplay.css'
import star_icon from '../assets/Assets/star_icon.png'
import star_dull_icon from '../assets/Assets/star_dull_icon.png'
import ShopCategory from '../Pages/ShopCategory'
import { ShopContext } from '../Pages/ShopContext'

export default function ProductDisplay(props) {
  const { product } = props
  const { addToCart } = useContext(ShopContext)
  return (
    <main className='product-display w-full flex justify-center px-12 gap-10 flex-col md:grid  items-center md:grid-cols-2'>
      <div className=" flex justify-center items-center w-full gap-3 md:grid  flex-col-reverse md:grid-cols-2 ">
        <div className="product-display-img-list flex md:grid md:grid-cols-1 gap-3 w-full  md:w-[132px] justify-center focus:scale-50">
          <img src={product.image} alt="product-1" loading='lazy' className='w-[80px] hover:border-2' />
          <img src={product.image} alt="product-2" loading='lazy' className='w-[80px] hover:border-2' />
          <img src={product.image} alt="product-3" loading='lazy' className='w-[80px] hover:border-2' />
          <img src={product.image} alt="product-4" loading='lazy' className='w-[80px] hover:border-2' />
        </div>
        <div className="product-display-img w-full  flex justify-center px-2 focus:scale-50 ">
          <img src={product.image} alt="product-5" loading='lazy' className=' h-80 w-full hover:border-2' />
        </div>
      </div>
      <div className=" flex flex-col w-full gap-5">
        <h1 className='font-bold text-4xl'>{product.name}</h1>
        <div className="product-display-right-star flex gap-2">
          <img src={star_icon} alt="star_icon-1" loading='lazy' />
          <img src={star_icon} alt="star-icon-2" loading='lazy' />
          <img src={star_icon} alt="star-icon-3" loading='lazy'/>
          <img src={star_icon} alt="star-icon-4" loading='lazy' />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices flex gap-7">
          <div className="product-display-right-price-old font-bold">${product.old_price}</div>
          <div className="product-display-right-price-new text-red-600 font-bold">${product.new_price}</div>
        </div>
        <div className="text-xl font-medium">
          A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment
        </div>
        <div className="product-display-right-size flex flex-col gap-3 ">
          <h1 className='md:text-3xl font-bold '>Select size</h1>
          <div className="p-2 flex border-[1px] border-[#ebebeb] gap-3 items-center justify-center ">
            <div className="div border-[1px] border-[#ebebeb] p-4  items-center flex">S</div>
            <div className="div border-[1px] border-[#ebebeb] p-4  flex items-center">M</div>
            <div className="div border-[1px] border-[#ebebeb] p-4  flex items-center">L</div>
            <div className="div border-[1px] border-[#ebebeb] p-4  flex items-center">XL</div>
            <div className="div border-[1px] border-[#ebebeb] p-4 items-center flex">XXl</div>
          </div>
        </div>
        <button onClick={() => { addToCart(product.id) }} className='bg-red-500 p-4 md:w-2xs text-white'>ADD TO CART</button>
        <p className='product-display-right-category  flex gap-3'> <span className='font-bold'>Category :</span>Women, T-shirt, Crop Top </p>
        <p className='product-display-right-category flex gap-3'> <span className='font-bold'>Tags :</span>Modern, Latest </p>
      </div>
    </main>
  )
}
