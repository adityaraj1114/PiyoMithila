import React from "react";
import "./ProductCard.css";
// import myImage from "./Logo.jpg";
import Profile from "./ProductPiyo.jpg";
import { useState } from "preact/hooks";


// import { ProductImg } from "./src/Components/ProductImg";

export const ProductCard = () => {
  const [isFullSize, setIsFullSize] = useState(false);

  const handleLogoClick = () => {
    setIsFullSize(true);
  };

  const handleCancelClick = () => {
    setIsFullSize(false);
  };

  return (
    <div>
      <div className="productContainer">
        <div className="productCard">
          {/* <Logo /> */}

          <div className="productDetails">
            <div className="productName">
              <h3>1. Water Bottle (For Weeding)</h3>
            </div>

            {!isFullSize ? (
              <div className="productImg" onClick={handleLogoClick}>
                <img src={Profile} />
              </div>
            ) : (
              <div className="full-size-container">
                <img src={Profile} alt="Logo Image" />

                <button className="cancel-button" onClick={handleCancelClick}>
                  <ion-icon name="close-outline"></ion-icon>
                </button>
              </div>
            )}
          </div>

          <div className="priceMain">
            <p>50 Bottles</p>
            <div className="pricing">
              <div className="price">
                {/* <p>1 Piece</p> */}
                <h3>
                  1250 <span>1500</span>
                </h3>
              </div>

              <div className="addToCart">
                <button>Add</button>
              </div>
            </div>
          </div>

          <div className="addContact">
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
