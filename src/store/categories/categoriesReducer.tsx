import { ACTION_TYPES } from '../../utils/AppConstants';
import { ICartElement } from '../../utils/InterfaceTypes';

//REDUCER INTERFACES
interface CategoriesState {
    categories: any[];
}
interface CategoriesAction {
    type: 'categories/SET_CATEGORIES',
    payload: any
}

// Initial State
const INITIAL_STATE: CategoriesState = {
    categories: []
}

//REDUCER
export const categoriesReducer = (state = INITIAL_STATE, action = {} as CategoriesAction) => {
    const { type, payload } = action;
    switch (type) {
        case ACTION_TYPES.SET_CATEGORIES:
            return { ...state, categories: payload };
        default:
            return state;
    }
};
