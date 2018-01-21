import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import PharmacyItem from './pharmacy_item';
class Pharmacy extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = ({inventory: this.props.inventory});
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.user = this.props.user;
    // debugger
  }
  handleSubmit(e) {
    e.preventDefault();
    // Order form -- send to blockchain
    this.props.history.push(`/`);
  }
  componentWillReceiveProps(nextProps) {
    this.user = nextProps.user; 
  }

  updateValue(product, amount) {
    console.log('update');
    let newInventory = Object.assign({}, this.state.inventory);
    newInventory[product].amount = amount;
    console.log(newInventory);
    this.setState({inventory: newInventory});
  }
  render() {
    const listItems = this.props.invarray.map((product) => {
      return (
        <PharmacyItem product={product} buyAmount={this.state.inventory[product.name].amount} updateValue={this.updateValue} />
      );
    });
    return (
      <div>
        <h1>Inventory Management</h1>
        {this.state.inventory['advil'].amount}
        <ul id="products">
          {listItems}
        </ul>
        <RaisedButton label="Confirm Order"/>
        <button onClick={()=>{this.updateValue('advil', 2)}}>button</button>
      </div>
    );
  }
}


export default Pharmacy;