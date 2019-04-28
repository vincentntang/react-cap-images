import React, { Component } from "react";
import Picture from "./Picture";
import { gridPositions } from "../constants/gridPositions";
import _ from "lodash";

export default class Mesh extends Component {
  // TODO - modify largeImagePosition, redundant state of truth
  state = {
    positions: this.props.startPositions,
    largePos: this.props.largePos
  };
  // onHoverIn = e => {};
  // onHoverOut = e => {};
  onClick = e => {
    // Click the class, grab it's current position
    e.persist();
    const currentID = e.target.dataset.location.substring(1);
    let { largePos } = this.state;
    console.log(currentID);
    console.log(largePos);

    // Only do things if not large image clicked
    if (currentID !== largePos) {
      // Hover Left - Scenario 1,2,3,4, X positive
      if (currentID < largePos) {
        // X = 1, B hovered
        if (largePos - currentID == 2) {
          let newState = this.state.positions;
          // 2,0,1
          newState[largePos] = "g" + (largePos + 2);
          newState[largePos - 2] = "b" + (largePos - 2);
          newState[largePos - 1] = "g" + (largePos + 3);
          this.setState({
            state: newState
          });
        }
        // X = 1, C hovered
        if (largePos - currentID == 1) {
          console.log("X1C");
        }
        // X = 2, D hovered
        if (largePos - currentID == 4) {
          console.log("X1D");
        }
        // X = 2, E hovered
        if (largePos - currentID == 3) {
          console.log("X1E");
        }
        // Hover Right - Scenario 1,2,3,4, X negative
      } else if (currentID > largePos) {
        // X = 1, B hovered
        if (currentID - largePos == 4) {
          console.log("X1B");
        }
        // X = 1, C hovered
        if (currentID - largePos == 5) {
          console.log("X1C");
        }
        // X = 2, D hovered
        if (currentID - largePos == 6) {
          console.log("X1D");
        }
        // X = 2, E hovered
        if (currentID - largePos == 7) {
          console.log("X1E");
        }
      }
    }
  };
  calculateNewPosition = e => {};
  render() {
    return (
      <div className="Mesh">
        {this.props.images.map((picture, index) => {
          let gridID = this.state.positions[index];
          let gridRow = gridPositions[gridID][0];
          let gridColumn = gridPositions[gridID][1];
          return (
            <Picture
              onClick={this.onClick}
              // onHoverIn={this.onHoverIn}
              // onHoverOut={this.onHoverOut}
              gridID={gridID}
              gridRow={gridRow}
              gridColumn={gridColumn}
              url={picture.url}
              key={picture.id}
              index={index}
            />
          );
        })}
      </div>
    );
  }
}
