import { useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import { CartContext } from '../../contexts/CartContext';
import { ICartElement } from '../../utils/InterfaceTypes';
import { CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton } from './StyledCheckoutItem.styles';

const CheckoutItem = ({ cartItem }: { cartItem: ICartElement }) => {
    const { id, name, price, imageUrl, quantity } = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const decrementItemHandler = () => removeItemFromCart(cartItem);
    const incrementItemHandler = () => addItemToCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);

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
