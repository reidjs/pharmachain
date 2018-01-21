
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

let _defaultState = {
  currentUser: null,
  creditScore: 0,
  loans: [
    {loanId: 0, paybackAmount: 5, daysRemaining: 10},
    {loanId: 1, paybackAmount: 1, daysRemaining: 12},
    {loanId: 2, paybackAmount: 1.5, daysRemaining: 18}
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
