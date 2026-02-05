import React from "react";
import ImageGallery from "./ImageGallery";
import Adv from "./Adv";
import Typography from "@mui/material/Typography";
import AboutSlider from "./AboutSlider";
import Grid from "@mui/material/Grid";
import AutoplayCarousel from "./AutoplayCarousel";
import InnovationHome from "./InnovationHome";
import OurOfferings from "./OurOfferings";
// import WhatWeDo from "./WhatWeDo";
import Certifications from "./Certifications";

const MidSection = () => {
  return (
    <div className="mid-section-container">
      {/* <div className="grid-container">
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "5%" }}
        >
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <img
              src={
                "images/P6-Edge-AI-Based-PTZ-ANPR-Bullet-Camera-VM-72BPTZ5AIVE-02.png"
              }
              alt={"img not loaded"}
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} className="text-container">
            <h2 gutterBottom>One Stop Solution For all your security needs</h2>
            <Typography variant="body1" gutterBottom>
              Adiance is a leading and the best CCTV manufacturing service
              provider with ISO certified and one of the best outdoor and indoor
              wireless security and surveillance cameras with smart AI/ML
              Technology, Started in the year 2007 Adiance has given the
              absolute feeling of safety for its customers through its various
              security cameras manufacturing services with OEM of their brand.
              Being the largest leading and reliable wireless, WiFi, 4G, Cloud,
              and Thermal security company. we provide innovation with security
              for enterprise businesses and corporates.
            </Typography>
          </Grid>
        </Grid>
      </div> */}
      {/* <WhatWeDo /> */}
      <AutoplayCarousel />
      <InnovationHome />
      {/* <AboutSlider /> */}
      {/* <Adv /> */}
      {/* <Certifications /> */}
      {/* <OurOfferings /> */}
      {/* <div>
        <ImageGallery />
      </div> */}
      <div>
        <style jsx>{`
          .responsive--image {
            max-width: 100%;
            height: auto;
            margin: 20px 0; // Add margin to separate from other content
          }
        `}</style>
      </div>
      <style jsx>{`
        .mid-section-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          // margin: 5% 10%; /* Reduce margin to 10% from left and right */
        }

        .grid-container {
          margin: 0% 10% 5% 10%;
        }

        .text-container {
          width: 100%;
          text-align: justify;
        }

        .responsive-image {
          max-width: 100%;
          height: auto;
        }

        @media screen and (max-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default MidSection;
