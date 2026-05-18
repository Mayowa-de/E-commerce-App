import React from 'react'
import { Link } from 'react-router-dom'

export default function Items(props) {
  return (
    <div className='item hover:scale-105 hover:transition flex flex-col gap-5 relative'>
      <Link to={`/product/${props.id}`}><img  onClick={window.scrollTo(0,0)} src={props.image} alt="" className='w-2xl'/></Link> 
      <p className='text-xl text-gray-600'>{props.name}</p>
      <div className="item-prices flex gap-10 text-32">
        <div className="item-price-new font-bold">
        ${props.new_price}
        </div>
      <div className="item-price-old line-through font-bold text-gray-500">
        ${props.old_price}
      </div>
      </div>
    </div>
  )
}
