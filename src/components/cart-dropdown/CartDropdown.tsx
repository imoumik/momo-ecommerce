import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../contexts/CartContext';
import { ICartElement } from '../../utils/InterfaceTypes';
import './cart-dropdown.styles.scss';

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