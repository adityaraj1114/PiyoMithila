import React, { useState } from "react";
import "./Scanner.css";
import ScannerImg from "./Scanner.jpg";
import "./ScannerPage.css";

// import { ScannerPage } from "./ScannerPage";

export const Scanner = () => {
  const shareData = {
    title: "My Portfolio",
    text: "Check out my Shop here:",
    url: "https://piyomithila.netlify.app/",
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log("Portfolio shared successfully!");
      } else {
        console.log("Web Share API is not supported in your browser.");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const [isFullSize, setIsFullSize] = useState(false);

  const handleLogoClick = () => {
    setIsFullSize(true);
  };

  const handleCancelClick = () => {
    setIsFullSize(false);
  };

  return (
    <div>
      <div className="scannerCard">
        <div className="scannerContainer">
          <div className="scannerBox">
            {!isFullSize ? (
              <div onClick={handleLogoClick}>
                <a
                  // onClick={handleLogoClick}
                  style={{
                    display: "block",
                    cursor: "pointer",
                  }}
                  className="iconScan"
                >
                  <span>
                    <ion-icon name="scan-outline"></ion-icon>
                  </span>
                </a>
              </div>
            ) : (
              <div>
                <div className="scannerPage">
                  <button className="cancelBtn" onClick={handleCancelClick}>
                    <ion-icon name="close-outline"></ion-icon>
                  </button> 
                  <div className="scannerProfile">
                    <div className="circularProfile">
                      <img src={ScannerImg} alt="Profile Image" />
                    </div>

                    <div className="ownerDetail">
                      <h2>Vijay Kumar</h2>
                      <p>(Owner)</p>
                      <h3>Piyo Mithila</h3>
                    </div>

                    <div className="scProfileImg">
                      <img src={ScannerImg} alt="Profile Image" />
                    </div>
                  </div>

                  <div className="addToHomeGallery">
                  <div className="addToHomeScreen">
                    <p>Add to Home Screen</p>
                  </div>

                  <div className="addToGallery">
                    <p>Add to Gallery</p>
                  </div>
                  </div>
                </div>
                {/* <button className="cancelBtn">
                  <ion-icon name="close-outline"></ion-icon>
                </button> */}
              </div>
            )}
            {/* ----------------------------------------------------Share--------------------------- */}
            <a
              onClick={handleShare}
              href="##"
              target="_blank"
              rel="noopener noreferrer"
              className="iconScan"
            >
              <span>
                <ion-icon name="share-outline"></ion-icon>
              </span>
            </a>
          </div>
          {/* ----------------------------------------------------Add to Contact--------------- */}
          <div className="addToContact">
            <a
              href="##"
              target="_blank"
              rel="noopener noreferrer"
              className="iconAdd"
            >
              <p>Add To Contact</p>
              <span>
                <ion-icon name="add-circle-outline"></ion-icon>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
