import { createContext, useContext, useReducer, useState } from 'react';

const UserContext = createContext();



export default function UserContextProvider({children}){
    const [userID, setUserID] = useState('');


    const value = {
        userID,
        setUserID,
    }

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}



export function useUserContext({children}) {
    const userData = useContext(UserContext)
    if(!userData){
        throw new Error('useUserContext can only be used within UserContextProvider')
    }
    return userData;
}