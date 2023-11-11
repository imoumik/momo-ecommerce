import { Link } from 'react-router-dom';
import ProductCard from '../product-card/ProductCard';
import { ICartElement } from '../../utils/InterfaceTypes';
import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }: { title: string, products: ICartElement[] }) => {
    return (
        <div className='category-preview-container'>
            <h2><Link to={title} className='title'>{title.toUpperCase()}</Link></h2>
            <div className='preview'>
                {products.filter((_: any, index: number) => (index < 4)).map((product: ICartElement) => {
                    return <ProductCard key={product.id} product={product} />
                })
                }
            </div>
        </div>
    )
}

export default CategoryPreview;