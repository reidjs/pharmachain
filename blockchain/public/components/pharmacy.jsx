import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';
import PharmacyItem from './pharmacy_item';
import RaisedButton from 'material-ui/RaisedButton';

import InventoryAI from "./inventory_ai/inventory"

class Pharmacy extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.calcSum = this.calcSum.bind(this);
    this.state = ({total: 0, inventory: this.props.inventory});
    this.user = this.props.user;
    console.log(this.props.location);
  }
  handleSubmit(e) {
    e.preventDefault();
    // Order form -- send to blockchain
    this.props.history.push(`/`);
  }
  componentWillReceiveProps(nextProps) {
    this.user = nextProps.user;
  }
  componentWillMount() {
    this.calcSum();
  }

  updateValue(product, amount) {
    // console.log('update');
    if (amount < 0) return 0;
    // let newInventory = Object.assign({}, this.state.inventory);
    let newInventory = merge({}, this.state.inventory);
    // newInventory[product].amount = amount;
    // console.log(newInventory);
    newInventory[product].buyAmount = amount;
    this.setState({total: this.state.total, inventory: newInventory},this.calcSum);
    // this.calcSum();
  }
  calcSum() {
    let result = 0;
    for(var key in this.state.inventory) {
      if (!this.state.inventory.hasOwnProperty(key)) continue;
      // console.log(this.state.inventory[key]);
      result += parseInt(this.state.inventory[key].buyAmount);
    }
    // console.log(result);
    this.setState({total: parseInt(result)});
    // return result;
  }
  render() {
    let buttonText = "Place Order";
    if (this.props.orderPlaced) {
      buttonText = "Cancel Order";
    }
    const listItems = this.props.invarray.map((product) => {
      return (
        <PharmacyItem path={this.props.location.pathname} product={product} buyAmount={this.state.inventory[product.name].buyAmount} updateValue={this.updateValue} />
      );
    });

    return (
      <div>

        <ul id="products">
          {listItems}
        </ul>
        total {this.state.total}
        {(this.props.location.pathname === "/pharmacy") ? (
          <RaisedButton onClick={()=>{this.props.order(this.state.inventory);}} label={buttonText} secondary={this.props.orderPlaced}/>
        ) : (
          <div></div>
        )}

        <InventoryAI/>

      </div>
    );
  }
}


export default Pharmacy;
