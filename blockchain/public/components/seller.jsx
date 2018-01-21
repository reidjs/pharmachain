import React from 'react';
import PharmacyContainer from './pharmacy_container';
import RaisedButton from 'material-ui/RaisedButton';
import ShipmentLog from './shipment_log';

class Seller extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({tracking: "0x934FC3232AD2", loading: true});
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleLoad = this.toggleLoad.bind(this);

  }
  handleChange(e) {
    this.setState({tracking : e.target.value});
  }
  handleSubmit(e) {
    const val = e.target.value;
    this.props.confirm(val);
  }
  toggleLoad() {
    this.state.loading ? this.setState({loading : false}) : this.setState({loading : true});
  }
  render() {
    let date = new Date();
    return (
      <div>
        <PharmacyContainer />
        {(!this.props.shipmentConfirmed) ? (
          <form>
            <input type="text" onChange={this.handleChange} placeholder="Enter tracking number" />
            <RaisedButton onClick={this.handleSubmit} label="Confirm Shipment" primary={true}/>
          </form>
        ) : (
          <ShipmentLog tracking={this.state.tracking} loading={this.state.loading} toggleLoad={this.toggleLoad}/>
        )}
      </div>
    );  
  }
}

export default Seller;