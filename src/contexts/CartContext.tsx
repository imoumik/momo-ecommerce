import { createContext, useState } from 'react';
import { ICartContext } from '../utils/InterfaceTypes';

export const CartContext = createContext<ICartContext>({
    isCartOpen: false,
    setCartOpen: () => { }
})

export const CartProvider = ({ children }: any) => {
    const [isCartOpen, setCartOpen] = useState(false)
    const value = { isCartOpen, setCartOpen }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
