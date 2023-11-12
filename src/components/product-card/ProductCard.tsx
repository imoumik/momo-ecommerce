import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { ICartElement } from '../../utils/InterfaceTypes';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { ProductCardContainer, Footer, Name, Price } from './StyledProductCard.styles';

const ProductCard = ({ product }: { product: ICartElement }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => {
        addItemToCart(product)
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