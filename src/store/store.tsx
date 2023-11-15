import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import { rootReducer } from './root-reducer';

const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
    //middleware signature i.e. code of middleware
    if (!action.type) { //sometimes may happen in redux thunk that there is no action, so e just pass it to next action
        return next(action);
    }
    // console.log('type: ', action.type);
    // console.log('payload: ', action.payload);
    // console.log('currentState: ', store.getState());

    next(action); // This is synchronous & fires action & reducers update then get next state
    // console.log('Next State: ', store.getState());
}

// const middleWares = [logger]; // redux-logger
const middleWares = [loggerMiddleware]; // custom logger

const composedEnhancers = compose(applyMiddleware(...middleWares));
// root-reducer
export const store = createStore(rootReducer, undefined, composedEnhancers);
