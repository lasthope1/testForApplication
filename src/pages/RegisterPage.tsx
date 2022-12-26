import React from 'react'
import RegisterForm from '../components/registerForm'

function RegisterPage() {
  return (
    <div className='flex w-full h-screen items-center justify-center'>
        <div className='lg:w-1/3'>
            <RegisterForm />
        </div>
    </div>
  )
}

export default RegisterPage