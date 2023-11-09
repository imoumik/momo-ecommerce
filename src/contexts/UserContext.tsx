import { createContext, useEffect, useState } from 'react';
import { CurrentUserContextType } from '../utils/InterfaceTypes';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

//as the actual value
export const UserContext = createContext<CurrentUserContextType | null>(
    {
        currentUser: null,
        setCurrentUser: () => null
    }
)

export const UserProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value: CurrentUserContextType = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            if (user) {
                await createUserDocumentFromAuth(user);// Similar to getorCreate in Java
            }
            //@ts-ignore
            setCurrentUser(user)
        })
        return unsubscribe
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
