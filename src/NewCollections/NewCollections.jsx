import React from 'react'
import new_collections from '../assets/Assets/new_collections'
import Items from '../Items/Items'


export default function NewCollections() {
  return (
    <div className='NewCollections w-full justify-center items-center flex flex-col gap-5 px-2'>
      <h1 className='text-3xl font-bold'>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collections flex flex-col md:gap-5 w-full  md:w-5xl md:grid md:grid-cols-3">
        {new_collections.map((item, i)=>{
              return (
                <Items
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              )
        })}
      </div>
    </div>
  )
}
