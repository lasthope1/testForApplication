import { useEffect } from 'react';
import useUser from './useUser';
import useLocalStorage from './useLocalStorage';
import {IUser} from '../interface/Interfaces';

function useAuth() {
    const { user, addUser, removeUser } = useUser();
    const { getItem } = useLocalStorage();
  
    useEffect(() => {
      const user: IUser = getItem('user');
      addUser(user)
    }, []);
  
    const setUser = (user: IUser) => {
      addUser(user);
    };
  
    const logout = () => {
      removeUser();
    };
  
    return { user, setUser, logout };
}

export default useAuth