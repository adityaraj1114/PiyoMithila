import React, { useState, useEffect} from "react";
// import React from "react";
import "./Time.css";

export const Time = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="time">
        <div className="accordian">
          {/* --------------------------------------------------------Email-------------------------- */}
          <a className="openingTime" onClick={toggleAccordion}>
            {/* ----------------------------------icon------ */}
            <div className="icon">
              <span>
                {/* <img src="https://images.pexels.com/photos/949592/pexels-photo-949592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /> */}
                <ion-icon name="timer-outline"></ion-icon>
              </span>
            </div>
            {/* --------------------------------phone no---- */}
            <div className="phoneNo">
              <h3>Opening Time</h3>
              {/* <p> sammyshivam@gmail.com</p> */}
            </div>
            {/* ----------------------------------button---- */}
            <button className="iconBtn">
              <ion-icon name={isOpen ? "caret-up-outline" : "caret-down-outline"}></ion-icon>
            </button>
          </a>

          <div className="weeklyTime" 
              style={{
              height: isOpen ? "auto" : "0",
              overflow: "hidden",
              transition: "all ease 0.1s",
              // transition: "height 2s ease-out"
            }}>
            <div className="timings">
                <h3>Monday</h3>
                <p>9:00 AM - 8:00 PM</p>
            </div>

            <div className="timings">
            <h3>Tuesday</h3>
            <p>9:00 AM - 8:00 PM</p>
            </div>

            <div className="timings">
            <h3>Wednesday</h3>
            <p>9:00 AM - 8:00 PM</p>
            </div>

            <div className="timings">
            <h3>Thursday</h3>
            <p>9:00 AM - 8:00 PM</p>
            </div>

            <div className="timings">
            <h3>Friday</h3>
            <p>9:00 AM - 8:00 PM</p>
            </div>

            <div className="timings">
            <h3>Sataurday</h3>
            <p>9:00 AM - 8:00 PM</p>
            </div>

            <div className="timings">
            <h3>Sunday</h3>
            <p>9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
