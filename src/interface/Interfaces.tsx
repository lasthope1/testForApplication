
export interface IUser {
    id: string
    email: string
    password: string
}

export interface IAuthContext {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
}