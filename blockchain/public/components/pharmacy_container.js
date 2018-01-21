import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitOrder, getPrediction } from './actions';
import Pharmacy from './pharmacy';
import values from 'lodash/values';

const mapStateToProps = (state, ownProps) => {
  const user = 'Test user';
  // const inventory  = [
  //   ['aspirin', 5], 
  //   ['gloves', 1],
  //   ['cots', 2]];
  let inventory = state.products;
  let invarray = values(state.products);
  // const inventory = [
  //   {
  //     name: 'vaccine',
  //     amount: 5
  //   },
  //   {
  //     name: 'gloves',
  //     amount: 10
  //   }
  // ];
  let location = ownProps.location;
  return {
    user,
    location,
    orderPlaced: state.orderPlaced,
    inventory, 
    invarray
  };
};
const mapDispatchToProps = dispatch => ({
  // getloans: (address) => dispatch(getLoans(address)),
  predict: () => dispatch(getPrediction()),
  order: (payload) => dispatch(submitOrder(payload))
});
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Pharmacy));
