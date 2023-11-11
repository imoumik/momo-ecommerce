import { Dispatch, SetStateAction } from 'react';

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
    setCurrentUser: Dispatch<SetStateAction<null>>;
}

export interface IProductContext {
    products: ICartElement[];
    setProducts: Dispatch<SetStateAction<ICartElement[]>>;
}

export interface ICartElement {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity?: number;
}

export interface ICartContext {
    isCartOpen: boolean;
    setCartOpen: Dispatch<SetStateAction<boolean>>;
    cartItems: ICartElement[];
    addItemToCart: (productToAdd: ICartElement) => void;
    cartCount: number;
}

