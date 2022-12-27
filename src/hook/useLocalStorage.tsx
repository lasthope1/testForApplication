import {useState} from 'react'
import {IUser} from '../interface/Interfaces';

export const initialState: IUser = {
    id: '',
    email: '',
    password: ''
}

function useLocalStorage() {
    const [value, setValue] = useState<IUser>(initialState);

    const setItem = (key: string, userInfo: IUser) => {
        localStorage.setItem(key, JSON.stringify(userInfo))
        setValue(userInfo);
    };
  
  
    const getItem = (key: string) => {
      const userInfo: string | null = (key in localStorage) ? localStorage.getItem(key) : '{}'

      if(typeof userInfo === 'string'){
        setValue(JSON.parse(userInfo))
        return JSON.parse(userInfo)
      }

      return initialState;
    };
  
    const removeItem = (key: string) => {
      localStorage.removeItem(key);
      setValue(initialState);
    };

  return { value, setItem, getItem, removeItem }
}

export default useLocalStorage