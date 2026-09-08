import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'
import dropdown_icon from '../assets/Assets/dropdown_icon.png'
import Items from '../Items/Items'

export default function ShopCategory(props) {
  const {all_product} =useContext(ShopContext)
  const products = all_product.filter((item) => props.category === item.category)
  const categoryName = props.category === 'kid' ? 'Kids' : `${props.category.charAt(0).toUpperCase()}${props.category.slice(1)}'s`
  return (
    <main className='shop-category mx-auto flex w-full max-w-7xl flex-col items-center px-5 pb-16 sm:px-8 md:px-12 lg:px-20'>
      <img className='h-44 w-full object-cover object-center sm:h-64 md:h-80' src={props.banner} alt={`${categoryName} collection banner`} />
      <div className="mt-8 flex w-full flex-col items-start justify-between gap-4 border-b border-[#dedbd7] pb-4 sm:flex-row sm:items-center">
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#b24835]">The collection</p>
          <h1 className="text-3xl font-black tracking-tight text-[#1e2524]">{categoryName}</h1>
          <p className='mt-1 text-sm text-[#77736f]'>Showing {products.length} products</p>
        </div>
        <button type="button" className="flex items-center gap-3 border border-[#c9b7ae] bg-[#f5f1ee] px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#1e2524]">
          Sort by <img src={dropdown_icon} alt="" className='h-2 w-3'/>
        </button>
      </div>
      <div className="shopcategory-products grid w-full grid-cols-2 gap-x-4 gap-y-8 pt-8 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {products.map((item) => (
          <Items
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <button type="button" className="mt-12 border border-[#c9b7ae] px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#1e2524] transition-colors hover:border-[#b24835] hover:bg-[#b24835] hover:text-white">
        Explore more
      </button>
    </main>
  )
}
