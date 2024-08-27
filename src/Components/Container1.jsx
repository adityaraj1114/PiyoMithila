import React from "react";
// import MyImage from './Raja/public/Logo.jpg';
import "./Container1.css";
import { Navbar } from "./Navbar";
import { Container2 } from "./Container2";
import Profile from "./ProfilePiyo3.jpg";

export const Container1 = () => {
  return (
    <div>
      <div className="Container1">

        <Navbar />

        <div className="bannerProfile">
          <div className="contImg">

            <img alt="Banner Image" src={Profile} />

            <div className="shadow"></div>  {/*------------shadow*/}

          </div>
        </div>

      </div>

      <Container2 />

    </div>
  );
};
