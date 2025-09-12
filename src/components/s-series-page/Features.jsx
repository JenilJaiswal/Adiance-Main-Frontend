import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Features = () => {
  const [activeButton, setActiveButton] = useState(0); // State to track the active button

  // Array of button texts
  const buttons = [
    "Object Detection",
    "Human Detection",
    "Face Detection",
    "Motion Detection",
    "Line Crossing Detection",
    "Area Detection",
    "Unattended Baggage Detection",
  ];

  // Array of images corresponding to each button (replace with actual image URLs)
  const images = [
    "/images/sentiment_analysis_accordian.png",
    "/images/Humandetection.png",
    "/images/Facedetection.webp",
    "/images/motion-ditection.jpg",
    "/images/Linecrossing.png",
    "/images/Areadetection.jpg",
    "/images/Buggagedetection.jpg",
  ];

  // Handle button click
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <Box>
      <Container maxWidth="xl" style={{display:'flex', flexDirection:"column", gap:"2rem", marginBlock:"2rem"
      }}>
        {" "}
        {/* MUI Container */}
        {/* Top Section */}
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "2.5rem", sm: "3.5rem", lg: "3.5rem" },
            }}
          >
            Features
          </Typography>
          {/* <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#7D7D7D",
              marginBlock: "1.5rem",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum <br /> has been the industry's standard dummy
          </Typography> */}
        </Box>
        {/* Button Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#F3F4F8",
            padding: { xs: "0.5rem", md: "0.5rem" }, // Adjust padding based on screen size
            paddingBlock: { xs: "0.5rem", md: "1rem" }, // Adjust vertical padding
            borderRadius: "25px",
            flexDirection: { xs: "column", sm: "row" }, // Stack buttons on smaller screens, row on larger
            alignItems: { xs: "center", sm: "flex-start" }, // Center align on small screens
            gap: { xs: 1, sm: 2 }, // Add some spacing between buttons
          }}
        >
          {buttons.map((label, index) => (
            <Button
              key={index}
              onClick={() => handleButtonClick(index)}
              sx={{
                backgroundColor:
                  activeButton === index ? "#1A1E23" : "transparent",
                color: activeButton === index ? "#ffffff" : "#1A1E23",
                fontWeight: "bold",
                fontSize: { xs: "0.7rem", md: "0.8rem" }, // Adjust font size for responsiveness
                paddingBlock: { xs: "0.5rem", md: "1rem" }, // Adjust button padding for smaller screens
                borderRadius: "25px",
                width: { xs: "100%", sm: "auto" }, // Full width for smaller screens
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
        <Box>
          <img
            src={images[activeButton]}
            alt={buttons[activeButton]}
            style={{ width: "100%", height: "50vh", objectFit: "cover", borderRadius:"20px" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
