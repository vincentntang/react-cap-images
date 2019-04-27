import React from "react";

const Picture = props => {
  console.log(props.index);
  return (
    <div
      data-id={props.index}
      onMouseEnter={props.onHoverIn}
      onMouseLeave={props.onHoverOut}
      className={`Picture ${props.gridClass}`}
    >
      <img src={props.url} />
    </div>
  );
};

export default Picture;
