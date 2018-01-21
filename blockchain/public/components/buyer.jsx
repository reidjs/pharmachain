import React from 'react';
import PharmacyContainer from './pharmacy_container';
import RaisedButton from 'material-ui/RaisedButton';
import { submitOrder } from './actions';
var clickValue = "Place Order";

class Buyer extends React.Component {
  constructor(props) {
    super(props);
    // this.placeOrder = this.placeOrder.bind(this);
  }

  render() {
    let buttonText = "Place Order";
    if (this.props.orderPlaced) {
      buttonText = "Cancel Order";
    }
    return (
      <div>
        <h1>Inventory Management</h1>  
        <PharmacyContainer />
        <RaisedButton onClick={()=>{this.props.order('hello')}} label={buttonText} secondary={this.props.orderPlaced}/>
      </div>
    );
  }
};

export default Buyer;