"use client";

import React from "react";
import { Typography } from "@mui/material";
import Header from "./Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
const CloudXVR = () => {
  return (
    <div>
      <Helmet>
        <title>Cloud XVR security camera | cloud-based storage| Adiance</title>
        <meta
          name="description"
          content="Adiance cloud XVR is an ultimate solution to make your existing CCTV cloud camera compatible. Get cloud XVR manufactured as per your customized requirement"
        />
      </Helmet>
      <Header />
      <NavHeader text={"Cloud XVR"} />
      <div className="thermal-camera-container">
        <Typography variant="h4" gutterBottom>
          <strong>
            Image Server rack and NVR + Title over the image "Scalable and
            Cloud-Ready XVR"
          </strong>
        </Typography>

        <Typography variant="body1">
          <br />
          Adiance Cloud XVR is the ultimate solution to build a professional
          surveillance system with your existing CCTV to make cloud compatible.
          You can record videos through multiple modes by connecting 8 – 16
          cameras to the system through the cloud. you can watch all your CCTV
          cameras at a central location using the cloud and watch it 24×7.
        </Typography>

        <Typography variant="h4" gutterBottom style={{ marginTop: "5%" }}>
          <strong>Features</strong>
        </Typography>

        <ul className="features-list">
          <li>H.265 , H.265</li>
          <li>Cloud Storage</li>
          <li>Scalable</li>
        </ul>
        <style jsx>{`
          .thermal-camera-container {
            margin: 5% 10%;
          }
          .features-list {
            margin-top: 20px;
            padding-left: 20px;
          }
        `}</style>
      </div>
      <Footer />
    </div>
  );
};

export default CloudXVR;
