import React from "react";

const Picture = props => {
  return (
    <div
      data-location={props.gridID}
      data-id={props.index}
      // onMouseEnter={props.onHoverIn}
      // onMouseLeave={props.onHoverOut}
      onClick={props.onClick}
      style={{ padding: "10%" }}
      style={{ gridRow: props.gridRow, gridColumn: props.gridColumn }}
      className="Picture"
      // className={`Picture ${props.gridClass}`}
      // style={{
      //   backgroundImage: `url(${props.url})`
      // }}
    >
      <img src={props.url} />
    </div>
  );
};

export default Picture;
