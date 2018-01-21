
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

let _defaultState = {
  orderPlaced: false,
  shipmentConfirmed: false,
  products: {
   'vaccine': {img: "../assets/syringe.svg", name: 'vaccine', amount: 5, buyAmount: 3},
   'advil': {img: "../assets/pill.svg", name: 'advil', amount: 12, buyAmount: 18},
   'cot': {img: "../assets/bed.svg", name: 'cot', amount: 1, buyAmount: 1},
   'lipitor': {img: "../assets/pill.svg", name: 'lipitor', amount: 12, buyAmount: 5},
  }
};


const configureStore = (preloadedState = _defaultState) => (
  createStore(
    reducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
);

export default configureStore;
