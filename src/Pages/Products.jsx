import React from "react";
import { Container2 } from "../Components/Container2";
import "./Products.css";
import { ProductCard } from "../Components/ProductCard";

export const Products = () => {
  return (
    <div className="products">


      <div className="productHeading">
        <div className="shareIcon">
          <span>
          <ion-icon name="bag-handle-outline"></ion-icon>
          </span>
        </div>
        <h2>Top 10 Products</h2>
      </div>


      <div className="productSection">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />


      </div>

      <div className="moreBtn">

        <div className="viewMore">
            <button>View More</button>
          </div>
      </div>


    </div>
  );
};
