import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  const innovationItems = [
    {
      id: 1,
      title: "20+ Years Engineering Expertise",
      description:
        "Adiance is transitioning from an Original Equipment Manufacturer (OEM) to a hybrid OEM & Original Design Manufacturer (ODM), focusing on customized Printed Circuit Boards for surveillance cameras and electronic devices, enhancing efficiency and reducing lead times.",
      imageUrl: "/images/wwd1.png",
      url: "/product-engineering"
    },
    {
      id: 2,
      title: "Non-Chinese SoC CCTV Manufacturer",
      description:
        "Adiance's NVR-free approach and cloud storage offer cost-effective, scalable, and secure solutions for modern surveillance environments. This eliminates on-premises hardware, simplifies setup, and enhances data security, allowing seamless integration with other services.",
      imageUrl: "/images/wwd2.png",
      url: "/manufacturing"
    },
    {
      id: 3,
      title: "STQC, ONVIF, IP Compliant",
      description:
        "Our 360-degree approach to security focuses on customization, recognizing that every security scenario is unique and requires tailored solutions. We offer specific CCTV camera types, advanced features, and smart software integrations to help customers customize their security systems.",
      imageUrl: "/images/wwd3.png",
      url: "https://www.adiance.com/cloud-application"
    },
    {
      id: 4,
      title: "In-House R&D & Automated Production Lines",
      description:
        "Our 360-degree approach to security focuses on customization, recognizing that every security scenario is unique and requires tailored solutions. We offer specific CCTV camera types, advanced features, and smart software integrations to help customers customize their security systems.",
      imageUrl: "/images/wwd3.png",
      url: "https://www.adiance.com/cloud-application"
    },
    // {
    //   id: 1,
    //   title: "Product Engineering",
    //   description:
    //     "Adiance is transitioning from an Original Equipment Manufacturer (OEM) to a hybrid OEM & Original Design Manufacturer (ODM), focusing on customized Printed Circuit Boards for surveillance cameras and electronic devices, enhancing efficiency and reducing lead times.",
    //   imageUrl: "/images/wwd1.png",
    //   url: "/product-engineering"
    // },
    // {
    //   id: 2,
    //   title: "Manufacturing",
    //   description:
    //     "Adiance's NVR-free approach and cloud storage offer cost-effective, scalable, and secure solutions for modern surveillance environments. This eliminates on-premises hardware, simplifies setup, and enhances data security, allowing seamless integration with other services.",
    //   imageUrl: "/images/wwd2.png",
    //   url: "/manufacturing"
    // },
    // {
    //   id: 4,
    //   title: "Cloud and Application",
    //   description:
    //     "Our 360-degree approach to security focuses on customization, recognizing that every security scenario is unique and requires tailored solutions. We offer specific CCTV camera types, advanced features, and smart software integrations to help customers customize their security systems.",
    //   imageUrl: "/images/wwd3.png",
    //   url: "https://www.adiance.com/cloud-application"
    // },
    // {
    //   id: 5,
    //   title: " Backward Integration",
    //   description:
    //     "Our company is transitioning from OEM services to embracing both OEM and ODM approaches, demonstrating our commitment to backward integration. This allows us to offer a wider range of products, cater to diverse market demands, and foster deeper partnerships, enhancing innovation and product quality. ",
    //   imageUrl: "/images/backward.png",
    // },
    // {
    //   id: 5,
    //   title: " Backward Integration",
    //   description:
    //     "Our company is transitioning from OEM services to embracing both OEM and ODM approaches, demonstrating our commitment to backward integration. This allows us to offer a wider range of products, cater to diverse market demands, and foster deeper partnerships, enhancing innovation and product quality. ",
    //   imageUrl: "/images/backward.png",
    // },
  ];

  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      // if (window.innerWidth < 1625) {
      //   setDisplayItems(innovationItems.slice(0, 4));
      // } else {
      setDisplayItems(innovationItems);
      // }
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          marginTop: "2%",
          marginBottom: "5%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "80%", // Adjust the maximum width as needed
        }}
      >
        {/* First paragraph */}
        <Grid item xs={12} sm={12}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "36px",
              marginTop: "5%",
              marginBottom: "5%",
            }}
          >
            India’s Trusted CCTV Camera Manufacturing Company
          </h2>
          <Typography variant="body1" align="justify">
            Adiance Technologies is India’s leading AI CCTV manufacturer, delivering fully engineered, designed, and Made-in-India surveillance hardware for OEM, ODM, and JDM partners. <br /><br />
            With 20+ years of engineering expertise, advanced manufacturing infrastructure, and non-Chinese SoC availability, we build high-performance AI-enabled CCTV cameras trusted by global brands, government bodies, and enterprises.<br /><br />
            Our in-house R&D, strict quality processes, and STQC-compliant ecosystem ensure world-class reliability for partners across India, the Middle East, Europe, Africa, and Asia-Pacific.
          </Typography>
        </Grid>
      </Grid>
      {/* <div className="innovation-container wave-animation">
        {displayItems.map((item) => (
          <Link to={item.url}>
            <div key={item.id} className="innovation-item">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="innovation-image"
              />
              <div className="item-details">
                <div className="item-title">{item.title}</div>
                <div className="item-description1">{item.description}</div>
              </div>
              <h3 className="item-title-overlay">{item.title}</h3>
            </div>
          </Link>
        ))}
        <style jsx>{`
          .innovation-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 20px;
          }

          .innovation-item {
            position: relative;
            max-width: 325px;
            max-height: 325px;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .innovation-item:hover {
            transform: translateY(-5px);
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
          }

          .innovation-image {
            width: 100%;
            height: 100%;
            display: block;
            border-radius: 8px;
            transition: transform 0.3s;
            object-fit: cover;
          }
          .innovation-item:hover .innovation-image {
            transform: scale(1.1);
          }

          .item-details {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 20px;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
            transform: translateY(100%);
          }

          .innovation-item:hover .item-details {
            opacity: 1;
            transform: translateY(0);
          }

          .item-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .item-description1 {
            font-size: 16px;
            color: #666;
          }

          .item-title-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            box-sizing: border-box;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
          }

          @media (min-width: 768px) {
            .innovation-item {
              flex-basis: 45%;
            }
          }

          @keyframes wave {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }

          // .wave-animation {
          //   // animation: wave s infinite;
          // }

          // @media (max-width: 767px) {
          //   .wave-animation {
          //     animation: none;
          //   }
          }
        `}</style>
      </div> */}
    </>
  );
};

export default WhatWeDo;
