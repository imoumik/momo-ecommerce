import { createAction } from '../../utils/reducer.utils'
import { ACTION_TYPES } from '../../utils/AppConstants';
import { ICartElement } from '../../utils/InterfaceTypes';


const addCartItem = (cartItems: ICartElement[], productToAdd: ICartElement) => {
    //Find if cartItemscontains products to Add
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    //If found, incr quantity
    if (existingCartItem) {
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

export const setIsCartOpen: any = (isCartOpen: boolean) => (createAction(ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen))

export const addItemToCart = (cartItems: ICartElement[], productToAdd: ICartElement) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
export const removeItemFromCart = (cartItems: ICartElement[], cartItemToRemove: ICartElement) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems: ICartElement[], cartItemToClear: ICartElement) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

