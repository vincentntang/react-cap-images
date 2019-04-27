import React, { Component } from "react";
import Picture from "./Picture";
import { gridPositions } from "../constants/gridPositions";
import _ from "lodash";

export default class Mesh extends Component {
  state = {
    positions: this.props.startPositions,
    largeImagePosition: this.props.largeImagePosition
  };
  // onHoverIn = e => {
  //   e.persist();
  //   // console.log(e.target.dataset.id);
  // };
  // onHoverOut = e => {
  //   e.persist();
  // };
  onClick = e => {
    // Click the class, grab it's current position
    e.persist();
    const currentID = e.target.dataset.location;

    // Check if anything should happen, if the distance between large image
    // is 2 spaces or less
    if (currentID.charAt(0) == "g") {
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
