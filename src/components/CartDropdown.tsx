import { Button } from 'semantic-ui-react';
import './styles/cart-dropdown.styles.scss';
import CartItem from './CartItem';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ICartElement } from '../utils/InterfaceTypes';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <div className='cart-dropdown-container'>empty-message
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((cartItem: ICartElement) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <Button secondary onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    );
}

export default CartDropdown;