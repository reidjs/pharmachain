import React from 'react';
import PharmacyContainer from './pharmacy_container';
import RaisedButton from 'material-ui/RaisedButton';

class Seller extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({tracking: "0x934FC3232AD2"});
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
    let date = new Date();
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
            {date.toLocaleDateString()}, {date.toLocaleTimeString()}: Shipment Confirmed. Tracking Number: {this.state.tracking}.
          </div>
        )}
      </div>
    );  
  }
}

export default Seller;