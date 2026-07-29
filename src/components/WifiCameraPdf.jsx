"use client";

import React from "react";
import { Helmet } from "react-helmet";
import { Box, Typography } from "@mui/material";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const WifiCameraPdf = () => {
  return (
    <>
      <Helmet>
        <title>WiFi PTZ Camera | Wireless Pan-Tilt-Zoom Surveillance | Adiance</title>
        <meta
          name="description"
          content="Download the Adiance WiFi PTZ camera datasheet. Wireless pan-tilt-zoom surveillance camera with cloud VMS, two-way audio, and NDAA-compliant security."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.adiance.com/wifi-ptz-camera" />
      </Helmet>
      <Header />
      <Box
        sx={{
          minHeight: "calc(100vh - 200px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 4,
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 2,
            textAlign: "center",
          }}
        >
          WiFi PTZ Camera
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: 800,
            mb: 4,
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          Download the official datasheet for the Adiance WiFi PTZ camera.
          This wireless pan-tilt-zoom surveillance camera features cloud VMS integration,
          two-way audio, and NDAA-compliant security for remote monitoring.
          If the PDF does not display below, you can download it directly.
        </Typography>
        <Box
          sx={{
            width: "100%",
            maxWidth: 1000,
            height: "80vh",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <iframe
            src="/pdfs/WIFI-PTZ-CAMERA.pdf"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
            title="WiFi PTZ Camera Datasheet"
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default WifiCameraPdf;
