"use client";

import { Box } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";

const ClientLogo = ({ src, alt, style }) => {
  return <img loading="lazy" src={src} alt={alt} style={style} />;
};

const clientLogos = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/beb4b91f49312bd9d8d333500d52be577f9c3aa37788a22eb226b9be5e3678fb?placeholderIfAbsent=true&apiKey=5e6c7542e7f24225a4d3d5a1be551cbc",
    alt: "Client Logo 1",
    style: {
      aspectRatio: "3.56",
      objectFit: "contain",
      objectPosition: "center",
      width: "185px",
    },
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2db648f4a583ee90930d68081a70cf8a03cbb522ffa7af772697f8120b9b4b2a?placeholderIfAbsent=true&apiKey=5e6c7542e7f24225a4d3d5a1be551cbc",
    alt: "Client Logo 2",
    style: {
      aspectRatio: "3.91",
      objectFit: "contain",
      objectPosition: "center",
      width: "203px",
    },
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/29e681432c2e8f6dbc0d0ab3b46cc5462b5df3a04682d05f0641e29c6fdabb6a?placeholderIfAbsent=true&apiKey=5e6c7542e7f24225a4d3d5a1be551cbc",
    alt: "Client Logo 3",
    style: {
      aspectRatio: "3.56",
      objectFit: "contain",
      objectPosition: "center",
      width: "185px",
    },
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/635bac2c3e804f3ac8c1f5b967395385302532b3ec61b51099fe491391905651?placeholderIfAbsent=true&apiKey=5e6c7542e7f24225a4d3d5a1be551cbc",
    alt: "Client Logo 4",
    style: {
      aspectRatio: "3.1",
      objectFit: "contain",
      objectPosition: "center",
      width: "161px",
    },
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/eab0ea6d712c2ec08d3cc4e5d707a0f0a8818397262a32fd70196ea144558c37?placeholderIfAbsent=true&apiKey=5e6c7542e7f24225a4d3d5a1be551cbc",
    alt: "Client Logo 5",
    style: {
      aspectRatio: "3.06",
      objectFit: "contain",
      objectPosition: "center",
      width: "159px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c45f253512cc886cf8447279ff8e6e57d1146ab09b6e081e13805775ea1b1b24?placeholderIfAbsent=true&apiKey=5e6c7542e7f24225a4d3d5a1be551cbc",
    alt: "Client Logo 6",
    style: {
      aspectRatio: "2.23",
      objectFit: "contain",
      objectPosition: "center",
      width: "116px",
    },
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/28aa16ce90a1c3ef47ebacaf149cac94485ce02ccc462fa5d915ef073ad0cfee?placeholderIfAbsent=true&apiKey=5e6c7542e7f24225a4d3d5a1be551cbc",
    alt: "Client Logo 7",
    style: {
      aspectRatio: "3.56",
      objectFit: "contain",
      objectPosition: "center",
      width: "185px",
    },
  },
];

function ValuedClients() {
  return (
    <Box sx={{backgroundColor:"#F3F4F8", paddingBlock:"2rem" }}>
      <Container fluid="xl">
        <div style={{ textAlign: "center",}}>
          <div>
            <h5>Trusted by valued clients</h5>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
              flexWrap: "wrap",
              alignItems: "center"
            }}
          >
            {clientLogos.map((item, index) => (
              <Box key={index} sx={{ padding: "10px" }}>
                <Box
                  component="img"
                  src={item.src}
                  alt={item.alt}
                  sx={{
                    width: {
                      xs: "80px",
                      sm: "100px",
                      md: "120px",
                      lg: "160px",
                    }, // Responsive widths
                    height: "auto", // Maintains aspect ratio
                    maxWidth: "100%", // Prevents image overflow
                  }}
                />
              </Box>
            ))}
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default ValuedClients;