import { Dispatch, SetStateAction } from "react";
import { ACTION_TYPES } from '../../utils/AppConstants'

// An interface for our state
export interface UserState {
    currentUser: string | null;
    setCurrentUser?: Dispatch<SetStateAction<null>>;
}

// An interface for our actions
export interface UserAction {
    type: 'user/SET_CURRENT_USER';
    payload: any;
}

const INITIAL_STATE: UserState = {
    currentUser: null
}

//Reducer
export const userReducer = (state = INITIAL_STATE, action: UserAction) => {
    const { type, payload } = action;

    switch (type) {
        case ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload }
        default:
            return state;
    }
}
