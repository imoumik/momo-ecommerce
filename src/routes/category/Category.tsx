import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/product-card/ProductCard';
import { ICartElement } from '../../utils/InterfaceTypes';
import { CategoryTitle, CategoryContainer } from './StyledCategory.styles';
import { selectCategoriesMap } from '../../store/categories/categoriesSelector';

const Category = () => {
    const { category } = useParams();
    /* const { categoriesMap } = useContext(CategoriesContext); */
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState<ICartElement[]>(categoriesMap[category as string]);

    useEffect(() => {
        setProducts(categoriesMap[category as string])
    }, [category, categoriesMap]);

    return (
        <>
            <CategoryTitle>{(category as string).toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products && products.map((product: ICartElement) => <ProductCard key={product.id} product={product} />)}
            </CategoryContainer>
        </>
    )
}

export default Category;