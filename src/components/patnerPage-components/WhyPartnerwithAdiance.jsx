import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Rating,
  Grid,
  Button,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Container } from "react-bootstrap";

const testimonials = [
  {
    img: "/images/whyPartnericon-1.png",
    tital: "True Commitment to Growth, Together",
    description:
      "Partnership is at the heart of everything we do. We believe in turning shared goals into mutual success, driving growth for both our partners and customers.",
  },
  {
    img: "/images/whyPartnericon-2.png",
    tital :"Access to Expertise for Breakthrough Solutions",
    description:
      "Partnering with Adiance gives you access to a diverse range of expertise, enabling you to deliver innovative, AI-powered solutions to your customers that were once thought impossible.",
  },
  {
    img: "/images/whyPartnericon-3.png",
    tital :"Uncompromising Quality in Every Aspect",
    description:
      "Our deep experience, industry knowledge, and technical skills ensure superior performance across all products, solutions, services, and tools we provide.",
  },
  {
    img: "/images/whyPartnericon-4.png",
    tital :"Continuous Innovation for a More Secure Future",
    description:
      "At Adiance, we foster long-term, forward-thinking partnerships that pave the way for sustainable success, ensuring a more secure and technologically advanced tomorrow.",
  },
];

const WhyPartnerwithAdiance = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleBack = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Adjust the number of visible testimonials based on screen size
  const getVisibleTestimonials = (width) => {
    if (width < 600) return testimonials.slice(index, index + 1); // xs - 1 item
    if (width >= 600 && width < 960)
      return testimonials.slice(index, index + 2); // sm - 2 items
    if (width >= 960 && width < 1280)
      return testimonials.slice(index, index + 3); // md - 3 items
    return testimonials.slice(index, index + 4); // lg and above - 4 items
  };

  // Get the current window width to decide how many testimonials to show
  const visibleTestimonials = getVisibleTestimonials(window.innerWidth);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
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
              Why Partner with Adiance.
            </Typography>
          </Box>
          <Box sx={{ padding: "2rem", backgroundColor: "inherit" }}>
            <Grid container spacing={2}>
              {visibleTestimonials.map((testimonial, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                  <Card sx={{ padding: "1rem", borderRadius: "20px" }}>
                    <CardContent>
                      <img src={testimonial.img} alt="" style={{height:"60px", width:"60px"}} />
                    <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          {testimonial.tital}
                        </Typography>
                      <Typography
                        variant="body2"
                        sx={{ margin: "1rem 0", fontStyle: "italic" }}
                      >
                        {testimonial.description}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* Buttons below the slider */}
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
                  backgroundColor: "#BF0603", // Background color on hover
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
                  backgroundColor: "#BF0603", // Background color on hover
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
