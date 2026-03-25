import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NavHeader from "./NavHeader";
import { Helmet } from "react-helmet";
import ContactForm from "./ContactForm";
import { useLocation } from "react-router-dom";
const products = [
  {
    metaTitle: "R Series | Tailored Security with Endless Customization",
    metaDescription:
      "The R Series offers endless customization options to match your style and needs. Personalize your security solution for ultimate flexibility and performance.",
    title: "R Series",
    description:
      "Personalize this product series to fit your unique style and needs—endless customization options await!",
    imgUrl: "/images/CCTV_03.png",
  },
  {
    metaTitle: " H Series | Customizable Solutions - Adaince Technologies",
    metaDescription:
      "Discover the H Series by Adiance Technologies—customizable security solutions tailored to your unique style and needs. Personalize for endless possibilities!",
    title: "H Series",
    description:
      "Personalize this product series to fit your unique style and needs—endless customization options await!",
    imgUrl: "/images/CCTV_02.png",
  },
  // Add more products as needed
];

const RSeries = ({ title }) => {
  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  const [activeTab, setActiveTab] = useState("benefits");

  // Find the product by title
  const product = products.find((product) => product.title === title);
  console.log("product : ", product);
  console.log("title : ", title);

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
      {product && (
        <div>
          <Helmet>
            <title>{product.metaTitle || product.title}</title>
            <meta
              name="description"
              content={product.metaDescription || product.description}
            />
            <meta name="keywords" content="R-Series camera, customizable CCTV, Adiance R-Series" />
            <meta property="og:title" content={product.metaTitle || product.title} />
            <meta property="og:description" content={product.metaDescription || product.description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="Adiance Technologies" />
            <link rel="canonical" href={canonicalUrl} />
          </Helmet>

          <Header />
          <div>
            {product && <NavHeader text={product.title} />}
            {/* Product Section */}
            <div style={{ margin: "0 10%" }}>
              <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
                sx={{ margin: "10% 0" }}
              >
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  {/* Product Image */}
                  <img
                    src={product.imgUrl}
                    alt={product.title}
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      maxHeight: "400px",
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
              <ContactForm />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </ThemeProvider>
  );
};

export default RSeries;
