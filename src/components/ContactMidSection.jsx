import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactMidSection = () => {
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      sx={{ marginTop: "40px", marginBottom: "40px" }}
    >
      {/* First column */}
      <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
        <PhoneIcon sx={{ fontSize: 60, marginBottom: 2 }} />
        <Typography variant="h5" gutterBottom>
          Phone
        </Typography>
        <Typography variant="body1" gutterBottom>
          Contact us for sale
        </Typography>
        <Typography variant="body2" color="textSecondary">
          +919687779999
        </Typography>
      </Grid>

      {/* Second column */}
      <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
        <MailIcon sx={{ fontSize: 60, marginBottom: 2 }} />
        <Typography variant="h5" gutterBottom>
          Email
        </Typography>
        <Typography variant="body1" gutterBottom>
          Get in touch with us for any type of CCTV Manufacturing Service
        </Typography>
        <Typography variant="body2" color="textSecondary">
          contact@adiance.com
        </Typography>
      </Grid>

      {/* Third column */}
      <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
        <LocationOnIcon sx={{ fontSize: 60, marginBottom: 2 }} />
        <Typography variant="h5" gutterBottom>
          Location
        </Typography>
        <Typography variant="body1" gutterBottom>
          7, Arista@Eight corporate House,
          <br /> Near Satyam House, Behind Rajpath Club, <br />
          Bodakdev, Ahmedabad - 380054.
        </Typography>
      </Grid>

      {/* Additional paragraphs */}
      <Grid item xs={12} sx={{ textAlign: "justify", margin: "5% 10%" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              Get in touch with us here at our digital portal to learn more
              about our products and their capabilities. Our support team is
              available for your assistance 24/7 to guide you through the
              various interesting features of our wide product range to find the
              ideal solution to help you meet your requirements. The diverse
              range of products with unique features in each of them will be a
              great fit for your campuses to achieve complete surveillance.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              Get in touch with us here at Adiance Technologies to find
              enterprising hardware solutions to empower yourself to your
              maximum potential. Discover the ideal solution for your
              requirements, however big or small they are from our wide range of
              products. The highest level of monitoring and surveillance you can
              reach with our products will let you design a safe and secure
              lifestyle for your clients. Unleash the true potential of
              monitoring software and surveillance solutions with our quality
              camera equipment.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactMidSection;
