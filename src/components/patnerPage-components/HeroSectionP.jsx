import React from "react";
import { Box, Typography } from "@mui/material";

const HeroSectionP = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url(/images/PartnerHeroimg.webp)", // Replace with your image path
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
            Adiance brings together distributors, dealers, and customers <br />
            in one connected ecosystem; ensuring smart security, <br />{" "}
            sustainable growth, and shared success.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default HeroSectionP;
