import { createContext } from 'react';
import { IAuthContext, IUser } from '../interface/Interfaces';

const AuthContext = createContext<IAuthContext>({
    user: null,
    setUser: () => {},
});

export default AuthContext