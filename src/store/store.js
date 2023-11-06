import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// middlwares 'enhance' the store by catching actions before they hit the store
const middleWares = [logger];

// each middleware has to be called in order to work
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);