"use client";

import { Container } from "react-bootstrap";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Grid } from '@mui/material';
import { Box } from "@mui/material";

const LetestNews = () => {
  const newsData = [
    {
      id: 1,
      img: "/images/IMG.webp",
      title: "Product Selector",
      description: "Explore our products and identify the most suitable ones.",
    },
    {
      id: 2,
      img: "/images/Bitmap.webp",
      title: "Latest News",
      description: "10 Ways to reduce your office work depression.",
    },
    {
      id: 3,
      img: "/images/Bitmap (1).webp",
      title: "Where to Buy",
      description: "Buy through our authorized channels or contact our sales.",
    },
  ];

  return (
    <>
      <div>
        <div>
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "2.5rem", sm: "3.5rem", lg: "3.5rem" },
            }}
          >
            Latest News
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#7D7D7D",
              marginBlock: "1.5rem",
            }}
          >
            Adiance Unveils new Edge <br /> AI cameras
          </Typography>
        </Box>
        </div>
        <Container fluid="xl">
          <Grid container spacing={3}>
            {newsData.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card sx={{  }} >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="auto"
                      image={item.img}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default LetestNews;
