import {useRef, useState, useEffect} from 'react'

function RegisterForm() {

    const [telNum, setTelNum] = useState<string>('');
    const [postCode, setPostCode] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [accept, setAccept] = useState<boolean>(false);

  return (
        <div className="w-full mt-8 bg-white px-5 py-10 rounded-3xl border-2 border-gray-100 shadow-lg">
            <form>
                <div className='w-full flex'>
                <div className='lg:w-1/2 px-5'>
                    <h3 className='text-base font-semibold text-sky-500'>General Information</h3>
                    <div className='mt-5'>
                        <label className="text-sm font-medium text-gray-700 undefined">
                            First Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input name="firstName"
                                className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md shadow-sm bg-transparent
                                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                type="text"
                                placeholder='John'
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <label className="text-sm font-medium text-gray-700 undefined">
                            Last Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input name="lastName"
                                className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md shadow-sm bg-transparent
                                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                type="text"
                                placeholder='Smith'
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 undefined">
                            Gender
                        </label>
                        <div className='flex flex-col items-start'>
                            <select className='w-full mt-2 p-2 border-2 border-gray-300 rounded-md shadow-sm bg-transparent
                                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                                onChange={e => {setGender(e.target.value)}}
                                required
                            >
                                <option value='mail'>Mail</option>
                                <option value='femail'>Femail</option>
                                <option value='other'>Other</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 px-5'>
                    <h3 className='text-base font-semibold text-green-500'>Contact Details</h3>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 undefined">
                            Email
                        </label>
                        <div className="flex flex-col items-start">
                            <input name="email"
                                className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md shadow-sm bg-transparent
                                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                type="email"
                                placeholder='example@test.com'
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 undefined">
                            Address
                        </label>
                        <div className="flex flex-col items-start">
                            <textarea name="address"
                                className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md shadow-sm bg-transparent
                                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder='123/999 Suthep Road, Chiang Mai, Thailand'
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
                                className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md shadow-sm bg-transparent
                                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                type="text"
                                value={postCode}
                                onChange={e => { setPostCode(e.target.value.replace(/\D/, '').slice(0,5))}}
                                placeholder='00000'
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
                                className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md shadow-sm bg-transparent
                                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                type="tel"
                                pattern="[0-9]{10}"
                                placeholder='09XXXXXXXX'
                                value={telNum}
                                onChange={ e => { setTelNum(e.target.value.replace(/\D/, '').slice(0,10))}}
                                required
                            />
                        </div>
                    </div>
                </div>
                </div>
                <div className="mt-7 flex justify-center gap-2">
                    <div>
                        <input name="accept_cond" 
                            className='lg:w-5 lg:h-5 hover:cursor-pointer'
                            type="checkbox"
                            defaultChecked={accept}
                            onChange={() => setAccept(!accept)}
                            required
                        />
                    </div>
                    <label className="flex text-sm font-medium text-gray-700 undefined">
                        Accept terms and conditions
                    </label>
                </div>
                <div className="flex flex-col mt-4">
                        <button 
                            className="active:scale-[.98] active:duration hover:scale-[1.01] ease-in-out translate-all py-3 rounded-xl 
                            bg-gradient-to-tr from-sky-600 to-green-400 text-white text-lg font-bold shadow-lg shadow-blue-500/50">
                            SIGN UP
                        </button>
                    </div>
            </form>
            <div className="mt-4 flex justify-center items-center">
                <p className="font-medium text-base text-gray-500">Already have an account ?</p>
                <a className="text-sky-600 text-base font-medium ml-2 hover:underline" href="/">Sign in</a>
            </div>
        </div>
  )
}

export default RegisterForm