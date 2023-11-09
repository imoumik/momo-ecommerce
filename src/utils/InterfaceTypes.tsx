import { NextOrObserver, User } from "firebase/auth";
import { SetStateAction } from "react";

export interface ICategory {
    id: number;
    title: string;
    imageUrl: string;
}
export interface ISignInFormFields {
    email: string;
    password: string;
}

export interface ISignUpFormFields extends ISignInFormFields {
    displayName: string;
    confirmPassword: string;
}

export interface CurrentUserContextType {
    currentUser: string | null;
    setCurrentUser: null | React.Dispatch<SetStateAction<null>> | React.Dispatch<React.SetStateAction<User>>;
}

