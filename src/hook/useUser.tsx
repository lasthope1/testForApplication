import { useContext } from 'react';

import AuthContext from '../context/AuthContext';
import useLocalStorage, {initialState} from './useLocalStorage';
import { IAuthContext, IUser } from '../interface/Interfaces';

function useUser() {
    const {user, setUser} = useContext<IAuthContext>(AuthContext);
    const { setItem, getItem } = useLocalStorage();
  
    const addUser = (userInfo: IUser) => {
      setUser(userInfo);
      setItem('user', userInfo);
    };
  
    const removeUser = () => {
      setUser(null);
      setItem('user', initialState);
    };

    return { user, addUser, removeUser };
}

export default useUser