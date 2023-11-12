import { Link } from 'react-router-dom';
import ProductCard from '../product-card/ProductCard';
import { ICartElement } from '../../utils/InterfaceTypes';
import { CategoryPreviewContainer, Title, Preview } from './StyledCategoryPreview.styles';

const CategoryPreview = ({ title, products }: { title: string; products: ICartElement[] }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {products.filter((_: any, index: number) => (index < 4)).map((product: ICartElement) => {
                    return <ProductCard key={product.id} product={product} />
                })
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;