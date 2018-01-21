import React from 'react';

class InventoryAI extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p id="p1" draggable="true"
                   ondragstart="dragstart_handler(event);">
        <img src="../../assets/csv-img.svg" width="5%"></img>
        </p>

      </div>
    );
  }
}

export default InventoryAI;
