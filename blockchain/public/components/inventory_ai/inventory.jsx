import React from 'react';

class InventoryAI extends React.Component {
  constructor(props) {
    super(props);
    this.restartCsvDrag = this.restartCsvDrag.bind(this);

  }

  restartCsvDrag() {
    let item = document.getElementById("p1");
    item.innerHTML = "<img src='../../assets/csv-img.svg' width='5%''></img>";

    let dropBox = document.getElementsByClassName("drag-to-this-box")[0];
    dropBox.innerHTML = '<span class="drag-here">Drag Here</span>';

    let inventory = document.getElementsByClassName("drag-feature")[0];
    inventory.prepend(item);
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
     let item = document.getElementById("p1");
     item.innerHTML = "<img src='../../assets/gear-loading.svg' width='30%''></img>"
     document.getElementsByClassName("drag-here")[0].classList.toggle('hidden');
     e.target.appendChild(item);

     setTimeout(function () { item.innerHTML = "<p>42 Items</p>"; },1000);

   }

  render() {
    return (
      <div className="inventory">
        <div className="drag-feature">
          <p id="p1" draggable="true"
                     onDragStart={this.dragstart_handler}>
          <img src="../../assets/csv-img.svg" width="5%"></img>
          </p>

          <div onDrop={this.drop_handler}
               onDragOver={this.dragover_handler}
               className="drag-to-this-box">
               <span className="drag-here">Drag Here</span>
          </div>
        </div>
        <a  onClick={this.restartCsvDrag}
            className="new-prediction">New Prediction</a>

      </div>
    );
  }
}

export default InventoryAI;
