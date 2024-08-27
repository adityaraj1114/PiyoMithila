import React from "react";
import "./Social.css";

export const Social = () => {
  return (
    <div className="soci">
      <div className="social">
        <div className="socialCard">
          <div className="socialHeading">
            <div className="socialIcon">
              <span>
                <ion-icon name="people-circle-outline"></ion-icon>
              </span>
            </div>
            <h2>Social Links</h2>
          </div>

          <div className="socialDetails">
            {/* ----------------------------------------------------------facebook------------- */}
            <div className="facebook">
              {/* -------------------------------icon-------- */}
              <div className="icon">
                <span>
                  <ion-icon name="logo-facebook"></ion-icon>
                </span>
              </div>
              {/* --------------------------------phone no--- */}
              <div className="phoneNo">
                <h3>Facebook </h3>
                <p>Follow us on Facebook</p>
              </div>
              {/* ----------------------------------button---- */}
              <button className="iconBtn">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------more icons--------------------- */}

      <div className="socialIcons">
        {/* --------------------------------------------------------Instagram------------- */}
        <div className="instagram">
          {/* -------------------------------icon-------- */}
          <div className="icon">
            <span>
              <ion-icon name="logo-instagram"></ion-icon>
              {/* <ion-icon name="phone-portrait-outline"></ion-icon> */}
            </span>
          </div>
          {/* --------------------------------phone no--- */}
          <div className="phoneNo">
            <h3>Instagram</h3>
            <p></p>
          </div>
          {/* ----------------------------------button---- */}
          <button className="iconBtn">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>

        {/* --------------------------------------------------------Justdial------------- */}
        <div className="instagram">
          {/* -------------------------------icon-------- */}
          <div className="icon">
            <span>
              <ion-icon name="logo-instagram"></ion-icon>
              {/* <ion-icon name="phone-portrait-outline"></ion-icon> */}
            </span>
          </div>
          {/* --------------------------------phone no--- */}
          <div className="phoneNo">
            <h3>Justdial</h3>
            <p></p>
          </div>
          {/* ----------------------------------button---- */}
          <button className="iconBtn">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};
