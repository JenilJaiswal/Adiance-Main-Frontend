import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  Button,
  CircularProgress,
  Stack,
  Grid,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Paper,
  Chip,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getBlogs, getBlogById } from "./blog"; // Assuming your API file is named blog.js

// Helper function to render Slate content - converted to use MUI/standard components
const renderSlateContent = (content) => {
  if (!content) return null;
  return content.map((node, i) => {
    if (!node) return null;

    if (node.text !== undefined) {
      let textElement = node.text;
      if (node.bold) textElement = <strong key={i}>{textElement}</strong>;
      if (node.italic) textElement = <em key={i}>{textElement}</em>;
      if (node.underline) textElement = <u key={i}>{textElement}</u>;
      return (
        <span key={i} style={{ color: node.color || "inherit" }}>
          {textElement}
        </span>
      );
    }

    if (node.type) {
      const children = node.children ? renderSlateContent(node.children) : null;
      switch (node.type) {
        case "paragraph":
          return (
            <Typography
              key={i}
              component="p"
              textAlign={node.align || "left"}
              sx={{ mb: 2 }}
            >
              {children}
            </Typography>
          );
        case "bulleted-list":
          return <ul key={i}>{children}</ul>;
        case "numbered-list":
          return <ol key={i}>{children}</ol>;
        case "list-item":
          return <li key={i}>{children}</li>;
        case "link":
          return (
            <Link
              key={i}
              href={node.url}
              target="_blank"
              rel={`noopener noreferrer ${node.noFollow ? "nofollow" : ""}`}
              underline="hover"
            >
              {children}
            </Link>
          );
        default:
          return <Box key={i}>{children}</Box>;
      }
    }
    return null;
  });
};

const TableOfContents = ({ components }) => {
  const headings = components.filter((comp) =>
    ["h2", "h3", "h4"].includes(comp.type)
  );

  const groupedHeadings = headings.reduce((acc, heading) => {
    if (heading.type === "h2") {
      acc.push({ main: heading, subHeadings: [] });
    } else if (heading.type === "h3" && acc.length > 0) {
      acc[acc.length - 1].subHeadings.push(heading);
    }
    return acc;
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <Box mb={{ xs: 0, md: "1%" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="#BF0603"
        mb={2}
        pl={{ xs: 0, md: "2%" }}
        sx={{ fontSize: { xs: "24px", md: "32px" } }}
      >
        Table of Contents
      </Typography>
      <List dense sx={{ padding: 0 }}>
        {groupedHeadings.map((group, index) => (
          <ListItem
            key={group.main.id || index}
            sx={{ display: "block", p: 0 }}
          >
            {/* The original Chakra code had an Accordion without a panel. 
                This MUI version simplifies it to a styled list of links, 
                which achieves the same visual result and functionality. */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ p: "8px 16px" }}
            >
              <Box
                component="svg"
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
              >
                <path
                  d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z"
                  fill="#BF0603"
                />
              </Box>
              <Link
                href={`#${group.main.id}`}
                onClick={(e) => handleLinkClick(e, group.main.id)}
                underline="none"
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "text.primary",
                }}
              >
                {renderSlateContent(group.main.content.text)}
              </Link>
            </Stack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const BlogNewPage = () => {
  const { urlWords } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_IMAGE_URL = "https://backend.adiance.com";

  useEffect(() => {
    const fetchBlog = async () => {
      // Logic for fetching blog data remains exactly the same
      if (blog) return;
      try {
        setLoading(true);
        const blogsResponse = await getBlogs(1, 1000); // Fetch a larger list to find the blog
        if (blogsResponse.status === "success") {
          const found = blogsResponse.data.find(
            (b) => b.metadata?.urlWords === urlWords
          );
          if (found) {
            const response = await getBlogById(found._id);
            if (response.status === "success") {
              setBlog(response.data);
            } else {
              setError("Blog not found");
            }
          } else {
            setError("Blog not found in the list");
          }
        } else {
          setError("Error fetching blogs list");
        }
      } catch (err) {
        setError("An error occurred while fetching the blog.");
      } finally {
        setLoading(false);
      }
    };

    // Preview logic remains the same
    const previewData = sessionStorage.getItem("previewBlogData");
    if (previewData) {
      try {
        setBlog(JSON.parse(previewData));
        setLoading(false);
        sessionStorage.removeItem("previewBlogData");
      } catch (e) {
        fetchBlog();
      }
    } else if (urlWords) {
      fetchBlog();
    } else {
      setError("No blog URL specified.");
      setLoading(false);
    }
  }, [urlWords, blog]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 5 }}>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  if (!blog) {
    return null;
  }

  const content = blog.content || {};
  const components = content.headingsAndImages || [];
  const faqComponents = content.faqs?.items || [];
  const mainImageUrl =
    content.mainImage && typeof content.mainImage === "string"
      ? `${API_IMAGE_URL}/images/${content.mainImage}`
      : null;

  const getDisplayDate = () => {
    // Date logic remains exactly the same
    const created = new Date(blog.createdAt?.$date || blog.createdAt);
    const updated = new Date(blog.updatedAt?.$date || blog.updatedAt);
    const isSame = created.toDateString() === updated.toDateString();
    const displayDate = isSame ? created : updated;
    const label = isSame ? "Published" : "Updated";
    return `${label} on ${displayDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}`;
  };

  return (
    <Box>
      <Helmet>
        <title>{blog.metadata?.metaTitle || "Blog"}</title>
        <meta
          name="description"
          content={blog.metadata?.metaDescription || ""}
        />
        {/* Add other meta tags here as needed */}
      </Helmet>

      <Container maxWidth="xl" sx={{ px: "2%" }}>
        {/* Blog Header */}
        <Box mb={4}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mt: 4,
              mb: 4,
              fontSize: { xs: "36px", md: "48px" },
              fontWeight: "bold",
            }}
          >
            {content.title || "Blog Title"}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            component={Paper}
            elevation={1}
            sx={{
              p: "8px 16px",
              mb: 2,
              width: "fit-content",
              borderRadius: "20px",
            }}
          >
            <CalendarIcon sx={{ color: "#BF0603" }} />
            <Typography variant="body1" fontWeight={500}>
              {getDisplayDate()}
            </Typography>
          </Stack>

          {content.tags && content.tags.length > 0 && (
            <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {content.tags.map((tag, index) => (
                <Chip key={index} label={tag} size="small" color="primary" variant="outlined" />
              ))}
            </Box>
          )}

          {mainImageUrl && (
            <Box
              sx={{
                mb: 4,
                width: "100%",
                paddingTop: "56.25%",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={mainImageUrl}
                alt={content.imageText || "Blog image"}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </Box>
          )}
        </Box>

        {/* Blog Content */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="flex-start"
        >
          {/* Main Content */}
          <Box width={{ xs: "100%", md: "70%" }}>
            <Paper
              elevation={2}
              sx={{ p: { xs: 3, md: 5 }, borderRadius: "24px" }}
            >
              <Stack spacing={4}>
                {content.brief && (
                  <Box>{renderSlateContent(content.brief)}</Box>
                )}

                <Box display={{ xs: "block", md: "none" }}>
                  <TableOfContents components={components} />
                </Box>

                {/* Dynamic Component Rendering */}
                {components.map((component) => (
                  <Box key={component.id} id={component.id}>
                    {component.type === "h2" && (
                      <Typography
                        variant="h4"
                        component="h2"
                        sx={{ fontWeight: "bold" }}
                      >
                        {renderSlateContent(component.content.text)}
                      </Typography>
                    )}
                    {component.type === "h3" && (
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{ fontWeight: "bold" }}
                      >
                        {renderSlateContent(component.content.text)}
                      </Typography>
                    )}
                    {component.type === "h4" && (
                      <Typography
                        variant="h6"
                        component="h4"
                        sx={{ fontWeight: "bold" }}
                      >
                        {renderSlateContent(component.content.text)}
                      </Typography>
                    )}
                    {component.type === "p" && (
                      <Box>{renderSlateContent(component.content.text)}</Box>
                    )}
                    {/* ... other component types ... */}
                  </Box>
                ))}

                {/* FAQ Section */}
                {faqComponents.length > 0 && (
                  <Box mt={4}>
                    <Typography variant="h4" component="h2" mb={2}>
                      {content.faqs?.title || "Frequently Asked Questions"}
                    </Typography>
                    {faqComponents.map((faq, idx) => (
                      <Accordion key={faq.id || idx}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography fontWeight={600}>
                            {faq.question || "Question"}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {renderSlateContent(faq.answer)}
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </Box>
                )}
              </Stack>
            </Paper>
          </Box>

          {/* Sticky Sidebar */}
          <Box
            width={{ xs: "100%", md: "30%" }}
            sx={{
              position: { xs: "relative", md: "sticky" },
              top: { md: "20px" },
            }}
          >
            <Stack spacing={4}>
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  borderRadius: "24px",
                  display: { xs: "none", md: "block" },
                }}
              >
                <TableOfContents components={components} />
              </Paper>
              <Paper
                elevation={2}
                component="form"
                sx={{ p: { xs: 3, md: 4 }, borderRadius: "24px" }}
              >
                <Typography variant="h4" fontWeight={600} mb={3}>
                  Send Us a{" "}
                  <Box component="span" color="#DB7B3A">
                    Message
                  </Box>
                </Typography>
                <Stack spacing={2}>
                  <TextField label="Full name *" disabled fullWidth />
                  <TextField
                    label="Email Address *"
                    type="email"
                    disabled
                    fullWidth
                  />
                  <TextField
                    label="Phone Number"
                    type="tel"
                    disabled
                    fullWidth
                  />
                  <TextField
                    label="Write your message *"
                    multiline
                    rows={3}
                    disabled
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    disabled
                    sx={{
                      bgcolor: "#BF0603",
                      borderRadius: "20px",
                      width: "146px",
                      alignSelf: "center",
                    }}
                  >
                    Submit
                  </Button>
                </Stack>
              </Paper>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default BlogNewPage;
