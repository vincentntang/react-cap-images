import React, { Component } from "react";
import Picture from "./Picture";

export default class Mesh extends Component {
  state = {
    positions: this.props.startPositions,
    largeImagePosition: this.props.largeImagePosition
  };
  onHoverIn = e => {
    e.persist();
    console.log(e.target.dataset.id);
  };
  onHoverOut(e) {
    e.persist();
    // console.log(e, "Mouse Out");
  }
  render() {
    return (
      <div className="Mesh">
        {this.props.images.map((picture, index) => {
          let gridClass = this.state.positions[index];
          return (
            <Picture
              onHoverIn={this.onHoverIn}
              onHoverOut={this.onHoverOut}
              gridClass={gridClass}
              url={picture.url}
              key={picture.id}
              index={picture.id}
            />
          );
        })}
      </div>
    );
  }
}
