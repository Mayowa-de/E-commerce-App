import React from 'react'
import new_collections from '../assets/Assets/new_collections'
import Items from '../Items/Items'


export default function NewCollections() {
  return (
    <main className='NewCollections w-full max-w-7xl justify-center items-center flex flex-col gap-5 px-5 sm:px-8 md:px-12 lg:px-20'>
      <div className='flex w-full items-end justify-between border-b border-[#dedbd7] pb-4'>
        <div>
          <p className='mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b24835]'>Curated for now</p>
          <h1 className='text-3xl font-black tracking-tight text-[#1e2524] sm:text-4xl'>New collections</h1>
        </div>
        <span className='hidden text-sm text-[#77736f] sm:block'>Scroll to discover</span>
      </div>
      <div className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0">
        {new_collections.map((item, i)=>{
              return (
                <Items
                  key={i}
                  className='min-w-[78vw] snap-start sm:min-w-[42vw] md:min-w-0'
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              )
        })}
      </div>
    </main>
  )
}
