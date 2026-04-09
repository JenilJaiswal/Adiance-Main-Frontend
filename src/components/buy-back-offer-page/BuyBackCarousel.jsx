import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const cameras = [
  { name: "Bullet Camera", image: "/images/arcis-Bullet-camera.webp" },
  { name: "Dome Camera", image: "/images/arcis-Dome-camera.webp" },
  { name: "PTZ Camera", image: "/images/arcis-PTZ-camera.webp" },
  { name: "4G Bullet Camera", image: "/images/arcis-4G-Bullet-camera.webp" },
  { name: "WiFi PTZ Camera", image: "/images/arcis-Wifi-ptz-camera.webp" },
  { name: "5G Bullet Camera", image: "/images/arcis-5G-Bullet-camera.webp" },
];

const BuyBackCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Adjust for mobile screens

  return (
    <Box sx={{ backgroundColor: "#1C2025", color: "white", py: 10 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          {/* Heading first on mobile, second on desktop */}
          <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
            <Typography
              variant="h2"
              textAlign="center"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2.7rem", md: "3rem" },
                marginBottom: { xs: 4, md: 0 },
              }}
            >
              ArcisAI: Cameras go Beyond Recording, Built for Modern Security
            </Typography>
          </Grid>

          {/* Carousel second on mobile, first on desktop */}
          <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              renderArrowPrev={(clickHandler, hasPrev) =>
                hasPrev && (
                  <button
                    onClick={clickHandler}
                    style={{
                      position: "absolute",
                      left: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 40,
                        color: "rgba(255,255,255,0.5)",
                        transition: "color 0.3s",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "white")}
                      onMouseOut={(e) =>
                        (e.target.style.color = "rgba(255,255,255,0.5)")
                      }
                    >
                      ❮
                    </span>
                  </button>
                )
              }
              renderArrowNext={(clickHandler, hasNext) =>
                hasNext && (
                  <button
                    onClick={clickHandler}
                    style={{
                      position: "absolute",
                      right: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 40,
                        color: "rgba(255,255,255,0.5)",
                        transition: "color 0.3s",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "white")}
                      onMouseOut={(e) =>
                        (e.target.style.color = "rgba(255,255,255,0.5)")
                      }
                    >
                      ❯
                    </span>
                  </button>
                )
              }
            >
              {cameras.map((camera, index) => (
                <Box key={index} sx={{ textAlign: "center" }}>
                  <img
                    src={camera.image}
                    alt={camera.name}
                    loading="lazy"
                    style={{
                      maxWidth: "70%",
                      height: "auto",
                      borderRadius: "10px",
                    }}
                  />
                  <Typography variant="h5" fontWeight="bold" mt={2}>
                    {camera.name}
                  </Typography>
                </Box>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BuyBackCarousel;
