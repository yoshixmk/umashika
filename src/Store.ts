import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import { createLogger } from 'redux-logger';

import { reducer } from './Reducer';

const logger: Middleware = createLogger({
  diff: true,
  collapsed: false
});

export const store: Store = createStore(reducer, applyMiddleware(logger));


