import React from 'react'
//import './RelatedProduct.css'
import data_product from '../assets/Assets/data'
import Items from '../Items/Items'

export default function RelatedProduct() {
  return (
    <main className='relatedproduct px-12 flex flex-col gap-10 justify-center items-center mt-16 mb-12'>
      <div className='flex flex-col gap-5'>
      <h1 className='text-4xl font-bold'>Related Products</h1>
      <hr className='w-72 border-gray-500'/>
      </div>
      <div className="relatedproducts-item flex gap-3 w-full flex-col md:grid-cols-3 md:grid">
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
    </main>
  )
}
