import { createContext, useEffect, useState } from 'react';
// import PRODUCTS from '../shop-data.json';
import { ICategoriesContext } from '../utils/InterfaceTypes';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext<ICategoriesContext>({
    categoriesMap: {},
    setCategoriesMap: () => { }
})

export const CategoriesProvider = ({ children }: any) => {
    // const [products, setProducts] = useState(PRODUCTS)
    const [categoriesMap, setCategoriesMap] = useState({});

    /* Running it once only to create values in DB, or else it will try to set everytime
    useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA);
    }, []);
 */
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap)
        };
        getCategoriesMap();
    }, []);
    const value = { categoriesMap, setCategoriesMap }
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}
