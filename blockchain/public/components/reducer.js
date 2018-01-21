import { 
  RECEIVE_ORDERS,
  RECEIVE_ORDER,
  RECEIVE_SHIPMENT_CONFIRMATION
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
      newState.orderPlaced = true;
      return newState;
    default:
      return state;
  }
};

export default reducer;
