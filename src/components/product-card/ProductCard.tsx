import { ICartElement } from '../../utils/InterfaceTypes';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { ProductCardContainer, Footer, Name, Price } from './StyledProductCard.styles';
import { selectCartItems } from '../../store/cart/cartSelector';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cartAction';

const ProductCard = ({ product }: { product: ICartElement }) => {
    const { name, price, imageUrl } = product;

    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, product))
    }

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add to Cart
            </Button>
        </ProductCardContainer>
    );
}

export default ProductCard;