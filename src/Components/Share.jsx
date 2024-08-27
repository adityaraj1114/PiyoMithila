import React, { useState } from "react";
import "./Share.css";

export const Share = () => {
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const Alert = () => {
    alert ('Enter Mobile No...');
  };

  const sendWhatsAppMessage = (event) => {
    event.preventDefault(); // Prevent form submission

    const portfolioLink = ""; // Replace with your actual portfolio link
    const message = `Check out my Shop Details: ${portfolioLink}`;

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to the WhatsApp URL
    window.location.href = whatsappUrl;


  };

  return (
    <div className="shareContainer">
      <div className="share">
        <div className="shareCard">
          <div className="shareHeading">
            <div className="shareIcon">
              <span>
                <ion-icon name="share-outline"></ion-icon>
              </span>
            </div>
            <h2>Share via</h2>
          </div>

          <div className="shareDetails">
            {/* ----------------------------------------------------------WhatsApp------------- */}
            <div className="whatsApp">
              {/* -------------------------------icon-------- */}
              <div className="icon">
                <span>
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </span>
              </div>
              {/* --------------------------------phone no--- */}
              <div className="phoneNo">
                <h3>WhatsApp</h3>
                <p>Share with whom you want!</p>
              </div>
              {/* ----------------------------------button---- */}
              <button onClick={Alert} className="iconBtn">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </div>
          </div>

          {/* -----------------------------------------------form------------------------- */}
          <div className="shareFormDetails">
            <h2>Send My Portfolio Link via WhatsApp</h2>
            <form onSubmit={sendWhatsAppMessage}>
              <label htmlFor="whatsappNumber">
                <p>Enter WhatsApp Number:</p>
              </label>

              <input
                placeholder="919473012190"
                type="text"
                id="whatsappNumber"
                name="whatsappNumber"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                required
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
