import React from 'react';
import PharmacyContainer from './pharmacy_container';
import RaisedButton from 'material-ui/RaisedButton';

class Buyer extends React.Component {
  constructor(props) {
    super(props);
    // this.placeOrder = this.placeOrder.bind(this);
  }

  render() {
    return (
      <div className="container">
        <h1>Inventory Management</h1>  
        <ul className="labels">
          <li>Product</li>
          <li>Inventory</li>
          <li>Order</li>
        </ul>
        <PharmacyContainer />
      </div>
    );
  }
}

export default Buyer;