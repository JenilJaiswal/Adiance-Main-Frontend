import React from "react";
import { Box, Typography, Button } from "@mui/material";

import Header from "./Header";
import NavHeader from "./NavHeader";
import ContactMidSection from "./ContactMidSection";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const ThankYouPage = () => {
  const handleGoBack = () => {
    if (window.top !== window.self) {
      // If inside an iframe, navigate the top window to the home page
      window.top.location.href = "/";
    } else {
      // If not inside an iframe, navigate normally
      window.location.href = "/";
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact us | CCTV Manufacturers, Camera Makers</title>
        <meta
          name="description"
          content="Thanks | CCTV Manufacturers, Camera Makers, Get in touch with our company through mails, phone and providing address."
        />
      </Helmet>
      <Header />
      <NavHeader text={"Contact us"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
          backgroundColor: "#fff",
          textAlign: "center",
          px: 3,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "#333" }}>
          Thank You!
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", mb: 3 }}>
          Your form has been successfully submitted. We appreciate your effort
          and will get back to you shortly!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoBack}
          sx={{ textTransform: "none" }}
        >
          Go Back to Home
        </Button>
      </Box>

      <ContactMidSection />
      <Footer />
    </div>
  );
};

export default ThankYouPage;
