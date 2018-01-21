
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

let _defaultState = {
  products: [
   {name: 'advil', amount: 5},
   {name: 'gloves', amount: 1}
  ]
};


const configureStore = (preloadedState = _defaultState) => (
  createStore(
    reducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
);

export default configureStore;
