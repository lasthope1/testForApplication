import {useRef, useState, useEffect} from 'react'

function RegisterForm() {
  return (
        <div className="mt-8 bg-white px-10 py-10 rounded-3xl border-2 border-gray-100 shadow-lg">
            <div className="w-full ">
                <form>
                    <div className='mt-3'>
                        <label className="text-sm font-medium text-gray-700 undefined">
                            First Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input name="firstName"
                                className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md shadow-sm bg-transparent
                                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                type="text"
                                placeholder='Enter your first name'
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <label className="text-sm font-medium text-gray-700 undefined">
                            Last Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input name="lastName"
                                className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md shadow-sm bg-transparent
                                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                type="text"
                                placeholder='Enter your last name'
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 undefined">
                            Email
                        </label>
                        <div className="flex flex-col items-start">
                            <input name="email"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 
                                focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                type="email"
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 undefined">
                            Postcode
                        </label>
                        <div className="flex flex-col items-start">
                            <input name="postcode"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 
                                focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                type="number"
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 undefined">
                            Telephone Number
                        </label>
                        <div className="flex flex-col items-start">
                            <input name="tel_num"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 
                                focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                type="telephone"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mt-7">
                        <button 
                            className="active:scale-[.98] active:duration hover:scale-[1.01] ease-in-out translate-all py-3 rounded-xl 
                            bg-gradient-to-tr from-sky-600 to-green-400 text-white text-lg font-bold">
                            SIGN UP
                        </button>
                    </div>
                </form>
                <div className="mt-4 flex justify-center items-center">
                    <p className="font-medium text-base text-gray-500">Already have an account ?</p>
                    <a className="text-sky-600 text-base font-medium ml-2 hover:underline" href="/">Sign in</a>
                </div>
            </div>
        </div>
  )
}

export default RegisterForm