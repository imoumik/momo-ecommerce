import { createAction } from '../../utils/reducer.utils'
import { ACTION_TYPES } from '../../utils/AppConstants';

export const setCategories: any = (categoriesArray: any) => createAction(ACTION_TYPES.SET_CATEGORIES, categoriesArray);
