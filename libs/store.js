import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const middlewares = [];

export default () =>
  createStore(
    reducers,
    undefined,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
