import React from "react";
import "./ScannerPage.css";
import { Logo } from "../Components/Logo";
// import Scanner from "./Scanner.jpg";
// import myImage from "./Logo.jpg";

export const ScannerPage = () => {
  return (
    <div>
      <div className="scannerPage">
      <button className="cancelBtn">
        <ion-icon name="close-outline"></ion-icon>
      </button>
        <div className="scannerProfile">
          {/* <Logo /> */}

          <div className="circularProfile">
            {/* <img src={Scanner} alt="Profile Image" /> */}
          </div>

          <div className="ownerDetail">
          <h2>Shivam Kumar</h2>
          <p>(Owner)</p>
          <h3>Shivam Fancy Cracker</h3>
          </div>

          <div className="scProfileImg">
            {/* <img src={Scanner} alt="Profile Image" /> */}
          </div>
        </div>

        <div className="addToHomeScreen">
          <p>Add to Home Screen</p>
        </div>

        <div className="addToGallery">
          <p>Add to Gallery</p>
        </div>

      </div>
      
    </div>
  );
};
