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
    name: "John Doe",
    reviewText:
      "The S Series AI camera has transformed our security operations. With 5G connectivity, we get real-time alerts and video feeds with zero lag. Its AI-driven analytics can distinguish between people, vehicles, and objects with astonishing accuracy. Our team can now respond faster and smarter",
    avatar: "/images/about3.png",
    rating: 5,
  },
  {
    name: "Jane Smith",
    reviewText:
      "Switching to the S Series was the best decision for our facility. The AI recognition is incredibly sharp, even in low light, and the edge processing means we don’t have to rely on cloud storage, enhancing both speed and security.",
    avatar: "/images/about3.png",
    rating: 5,
  },
  {
    name: "Alice Johnson",
    reviewText:
      "The 5G edge capability of the S Series AI camera sets it apart. Our data stays local, reducing risks while still giving us rapid, reliable insights. This is truly next-gen surveillance — we can trust it to keep everything in check without missing a beat.",
    avatar: "/images/about3.png",
    rating: 5,
  },
  {
    name: "Bob Brown",
    reviewText:
      "We've tested several cameras over the years, but the S Series stands out with its blend of cutting-edge AI and fast 5G technology. It's precise, proactive, and reduces the need for constant human monitoring. Our operations have never been smoother.",
    avatar: "/images/about3.png",
    rating: 5,
  },
  {
    name: "Carol Davis",
    reviewText:
      "The edge AI technology integrated with 5G on this camera is remarkable. It analyzes data on-site and instantly alerts us to potential issues. We've significantly cut down on false alarms and improved overall security. This camera thinks fast — and so do we now!",
    avatar: "/images/about3.png",
    rating: 5,
  },
  {
    name: "Eve Martin",
    reviewText:
      "What we love most about the S Series AI camera is how it fits right into our existing system while enhancing it with futuristic capabilities. The 5G ensures that we never experience delays, and the AI does a stellar job of predicting and preventing incidents before they even happen.",
    avatar: "/images/about3.png",
    rating: 5,
  },
];

const Testimonials = () => {
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
    if (width >= 600 && width < 960) return testimonials.slice(index, index + 2); // sm - 2 items
    if (width >= 960 && width < 1280) return testimonials.slice(index, index + 3); // md - 3 items
    return testimonials.slice(index, index + 4); // lg and above - 4 items
  };

  // Get the current window width to decide how many testimonials to show
  const visibleTestimonials = getVisibleTestimonials(window.innerWidth);

  return (
    <Box
      sx={{
        backgroundColor: "#fff5f5",
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
            Testimonials
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
            industry. Lorem <br /> Ipsum has been the industry's standard dummy
          </Typography> */}
        </Box>
        <Box sx={{ padding: "2rem", backgroundColor: "inherit" }}>
          <Grid container spacing={2}>
            {visibleTestimonials.map((testimonial, i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <Card sx={{ padding: "1rem", borderRadius: "20px" }}>
                  <CardContent>
                    <Rating value={testimonial.rating} readOnly />
                    <Typography
                      variant="body2"
                      sx={{ margin: "1rem 0", fontStyle: "italic" }}
                    >
                      {testimonial.reviewText}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{ marginRight: "0.5rem" }}
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        {testimonial.name}
                      </Typography>
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
  );
};

export default Testimonials;