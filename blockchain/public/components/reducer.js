import {
  RECEIVE_ORDERS,
  RECEIVE_ORDER,
  RECEIVE_SHIPMENT_CONFIRMATION,
  RECEIVE_PREDICTION
} from './actions';
import merge from 'lodash/merge';

//pass loan due date as UNIX time (Date.now())

const initialState = {

};

const reducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_SHIPMENT_CONFIRMATION:
      newState.shipmentConfirmed = true;
      return newState;
    case RECEIVE_ORDER:
      // console.log("Order: ", action.payload.order);
      //every action.payload.order key buyamount needs to be updated in state
      for(var key in action.payload.order) {
        if (!action.payload.order.hasOwnProperty(key)) continue;
        if (!newState.products.hasOwnProperty(key)) continue;
        newState.products[key].buyAmount = parseInt(action.payload.order[key].buyAmount);
      }
      // debugger
      newState.orderPlaced = true;
      return newState;
    case RECEIVE_PREDICTION:
      // console.log("Prediction: ", action.payload.order);
      for(var key in action.payload.order.products) {
        // console.log(key);
        if (!action.payload.order.products.hasOwnProperty(key)) continue;
        if (!newState.products.hasOwnProperty(key)) continue;
        newState.products[key].buyAmount = parseInt(action.payload.order.products[key].buyAmount);
      }
      return newState;
    default:
      return state;
  }
};

export default reducer;
