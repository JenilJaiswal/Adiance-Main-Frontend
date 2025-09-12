import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Container } from "react-bootstrap";

// Styled Accordion components
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ expanded }) => ({
  border: expanded ? "2px solid #BF0603" : "none",
  backgroundColor: "#FFFFFF",
  borderRadius: "8px",
  transition: "border 0.3s ease",
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  () => ({
    border: "none",
    // flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  border: "none",
  padding: "16px",
}));

const BlogFaq = ({ faqdata }) => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box sx={{ paddingBlock: "1rem", backgroundColor: "#FFFFFF" }}>
      <Container 

>
        {/* Top Part */}
        <Box>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#7D7D7D",
              marginBlock: "1.5rem",
            }}
          >
            <span style={{ fontWeight: "bold" }}>
              {/* Frequently Asked Questions (FAQs) */}
              FAQs
            </span>
          </Typography>
        </Box>

        {/* Accordion List */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { sm: "0.2rem", md: "0.5rem", lg: "0.7rem", xl: "1rem" },
          }}
        >
          {faqdata &&
            faqdata.map((faqItem, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  expandIcon={<ChevronRightIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                 <Typography
  variant="h6"
  sx={{
    fontWeight: "bold",
    fontSize: {
      xs: "1rem",
      sm: "1rem",
      md: "1.1rem",
      lg: "1.1rem",
    },
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    wordBreak: "break-word", // Ensures breaking long words
    maxWidth: "100%",
  }}
>
  {faqItem.question}
</Typography>

                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      color: "#7D7D7D",
                      fontSize: {
                        xs: "0.8rem",
                        sm: "0.8rem",
                        md: "0.8rem",
                        lg: "0.9rem",
                      },
                      lineHeight: { xs: "1.3", sm: "1.5", md: "1.6" },
                    }}
                  >
                    {faqItem.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BlogFaq;
