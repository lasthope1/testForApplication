import React from 'react'
import {GiFeatheredWing, GiFeather} from 'react-icons/gi'

// Components
import LoginForm from '../components/loginForm'

function LoginPage() {
  return (
    <div className='flex w-full h-screen items-center justify-center'>
        <div className='lg:w-1/3'>
            <div className='flex justify-center'>
                <GiFeatheredWing className='text-white text-8xl rounded-2xl bg-sky-500' />
            </div>
            <h3 className='flex justify-center mt-3 text-4xl font-semibold'>Login to your account</h3>
            <LoginForm />
        </div>
    </div>
  )
}

export default LoginPage
