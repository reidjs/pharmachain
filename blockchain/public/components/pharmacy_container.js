import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitOrder } from './actions';
import Pharmacy from './pharmacy';

const mapStateToProps = (state, ownProps) => {
  const user = 'Test user';
  // const inventory  = [
  //   ['aspirin', 5], 
  //   ['gloves', 1],
  //   ['cots', 2]];
  let inventory = state.products;
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
  return {
    user,
    inventory
  };
};
const mapDispatchToProps = dispatch => ({
  // getloans: (address) => dispatch(getLoans(address)),
  order: (payload) => dispatch(submitOrder(payload))
});
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Pharmacy));
