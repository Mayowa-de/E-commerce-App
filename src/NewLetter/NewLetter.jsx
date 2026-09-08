import React from 'react'
//import './NewLetter.css'

export default function NewLetter() {
  return (
    <section className='newsletter motion-safe:animate-[fade-up_700ms_ease-out_both] w-full max-w-7xl bg-[#e6d8d2] px-5 py-12 sm:px-8 md:px-12 lg:px-20'>
      <div className='flex flex-col gap-8 md:flex-row md:items-end md:justify-between'>
      <div className='max-w-xl'>
      <p className='mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#b24835]'>The K-SHOP edit</p>
      <h1 className='text-3xl font-black leading-tight tracking-tight text-[#1e2524] sm:text-4xl'>Get the good stuff, straight to your inbox.</h1>
      <p className='mt-3 text-base leading-7 text-[#5f625f]'>New drops, considered edits, and offers worth opening.</p>
      </div>
      <form className='flex w-full max-w-xl border border-[#c9b7ae] bg-[#f5f1ee] p-1.5 focus-within:border-[#b24835] md:w-1/2' onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input id="newsletter-email" type="email" placeholder='Your email address' className='min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-[#1e2524] outline-none placeholder:text-[#8d827b]' />
      <button type="submit" className='bg-[#1e2524] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#b24835]'>Subscribe</button>
      </form>
      </div>
    </section>
  )
}
