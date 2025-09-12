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
        One Stop Solution For all your security needs
      </h2>

      <div className="adv-container">
        <div className="adv-item">
          <center>
            <img
              src="images/sol1.png"
              alt="Conveyor Belt"
              className="adv-img"
            />
          </center>
          <p className="adv-text adv-text-bigger">
            <center>
              Election Security
              <br /> Partner in 15+ <br />
              States
            </center>
          </p>
        </div>
        <div className="adv-item">
          <center>
            <img src="images/sol2.png" alt="Research" className="adv-img" />
          </center>
          <p className="adv-text adv-text-bigger">
            <center>
              360 Degree <br />
              Approach
            </center>
          </p>
        </div>
        <div className="adv-item">
          <center>
            <img src="images/sol3.png" alt="Employee" className="adv-img" />
          </center>
          <p className="adv-text adv-text-bigger">
            <center>
              Trusted by <br /> Indian Govt.
            </center>
          </p>
        </div>
        <div className="adv-item">
          <center>
            <img src="images/sol4.png" alt="Performance" className="adv-img" />
          </center>
          <p className="adv-text adv-text-bigger">
            <center>Patented Technology</center>
          </p>
        </div>
        <div className="adv-item">
          <center>
            <img src="images/sol5.png" alt="Certificate" className="adv-img" />
          </center>
          <p className="adv-text adv-text-bigger">
            <center>
              R & D center <br />
              in Gujarat
            </center>
          </p>
        </div>
        <div className="adv-item">
          <center>
            <img src="images/sol6.png" alt="Certificate" className="adv-img" />
          </center>
          <p className="adv-text adv-text-bigger">
            <center>
              State-of-the Art <br /> Manufacturing facility <br />
              in Gujarat
            </center>
          </p>
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
