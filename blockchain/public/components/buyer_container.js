import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitOrder } from './actions';
import Buyer from './buyer';
import values from 'lodash/values';

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.orderPlaced
  };
};
const mapDispatchToProps = dispatch => ({
  // getloans: (address) => dispatch(getLoans(address)),
  order: (payload) => dispatch(submitOrder(payload))
});
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Buyer));
