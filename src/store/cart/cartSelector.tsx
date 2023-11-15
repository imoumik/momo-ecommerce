import { createSelector } from 'reselect';
import { ICartElement } from '../../utils/InterfaceTypes';
import { CartState } from './cartReducer';

const selectCartReducer = (state: { cart: CartState; }) => state.cart;

export const selectCartItems = createSelector([selectCartReducer],
    (cart: { cartItems: ICartElement[]; }) => cart.cartItems
)

export const selectIsCartOpen = createSelector([selectCartReducer],
    (cart: { isCartOpen: boolean; }) => cart.isCartOpen
)

export const selectCartCount = createSelector([selectCartItems],
    (cartItems: ICartElement[]) => (
        cartItems.reduce((total, cartItem) => (total + (cartItem?.quantity || 1)), 0)
    )
)

export const selectCartTotal = createSelector([selectCartItems],
    (cartItems: ICartElement[]) => (
        cartItems.reduce((total, cartItem) => (total + (cartItem.price) * (cartItem?.quantity || 1)), 0)
    )
)
