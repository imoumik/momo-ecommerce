import { useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import { CartContext } from '../../contexts/CartContext';
import { ICartElement } from '../../utils/InterfaceTypes';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }: { cartItem: ICartElement }) => {
    const { id, name, price, imageUrl, quantity } = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const decrementItemHandler = () => removeItemFromCart(cartItem);
    const incrementItemHandler = () => addItemToCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'><img src={imageUrl} alt={`${name}`} /></div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='arrow' onClick={decrementItemHandler}><Icon name='angle left' /></span>
                <span className='value'>{quantity as number}</span>
                <span className='arrow' onClick={incrementItemHandler}><Icon name='angle right' /></span>
            </span>
            <span className='price'>{quantity} x ${price} = {(quantity as number) * price}</span>
            <div className='remove-button' onClick={clearItemHandler}><Icon name='close' color='red' /></div>
        </div>
    );
};

export default CheckoutItem;
