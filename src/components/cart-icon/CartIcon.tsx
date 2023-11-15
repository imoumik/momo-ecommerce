// import { ReactComponent as ShoppingIcon } from '../../resources/shopping-bag.svg';
import { ShoppingContainer, ShoppingIcon, ItemCount } from './StyledCartIcon.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cartSelector';
import { setIsCartOpen } from '../../store/cart/cartAction';

const CartIcon = () => {
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
    const dispatch = useDispatch();

    return (
        <ShoppingContainer onClick={() => dispatch(setIsCartOpen(!isCartOpen))} >
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </ShoppingContainer>
    );
}

export default CartIcon;