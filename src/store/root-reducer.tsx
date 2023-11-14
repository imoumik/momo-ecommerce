import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { categoriesReducer } from './categories/categoriesReducer';
// root-reducer
export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer
})
