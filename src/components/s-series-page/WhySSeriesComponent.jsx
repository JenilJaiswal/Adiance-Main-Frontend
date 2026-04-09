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

// --- Data Object at the Top ---

// Original image paths
const images = [
  "/images/sentiment_analysis_accordian.webp",
  "/images/ExecellentAudio.webp",
  "/images/videiliveStriming.webp",
  "/images/Zeroinstoletion.webp",
];

// Dynamic data object for the accordion
const accordionData = [
  {
    id: "panel1",
    title: "Plug-N-Play + All-in-One App",
    description:
      "Go live in minutes. Control live view, alerts, playback, reports, and multiple cameras in the ArcisAI app. Includes 2-year warranty and responsive support.",
    image: images[0],
  },
  {
    id: "panel2",
    title: "Event-Based Intelligence",
    description:
      "Clean, actionable notifications with false-alert filtering and auto detection reports delivered to your app in real time.",
    image: images[1],
  },
  {
    id: "panel3",
    title: "Clear Vision, Day & Night",
    description:
      "3MP QHD (2304×1296 @30fps) with 10× digital zoom, low-light sensitivity (0.1Lux color / 0.01Lux B/W) and Smart IR (4 LEDs) for up to 50 m.",
    image: images[2],
  },
  {
    id: "panel4",
    title: "Instant Deterrence & 2-Way Talk",
    description:
      "Built-in siren, strobe light, microphone, and speaker so you can intervene in the moment.",
    image: images[3],
  },
  {
    id: "panel5",
    title: "Connect Anywhere (Wi-Fi / LAN / 4G LTE)",
    description:
      "Works where Wi-Fi isn’t feasible via CAT-1 LTE (FDD B1/B3/B5/B8; TDD B34/B38/B39/B40/B41). ONVIF 2.4 for easy VMS integration.",
    image: images[0], // Reusing image 1
  },
  {
    id: "panel6",
    title: "Outdoor-Ready & Reliable",
    description:
      "IP66 weatherproofing, 4000V lightning protection, stable DC 12V (≤12W) operation - plus secure cloud storage plans.",
    image: images[1], // Reusing image 2
  },
];

// --- Component ---

const WhySSeriesComponent = () => {
  const [expanded, setExpanded] = React.useState("panel1");
  const [activeImage, setActiveImage] = React.useState(accordionData[0].image); // Set initial image from data

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    if (newExpanded) {
      // Find the corresponding item in the data array and set its image
      const activeItem = accordionData.find((item) => item.id === panel);
      if (activeItem) {
        setActiveImage(activeItem.image);
      }
    }
  };

  return (
    <Box sx={{ paddingBlock: "3rem", backgroundColor: "#FFFFFF" }}>
      <Container fluid="xl">
        {/* Top Part - Updated Content */}
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "2.5rem", sm: "3.5rem", lg: "3.5rem" },
            }}
          >
            Why Choose S-Series AI CCTV Camera
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#7D7D7D",
              marginBlock: "1.5rem",
              maxWidth: "800px", // Added for better line length
              marginInline: "auto", // Center the text block
            }}
          >
            Discover how the S-Series AI CCTV security camera makes surveillance
            smarter, faster and more reliable. With easy setup, mobile app
            control, crystal-clear video, event-based alerts and outdoor-ready
            durability, it’s built to give you peace of mind every day.
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
              {/* Dynamic Accordion Rendering */}
              {accordionData.map((item) => (
                <Accordion
                  key={item.id}
                  expanded={expanded === item.id}
                  onChange={handleChange(item.id)}
                >
                  <AccordionSummary
                    aria-controls={`${item.id}d-content`}
                    id={`${item.id}d-header`}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {item.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "#7D7D7D" }}>
                      {item.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}

              {/* <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "start" },
                  marginBlock: "1rem",
                }}
              >
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
              </Box> */}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginLeft: { md: "0", lg: "5rem", xl: "7rem" },
              }}
            >
              <img
                loading="lazy"
                src={activeImage} // Display the active image from state
                alt="Why S series"
                style={{
                  maxWidth: "90%",
                  height: "70%",
                  borderRadius: "20px",
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