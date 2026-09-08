import React, { useContext, useState } from 'react'
import logo from '../assets/Assets/logo.png'
import cart_icon from '../assets/Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Pages/ShopContext'
export default function Navbar() {
    const [ menu, setMenu]= useState('shop')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const {getTotalCartItems}= useContext(ShopContext)
    const navigation = [
        { label: 'Shop', path: '/' },
        { label: 'Mens', path: '/mens' },
        { label: 'Womens', path: '/womens' },
        { label: 'Kids', path: '/kids' },
    ]

    const selectMenu = (label) => {
        setMenu(label)
        setMobileMenuOpen(false)
    }

  return (
    <nav className='sticky top-0 z-30 w-full bg-[#f5f1ee]/95 px-4 py-3 backdrop-blur sm:px-6 md:px-8'>
      <header className='mx-auto flex max-w-7xl items-center justify-between gap-4 border-b border-[#dedbd7] pb-3'>
        <Link to="/" className="nav-logo flex shrink-0 items-center gap-2 text-[#1e2524]" onClick={() => selectMenu('shop')}>
            <img src={logo} alt="K-SHOP logo" className="h-9 w-9 object-contain" />
            <h1 className='text-lg font-black tracking-tight sm:text-xl'>K-SHOP</h1>
        </Link>
        <ul className='nav-menu hidden items-center gap-8 text-sm font-bold uppercase tracking-[0.12em] text-[#5f625f] md:flex'>
            {navigation.map((item) => (
              <li key={item.label} onClick={() => selectMenu(item.label)} className='relative py-2 transition-colors hover:text-[#b24835]'>
                <Link to={item.path}>{item.label}</Link>
                {menu.toLowerCase() === item.label.toLowerCase() ? <span className='absolute -bottom-1 left-0 h-0.5 w-full bg-[#b24835]' /> : null}
              </li>
            ))}
        </ul>
        <div className="nav-actions flex items-center gap-3">
           <Link to='/cart' className='relative' aria-label="Open shopping cart">
             <img src={cart_icon} alt="" className="h-8 w-8 object-contain" />
             <span className="nav-cart-count absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b24835] px-1 text-[10px] font-bold text-white">{getTotalCartItems()}</span>
           </Link>
           <button type="button" className="flex h-10 w-10 items-center justify-center border border-[#c9b7ae] text-[#1e2524] md:hidden" aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
             <span className="text-xl leading-none">{mobileMenuOpen ? '×' : '≡'}</span>
           </button>
        </div>
        {mobileMenuOpen ? <div className="absolute left-0 right-0 top-full border-b border-[#dedbd7] bg-[#f5f1ee] px-5 py-4 shadow-lg md:hidden">
          <ul className="flex flex-col gap-1 text-sm font-bold uppercase tracking-[0.12em] text-[#5f625f]">
            {navigation.map((item) => <li key={item.label}><Link to={item.path} onClick={() => selectMenu(item.label)} className="block border-b border-[#dedbd7] py-3 last:border-0">{item.label}</Link></li>)}
          </ul>
        </div> : null}
        </header>
    </nav>
  )
}
