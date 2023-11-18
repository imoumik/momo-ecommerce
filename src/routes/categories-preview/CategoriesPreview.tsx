import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/CategoryPreview';
import { selectCategoriesMap, selectCategoriesisLoading } from '../../store/categories/categoriesSelector';
import Spinner from '../../components/spinner/Spinner';

const CategoriesPreview = () => {
    /* const { categoriesMap } = useContext<ICategoriesContext>(CategoriesContext); */
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesisLoading)
    return (
        <>
            {isLoading ?
                <Spinner />
                : (Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview title={title} products={products} />
                    )
                }))
            }


        </>
    );
}

export default CategoriesPreview;