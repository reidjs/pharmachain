import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Borrow from './borrow';
import { borrowRequest, getProfileThunk  } from './actions';

const mapStateToProps = (state, ownProps) => {
  let user = state.currentUser;
  let creditScore = state.creditScore;
  return {
    user, 
    creditScore
  };
};
const mapDispatchToProps = dispatch => {
  dispatch(getProfileThunk(0x6F54ABC78124EFCB12097ABCDEF));
  return {
    newLoan: (loan) => dispatch(borrowRequest(loan))
  };
};
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Borrow));
