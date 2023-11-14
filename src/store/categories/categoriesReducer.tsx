import { ACTION_TYPES } from "../../utils/AppConstants";
import { ICartElement } from "../../utils/InterfaceTypes";

//REDUCER INTERFACES
interface CategoriesState {
    categoriesMap: Record<any, any>;
}
interface CategoriesAction {
    type: 'categories/SET_CATEGORIES_MAP',
    payload: any
}

// Initial State
const INITIAL_STATE: CategoriesState = {
    categoriesMap: {}
}

//REDUCER
export const categoriesReducer = (state = INITIAL_STATE, action = {} as CategoriesAction) => {
    const { type, payload } = action;
    switch (type) {
        case ACTION_TYPES.SET_CATEGORIES_MAP:
            return { ...state, categoriesMap: payload }
        default:
            return state;
    }
}
