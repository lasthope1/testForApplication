import { createContext } from 'react';
import { IUser } from '../hook/useUser';


export interface IAuthContext {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
}

const AuthContext = createContext<IAuthContext>({
    user: null,
    setUser: () => {},
  });

export default AuthContext