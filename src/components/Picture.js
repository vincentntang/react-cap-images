import React from "react";

const Picture = props => {
  console.log(props.index);
  return (
    <div
      data-src={props.gridClass}
      data-id={props.index}
      onMouseEnter={props.onHoverIn}
      onMouseLeave={props.onHoverOut}
      onClick={props.onClick}
      className={`Picture ${props.gridClass}`}
      style={{ padding: "10%" }}
      // style={{
      //   backgroundImage: `url(${props.url})`
      // }}
    >
      <img src={props.url} />
    </div>
  );
};

export default Picture;
