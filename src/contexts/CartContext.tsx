import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';
import { ICartContext, ICartElement } from '../utils/InterfaceTypes';

const addCartItem = (cartItems: ICartElement[], productToAdd: ICartElement) => {
    //Find if cartItemscontains products to Add
    const existingCartItems = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    //If found, incr quantity
    if (existingCartItems) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: (cartItem?.quantity as number + 1) }
            : cartItem
        ) as ICartElement[]
    }
    //return modified array with modified/new cart items
    return [...cartItems, { ...productToAdd, quantity: 1 }] as ICartElement[]
}

const removeCartItem = (cartItems: ICartElement[], cartItemToRemove: ICartElement) => {
    //Find the cart item to remove
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
    //Check if quantity equal to 1, if it is remove that item from cart
    if (existingCartItem?.quantity as number === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
    }
    //return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: (cartItem?.quantity as number - 1) }
        : cartItem
    ) as ICartElement[]
}

const clearCartItem = (cartItems: ICartElement[], cartItemToClear: ICartElement) => (
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
)


export const CartContext = createContext<ICartContext>({
    isCartOpen: false,
    setCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartTotal: 0,
})

export const CartProvider = ({ children }: any) => {
    const [isCartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<ICartElement[]>([]);
    const addItemToCart = (productToAdd: ICartElement) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (cartItemToRemove: ICartElement) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear: ICartElement) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    }

    const [cartCount, setCartCount] = useState<number>(0);
    const [cartTotal, setCartTotal] = useState<number>(0);

    useEffect(() => {
        const newCartItems = cartItems.reduce(
            (total, cartItem) => (total + (cartItem?.quantity || 1)), 0);
        setCartCount(newCartItems)
    }, [cartItems]);

    useEffect(() => {
        const tally = cartItems.reduce(
            (total, cartItem) => (total + (cartItem.price) * (cartItem?.quantity || 1)), 0);
        setCartTotal(tally)
    }, [cartItems]);

    const value = {
        isCartOpen, setCartOpen, cartItems,
        addItemToCart, cartCount, removeItemFromCart, clearItemFromCart, cartTotal
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
