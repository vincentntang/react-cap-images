import React, { Component } from "react";
import Picture from "./Picture";

export default class Mesh extends Component {
  state = {
    positions: this.props.startPositions,
    largeImagePosition: this.props.largeImagePosition
  };

  onHoverIn = e => {
    console.log(e, "Mouse In");
  };
  onHoverOut = e => {
    console.log(e, "Mouse Out");
  };
  render() {
    return (
      <div className="Mesh">
        {this.props.images.map((picture, index) => {
          const gridClass = this.state.positions[index];
          return (
            <Picture
              onHoverIn={this.onHoverIn}
              onHoverOut={this.onHoverOut}
              gridClass={gridClass}
              url={picture.url}
              key={picture.id}
            />
          );
        })}
      </div>
    );
  }
}
