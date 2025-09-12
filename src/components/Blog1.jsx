import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import {
  Typography,
  CardMedia,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Grid,
  Container,
} from "@mui/material";
import { ExpandMore, Face, Label } from "@mui/icons-material"; // Import icons
import { Helmet } from "react-helmet";
import BlogFaq from "./BlogFaq.jsx";
import { useLocation } from "react-router-dom";

const Blog1 = () => {
  const { urlTitle } = useParams();
  const [blog, setBlog] = useState(null);
  const location = useLocation();
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  useEffect(() => {
    // if (!id) return; // Prevent making API request if id is undefined
    if (!urlTitle) return;

    const fetchBlog = async () => {
      try {
        const response = await fetch(
          // `https://backend.adiance.com:443/api/blogs/getBlog/${id}`
          `https://backend.adiance.com:443/api/blogs/getBlog/${urlTitle}`
          // `http://localhost:8007/api/blogs/getBlog/${urlTitle}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
    // }, [id]);
  }, [urlTitle]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  // Function to render bold words in the paragraph
  // Function to render bold words in the paragraph
  const renderBoldWords = (text) => {
    // Regular expression to match words enclosed in ** **
    const boldRegex = /\*\*(.*?)\*\*/g;
    return text.split(boldRegex).map((chunk, index) => {
      if (index % 2 === 0) {
        // If the index is even, render normal text
        return chunk.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br /> {/* Add line break after each line */}
          </React.Fragment>
        ));
      } else {
        // If the index is odd, render bolded text
        return (
          <strong key={index} style={{ fontWeight: "bold" }}>
            {chunk}
          </strong>
        );
      }
    });
  };

  return (
    <div>
      {" "}
      {/* Prevent horizontal scroll */}
      <Helmet>
        <title>{blog.metaName || blog.title}</title>
        <meta
          name="description"
          content={blog.metaDescription || blog.description}
        />
        <link rel="canonical" href={canonicalUrl} />

        {/* Inject dynamic Article Schema */}
        {blog.articleSchema && (
          <script type="application/ld+json">{blog.articleSchema}</script>
        )}
        {/* Inject dynamic FAQ Schema */}
        {blog.faqSchema && (
          <script type="application/ld+json">{blog.faqSchema}</script>
        )}
      </Helmet>
      <Header />
      {/* <NavHeader text={blog.title} /> */}
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="center"
          justifyContent={"space-between"}
          marginBlock={"3%"}
        >
          {/* Title Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              sx={{
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "1.75rem", md: "2.375rem" },
                fontWeight: "600",
                lineHeight: { xs: "2.5rem", md: "3.125rem" },
                // marginBottom: "2.5%",
              }}
            >
              {blog.title}
            </Typography>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6} padding={{ xs: "1.5rem", lg: "3rem" }}>
            <img
              src={`https://backend.adiance.com:443/images/${blog.image}`}
              alt={blog.title}
              style={{
                width: "100%",
                maxWidth: "1200px",
                height: "auto",
                margin: "auto",
                display: "block",
                borderRadius: "8px",
                // padding: "3rem",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <div
          style={
            {
              // width: "100%",
              // maxWidth: "1200px", // Set a max width to prevent excessive stretching
              // padding: "5%", // Use padding instead of margin for spacing
              // margin: "5% 10%", // Center content
            }
          }
        >
          {/* <Typography
          variant="h5"
          gutterBottom
          sx={{
            marginBottom: "2.5%",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {blog.title}
        </Typography> */}
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "1.125rem", md: "1.125rem" },
              lineHeight: { xs: "1.75rem", md: "2.25rem" },
              letterSpacing: { xs: "0.0437rem", md: "0.0437rem" },
            }}
            paragraph
          >
            {blog.description.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Typography>
          {/* <img
          src={`https://backend.adiance.com:443/images/${blog.image}`}
          alt={blog.title}
          style={{
            width: "100%", // Make it responsive
            maxWidth: "1200px", // Limit max width
            height: "auto",
            margin: "auto",
            display: "block",
            marginBlock: "3.5%",
          }}
        /> */}
          {/* {blog.sections.map((section, index) => (
      <div key={index}>
        <Typography variant="h6" gutterBottom fontWeight={"bold"}>
          {section.heading}
        </Typography>
        <Typography variant="body1" paragraph>
          {renderBoldWords(section.para).map((chunk, index) => (
            <React.Fragment key={index}>{chunk}</React.Fragment>
          ))}
        </Typography>
      </div>
    ))} */}
          {blog.sections.map((section, index) => (
            <div key={index}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  lineHeight: { xs: "2.25rem", md: "2.875rem" },
                  fontWeight: "500",
                }}
              >
                {section.heading}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  whiteSpace: "pre-line", // This will preserve newline characters
                  "& a": {
                    fontWeight: "bold",
                  },
                  fontSize: { xs: "1.125rem", md: "1.125rem" },
                  lineHeight: { xs: "1.75rem", md: "2.25rem" },
                  letterSpacing: { xs: "0.0437rem", md: "0.0437rem" },
                }}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: section.para, // No need to replace \n with <br /> now
                  }}
                />
              </Typography>
            </div>
          ))}

          {/* FAQ Section */}
          {blog?.faqs?.some(
            (faq) => faq.question.trim() && faq.answer.trim()
          ) && (
            <Box sx={{ padding: "2%", borderRadius: "12px" }}>
              <BlogFaq faqdata={blog.faqs} />
            </Box>
          )}

          <Typography variant="h6" gutterBottom fontWeight={"bold"}>
            Tags:
          </Typography>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {blog.tags.map((tag, index) => (
              <Chip key={index} icon={<Label />} label={tag} />
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Blog1;
