import React, { useState } from "react";
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const FaqsSection = ({ faqsList }) => {
    const [expanded, setExpanded] = useState("panel0");
    if (!faqsList || !faqsList.qa || faqsList.qa.length === 0) {
        return null;
    }

    // --- State to control the accordion (mimics allowMultiple={false}) ---
    // defaultIndex={[0]} is set by initializing state to 'panel0'

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // --- Title-splitting logic (unchanged) ---
    const titleWords = faqsList.title ? faqsList.title.split(" ") : [];
    const lastWord = titleWords.pop() || "";
    const firstWords = titleWords.join(" ");

    return (
        <Box
            sx={{
                width: { xs: "100%", md: "80%" },
                mx: "auto",
                mt: { xs: "4%", md: "3%" },
            }}
        >
            <Typography
                variant="h2"
                component="h2" // Ensures it's an <h2> tag
                sx={{
                    fontSize: { xs: "24px", md: "48px" },
                    textAlign: "center",
                    mb: { xs: 1, md: 2 },
                    color: "#000",
                    fontWeight: "bold", // Added to match Chakra's 'Heading'
                }}
            >
                {firstWords}{" "}
                <Typography
                    component="span" // Ensures it's a <span> tag
                    sx={{ color: "#BF0603", fontSize: "inherit", fontWeight: "inherit" }}
                >
                    {lastWord}
                </Typography>
            </Typography>

            {/* Map over the qa array to create Accordion components */}
            {faqsList.qa.map((faq, index) => {
                const panelId = `panel${index}`;
                const isExpanded = expanded === panelId;

                return (
                    <Accordion
                        key={index}
                        disableGutters // Removes default left/right padding
                        elevation={0} // Removes box-shadow
                        expanded={isExpanded}
                        onChange={handleChange(panelId)}
                        sx={{
                            borderBottom: "1px solid black",
                            py: 1,
                            // Remove the default top border from MUI Accordion
                            "&:before": {
                                display: "none",
                            },
                        }}
                    >
                        <AccordionSummary
                            // Logic to swap the icon instead of rotating
                            expandIcon={
                                isExpanded ? (
                                    <RemoveIcon sx={{ color: "#DB7B3A", fontSize: { xs: 20, md: 20 } }} />
                                ) : (
                                    <AddIcon sx={{ color: "#DB7B3A", fontSize: { xs: 20, md: 20 } }} />
                                )
                            }
                            aria-controls={`${panelId}-content`}
                            id={`${panelId}-header`}
                            sx={{
                                py: { xs: 1, md: 1 },
                                // Override default icon rotation behavior
                                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                                    transform: "none",
                                },
                            }}
                        >
                            <Typography
                                component="h3" // Ensures it's an <h3> tag
                                sx={{
                                    flex: 1,
                                    textAlign: "left",
                                    fontWeight: "700",
                                    fontSize: { xs: "14px", md: "16px" },
                                    color: "#000",
                                }}
                            >
                                {faq.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                pb: { xs: 1, md: 2 },
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#000",
                                    fontWeight: "400",
                                    fontSize: { xs: "14px", md: "16px" },
                                    lineHeight: { xs: "18px", md: "20px" },
                                }}
                            >
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </Box>
    );
};

export default FaqsSection;