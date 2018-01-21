import { 
  RECEIVE_USER, 
  RECEIVE_LOANS,
  RECEIVE_BORROW_REQUEST,
  PAYBACK_LOAN
} from './actions';
import merge from 'lodash/merge';

//pass loan due date as UNIX time (Date.now())

const initialState = {
  
};

const reducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_USER: 
      newState = Object.assign({}, state); 
      newState.currentUser = action.user;
      newState.creditScore = 654;
      return newState;
    case RECEIVE_BORROW_REQUEST:
      newState = Object.assign({}, state); 
      let amount = action.payload.amount;
      let days = action.payload.days;
      //we need to find a new id for this 
      let maxId = 0;
      for(let i = 0; i < state.loans.length; i++) {
        if (state.loans.loanId > maxId) {
          maxId = state.loans.loanId;
        }
      }
      let newLoan = {
        loanId: maxId + 1, 
        paybackAmount: amount,
        days: days
      };
      // debugger
      newState.loans.push(newLoan);
      return newState;
    case RECEIVE_LOANS:
      newState = Object.assign({}, state); 
      newState.loans = action.loans;
      return newState;
    case PAYBACK_LOAN:
      newState = Object.assign({}, state); 
      let loans = newState.loans;
      let result = [];
      //REALLY slow. In future receive hash of loans instead of array
      for(let i = 0; i < loans.length; i++) {
        if (loans[i].loanId !== action.payload)
          result.push(loans[i]);
      }
      newState.loans = result;
      // delete newState.loans[action.payload];
      return newState;
    default:
      return state;
  }
};

export default reducer;
