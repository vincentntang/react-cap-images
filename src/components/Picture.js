import React from "react";

const Picture = props => {
  return (
    <div className="Picture">
      <img src={props.url} className />
    </div>
  );
};

export default Picture;
