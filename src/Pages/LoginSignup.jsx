import React from 'react'
//import './LoginSignUp.css'

export default function LoginSignup() {
  return (
    <div className='loginsignup flex justify-center mt-10 mb-10'>
      <div className="loginsignup-container bg-white/55 w-full p-4 justify-center items-center shadow-2xl gap-5 flex flex-col">
        <h1 className='text-3xl font-bold mt-5 mb-5'>Sign Up</h1>
        <div className="loginsignup-field flex flex-col gap-5 w-full">
          <input type="text" placeholder='Your Name' className='p-3  border-[1px] border-black' />
          <input type="email" placeholder='Email Address' className='p-3  border-[1px] border-black' />
          <input type="Password" placeholder='Password' className='p-3  border-[1px] border-black'/> 
        </div>
        <button className='bg-red-600 text-white w-full p-4'>Continue</button>
        <p className='loginsignup-login font-medium'>Already have an account? <a href='#' className='underline'><span>Login here</span></a></p>
        <div className="loginsignup-agree flex gap-3">
          <input type="checkbox"  name='' id=''/>
          <p>By continuing i agree to the terms of use & policy</p>
        </div>
      </div>
    </div>
  )
}
