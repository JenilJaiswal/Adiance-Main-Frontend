import React from "react";
import { useState } from "react";
import {
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { Container } from "react-bootstrap";

const Channelpartner = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: "20px", backgroundColor: "#F3F4F8", paddingBlock: "75px" }}>
        {/* Tabs for Navigation */}
        <Container fluid="xl">
          <Tabs value={value} onChange={handleChange} aria-label="section tabs" centered sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "red", // Underline indicator color
                },
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: "bold",
                  color: "black", // Default tab text color
                },
                "& .Mui-selected": {
                  color: "red", // Active tab text color
                },
            }}>
            <Tab label="Channel" />
            <Tab label="Distribution" />
            <Tab label="Technology Partners" />
          </Tabs>

          <Box sx={{ borderBottom: 1, borderColor: "divider", marginY: 2 }} />

          {/* Content Section */}
          <Grid container spacing={4}>
            {/* Image Section */}
            <Grid item xs={12} md={6}>
              <img
                src={value === 0 ? "/images/Channelpartner.png" : value === 1 ? "/images/DistributionPartner.jpg" : "/images/TecnologyPartner.jpg"}
                alt={value === 0 ? "Channel Partner" : value === 1 ? "Distribution Partner" : "Technology Partner"}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "15px",
                }}
              />
            </Grid>

            {/* Text Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" component="h2" gutterBottom style={{fontWeight:"bold"}}>
                {value === 0 && "Channel Partner:"}
                {value === 1 && "Distribution Partner:"}
                {value === 2 && "Technology Partner:"}
              </Typography>

              {value === 0 && (
                <Typography variant="body1" paragraph>
                  Adiance’s Channel Partner Program is designed for resellers, system integrators, and installers worldwide, 
                  helping you promote cutting-edge AI-powered cameras and surveillance solutions while driving business growth. 
                  As a valued partner of Adiance, you’ll gain immediate access to a range of exclusive benefits, including:
                </Typography>
              )}

              {value === 0 && (
                <List>
                  <ListItem>• Diverse and innovative AI camera product portfolio</ListItem>
                  <ListItem>• Co-marketing opportunities to boost brand visibility</ListItem>
                  <ListItem>• Attractive growth incentives</ListItem>
                  <ListItem>• Project registration, tailored solutions, and special pricing support</ListItem>
                  <ListItem>• Expert training and ongoing support</ListItem>
                  <ListItem>• Access to discounted demo equipment</ListItem>
                  <ListItem>• And much more...</ListItem>
                </List>
              )}

              {value === 1 && (
                <Typography variant="body1" paragraph>
                  Join the Adiance Distribution Partner Program and unlock access to advanced AI-powered security solutions 
                  designed to meet the evolving demands of today’s market. As a distribution partner, you’ll benefit from 
                  our robust support and resources to drive your business forward.
                </Typography>
              )}

              {value === 2 && (
                <Typography variant="body1" paragraph>
                  When you join the Adiance Technology Partner Program, you gain access to a wide range of technical and 
                  commercial resources to accelerate your success. We ensure your solution gets the visibility it deserves 
                  through our extensive communication channels.
                </Typography>
              )}

              {value === 2 && (
                <List>
                  <ListItem>• Seamless synergy between your solutions and Adiance’s cutting-edge AI technology</ListItem>
                  <ListItem>• Global reach and comprehensive support</ListItem>
                  <ListItem>• Accelerated time to market for your innovations</ListItem>
                </List>
              )}

              {value === 2 && (
                <Typography variant="body1" paragraph>
                  The Adiance Technology Partner Program offers three tiers of partnership. Select the level that best aligns 
                  with your business goals, ambitions, and capabilities. Whether you're looking for project-specific integration 
                  or a deeper collaboration to explore more extensive opportunities, our program is designed to support your 
                  growth and success.
                </Typography>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Channelpartner;
