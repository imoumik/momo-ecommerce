import { Dispatch, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, SetStateAction, createContext, useState } from 'react';
import PRODUCTS from '../shop-data.json';
import { IProductContext } from '../utils/InterfaceTypes';

export const ProductsContext = createContext<IProductContext>({
    products: [],
    setProducts: () => { }
})

export const ProductsProvider = ({ children }: any) => {
    const [products, setProducts] = useState(PRODUCTS)
    const value = { products, setProducts }
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}
