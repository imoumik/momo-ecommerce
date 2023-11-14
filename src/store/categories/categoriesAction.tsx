import { createAction } from '../../utils/reducer.utils'
import { ACTION_TYPES } from '../../utils/AppConstants';

export const setCategoriesMap: any = (categoriesMap: any) => (createAction(ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap))
