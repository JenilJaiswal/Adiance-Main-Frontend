"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Container } from "react-bootstrap";
// We no longer need the hardcoded 'testimonials' array here

// Accept 'data' as a prop
const WhyPartnerwithAdiance = ({ data }) => {
  const [index, setIndex] = useState(0);

  // Use the 'features' array from the 'data' prop
  const features = data.features;

  const handleNext = () => {
    // Use features.length
    setIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const handleBack = () => {
    // Use features.length
    setIndex(
      (prevIndex) => (prevIndex - 1 + features.length) % features.length
    );
  };

  // Adjust the number of visible testimonials based on screen size
  const getVisibleTestimonials = (width) => {
    if (width < 600) return features.slice(index, index + 1); // xs - 1 item
    if (width >= 600 && width < 960) return features.slice(index, index + 2); // sm - 2 items
    if (width >= 960 && width < 1280) return features.slice(index, index + 3); // md - 3 items
    return features.slice(index, index + 4); // lg and above - 4 items
  };

  // Get the current window width to decide how many testimonials to show
  const visibleTestimonials = getVisibleTestimonials(window.innerWidth);

  return (
    <>
      <Box
        sx={{
          paddingBlock: "3rem",
        }}
      >
        <Container fluid="xl">
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: { xs: "2.5rem", sm: "3.5rem", lg: "3.5rem" },
              }}
            >
              {/* Use the dynamic title from the prop */}
              {data.title}
            </Typography>
          </Box>
          <Box sx={{ padding: "2rem", backgroundColor: "inherit" }}>
            <Grid container spacing={2}>
              {/* Map over 'visibleTestimonials' which is now derived from 'features' */}
              {visibleTestimonials.map((feature, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                  <Card
                    sx={{
                      padding: "1rem",
                      borderRadius: "20px",
                      height: "100%",
                    }}
                  >
                    {" "}
                    {/* Added height 100% for consistency */}
                    <CardContent>
                      {/* The 'img' field doesn't exist in this data, so it's removed */}
                      <Typography
                        variant="h6" // Changed to h6 for better hierarchy
                        sx={{ fontWeight: "bold" }}
                      >
                        {/* Use feature.title */}
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ margin: "1rem 0" }} // Removed 'fontStyle: "italic"'
                      >
                        {/* Use feature.description */}
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* Buttons remain the same */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
              gap: "2rem",
            }}
          >
            <Button
              onClick={handleBack}
              variant="contained"
              sx={{
                backgroundColor: "#ffffff",
                color: "#BF0603",
                borderRadius: "100%",
                padding: "1rem",
                "&:hover": {
                  backgroundColor: "#BF0603",
                  color: "#ffffff",
                },
                border: "none",
                boxShadow: "none",
              }}
            >
              <ArrowBackIosIcon sx={{ fontSize: "1rem" }} />
            </Button>
            <Button
              onClick={handleNext}
              variant="contained"
              sx={{
                backgroundColor: "#ffffff",
                color: "#BF0603",
                borderRadius: "100%",
                padding: "1rem",
                "&:hover": {
                  backgroundColor: "#BF0603",
                  color: "#ffffff",
                },
                border: "none",
                boxShadow: "none",
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: "1rem" }} />
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default WhyPartnerwithAdiance;
