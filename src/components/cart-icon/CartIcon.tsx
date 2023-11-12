import { useContext } from 'react';
// import { ReactComponent as ShoppingIcon } from '../../resources/shopping-bag.svg';
import { ICartContext } from '../../utils/InterfaceTypes';
import { CartContext } from '../../contexts/CartContext';
import { ShoppingContainer, ShoppingIcon, ItemCount } from './StyledCartIcon.styles';

const CartIcon = () => {
    const { isCartOpen, setCartOpen, cartCount } = useContext<ICartContext>(CartContext);
    return (
        <ShoppingContainer onClick={() => setCartOpen(!isCartOpen)} >
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </ShoppingContainer>
    );
}

export default CartIcon;