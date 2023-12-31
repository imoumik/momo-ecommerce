import { Dispatch, SetStateAction } from 'react';

export interface ICategory {
    id: number;
    title: string;
    imageUrl: string;
    route: string;
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

export interface ICategoriesContext {
    categoriesMap: Record<string, any>;
    setCategoriesMap: Dispatch<SetStateAction<Record<string, any>>>;
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
    setCartOpen: (bool: boolean) => void;
    cartItems: ICartElement[];
    addItemToCart: (productToAdd: ICartElement) => void;
    cartCount: number;
    removeItemFromCart: (cartItemToRemove: ICartElement) => void;
    clearItemFromCart: (cartItemToClear: ICartElement) => void;
    cartTotal: number;
}
