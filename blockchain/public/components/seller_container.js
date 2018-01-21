import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { confirmShipment } from './actions';
import Seller from './seller';
import values from 'lodash/values';

const mapStateToProps = (state, ownProps) => {
  
  return {
    shipmentConfirmed: state.shipmentConfirmed
  };
};
const mapDispatchToProps = dispatch => ({
  // getloans: (address) => dispatch(getLoans(address)),
  confirm: (payload) => dispatch(confirmShipment(payload))
});
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Seller));