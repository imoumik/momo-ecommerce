import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './StyledCheckout.styles';

const Checkout = () => {

    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock><span>Product</span></HeaderBlock>
                <HeaderBlock><span>Description</span></HeaderBlock>
                <HeaderBlock><span>Quantity</span></HeaderBlock>
                <HeaderBlock><span>Price</span></HeaderBlock>
                <HeaderBlock><span>Remove</span></HeaderBlock>
            </CheckoutHeader>
            {cartItems.length === 0 ? (<h3>Your Cart is Empty</h3>) :
                cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    );
}

export default Checkout;