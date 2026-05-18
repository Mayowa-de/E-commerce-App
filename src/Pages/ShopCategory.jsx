import React, { useContext } from 'react'
//import './ShopCategory.css'
import {ShopContext} from './ShopContext'
import dropdown_icon from '../assets/Assets/dropdown_icon.png'
import Items from '../Items/Items'

export default function ShopCategory(props) {
  const {all_product} =useContext(ShopContext)
  return (
    <div className='shop-category flex flex-col justify-center w-full items-center'>
      <img className='shop-category-banner' src={props.banner} alt="banner image"  />
      <div className="gap-[600px] flex justify-center w-full px-4 p-3 mt-10  items-center">
        <p className='font-medium'>
          <span className='font-medium'>Showing 1-12</span> out  of 36 Products
        </p>
        <div className="shopcategory-sort flex items-center gap-3 border-[1px] rounded-3xl p-2">
          Sort by <img src={dropdown_icon} alt="image of list of item" className='w-3 h-2'/>
        </div>
      </div>
      <div className="shopcategory-products grid grid-cols-3 gap-5 w-5xl justify-center">
        {all_product.map((item, i)=>{
                if(props.category === item.category){
                  return (
                    <Items
                      key={i}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      new_price={item.new_price}
                      old_price={item.old_price}
                    />
                  );
                }else{
                  return null;
                }
        })}
      </div>
      <div className="shopcategory-loadmore border-none rounded-4xl px-6 mb-7 p-4 mt-10 justify-center text-black/50 bg-[#ededed] flex">
        Explore more
      </div>
    </div>
  )
}
