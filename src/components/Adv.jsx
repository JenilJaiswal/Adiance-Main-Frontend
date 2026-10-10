"use client";

import React from "react";

const Adv = () => {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginTop: "5%",
        }}
        className="adv"
      >
        Why Choose Adiance Technologies
      </h2>

      <div className="adv-container">
        <div className="adv-item">
          <center>
            <img
              src="images/Happy Clients.webp"
              alt="Conveyor Belt"
              className="adv-img"
              loading="lazy"
            />
          </center>
          <div className="adv-text adv-text-bigger">
            <center>
            2500+
              <br /> Happy Clients <br />
            </center>
          </div>
        </div>
        <div className="adv-item">
          <center>
            <img src="images/Security Partner in 15+ States.webp" alt="Research" className="adv-img" loading="lazy" />
          </center>
          <div className="adv-text adv-text-bigger">
            <center>
            Security Partner <br />
            in 15+ States
            </center>
          </div>
        </div>
        <div className="adv-item">
          <center>
            <img src="images/Trusted by Indian Government.webp" alt="Employee" className="adv-img" loading="lazy" />
          </center>
          <div className="adv-text adv-text-bigger">
            <center>
              Trusted by <br /> Indian Government
            </center>
          </div>
        </div>
        <div className="adv-item">
          <center>
            <img src="images/Patented Technology.webp" alt="Performance" className="adv-img" loading="lazy" />
          </center>
          <div className="adv-text adv-text-bigger">
            <center>Patented Technology</center>
          </div>
        </div>
        <div className="adv-item">
          <center>
            <img src="images/Menufecturing Facility in Gujarat.webp" alt="Certificate" className="adv-img" loading="lazy" />
          </center>
          <div className="adv-text adv-text-bigger">
            <center>
            Menufecturing <br />Facility in Gujarat
            </center>
          </div>
        </div>
        <div className="adv-item">
          <center>
            <img src="images/Made in India.webp" alt="Certificate" className="adv-img" loading="lazy" />
          </center>
          <div className="adv-text adv-text-bigger">
            <center>
            Made in India
            </center>
          </div>
        </div>
        <div className="adv-item">
          <center>
            <img src="images/20+ Years of Industry Experience.webp" alt="Certificate" className="adv-img" loading="lazy" />
          </center>
          <div className="adv-text adv-text-bigger">
            <center>
            20+ Years of<br />
            Industry Experience
            </center>
          </div>
        </div>

        <style jsx>{`
          .adv-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            padding: 20px;
            max-width: 1200px;
            flex-wrap: nowrap; /* Prevent items from wrapping */
            overflow-x: auto; /* Enable horizontal scrolling on smaller screens */
            margin-top: 2.5%;
          }

          .adv-item {
            flex: 0 0 auto; /* Set flex shrink and flex grow to 0 to prevent shrinking and growing */
            margin-right: 20px; /* Add margin between items */
          }

          .adv-img {
            max-width: 100px; /* Set width to 100% for responsiveness */
            height: auto; /* Maintain aspect ratio */
            margin-bottom: 10px; /* Add margin below the images */
          }

          .adv-text {
            margin-top: 0;
            text-align: left; /* Align text to the left */
            font-size: 14px; /* Decrease font size */
            font-weight: bold;
          }

          .adv-text-bigger {
            font-size: 16px;
          }

          @media screen and (max-width: 768px) {
            .adv-container {
              overflow-x: visible;
              display: none; /* Disable horizontal scrolling on smaller screens */
            }
            .adv {
              display: none;
            }

            .adv-item {
              margin-right: 10px; /* Adjust margin for smaller screens */
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Adv;
