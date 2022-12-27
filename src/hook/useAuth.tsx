import { useEffect } from 'react';
import useUser, { IUser } from './useUser';
import useLocalStorage from './useLocalStorage';

function useAuth() {
    const { user, addUser, removeUser } = useUser();
    const { getItem } = useLocalStorage();
  
    useEffect(() => {
      const user = getItem('user');
      if(user) {
        addUser(JSON.parse(user));
      }
    }, []);
  
    const login = (user: IUser) => {
      addUser(user);
    };
  
    const logout = () => {
      removeUser();
    };
  
    return { user, login, logout };
}

export default useAuth