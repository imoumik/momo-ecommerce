import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../contexts/CategoriesContext';
import ProductCard from '../components/ProductCard';
import { ICartElement } from '../utils/InterfaceTypes';
import './styles/category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState<ICartElement[]>(categoriesMap[category as string]);

    useEffect(() => {
        setProducts(categoriesMap[category as string])
    }, [category, categoriesMap]);

    return (
        <>
            <h2 className='category-title'>{(category as string).toUpperCase()}</h2>
            <div className='category-container'>
                {products && products.map((product: ICartElement) => <ProductCard key={product.id} product={product} />)}
            </div>
        </>
    )
}

export default Category;