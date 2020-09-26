import React from "react";
import logo from "../images/Samsunglogo.jpg";

function ImageContainer() {
  return (
    <>
      <div className="imageContainer">
        <img src={logo} alt="product pic" />
      </div>
    </>
  );
}

export default ImageContainer;
