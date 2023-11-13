import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const loggerMiddleware = store => next => action => {
    if (!action.type) {
        return next(action);
    }

    console.log('type', action.type);
    console.log('payload', action.payload);
    console.log('currentState', store.getState());

    next(action);
};

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// middlwares 'enhance' the store by catching actions before they hit the store
const middleWares = [loggerMiddleware];

// each middleware has to be called in order to work
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);