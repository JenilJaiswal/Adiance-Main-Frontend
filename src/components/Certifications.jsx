"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { background } from "@chakra-ui/react";
import { transform } from "framer-motion";

const Certifications = () => {
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const imageSize = screenWidth > 768 ? 100 : 50;

    const images = [
        "images/Home_ISO.webp",
        "images/Home_RoHS.webp",
        "images/Home_BIS.webp",
        "images/Home_FCC.webp",
        "images/Home_CE.webp",
    ];

    const imageStyle = {
        width: `${imageSize}px`,
        height: `${imageSize}px`,
        margin: "2%",
        // objectFit: "fit",
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "10px",
    };

    return (
        <>
            <Grid
                container
                spacing={0}
                justifyContent="center"
                sx={{
                    marginTop: "0%",
                    marginBottom: "2%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    maxWidth: "80%",
                }}
            >
                <Grid item xs={12} sm={12}>
                    <Typography
                        variant="h5"
                        gutterBottom
                        style={{
                            textAlign: "center",
                            fontSize: "36px",
                            marginTop: "4%",
                            marginBottom: "0%",
                        }}
                    >
                        <center>Certifications</center>
                    </Typography>
                    {/* <Typography variant="body1" align="justify">
                        Adiance is a global leader in electronic products, with
                        certifications in ISO 27001:2022, RoHS, BIS, FCC, and CE. These
                        certifications demonstrate Adiance's commitment to quality, safety,
                        and regulatory compliance. ISO 27001:2022 ensures data
                        confidentiality and integrity, while RoHS certification promotes
                        environmental sustainability. BIS certification validates product
                        conformity to quality and safety standards, while FCC and CE
                        certifications ensure electromagnetic compatibility and safety.
                    </Typography> */}
                </Grid>
            </Grid>
            <div style={containerStyle}>
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Image ${index + 1}`}
                        style={imageStyle}
                    />
                ))}
            </div>
        </>
    );
};

export default Certifications;
