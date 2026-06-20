"use client";

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ProductSinglePage = ({ product, imgIdxSP }) => {
  const [activeTab, setActiveTab] = useState("benefits");
  const imgUrl = Array.isArray(product.imgUrl)
    ? product.imgUrl[imgIdxSP]
    : product.imgUrl;

  // console.log("check check imgUrl");
  // console.log(imgUrl, imgIdxSP);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#bf0603",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ margin: "0 10%" }}>
        {/* Product Section */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "5%" }}
        >
          <Grid item xs={12} sm={6} md={6} lg={6}>
            {/* Product Image */}
            <img
              src={imgUrl}
              // alt={product.title}
              alt={imgIdxSP}
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            {/* Product Title */}
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>
            {/* Product Description */}
            <Typography variant="body1" gutterBottom>
              {product.description}
            </Typography>
          </Grid>
        </Grid>

        {/* Tabs Section */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "5%" }}
        >
          <Grid item xs={12}>
            <div>
              {/* Tab Buttons */}
              <Button
                onClick={() => handleTabClick("benefits")}
                variant={activeTab === "benefits" ? "contained" : "outlined"}
                sx={{
                  mr: 1,
                  mb: 1,
                  bgcolor: activeTab === "benefits" ? "primary.main" : "",
                }}
              >
                Benefits
              </Button>
              <Button
                onClick={() => handleTabClick("features")}
                variant={activeTab === "features" ? "contained" : "outlined"}
                sx={{
                  mr: 1,
                  mb: 1,
                  bgcolor: activeTab === "features" ? "primary.main" : "",
                }}
              >
                Features
              </Button>
              <Button
                onClick={() => handleTabClick("applications")}
                variant={
                  activeTab === "applications" ? "contained" : "outlined"
                }
                sx={{
                  mr: 1,
                  mb: 1,
                  bgcolor: activeTab === "applications" ? "primary.main" : "",
                }}
              >
                Applications
              </Button>
              <Button
                onClick={() => handleTabClick("specifications")}
                variant={
                  activeTab === "specifications" ? "contained" : "outlined"
                }
                sx={{
                  mr: 1,
                  mb: 1,
                  bgcolor: activeTab === "specifications" ? "primary.main" : "",
                }}
              >
                Technical Specifications
              </Button>
              <Button
                onClick={() => handleTabClick("setup")}
                variant={activeTab === "setup" ? "contained" : "outlined"}
                sx={{
                  mr: 1,
                  mb: 1,
                  bgcolor: activeTab === "setup" ? "primary.main" : "",
                }}
              >
                Setup
              </Button>
            </div>
          </Grid>
          {/* Display Active Tab Content */}
          {activeTab === "benefits" && (
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                <ul>
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </Typography>
            </Grid>
          )}
          {activeTab === "features" && (
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </Typography>
            </Grid>
          )}
          {activeTab === "applications" && (
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                <ul>
                  {product.applications.map((application, index) => (
                    <li key={index}>{application}</li>
                  ))}
                </ul>
              </Typography>
            </Grid>
          )}
          {activeTab === "specifications" && (
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                <ul>
                  {product.specifications.map((specification, index) => (
                    <li key={index}>{specification}</li>
                  ))}
                </ul>
              </Typography>
            </Grid>
          )}
          {activeTab === "setup" && (
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                {product.setup}
              </Typography>
            </Grid>
          )}
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default ProductSinglePage;
