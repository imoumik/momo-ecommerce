import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/CategoryPreview';
import { selectCategoriesMap } from '../../store/categories/categoriesSelector';

const CategoriesPreview = () => {
    /* const { categoriesMap } = useContext<ICategoriesContext>(CategoriesContext); */
    const categoriesMap = useSelector(selectCategoriesMap)
    return (
        <>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview title={title} products={products} />
                )
            })}

        </>
    );
}

export default CategoriesPreview;