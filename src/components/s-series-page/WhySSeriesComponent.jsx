import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography, Button } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Container } from "react-bootstrap";

// Styled Accordion components
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme, expanded }) => ({
  border: expanded ? "2px solid #BF0603" : "none",
  backgroundColor: "#FFFFFF",
  borderRadius: "8px",
  transition: "border 0.3s ease",
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    border: "none",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  border: "none",
  padding: theme.spacing(2),
}));

const images = [
  "/images/sentiment_analysis_accordian.jpg.png", // Image for panel 1
  "/images/ExecellentAudio.jpg", // Image for panel 2
  "/images/videiliveStriming.jpg", // Image for panel 3
  "/images/Zeroinstoletion.jpg", // Image for panel 4
];

const WhySSeriesComponent = () => {
  const [expanded, setExpanded] = React.useState("panel1");
  const [activeImage, setActiveImage] = React.useState(images[0]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    if (newExpanded) {
      setActiveImage(images[panel.charAt(panel.length - 1) - 1]); // Update image based on active panel
    }
  };

  return (
    <Box sx={{ paddingBlock: "3rem", backgroundColor: "#FFFFFF" }}>
      <Container fluid="xl">
        {/* Top Part */}
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "2.5rem", sm: "3.5rem", lg: "3.5rem" },
            }}
          >
            Why S Series
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#7D7D7D",
              marginBlock: "1.5rem",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Advanced Analytics</span>
            <br />
            For Intelligent alerts to smartly manage 10s of thousands of locations for any unwanted incident
          </Typography>
        </Box>

        {/* Bottom Part */}
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { sm: "0.2rem", md: "0.5rem", lg: "0.7rem", xl: "1rem" },
              }}
            >
              <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Advanced Analytics
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "#7D7D7D" }}>
                    For Intelligent alerts to smartly manage 10s of thousands of locations for any unwanted incident
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                  <Typography sx={{ fontWeight: "bold" }}>
                    EXCELLENT AUDIO/ VIDEO EXPERIENCE
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "#7D7D7D" }}>
                    100% performance & uptime
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                  <Typography sx={{ fontWeight: "bold" }}>
                    LIVE VIDEO STREAMING
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "#7D7D7D" }}>
                    Cloud Recording over 2G/3G/4G/5G networks.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                  <Typography sx={{ fontWeight: "bold" }}>ZERO INSTALLATION</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "#7D7D7D" }}>
                    Extremely Easy Setup with 5-minute setup target for going from 0% to 100% per camera.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", sm: "start" }, marginBlock: "1rem" }}>
                <Button
                  variant="contained"
                  endIcon={<ChevronRightIcon />}
                  sx={{
                    backgroundColor: "#BF0603",
                    color: "#FFFFFF",
                    textTransform: "none",
                    padding: "0.8rem",
                    maxWidth: { xs: "150px", lg: "200px" },
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#FF4D4D",
                    },
                    textAlign: { xs: "center", sm: "start" },
                  }}
                >
                  Explore More
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center", marginLeft: { md: "0", lg: '5rem', xl: "7rem" } }}>
              <img
                loading="lazy"
                src={activeImage} // Display the active image
                alt="Why S series"
                style={{
                  maxWidth: "90%",
                  height: "70%",
                  borderRadius: "20px"
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhySSeriesComponent;
