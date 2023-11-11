import { useContext } from 'react';
import { CategoriesContext } from '../contexts/CategoriesContext';
import { ICategoriesContext } from '../utils/InterfaceTypes';
import CategoryPreview from '../components/CategoryPreview';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext<ICategoriesContext>(CategoriesContext);
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