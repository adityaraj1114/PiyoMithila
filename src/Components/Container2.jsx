import React from "react";
import "./Container2.css";
import { Logo } from "./Logo";

export const Container2 = () => {
  const phoneNumber = "+918210012972"; // Replace with the actual phone number
  const emailAddress = "example@domain.com"; // Replace with the actual email address
  const whatsappNumber = "+919473012190"; // Shop owner's WhatsApp number in international format

  return (
    <div>
      <div className="container2">
        <div className="profile">
          <Logo />

          <div className="profileDetails">
            <div className="shopName">
              <h2>PIYO MITHILA</h2>
            </div>
            <h3>Vijay Kumar (Owner)</h3>
            <h3>Wholesale & Retail</h3>
            <p>Maharajganj, Madubani, Bihar, 847211</p>
            {/* <p>Bihar, 847211</p> */}
          </div>

          <div className="icons">
            <a
              href="tel:+919473012190"
              target="_blank"
              rel="noopener noreferrer"
              style={{color: "lightblue"}}
              className="iconCard"
            >
              <span>
                <ion-icon name="call-outline"></ion-icon>
              </span>
            </a>

            <a  href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{color: "#17de17"}}
             className="iconCard">
              <span>
                <ion-icon name="logo-whatsapp"></ion-icon>
              </span>
            </a>

            <a href={`mailto:${emailAddress}`}
            target="_blank"
            style={{color: "red"}}
            rel="noopener noreferrer" className="iconCard">
              <span>
                <ion-icon name="mail-outline"></ion-icon>
              </span>
            </a>
          </div>

          <div className="addContact">
            <button>Save Contact</button>
          </div>
        </div>

        {/* ---------------------------------------------contact links-------------------- */}

        <div className="contactLinks">
          {/* -----------------------------------------------------------------------calling------------- */}
          <a
            href="tel:+919473012190"
            // href="tel:${phoneNumber}"
            target="_blank"
            rel="noopener noreferrer"
            className="phone"
          >
            {/* -------------------------------icon-------- */}
            <div className="icon">
              <span>
                <ion-icon name="call-outline"></ion-icon>
              </span>
            </div>
            {/* --------------------------------phone no--- */}
            <div className="phoneNo">
              <h3>Phone </h3>
              <p> +91 9473012190</p>
            </div>
            {/* ----------------------------------button---- */}
            <button className="iconBtn">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </a>
          {/* --------------------------------------------------------Email-------------------------- */}
          <a
            href={`mailto:${emailAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="phone"
          >
            {/* ----------------------------------icon------ */}
            <div className="icon">
              <span>
                <ion-icon name="mail-outline"></ion-icon>
              </span>
            </div>
            {/* --------------------------------phone no---- */}
            <div className="phoneNo">
              <h3>Email </h3>
              <p> vijayraj@gmail.com</p>
            </div>
            {/* ----------------------------------button---- */}
            <button className="iconBtn">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </a>

          {/* --------------------------------------------------------WhatsApp-------------------------- */}
          <a
            href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="phone"
          >
            {/* ----------------------------------icon------ */}
            <div className="icon">
              <span>
                {/* <img src="https://images.pexels.com/photos/949592/pexels-photo-949592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /> */}
                <ion-icon name="logo-whatsapp"></ion-icon>
              </span>
            </div>
            {/* --------------------------------phone no---- */}
            <div className="phoneNo">
              <h3>WhatsApp </h3>
              <p>+91 9473012190</p>
            </div>
            {/* ----------------------------------button---- */}
            <button className="iconBtn">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
