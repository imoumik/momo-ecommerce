import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import ProductCard from '../components/ProductCard';
import '../components/styles/shop.styles.scss';
import { IProductContext } from '../utils/InterfaceTypes';

const Shop = () => {
    const { products } = useContext<IProductContext>(ProductsContext);
    return (
        <div className='products-container'>
            {products && products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default Shop;