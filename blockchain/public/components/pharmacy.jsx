import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

class Pharmacy extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({inventory: this.props.inventory});
    this.handleBorrowAmountChange = this.handleBorrowAmountChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.user = this.props.user;
  }
  handleBorrowAmountChange(e) {
    e.preventDefault();
    this.setState({borrowAmount: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    // Order form -- send to blockchain
    this.props.newLoan(this.state.borrowAmount);
    this.props.history.push(`/payback`);
  }
  componentWillReceiveProps(nextProps) {
    this.user = nextProps.user; 
  }

  render() {
    return (
      <div>
        hello
        {this.state.inventory}
      </div>
    );
  }
}


export default Pharmacy;