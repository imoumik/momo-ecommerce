import { createStore, applyMiddleware } from 'redux';
// import { logger } from 'redux-logger';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loggerMiddleware } from './middleware/loggerMiddleware';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

//PERSISTED REDUCER - Config
const persistConfig = {
    key: 'root', //=persist the whole thing i.e. root
    storage, //generally uses browser storage by default
    // blacklist: ['user'] // values that you don't want like userReducer
    whitelist: ['cart']
}

//SAGA
const sagamiddleware = createSagaMiddleware();

//PERSISTED REDUCER - Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [logger]; // redux-logger
//Only show logger in non-prod i.e. development env. NODE_ENV can be 'development' or 'production'
// Filters out anything if the value is boolean Eg: false && loggerM = false
//Passing thunk to middleware array
// const middleWares: any[] = ([process.env.NODE_ENV !== 'production' && loggerMiddleware, thunk].filter(Boolean)); // custom logger

const middleWares: any[] = ([process.env.NODE_ENV !== 'production'
    && loggerMiddleware, sagamiddleware].filter(Boolean));

//THUNK EXPLANATION
/* const thunkMiddleware = (store: any) => (next: any) => (action: any) => {
    if (typeof (action) === 'function') {
        action(dispatch); //use the fn as action thunk
    }
} */

//REDUX_DEV_TOOLS - If we're not in production and there's a window object and these dev tools
//@ts-ignore
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
// root-reducer now replaced with persistedReducer
export const store = createStore(persistedReducer, undefined, composedEnhancers);
//PERSISTED REDUCER - persistedObj
export const persistor = persistStore(store);

//SAGA RUN AFTER STORE INSTANTIATED
sagamiddleware.run(rootSaga)
