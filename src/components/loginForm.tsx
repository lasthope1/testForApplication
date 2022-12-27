import { SyntheticEvent ,useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import AuthContext from '../context/AuthContext'
import {IAuthContext} from '../interface/Interfaces'


function LoginForm() {
    const {setUser} = useContext<IAuthContext>(AuthContext)
    const navigate = useNavigate();
    const [toggle, setToggle] = useState<boolean>(false);
    
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function submitHandler(event: SyntheticEvent){
        event.preventDefault()
        navigate('/Home')
        setUser({
            id: '',
            email: email,
            password: password
        })
    }
  return (
    <div className="mt-8 bg-white px-10 py-10 rounded-3xl border-2 border-gray-100 shadow-md">
        <div className='mt-3'>
            <form onSubmit={submitHandler}>
                <div>
                    <label className='text-lg font-medium'>Email address</label>
                    <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your email'
                        type='email'  
                        autoComplete='off'
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}  
                    />
                </div>
                <div className='mt-4'>
                    <label className='text-lg font-medium'>Password</label>
                    <div className='relative'>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Enter your password'
                            type={toggle ? 'text' : 'password'}
                            autoComplete='off'
                            value={password}
                            onChange={e => setPassword(e.target.value)}  
                            required    
                        />
                        <div className='text-2xl absolute top-6 right-5'>
                            {
                                (toggle) ? 
                                <FaEye 
                                    className='text-gray-400 hover:cursor-pointer' 
                                    onClick={() => setToggle(!toggle)}
                                /> :
                                <FaEyeSlash 
                                    className='text-gray-400 hover:cursor-pointer' 
                                    onClick={() => setToggle(!toggle)}
                                />
                            }
                        </div>
                    </div>
                </div>
                <div className='mt-8 flex flex-col'>
                    <button 
                        className='active:scale-[.98] active:duration hover:scale-[1.01] ease-in-out translate-all py-3 rounded-xl 
                        bg-gradient-to-tr from-sky-600 to-green-400 text-white text-lg font-bold shadow-lg shadow-blue-500/50' 
                    >
                        SIGN IN
                    </button>
                </div>
            </form>
            <div className='mt-3 flex justify-center items-center'>
                <p className='font-medium text-base text-gray-500'>Don't have an account ?</p>
                <a className='text-sky-600 text-base font-medium ml-2 hover:underline' href='/Register'>Sign up</a>
            </div>
        </div>
    </div>
  )
}

export default LoginForm