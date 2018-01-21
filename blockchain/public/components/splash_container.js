import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Splash from './splash';
import { getProfileThunk } from './actions';
import values from 'lodash/values';
const mapStateToProps = (state, ownProps) => {
  let test = 'A User';
  return {
    history: ownProps.history,
    user: test
    // user: values(state.user)
  };
};
const mapDispatchToProps = dispatch => {
  return {
  // getUser: () => dispatch(getEvents())
  login: (address) => dispatch(getProfileThunk(address))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Splash));
