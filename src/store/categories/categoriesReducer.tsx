import { ACTION_TYPES } from '../../utils/AppConstants';
import { ICartElement } from '../../utils/InterfaceTypes';

//REDUCER INTERFACES
interface CategoriesState {
    categories: any[];
    isLoading: boolean;
    error: any;
}
interface CategoriesAction {
    type: 'categories/SET_CATEGORIES'
    | 'categories/FETCH_CATEGORIES_START'
    | 'categories/FETCH_CATEGORIES_SUCCESS'
    | 'categories/FETCH_CATEGORIES_FAILED',
    payload?: any
}

// Initial State
const INITIAL_STATE: CategoriesState = {
    categories: [],
    isLoading: false,
    error: null
}

//REDUCER
export const categoriesReducer = (state = INITIAL_STATE, action = {} as CategoriesAction) => {
    const { type, payload } = action;
    switch (type) {
        case ACTION_TYPES.FETCH_CATEGORIES_START:
            return { ...state, isLoading: true };
        case ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return { ...state, categories: payload, isLoading: false };
        case ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};
