import { createContext, useReducer } from 'react';
import { ICartContext, ICartElement } from '../utils/InterfaceTypes';
import { createAction } from '../utils/reducer.utils';

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

//REDUCER INTERFACES
interface CartState {
    isCartOpen: boolean;
    cartItems: ICartElement[];
    cartCount: number;
    cartTotal: number;
}
interface CartAction {
    type: 'SET_CART_ITEMS' | 'SET_IS_CART_OPEN',
    payload: any
}

// Initial State
const INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

//REDUCER
const cartReducer = (state: CartState, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_CART_ITEMS':
            // Example const payload = {cartItems,cartCount,cartTotal}
            return {
                ...state,
                ...payload
            }
        case 'SET_IS_CART_OPEN':
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`Unhandled Type ${type} in cartReducer`)
    }
}

export const CartProvider = ({ children }: any) => {
    // const [isCartOpen, setCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState<ICartElement[]>([]);

    const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (cartItems: ICartElement[]) => {
        /* Generate new cart count */
        const newCartCount = cartItems.reduce(
            (total, cartItem) => (total + (cartItem?.quantity || 1)), 0);

        /* Generate new cart total */
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => (total + (cartItem.price) * (cartItem?.quantity || 1)), 0);

        /* dispatch new actions with payload = { newCartItems, newCartTotal, newCartCount }*/
        const payload = {
            cartItems,
            cartCount: newCartCount,
            cartTotal: newCartTotal
        }
        dispatch(createAction('SET_CART_ITEMS', payload))
    }

    const addItemToCart = (productToAdd: ICartElement) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }
    const removeItemFromCart = (cartItemToRemove: ICartElement) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (cartItemToClear: ICartElement) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems);
    }

    const setCartOpen = (bool: boolean) => {
        dispatch(createAction('SET_IS_CART_OPEN', bool));
    }

    // const [cartCount, setCartCount] = useState<number>(0);
    // const [cartTotal, setCartTotal] = useState<number>(0);

    // useEffect(() => {
    //     const newCartItems = cartItems.reduce(
    //         (total, cartItem) => (total + (cartItem?.quantity || 1)), 0);
    //     setCartCount(newCartItems)
    // }, [cartItems]);

    // useEffect(() => {
    //     const tally = cartItems.reduce(
    //         (total, cartItem) => (total + (cartItem.price) * (cartItem?.quantity || 1)), 0);
    //     setCartTotal(tally)
    // }, [cartItems]);

    const value = {
        isCartOpen, setCartOpen, cartItems,
        addItemToCart, cartCount, removeItemFromCart, clearItemFromCart, cartTotal
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
