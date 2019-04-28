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
    const currentID = e.target.dataset.location;
    let { largePos } = this.state;
    console.log(currentID);
    console.log(largePos);

    // Check if anything should happen, if the distance between large image
    if (currentID.charAt(0) == "g") {
      // Hover Left - Scenario 1,2,3,4, X positive
      if (currentID < largePos) {
        // X = 1, B hovered
        if (largePos - currentID == 2) {
          console.log("hey");
        }
        // X = 1, C hovered
        // X = 2, D hovered
        // X = 2, E hovered
        // Hover Right - Scenario 1,2,3,4, X negative
      } else if (currentID > largePos) {
        // X = 1, B hovered
        // X = 1, C hovered
        // X = 2, D hovered
        // X = 2, E hovered
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
              onHoverIn={this.onHoverIn}
              onHoverOut={this.onHoverOut}
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
