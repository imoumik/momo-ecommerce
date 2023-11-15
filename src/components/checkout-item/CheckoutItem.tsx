import { Icon } from 'semantic-ui-react';
import { ICartElement } from '../../utils/InterfaceTypes';
import { CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton } from './StyledCheckoutItem.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cartAction';
import { selectCartItems } from '../../store/cart/cartSelector';

const CheckoutItem = ({ cartItem }: { cartItem: ICartElement }) => {
    const { id, name, price, imageUrl, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();

    const decrementItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const incrementItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImageContainer><img src={imageUrl} alt={`${name}`} /></ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={decrementItemHandler}><Icon name='angle left' /></Arrow>
                <Value>{quantity as number}</Value>
                <Arrow onClick={incrementItemHandler}><Icon name='angle right' /></Arrow>
            </Quantity>
            <BaseSpan>{quantity} x ${price} = {(quantity as number) * price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}><Icon name='close' color='red' /></RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
