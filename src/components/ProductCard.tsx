import { useContext } from 'react';
import './styles/product-card.styles.scss';
import { Button } from 'semantic-ui-react';
import { CartContext } from '../contexts/CartContext';
import { ICartElement } from '../utils/InterfaceTypes';

const ProductCard = ({ product }: { product: ICartElement }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => {
        addItemToCart(product)
    }

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button inverted color='black' onClick={addProductToCart}>Add to Cart</Button>
        </div>
    );
}

export default ProductCard;