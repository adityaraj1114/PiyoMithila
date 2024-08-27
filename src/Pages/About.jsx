import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div>
      <div className="about">
        <div className="aboutCard">
          <div className="aboutHeading">
            <div className="aboutIcon">
              <span>
                <ion-icon name="person-outline"></ion-icon>
              </span>
            </div>
            <h2>About Us</h2>
          </div>

          <div className="aboutDetails">
            <p>
            Welcome to Piyo Mithila, your trusted partner in delivering pure and refreshing water to homes, businesses, and events.
              <br/>
              Whether you're looking for a reliable daily supply for your home, bulk deliveries for your business, or hydration solutions for your special events, we've got you covered.
              <br/>
            </p>
            <p>Our Services</p>
            <ul>
              <li><p>Daily Home Delivery</p></li>
              <li><p>Bulk Supply for Weeding</p></li>
              <li><p>Puja Events & Parties</p></li>
            </ul>
            {/* <br/> */}
            <p>Our Products</p>
            <ul>
              <li><p>Water Bottles (various sizes)</p></li>
              <li><p>Water Gallons (large capacity)</p></li>
              <li><p>Kullahar Cups</p></li>
            </ul>
            {/* <br/> */}
            <p>We are committed to providing pure, high-quality water to homes, businesses, and events.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
