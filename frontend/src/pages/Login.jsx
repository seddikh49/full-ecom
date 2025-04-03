import React from 'react'
import { useState } from 'react';

const Login = () => {
  
  const handleSubmit = (e)=> {
    e.preventDefault()
  }

  const [currentState, setCurrentState] = useState('Login');
  return (
    <div className='flex justify-center items-center'>
      <form onSubmit={handleSubmit} action="" className='w-96 flex-col gap-5 text-gray-800 flex justify-center items-center'>
        <div className='inline-flex justify-between items-center font-bold font-poppins mb-5 gap-1'>
          <h1 className='text-4xl'>{currentState} </h1>
          <hr className='w-8 h-[2px] '></hr>
        </div>
        {currentState === 'Sign Up' ? <input placeholder='Name' className='border font-poppins px-3 py-2 w-96' required
         type="text" /> : ('')}
        <input placeholder='Email' className='border font-poppins px-3 py-2 w-full ' type="email" required />
        <input placeholder='Password' required className='border font-poppins px-3 py-2 w-full' type="password" />
        <div className='flex font-poppins cursor-pointer justify-between  w-full'>
          <p>Forgot your password?</p>
          {currentState === 'Login' ? (
          <p onClick={()=> setCurrentState('Sign Up')} className='cursor-pointer underline font-poppins'>Create account</p>
        ):(
          <p onClick={()=> setCurrentState('Login')} className='cursor-pointer underline font-poppins'>Login</p>
        )}
        </div>
        <button className='bg-black text-2xl text-amber-50 px-10 py-1 font-poppins'>{currentState === 'Login' ? 'Login' : 'Sign Up'}</button>
      </form>
    </div>
  )
}

export default Login
