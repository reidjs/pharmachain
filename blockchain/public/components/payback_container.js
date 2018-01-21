import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Payback from './payback';
import { getLoans, paybackLoan } from './actions';

const mapStateToProps = (state, ownProps) => {
  let loans = state.loans;
  let user = state.currentUser;
  
  // getLoans(user.address);
  return {
    user,
    loans
  };
};
const mapDispatchToProps = dispatch => ({
  // getloans: (address) => dispatch(getLoans(address)),
  payback: (loanId) => dispatch(paybackLoan(loanId))
});
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Payback));
