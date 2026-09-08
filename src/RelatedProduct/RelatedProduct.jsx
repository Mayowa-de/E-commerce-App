import React from 'react'
//import './RelatedProduct.css'
import data_product from '../assets/Assets/data'
import Items from '../Items/Items'

export default function RelatedProduct() {
  return (
    <section className='relatedproduct mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:px-12 lg:px-20'>
      <div className='flex items-end justify-between border-b border-[#dedbd7] pb-4'>
      <div>
      <p className='mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b24835]'>Keep exploring</p>
      <h2 className='text-3xl font-black tracking-tight text-[#1e2524] sm:text-4xl'>Related products</h2>
      </div>
      <span className="hidden text-sm text-[#77736f] sm:block">More to love</span>
      </div>
      <div className="relatedproducts-item grid w-full grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-5">
        {data_product.map((item, i)=>{
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
        })}
      </div>
    </section>
  )
}
