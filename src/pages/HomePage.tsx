import {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import {IAuthContext} from '../interface/Interfaces'

function HomePage() {
  const {user} = useContext<IAuthContext>(AuthContext)
  return (
    <div>
      <>{user?.email}</>
      <>{user?.password}</>
    </div>
  )
}

export default HomePage