import './styles/product-card.styles.scss';
import { Button } from 'semantic-ui-react';

const ProductCard = ({ product }: any) => {
    const { name, price, imageUrl } = product;
    console.log(product)
    const handleClick = (event: any, data: any) => {
        return alert('Button Clicked')
    }

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button inverted={true} color={'black'} onClick={handleClick}>Add to Cart</Button>
        </div>
    );
}

export default ProductCard;