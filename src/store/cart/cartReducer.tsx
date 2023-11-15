import { ACTION_TYPES } from '../../utils/AppConstants';
import { ICartElement } from '../../utils/InterfaceTypes';

//REDUCER INTERFACES
export interface CartState {
    isCartOpen: boolean;
    cartItems: ICartElement[];
}
interface CartAction {
    type: 'cart/SET_CART_ITEMS' | 'cart/SET_IS_CART_OPEN',
    payload: any
}

// Initial State
const INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: []
}

//REDUCER
export const cartReducer = (state = INITIAL_STATE, action = {} as CartAction) => {
    const { type, payload } = action;
    switch (type) {
        case ACTION_TYPES.SET_CART_ITEMS:
            // Example const payload = {cartItems,cartCount,cartTotal}
            return {
                ...state,
                cartItems: payload
            }
        case ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            return state;
    }
}
