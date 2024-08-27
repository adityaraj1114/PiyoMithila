import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div>

      <div className="contact">
        <div className="contactCard">
          <div className="contactHeading">
            <div className="contactIcon">
              <span>
                {/* <img src="https://images.pexels.com/photos/949592/pexels-photo-949592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /> */}

                <ion-icon name="phone-portrait-outline"></ion-icon>
              </span>
            </div>
            <h2>Contact Us</h2>
          </div>

          <div className="contactDetails">
            {/* ------------------------------------------call----- */}
            <div className="contactCall">
              <h3>Call Us</h3>
              <p>+91 9473012190</p>
            </div>
            {/* ---------------------------------------mail------- */}
            <div className="contactCall">
              <h3>Email</h3>
              <p>vijaykumar@gmail.com</p>
            </div>
            {/* ------------------------------------address-------- */}
            {/* ---------------------------------------mail------- */}
            <div className="contactCall">
              <h3>Address</h3>
              <p>Maharajganj, Madhubani</p>
              <p>Bihar, 847211</p>
            </div>

            <div className="directionBtn">
              <button><ion-icon name="navigate-circle-outline"></ion-icon>Direction</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
