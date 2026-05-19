import React from 'react'
//import './NewLetter.css'

export default function NewLetter() {
  return (
    <main className='newsletter bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)] w-full md:w-5xl h-72 px-4 md:pl-28 justify-center flex flex-col gap-10 mt-5'>
      <div className='flex flex-col w-full'>
      <h1 className='md:text-3xl font-bold text-xl'>Get Exclusive Offers On Your Email</h1>
      <p className='md:text-3xl font-bold text-xl'>Subscribe to our newletter and stay updated</p>
      </div>
      <div className='border-[1px] rounded-3xl flex md:w-3xl mt-5 w-full'>
      <input type="email" placeholder='Your Email here..' className='p-4 rounded-3xl w-full outline-none' />
      <button className='bg-black text-white rounded-3xl border-none w-full'>Subscribe</button>
      </div>
    </main>
  )
}
