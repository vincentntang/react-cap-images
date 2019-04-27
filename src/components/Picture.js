import React from "react";

const Picture = props => {
  return (
    <div
      onMouseEnter={props.onHoverIn}
      onMouseLeave={props.onHoverOut}
      className={`Picture ${props.gridClass}`}
    >
      <img src={props.url} className />
    </div>
  );
};

export default Picture;
