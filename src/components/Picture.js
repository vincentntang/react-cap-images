import React from "react";

const Picture = props => {
  return (
    <div
      data-location={props.gridID}
      data-id={props.index}
      onClick={props.onClick}
      style={{ padding: "10%" }}
      style={{ gridRow: props.gridRow, gridColumn: props.gridColumn }}
      className="Picture"
    >
      <img src={props.url} />
    </div>
  );
};

export default Picture;
