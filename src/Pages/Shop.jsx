import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import Offers from '../Offers/Offers'
import NewCollections from '../NewCollections/NewCollections'
import NewLetter from '../NewLetter/NewLetter'

export default function Shop() {
  return (
    <div className='flex w-full justify-center items-center flex-col gap-10 '>
      <Hero/>
      <Popular className='flex px-2'/>
      <Offers/>
      <NewCollections className='flex px-2'/>
      <NewLetter/>
    </div>
  )
}
