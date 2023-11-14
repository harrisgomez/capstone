import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// middlwares 'enhance' the store by catching actions before they hit the store
const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    thunk
].filter(Boolean);

// This condition uses an enhanced devtools compose if we're not in production, there is a windows object, and devtools (chrome) exists
const composeEnhancer = (process.env.NODE_ENV !== 'production'
    && window
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

// each middleware has to be called in order to work
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);