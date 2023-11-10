import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../resources/shopping-bag.svg';
import './styles/cart-icon.styles.scss';
import { ICartContext } from '../utils/InterfaceTypes';
import { CartContext } from '../contexts/CartContext';

const CartIcon = () => {
    const { isCartOpen, setCartOpen } = useContext<ICartContext>(CartContext);
    return (
        <div className='cart-icon-container' onClick={() => setCartOpen(!isCartOpen)} >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;