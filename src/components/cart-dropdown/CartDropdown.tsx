import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../contexts/CartContext';
import { ICartElement } from '../../utils/InterfaceTypes';
import Button from '../button/Button';
import { CartItems, EmptyMessage, StyledCartDropdown } from './StyledCartDropdown.styles';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <StyledCartDropdown>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((cartItem: ICartElement) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </StyledCartDropdown>
    );
}

export default CartDropdown;