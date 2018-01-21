import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitOrder, getPrediction } from './actions';
import Buyer from './buyer';
import values from 'lodash/values';

const mapStateToProps = (state, ownProps) => {
  
  return {
    orderPlaced: state.orderPlaced
  };
};
const mapDispatchToProps = dispatch => ({
  // getloans: (address) => dispatch(getLoans(address)),
  prediction: () => dispatch(getPrediction()),
  order: (payload) => dispatch(submitOrder(payload))
});
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Buyer));
