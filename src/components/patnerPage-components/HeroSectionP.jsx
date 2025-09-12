import React from "react";
import { Box, Typography } from "@mui/material";

const HeroSectionP = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url(/images/PartnerHeroimg.jpg)", // Replace with your image path
          height: "55vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "flex-start", // Align text to the left
          alignItems: "center",
          paddingLeft: "8%", // Adjust this for left margin
        }}
      >
        <Box
          sx={{
            textAlign: "left",
            color: "#fff", // Keep the text color white for visibility
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            style={{ fontWeight: "bold", fontSize: "55px" }}
          >
            Partner With Adiance
          </Typography>
          <Typography variant="h6" component="p">
            Our programs are built for shared success, fostering <br /> growth
            and profitability while delivering value to our <br /> mutual
            customers.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default HeroSectionP;
