import { 
  RECEIVE_ORDERS,
  RECEIVE_ORDER
} from './actions';
import merge from 'lodash/merge';

//pass loan due date as UNIX time (Date.now())

const initialState = {
  
};

const reducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_ORDERS: 
      return newState;
    case RECEIVE_ORDER:

      return newState;
    default:
      return state;
  }
};

export default reducer;
