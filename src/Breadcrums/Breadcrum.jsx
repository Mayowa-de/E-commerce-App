import React from 'react'
//import './Breadcrum.css'
import arrow_icon from '../assets/Assets/breadcrum_arrow.png'
import { Link } from 'react-router-dom'

export default function Breadcrum(props) {
  const {product} = props
  return (
    <div className='breadcrum text-[#5e5e5e] flex m-5 md:ml-12 gap-3 justify-center items-center text-sm cursor-pointer'>
      <Link to='/' style={{textDecoration:'none'}}>HOME</Link> <img src={arrow_icon} alt="arrow icon" width={"20px"} height={"20px"} className='h-3 w-3' /><Link to='/'> SHOP</Link> <img src={arrow_icon} alt="arrow icon" className='h-3 w-3'/>{product.category} <img src={arrow_icon} alt="arrow icon" className='h-3 w-3'/>{product.name}
    </div>
  )
}
