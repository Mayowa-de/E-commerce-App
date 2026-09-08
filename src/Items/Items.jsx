import React from 'react'
import { Link } from 'react-router-dom'

export default function Items(props) {
  return (
    <article className={`item flex flex-col gap-4 relative ${props.className || ''}`}>
      <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)} className='block overflow-hidden'>
        <img loading="lazy" src={props.image} alt={props.name} className='aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-105'/>
      </Link>
      <p className='line-clamp-2 text-base text-[#5f625f]'>{props.name}</p>
      <div className="item-prices flex gap-4 text-base">
        <div className="item-price-new font-bold">
        ${props.new_price}
        </div>
      <div className="item-price-old line-through font-bold text-gray-500">
        ${props.old_price}
      </div>
      </div>
    </article>
  )
}
