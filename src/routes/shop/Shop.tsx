import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';
import { fetchCategoriesStart } from '../../store/categories/categoriesAction';
// import { fetchCategoriesAsync } from '../../store/categories/categoriesAction';

const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        //SAGA
        dispatch(fetchCategoriesStart());
        // @ts-ignore THUNK
        // dispatch(fetchCategoriesAsync());
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}

export default Shop;