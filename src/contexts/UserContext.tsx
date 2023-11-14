import { Dispatch, SetStateAction, createContext, useEffect, useReducer, useState } from 'react';
import { CurrentUserContextType } from '../utils/InterfaceTypes';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';
import { User } from 'firebase/auth';

//as the actual value
export const UserContext = createContext<CurrentUserContextType | null>(
    {
        currentUser: null,
        setCurrentUser: () => null
    }
)

// An interface for our state
interface UserState {
    currentUser: string | null;
    setCurrentUser?: Dispatch<SetStateAction<null>>;
}

// An interface for our actions
interface UserAction {
    type: 'SET_CURRENT_USER';
    payload: any;
}

//Reducer
const userReducer = (state: UserState, action: UserAction) => {
    const { type, payload } = action;
    console.log('dispatched action:', action)

    switch (type) {
        case 'SET_CURRENT_USER':
            return {
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled Type ${type} in userReducer`)
    }
}

const INITIAL_STATE: UserState = {
    currentUser: null
}

/* export const UserProvider = ({ children }: any) => {
    // const [currentUser, setCurrentUser] = useState(null);

    //Reducer Usage
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const { currentUser } = state;
    console.log('currentUser:', currentUser)
    const setCurrentUser: Dispatch<SetStateAction<null>> = (user) => dispatch({
        type: 'SET_CURRENT_USER',
        payload: user
    })
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
} */
