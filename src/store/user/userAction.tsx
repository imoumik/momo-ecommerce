import { createAction } from '../../utils/reducer.utils'
import { ACTION_TYPES } from '../../utils/AppConstants';

export const setCurrentUser: any = (user: any) => (createAction(ACTION_TYPES.SET_CURRENT_USER, user))
