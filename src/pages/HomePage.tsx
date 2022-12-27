import {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import {IAuthContext} from '../interface/Interfaces'
import {RiAccountCircleFill} from 'react-icons/ri'

function HomePage() {
  const {user} = useContext<IAuthContext>(AuthContext)
  return (
    <div className='flex flex-col w-full h-screen items-center justify-center'>
      <RiAccountCircleFill className='w-1/5 h-1/5 text-sky-300'/>
      <div className='mt-5 px-10 py-10 lg:w-1/3 border-2 border-gray-300 rounded-lg shadow-lg'>
        <h1 className='text-base font-bold mb-4'>User Information</h1>
        <div className='flex gap-2'>
          <h3 className='text-base'>Email address : </h3>
          {user?.email}
        </div>
        <div className='flex gap-2'>
          <h3 className='text-base'>Password : </h3>
          {user?.password}
        </div>
      </div>
    </div>
  )
}

export default HomePage