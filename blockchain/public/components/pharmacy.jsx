import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import PharmacyItem from './pharmacy_item';
class Pharmacy extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({inventory: this.props.inventory});
    this.handleSubmit = this.handleSubmit.bind(this);
    this.user = this.props.user;
  }
  handleSubmit(e) {
    e.preventDefault();
    // Order form -- send to blockchain
    this.props.history.push(`/`);
  }
  componentWillReceiveProps(nextProps) {
    this.user = nextProps.user; 
  }

  render() {
    const listItems = this.props.inventory.map((product) => {
      return (
        <PharmacyItem product={product} />
      );
    });
    return (
      <div>
        <h1>Inventory Management</h1>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}


export default Pharmacy;