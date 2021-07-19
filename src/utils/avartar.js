import React, { useState } from "react";

let Avartar = (props) => {
  let styles = {
    height: props.size ? props.size : "60px",
    width: props.size ? props.size : "60px",
    borderRadius: "50%",
    backgroundColor: "transparent",
    overflow: "hidden",
    boxShadow: "0px 0px 4.5px 0px #ccc",
    position: "relative",
  };
  let imgStyles = {
    height: props.size ? props.size : "60px",
    width: props.size ? props.size : "60px",
    objectFit: "cover",
  };
  return (
    <div style={{ position: "relative" }}>
      <div style={styles}>
        <img style={imgStyles} src={props.src}></img>
      </div>
    </div>
  );
};

export default Avartar;
