import { useState } from 'react'

export default function LoginSignup() {
  const [mode, setMode] = useState('signup')
  const isLogin = mode === 'login'

  return (
    <main className='loginsignup flex min-h-[calc(100vh-80px)] w-full items-center justify-center bg-[#e6d8d2] px-5 py-12 sm:px-8'>
      <form className="loginsignup-container w-full max-w-lg bg-[#f5f1ee] p-6 shadow-xl sm:p-10" onSubmit={(event) => event.preventDefault()}>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b24835]">Welcome to K-SHOP</p>
        <h1 className='text-3xl font-black tracking-tight text-[#1e2524] sm:text-4xl'>{isLogin ? 'Welcome back' : 'Create your account'}</h1>
        <p className="mt-3 text-sm leading-6 text-[#77736f]">{isLogin ? 'Sign in to pick up where you left off.' : 'Save your favourites and stay close to every new drop.'}</p>
        <div className="loginsignup-field mt-8 flex flex-col gap-4">
          {!isLogin && <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#1e2524]">Your name<input type="text" placeholder='Your name' className='border border-[#c9b7ae] bg-white p-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#b24835]' /></label>}
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#1e2524]">Email address<input type="email" placeholder='you@example.com' className='border border-[#c9b7ae] bg-white p-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#b24835]' /></label>
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#1e2524]">Password<input type="password" placeholder={isLogin ? 'Your password' : 'Create a password'} className='border border-[#c9b7ae] bg-white p-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#b24835]' /></label>
        </div>
        {isLogin && <button type="button" className="mt-4 text-left text-xs font-bold text-[#b24835] underline">Forgot your password?</button>}
        <button type="submit" className='mt-7 w-full bg-[#1e2524] p-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#b24835]'>{isLogin ? 'Log in' : 'Continue'}</button>
        <p className='loginsignup-login mt-5 text-sm text-[#77736f]'>{isLogin ? 'New to K-SHOP?' : 'Already have an account?'} <button type="button" onClick={() => setMode(isLogin ? 'signup' : 'login')} className='font-bold text-[#b24835] underline'>{isLogin ? 'Create an account' : 'Login here'}</button></p>
        {!isLogin && <label className="loginsignup-agree mt-6 flex gap-3 text-xs leading-5 text-[#77736f]"><input type="checkbox" className="mt-1 accent-[#b24835]" /> <span>By continuing I agree to the terms of use and privacy policy.</span></label>}
      </form>
    </main>
  )
}
