import React from "react";
import "./Container2.css";
import "./Logo.css";
import myImage from "./LogoPiyo.jpg";
import { useState } from "preact/hooks";

export const Logo = () => {
  const [isFullSize, setIsFullSize] = useState(false);

  const handleLogoClick = () => {
    setIsFullSize(true);
  };

  const handleCancelClick = () => {
    setIsFullSize(false);
  };

  return (
    <div>
      {!isFullSize ? (
        <div className="profileImg" onClick={handleLogoClick}>
          <img src={myImage} alt="Logo Image" />
        </div>
      ) : (
        <div className="full-size-container">
          <img src={myImage} alt="Logo Image" />

          <button className="cancel-button" onClick={handleCancelClick}>
          <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
      )}

      {/* <div className="profileImg">
        <img src={myImage} alt="Logo Image" />
      </div> */}
    </div>
  );
};
