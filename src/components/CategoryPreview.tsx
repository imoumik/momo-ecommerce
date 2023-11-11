import ProductCard from './ProductCard';
import { ICartElement } from '../utils/InterfaceTypes';
import './styles/category-preview.styles.scss';
import { Link } from 'react-router-dom';

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