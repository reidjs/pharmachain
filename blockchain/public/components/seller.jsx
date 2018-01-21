import React from 'react';
import PharmacyContainer from './pharmacy_container';
import RaisedButton from 'material-ui/RaisedButton';

class Seller extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({tracking: ""});
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({tracking : e.target.value});
  }
  handleSubmit(e) {
    this.props.confirm(e.target.value);
  }
  render() {
    return (
      <div>
        <PharmacyContainer />
        {!this.props.shipmentConfirmed ? (
          <form>
            <input type="text" onChange={this.handleChange} placeholder="Enter tracking number" />
            <RaisedButton onClick={this.handleSubmit} label="Confirm Shipment" primary={true}/>
          </form>
        ) : (
          <div>
            Shipment placed {this.state.tracking}
          </div>
        )}
      </div>
    );  
  }
}

export default Seller;