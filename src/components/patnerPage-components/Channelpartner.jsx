import React, { useState } from "react";
import {
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
  List,
  ListItem,
  Container, // Replaced react-bootstrap Container with MUI's
} from "@mui/material";
import Globalnetwork from "./Globalnetwork";
import WhyPartnerwithAdiance from "./WhyPartnerwithAdiance";

const partnerData = [
  {
    label: "Distributor",
    title: "Distributor:",
    imageSrc: "/images/Channelpartner.png",
    altText: "Distributor Partner",
    content: [
      {
        type: "paragraph",
        text: "Adiance’s Distributor Program is designed to empower our regional partners...",
      },
      {
        type: "paragraph",
        text: "As a valued Adiance Distributor, you’ll gain immediate access...",
      },
      {
        type: "list",
        items: [
          "Higher Profit Margins",
          "Add Advanced AI CCTV to Your SKUs",
          "Bulk Purchase Discounts for large orders",
          "Exclusive Regional Rights based on performance",
          "Dealer Network Growth with incentives and demo kits",
          "OEM Branding & Customization for key projects",
          "Joint Marketing Programs for visibility and reach",
        ],
      },
    ],
    // --- NEW SECTION ADDED ---
    whyPartner: {
      title: "Why Distributors Partner with Adiance",
      features: [
        {
          title: "Premium Made-in-India Technology",
          description:
            "Partnering with Adiance means adding cutting-edge AI CCTV solutions to your portfolio. Our products combine advanced analytics with reliability, backed by upcoming STQC certification, BIS, CE, and ISO standards.",
        },
        {
          title: "Shared Growth & Regional Exclusivity",
          description:
            "We believe in empowering our distributors with full market ownership and rewarding performance. With exclusive rights and steady margins, your growth directly translates into ours.",
        },
        {
          title: "Marketing Support that Converts",
          description:
            "Gain access to co-branded materials, social media content, and email campaigns designed to amplify your local reach and generate qualified leads.",
        },
        {
          title: "Expert Training & Joint Business Development",
          description:
            "Participate in weekly webinars, joint sales visits, and regular workshops that keep your team equipped with the latest product and sales know-how.",
        },
        {
          title: "Unmatched Technical & After-Sales Support",
          description:
            "Enjoy access to quick installation support, local RMA services, extended warranty (2 + 1 years), and both online/offline technical assistance to ensure smooth operations.",
        },
        {
          title: "Driving Sustainable Profitability",
          description:
            "Our Distributor Program focuses on long-term partnerships, not one-time sales. From lead sharing to co-branded campaigns, we help you scale effectively and sustainably.",
        },
      ],
    },
    cta: {
      title: "Become an Adiance",
      highlight: "Distributor.",
      description:
        "Join our growing national network and unlock exclusive access to regional rights, high margins, and dedicated support through our Partner Portal.",
    },
  },
  {
    label: "Dealer",
    title: "Dealer:",
    imageSrc: "/images/DistributionPartner.jpg",
    altText: "Dealer Partner",
    content: [
      {
        type: "paragraph",
        text: "Adiance’s Dealer Program is designed to help retailers and resellers grow their business...",
      },
      {
        type: "paragraph",
        text: "As a valued Adiance Dealer, you’ll gain access to exclusive benefits, including:",
      },
      {
        type: "list",
        items: [
          "Higher Profits better margins",
          "Complete Product Range access.",
          "Plug & Play Systems for quick installation",
          "Monthly & Quarterly Schemes",
          "Local Marketing Support with posters, leaflets.",
          "Dealer Event Assistance for product demos, roadshows, and showcases",
          "Lead Generation Support with qualified customer leads for faster conversions",
        ],
      },
    ],
    // --- NEW SECTION ADDED ---
    whyPartner: {
      title: "Your Advantage as an Adiance Dealer",
      features: [
        {
          title: "Strong Marketing & In-Store Branding",
          description:
            "Get professionally designed posters, standees, and leaflets to attract walk-in customers. Access ready-to-use marketing tools and participate in local promotional events backed by Adiance.",
        },
        {
          title: "Lead & Event Support",
          description:
            "Receive qualified leads directly from distributors or Adiance’s marketing campaigns. Get assistance in organizing local dealer meets, product demos, and awareness roadshows to build visibility and generate demand.",
        },
        {
          title: "Training & Certification for Sales Growth",
          description:
            "Enhance your technical and sales expertise through online training, certified workshops, and proof-of-concept support to gain customer confidence and close deals faster.",
        },
        {
          title: "Simplified Tech with Edge-AI & Cloud",
          description:
            "Adiance’s Edge-AI cameras and cloud-based connectivity remove the need for complex IT setups. Installation is fast, efficient, and designed for everyday environments.",
        },
        {
          title: "After-Sales Support that Builds Trust",
          description:
            "Every product comes with a standard 2-year warranty plus 1-year extended support. Quick installation guides and remote assistance ensure seamless customer satisfaction.",
        },
      ],
    },
    cta: {
      title: "Join as an Adiance",
      highlight: "Dealer.",
      description:
        "Start selling next-generation surveillance solutions with higher margins, marketing support, and continuous technical assistance through our Partner Portal.",
    },
  },
  {
    label: "End Customer",
    title: "End Customer:",
    imageSrc: "/images/TecnologyPartner.jpg",
    altText: "End Customer",
    content: [
      {
        type: "paragraph",
        text: "Adiance delivers intelligent, reliable, and secure Made-in-India surveillance solutions...",
      },
      {
        type: "paragraph",
        text: "As an Adiance customer, you gain access to:",
      },
      {
        type: "list",
        items: [
          "AI-Powered Smart Cameras for precise monitoring",
          "Seamless Cloud Access to view footage anytime, anywhere.",
          "Made-in-India Reliability with STQC-upcoming, BIS, CE, and ISO certifications",
          "Edge AI Efficiency with instant alerts and low bandwidth use",
          "Smart App & VMS Control from a single intuitive dashboard",
          "Extended Warranty & Support up to 3 years with quick service",
        ],
      },
    ],
    // --- NEW SECTION ADDED ---
    whyPartner: {
      title: "Why Customers Trust Adiance", // Note the different title for this tab
      features: [
        {
          title: "Next-Gen Security Made Simple",
          description:
            "From installation to daily monitoring, Adiance ensures your security system is plug-and-play, cloud-connected, and future-ready, with no technical expertise required.",
        },
        {
          title: "Peace of Mind Through Intelligent Monitoring",
          description:
            "Our cameras don’t just record; they think. With Edge AI, you get instant notifications for suspicious activities, human detection, and area intrusion so you can act before it’s too late.",
        },
        {
          title: "Scalable for Every Need",
          description:
            "Whether you are securing a single store, a large facility, or multiple branches, Adiance solutions grow with your requirements and integrate seamlessly with VMS and cloud storage.",
        },
        {
          title: "Always Connected and Secure",
          description:
            "Our servers and cloud infrastructure ensure your data stays encrypted, accessible, and protected from cyber threats. You control who sees what, when, and how.",
        },
        {
          title: "Responsive Support and Service",
          description:
            "With local RMA centers, online tech support, and quick replacement policies, Adiance stands by you every step of the way to ensure a smooth, worry-free experience.",
        },
      ],
    },
    cta: {
      title: "Experience the Future of Security with",
      highlight: "Adiance",
      description:
        "Choose smarter protection, intelligent alerts, and total peace of mind. Connect with our experts or find an authorized dealer near you today.",
    },
  },
];

const ChannelPartner = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Get the data for the currently selected tab
  const currentPartner = partnerData[value];

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          padding: "20px",
          backgroundColor: "#F3F4F8",
          paddingBlock: "75px",
        }}
      >
        {/* Use MUI Container for consistency */}
        <Container maxWidth="xl">
          {/* Tabs are now generated dynamically */}
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="section tabs"
            centered
            sx={{
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
            }}
          >
            {partnerData.map((partner, index) => (
              <Tab label={partner.label} key={index} />
            ))}
          </Tabs>

          <Box sx={{ borderBottom: 1, borderColor: "divider", marginY: 2 }} />

          {/* Content Section */}
          <Grid container spacing={4} sx={{ marginTop: 2 }}>
            {/* Image Section - Now reads from currentPartner */}
            <Grid item xs={12} md={6}>
              <img
                src={currentPartner.imageSrc}
                alt={currentPartner.altText}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "15px",
                }}
              />
            </Grid>

            {/* Text Section - Now reads from currentPartner */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                {currentPartner.title}
              </Typography>

              {/* Dynamically render content blocks (paragraphs and lists) */}
              {currentPartner.content.map((item, index) => {
                if (item.type === "paragraph") {
                  return (
                    <Typography variant="body1" paragraph key={index}>
                      {item.text}
                    </Typography>
                  );
                }
                if (item.type === "list") {
                  return (
                    <List key={index} dense>
                      {item.items.map((listItem, i) => (
                        <ListItem key={i} sx={{ paddingBlock: "2px" }}>
                          {/* Using a bullet character for styling as in original code */}
                          <Typography variant="body1">• {listItem}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  );
                }
                return null;
              })}
            </Grid>
          </Grid>
        </Container>
        <WhyPartnerwithAdiance data={currentPartner.whyPartner} />
        <Globalnetwork data={currentPartner.cta} />
      </Box>
    </>
  );
};

export default ChannelPartner;
