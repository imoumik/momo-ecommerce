import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import { logger } from 'redux-logger';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loggerMiddleware } from './middleware/loggerMiddleware';

//PERSISTED REDUCER - Config
const persistConfig = {
    key: 'root', //=persist the whole thing i.e. root
    storage, //generally uses browser storage by default
    blacklist: ['user'] // values that you don't want like userReducer
}
//PERSISTED REDUCER - Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [logger]; // redux-logger
//Only show logger in non-prod i.e. development env. NODE_ENV can be 'development' or 'production'
// Filters out anything if the value is boolean Eg: false && loggerM = false
const middleWares: any[] = ([process.env.NODE_ENV !== 'production' && loggerMiddleware].filter(Boolean)); // custom logger

//REDUX_DEV_TOOLS - If we're not in production and there's a window object and these dev tools
//@ts-ignore
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
// root-reducer now replaced with persistedReducer
export const store = createStore(persistedReducer, undefined, composedEnhancers);
//PERSISTED REDUCER - persistedObj
export const persistor = persistStore(store);