import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Rating,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Container } from "react-bootstrap";

// Updated testimonials array with 'star' field
const testimonials = [
  {
    title: "Smart City Program Manager",
    review:
      "ArcisAI S-Series AI CCTV Cameras gave us real-time visibility across plazas and transit hubs. We moved from passive footage to instant actions—crowd alerts, incident clips, and clear audit trails. Exactly what a modern city needs.",
    star: 5,
  },
  {
    title: "University Security Director",
    review:
      "We deployed EdgeAI CCTV Cameras in exam halls and corridors. False alarms dropped, proctoring got easier, and the team finally has one app for live view, alerts, and reports. It's made campus security calmer and smarter.",
    star: 5,
  },
  {
    title: "Hospital Operations Head",
    review:
      "The AI Security Cameras helped us protect ICU entrances and pharmacy counters without adding staff. Access control, clear face captures, and reliable night vision keep compliance simple and patients safer.",
    star: 5,
  },
  {
    title: "Banking (Branch Network Lead)",
    review:
      "With Arc-S-Series AI CCTV Cameras, we standardized security across branches and ATMs. Instant deterrence and clean evidence shortened investigations and improved audit readiness. It's security we can bank on.",
    star: 5,
  },
  {
    title: "Traffic Management Center Supervisor",
    review:
      "Our EdgeAI CCTV Cameras now flag incidents and lane violations in seconds. Operators get fewer noise alerts and more actionable ones—signal timing and response units both improved.",
    star: 5,
  },
  {
    title: "Retail Chain Loss Prevention Manager",
    review:
      "The AI Security Cameras caught missing-object events in stockrooms and identified repeat patterns. Shrink went down, and the reports helped us adjust staffing and floor layout. Real ROI, not just video.",
    star: 5,
  },
  {
    title: "Manufacturing Plant EHS Manager",
    review:
      "ArcisAI S-Series AI CCTV Cameras gave us clear coverage on loading bays and restricted zones. Line-crossing and area-intrusion alerts trigger instantly, and the footage is actually usable for training and safety reviews.",
    star: 5,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  // Effect to update width on window resize for responsiveness
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleBack = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Robust function to get visible testimonials and handle array wrap-around
  const getVisibleTestimonials = (currentWidth) => {
    const numToShow =
      currentWidth < 600
        ? 1
        : currentWidth < 960
        ? 2
        : currentWidth < 1280
        ? 3
        : 4;

    const visible = [];
    for (let i = 0; i < numToShow; i++) {
      visible.push(testimonials[(index + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials(width);

  return (
    <Box
      sx={{
        backgroundColor: "white",
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
              color: "#444444",
            }}
          >
            Testimonials
          </Typography>
        </Box>

        <Box sx={{ padding: "2rem", backgroundColor: "inherit" }}>
          <Grid container spacing={2}>
            {visibleTestimonials.map((testimonial, i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <Card
                  sx={{
                    padding: "1rem",
                    height: "100%", // Ensures all cards in a row are same height
                  }}
                >
                  <CardContent
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Stars at the top */}
                    <Rating value={testimonial.star} readOnly />

                    {/* Review in the middle */}
                    <Typography
                      variant="body2"
                      sx={{
                        margin: "1rem 0",
                        fontStyle: "italic",
                        flexGrow: 1, // Pushes title to the bottom
                      }}
                    >
                      {testimonial.review}
                    </Typography>

                    {/* Title at the bottom */}
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "bold", mt: 1, color: "#BF0603" }}
                    >
                      {testimonial.title}
                    </Typography>
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
              // borderRadius: "0", // Changed from "100%" to "0" for square design
              minWidth: "auto",
              width: "50px",
              height: "50px",
              padding: "1rem",
              "&:hover": {
                backgroundColor: "#BF0603",
                color: "#ffffff",
                transform: "translateY(-2px)", // Added hover lift effect
              },
              border: "2px solid #BF0603", // Added border for better definition
              boxShadow: "0px 4px 10px rgba(191, 6, 3, 0.2)",
              transition: "all 0.3s ease", // Smooth transitions
            }}
          >
            <ArrowBackIosIcon sx={{ fontSize: "1rem", ml: "0.5rem" }} />
          </Button>

          <Button
            onClick={handleNext}
            variant="contained"
            sx={{
              backgroundColor: "#ffffff",
              color: "#BF0603",
              // borderRadius: "0", // Changed from "100%" to "0" for square design
              minWidth: "auto",
              width: "50px",
              height: "50px",
              padding: "1rem",
              "&:hover": {
                backgroundColor: "#BF0603",
                color: "#ffffff",
                transform: "translateY(-2px)", // Added hover lift effect
              },
              border: "2px solid #BF0603", // Added border for better definition
              boxShadow: "0px 4px 10px rgba(191, 6, 3, 0.2)",
              transition: "all 0.3s ease", // Smooth transitions
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: "1rem" }} />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;