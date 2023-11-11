import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';
import { ICartContext, ICartElement } from '../utils/InterfaceTypes';

const addCartItem = (cartItems: ICartElement[], productToAdd: ICartElement) => {
    //Find if cartItemscontains products to Add
    const existingCartItems = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    //If found, incr quantity
    if (existingCartItems) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: (cartItem?.quantity ? (cartItem.quantity + 1) : 1) }
            : cartItem
        ) as ICartElement[]
    }
    //return modified array with modified/new cart items
    return [...cartItems, { ...productToAdd, quantity: 1 }] as ICartElement[]
}

export const CartContext = createContext<ICartContext>({
    isCartOpen: false,
    setCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0
})

export const CartProvider = ({ children }: any) => {
    const [isCartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<ICartElement[]>([]);
    const addItemToCart = (productToAdd: ICartElement) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const [cartCount, setCartCount] = useState<number>(0);

    useEffect(() => {
        const newCartItems = cartItems.reduce(
            (total, cartItem) => (total + (cartItem?.quantity || 1)), 0);
        setCartCount(newCartItems)
    }, [cartItems]);

    const value = { isCartOpen, setCartOpen, cartItems, addItemToCart, cartCount }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
