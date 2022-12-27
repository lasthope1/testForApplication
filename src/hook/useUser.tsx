import { useContext } from 'react';

import AuthContext, {IAuthContext} from '../context/AuthContext';
import useLocalStorage from './useLocalStorage';

export interface IUser {
    id: string
    name: string
    email: string
    authToken?: string
}

function useUser() {
    const {user, setUser} = useContext<IAuthContext>(AuthContext);
    const { setItem, getItem } = useLocalStorage();
  
    const addUser = (user: IUser) => {
      setUser(user);
      setItem('user', JSON.stringify(user));
    };
  
    const removeUser = () => {
      setUser(null);
      setItem('user', '');
    };

    // const login = (email: string, password: string) => {
    //     return getCurrentUser() 
    // } 

    // const logout = (): void => {
    //     localStorage.removeItem('user')
    //     removeUser()
    // }

    // const getCurrentUser = () => {
    //     let userInfo: string | null = ('user' in localStorage) ? localStorage.getItem('user') : ''
    //     if(typeof userInfo === 'string'){
    //         return JSON.parse(userInfo)
    //     }
    //     return JSON.parse('{}')
    // }

    return { user, addUser, removeUser };
}

export default useUser