import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

class Borrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({borrowAmount: 0});
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
    // let loan = {
    //   address: this.user.address,
    //   amount: this.state.borrowAmount,
    //   ratePercent: 5,
    //   durationDays: 30
    // };
    // this.props.newLoan(loan);
    this.props.newLoan(this.state.borrowAmount);
    this.props.history.push(`/payback`);
  }
  componentWillReceiveProps(nextProps) {
    this.user = nextProps.user; 
  }

  render() {
    return (
      <div id="background">
        <div className="borrow-container">
        <h1>Borrow Money</h1>
        <h2>Balance: {this.user ? this.user.coinsIn : 'Loading'}</h2>
          <form className="borrow-form-container">
            <h2>Public key [{this.user ? this.user.address : ''}]'s SugarScore is {this.user ? this.user.reputation : ''}</h2>
            <input 
              type="number" 
              name="borrowAmount" 
              onChange={this.handleBorrowAmountChange} 
              value={this.state.borrowAmount} 
              placeholder="ETH"
            />
            <RaisedButton onClick={this.handleSubmit} primary={true} label="Borrow"/>
          </form>
        </div>
      </div>
    );
  }
}


export default Borrow;