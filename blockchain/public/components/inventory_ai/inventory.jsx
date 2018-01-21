import React from 'react';

class InventoryAI extends React.Component {
  constructor(props) {
    super(props);
  }

  dragstart_handler(ev) {
    // Set the drag effect to copy
    ev.dataTransfer.dropEffect = "copy";
  }

  dragover_handler(e) {
     // Add the target element's id to the data transfer object
     e.preventDefault();
     e.dataTransfer.dropEffect = "move";
   }

   drop_handler(e) {
     e.preventDefault();
     let data = e.dataTransfer.getData("text");
     console.log(document.getElementById(data));
     e.target.appendChild(document.getElementById("p1"));
   }

  render() {
    return (
      <div>
        <p id="p1" draggable="true"
                   onDragStart={this.dragstart_handler}>
        <img src="../../assets/csv-img.svg" width="5%"></img>
        </p>

        <div onDrop={this.drop_handler}
             onDragOver={this.dragover_handler}
             className="drag-to-this-box">
        </div>

      </div>
    );
  }
}

export default InventoryAI;
