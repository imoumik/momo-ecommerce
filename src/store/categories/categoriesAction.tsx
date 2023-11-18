import { createAction } from '../../utils/reducer.utils'
import { ACTION_TYPES } from '../../utils/AppConstants';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

// These 3 Methods are Synchronous methods & regular actions
export const fetchCategoriesStart = () =>
    createAction(ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray: any) =>
    createAction(ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error: any) =>
    createAction(ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// THUNK ACTION - IT's a Fn that returns a function
export const fetchCategoriesAsync = () => async (dispatch: any) => {

    dispatch(fetchCategoriesStart());

    try {
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }
}