import React from 'react';

class ShipmentLog extends React.Component {
  constructor(props) {
    super(props);

  }
  componentWillMount() {
    setTimeout(this.props.toggleLoad, 1000);
  }

  componentWillReceiveProps(newProps) {
    this.props = newProps;
  }
  
  render() {
    let date = new Date();
    if (this.props.loading) {
      return (
        <div>spinner here</div>
      );
    } else {
      return (
        <div>
        {date.toLocaleDateString()}, {date.toLocaleTimeString()}: Shipment Confirmed. Tracking Number: {this.props.tracking}
        </div>
      );
    }
  }
}

export default ShipmentLog;