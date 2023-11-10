import { Button } from 'semantic-ui-react';
import './styles/cart-dropdown.styles.scss';

const CartDropdown = () => {
    const handleClick = (event: any, data: any) => {
        return alert('Checkout Button Clicked')
    }

    return (
        <div className='cart-dropdown-container'>empty-message
            <div className='cart-items' />
            <Button secondary onClick={handleClick}>Go to Checkout</Button>
        </div>
    );
}

export default CartDropdown;