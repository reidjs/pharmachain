import React from 'react';
import { Link } from 'react-router-dom';
import PharmacyItem from './pharmacy_item';
class Pharmacy extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.calcSum = this.calcSum.bind(this);
    this.state = ({total: 0, inventory: this.props.inventory});
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
  componentWillMount() {
    this.calcSum();
  }

  updateValue(product, amount) {
    // console.log('update');
    if (amount < 0) return 0;
    let newInventory = Object.assign({}, this.state.inventory);
    newInventory[product].amount = amount;
    // console.log(newInventory);
    this.setState({total: this.state.total, inventory: newInventory});
    this.calcSum();
  }
  calcSum() {
    let result = 0;
    for(var key in this.state.inventory) {
      if (!this.state.inventory.hasOwnProperty(key)) continue;
      // console.log(this.state.inventory[key]);
      result += parseInt(this.state.inventory[key].amount);
    }
    // console.log(result);
    this.setState({total: parseInt(result)});
    // return result;
  }
  render() {
    const listItems = this.props.invarray.map((product) => {
      return (
        <PharmacyItem product={product} buyAmount={this.state.inventory[product.name].amount} updateValue={this.updateValue} />
      );
    });
    return (
      <div>
        
        <ul id="products">
          {listItems}
        </ul>
        total {this.state.total}
      </div>
    );
  }
}


export default Pharmacy;