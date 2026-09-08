import React from 'react'
//import './Breadcrum.css'
import arrow_icon from '../assets/Assets/breadcrum_arrow.png'
import { Link } from 'react-router-dom'

export default function Breadcrum(props) {
  const {product} = props
  if (!product) return null
  return (
    <div className='breadcrum mx-auto flex w-full max-w-7xl flex-wrap items-center gap-2 px-5 py-5 text-xs uppercase tracking-[0.12em] text-[#77736f] sm:px-8 md:px-12 lg:px-20'>
      <Link to='/' className="transition-colors hover:text-[#b24835]">Home</Link>
      <img src={arrow_icon} alt="" className='h-3 w-3' />
      <Link to='/' className="transition-colors hover:text-[#b24835]">Shop</Link>
      <img src={arrow_icon} alt="" className='h-3 w-3'/>
      <span>{product.category}</span>
      <img src={arrow_icon} alt="" className='h-3 w-3'/>
      <span className="max-w-[16rem] truncate text-[#1e2524]">{product.name}</span>
    </div>
  )
}
