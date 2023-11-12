import { ICartElement } from '../../utils/InterfaceTypes';
import {
    CartItemContainer,
    CartItemDetails,
} from './StyledCartItem.styles';

const CartItem = ({ cartItem }: { cartItem: ICartElement }) => {
    const { imageUrl, price, name, quantity } = cartItem;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <CartItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </CartItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
