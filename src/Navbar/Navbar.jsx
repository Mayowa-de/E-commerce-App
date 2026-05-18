import React, { useContext } from 'react'

import { useState } from 'react'
import logo from '../assets/Assets/logo.png'
import cart_icon from '../assets/Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Pages/ShopContext'
export default function Navbar() {
    const [ menu, setMenu]= useState('shop')
    const {getTotalCartItems}= useContext(ShopContext)
  return (
    <nav className='  top-0 flex w-full p-2 gap-10  z-20  items-center'>
      <header className='flex  shadow-xl w-full p-0 bg-white justify-center'>
        <div className="nav-logo flex justify-start md:w-full w-xl  items-center gap-3 ">
            <img src={logo} />
            <h1 className='md:text-2xl text-xl font-bold '>K-SHOP</h1>
        </div>
        <ul className='nav-menu transition  gap-15 md:flex text-xl w-full font-bold items-center hidden '>
            <li onClick={()=>{setMenu('shop')}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu === 'shop' ? <hr className='text-red-500 rounded-md border-[1px] mt-2 transition'/> :<></>}</li>
            <li onClick={()=>{setMenu('Men')}}><Link to='/mens' style={{textDecoration:'none'}}>Mens</Link> {menu === 'Men' ? <hr className='text-red-500 rounded-md border-[1px] mt-2 transition '/> :<></>}</li>
            <li onClick={()=>{setMenu('Women')}}><Link to='/womens' style={{textDecoration:'none'}}>Womens</Link>{menu === 'Women' ? <hr className='text-red-500 rounded-md border-[1px] mt-2'/> :<></>}</li>
            <li onClick={()=>{setMenu('Kids')}}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>{menu === 'Kids' ? <hr className='text-red-500 rounded-md border-[1px] mt-2 transition-colors'/> :<></>}</li>
        </ul>
       
        <div className="nav-login-cart flex gap-10 text-xl font-bold w-full items-center justify-end ">
           <Link to='/login' style={{textDecoration:'none'}}><button className='bg-white cursor-pointer px-7 h-10 items-center rounded-3xl shadow-gray-300 border-1 border-gray-500 text-xl font-medium hidden'>Login</button></Link>
           <div className='flex relative'>
            <Link to='/cart'style={{textDecoration:'none'}} ><img src={cart_icon} alt="cart icon" width={"50px"} height={"20px"} aria-label='cart-icon'/></Link>
            <div className="nav-cart-count bg-red-500 rounded-full h-6 items-center p-2 text-9 -ml-2 justify-center flex text-white ">{getTotalCartItems()}</div>
            </div>
        </div>
        </header>
    </nav>
  )
}
