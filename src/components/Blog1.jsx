"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "@/compat/react-router-dom";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import { Typography, Chip, Box, Grid, Container } from "@mui/material";
import { Label } from "@mui/icons-material"; // Import icons
import { Helmet } from "react-helmet-async";
import BlogFaq from "./BlogFaq.jsx";
import Breadcrumb from "./Breadcrumb";
import { useLocation } from "@/compat/react-router-dom";
import { getBlogByUrlWords } from "../AdianceAdmin/api/blogs";
import TableOfContents from "./TableOfContents";
import ContactForm from "./ContactForm";

const Blog1 = () => {
  const { urlWords, urlTitle } = useParams();
  const slug = urlWords || urlTitle;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;
  const currentUrl = canonicalUrl;
  const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
  const IMAGE_BASE_URL = `${BACKEND_BASE_URL}/images`;

  // Generate OG image URL
  const mainImageOg = blog?.content?.mainImage
    ? `${IMAGE_BASE_URL}/${String(blog.content.mainImage).replace(
      /^\/?(images\/)?/,
      ""
    )}`
    : "https://www.adiance.com/images/Logo.webp";

  useEffect(() => {
    if (!slug) return;
    window.prerenderReady = false;
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getBlogByUrlWords(slug);
        if (
          response.status === "success" &&
          response.data?.metadata?.urlWords
        ) {
          setBlog(response.data);
        } else {
          setError(response.message || "Blog not found");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch blog");
      } finally {
        setLoading(false);
        window.prerenderReady = true;
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error || !blog) {
    return (
      <div>
        <Header />
        <div style={{ padding: '120px 20px', textAlign: 'center', minHeight: '60vh' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>404</h1>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#666' }}>Blog Post Not Found</h2>
          <p style={{ fontSize: '1rem', color: '#666', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <a href="/blog" style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#bf0603',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontSize: '1rem'
          }}>
            Back to Blog
          </a>
        </div>
        <Footer />
      </div>
    );
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

  // Normalize Slate-style rich text (arrays of nodes) to plain text
  const slateNodesToText = (nodeOrNodes) => {
    if (!nodeOrNodes) return "";
    if (typeof nodeOrNodes === "string") return nodeOrNodes;
    if (Array.isArray(nodeOrNodes)) {
      return nodeOrNodes.map(slateNodesToText).join(" ").trim();
    }
    if (typeof nodeOrNodes === "object") {
      if (typeof nodeOrNodes.text === "string") return nodeOrNodes.text;
      if (Array.isArray(nodeOrNodes.children))
        return slateNodesToText(nodeOrNodes.children);
    }
    return "";
  };

  // Render Slate nodes preserving basic inline marks (bold/italic/underline/code) and links
  const renderSlate = (nodes) => {
    const renderLeaf = (leaf, key) => {
      const style = {};
      const colorVal = leaf.color || leaf.fontColor || leaf.textColor;
      const bgVal = leaf.backgroundColor || leaf.bgColor;
      if (colorVal) style.color = colorVal;
      if (bgVal) style.backgroundColor = bgVal;

      if (leaf.text === "") {
        return <br key={key} />;
      }

      let el = <span style={style}>{leaf.text || ""}</span>;
      if (leaf.code) el = <code key={`${key}-code`}>{el}</code>;
      if (leaf.bold) el = <strong key={`${key}-bold`}>{el}</strong>;
      if (leaf.italic) el = <em key={`${key}-italic`}>{el}</em>;
      if (leaf.underline) el = <u key={`${key}-underline`}>{el}</u>;
      return <React.Fragment key={key}>{el}</React.Fragment>;
    };
    const renderChildren = (children) =>
      Array.isArray(children) ? children.map((n, i) => renderNode(n, i)) : null;
    const renderNode = (node, idx) => {
      if (node.text !== undefined) return renderLeaf(node, `leaf-${idx}`);
      const align = node.align || node.textAlign || undefined;
      switch (node.type) {
        case "link":
          return (
            <a
              key={`link-${idx}`}
              href={node.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {renderChildren(node.children)}
            </a>
          );
        case "bulleted-list":
        case "unordered-list":
          return (
            <ul key={`ul-${idx}`} style={{ margin: "0 0 1rem 1.25rem" }}>
              {renderChildren(node.children)}
            </ul>
          );
        case "numbered-list":
        case "ordered-list":
          return (
            <ol key={`ol-${idx}`} style={{ margin: "0 0 1rem 1.25rem" }}>
              {renderChildren(node.children)}
            </ol>
          );
        case "list-item":
          return <li key={`li-${idx}`}>{renderChildren(node.children)}</li>;
        case "blockquote":
          return (
            <blockquote
              key={`q-${idx}`}
              style={{
                margin: "0 0 1rem",
                paddingLeft: "1rem",
                borderLeft: "4px solid #ddd",
              }}
            >
              {renderChildren(node.children)}
            </blockquote>
          );
        case "h2":
        case "h3":
        case "h4":
          const Tag = node.type;
          return (
            <Tag
              key={`h-${idx}`}
              style={{ whiteSpace: "pre-wrap", textAlign: align }}
            >
              {renderChildren(node.children)}
            </Tag>
          );
        case "paragraph":
        default:
          // Default paragraphs should take full width so align left/right behaves as extremes
          return (
            <div
              key={`p-${idx}`}
              style={{
                whiteSpace: "pre-wrap",
                textAlign: align,
                width: "100%",
                minHeight: "1.5rem",
              }}
            >
              {renderChildren(node.children)}
            </div>
          );
      }
    };
    if (typeof nodes === "string") return nodes;
    if (!Array.isArray(nodes)) return null;
    return nodes.map((n, i) => renderNode(n, i));
  };

  // Extract alignment from the first block node if present
  const getAlign = (nodes) => {
    if (!Array.isArray(nodes) || nodes.length === 0) return undefined;
    const n =
      nodes.find(
        (x) => x && typeof x === "object" && (x.align || x.textAlign)
      ) || nodes[0];
    return (n && (n.align || n.textAlign)) || undefined;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toDateString();
  };

  return (
    <div>
      {" "}
      {/* Prevent horizontal scroll */}

      <Helmet>
        <title>
          {blog.content?.metaTitle ||
            blog.metadata?.metaTitle ||
            blog.content?.title ||
            "Adiance Blog"}
        </title>
        <meta
          name="description"
          content={
            blog.content?.metaDescription ||
            blog.metadata?.metaDescription ||
            ""
          }
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={
            blog.content?.metaTitle ||
            blog.metadata?.metaTitle ||
            blog.content?.title ||
            ""
          }
        />
        <meta
          property="og:description"
          content={
            blog.content?.metaDescription ||
            blog.metadata?.metaDescription ||
            ""
          }
        />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta property="og:image" content={mainImageOg} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <meta
          name="twitter:title"
          content={
            blog.content?.metaTitle ||
            blog.metadata?.metaTitle ||
            blog.content?.title ||
            ""
          }
        />
        <meta
          name="twitter:description"
          content={
            blog.content?.metaDescription ||
            blog.metadata?.metaDescription ||
            ""
          }
        />
        <meta name="twitter:image" content={mainImageOg} />
        <link rel="canonical" href={currentUrl} />

        {/* Article JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog.content?.metaTitle || blog.content?.title || "",
            "description": blog.content?.metaDescription || "",
            "image": mainImageOg,
            "datePublished": blog.createdAt || "",
            "dateModified": blog.updatedAt || blog.createdAt || "",
            "author": {
              "@type": "Person",
              "name": blog.content?.blogAuthor || "Adiance Technologies"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Adiance Technologies",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.adiance.com/images/Logo.webp"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": currentUrl
            },
            "url": currentUrl
          })}
        </script>

        {/* BreadcrumbList JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.adiance.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.adiance.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": blog.content?.metaTitle || blog.content?.title || "",
                "item": currentUrl
              }
            ]
          })}
        </script>

        {/* CMS-injected schemas */}
        {Array.isArray(blog.content?.schemas) &&
          blog.content.schemas.map((item, index) => {
            if (!item.content) return null;
            const schemaStr =
              typeof item.content === "string"
                ? item.content
                : item.content?.schemaData || "";
            if (!schemaStr) return null;
            return (
              <script key={index} type="application/ld+json">
                {schemaStr}
              </script>
            );
          })}
      </Helmet>
      <Header />
      <Breadcrumb customTitle={blog.content?.metaTitle || blog.content?.title} />
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
              {blog.content?.title}
            </Typography>
            <Box mt={2} display="flex" alignItems="center">
              <Typography variant="body2">
                {blog.updatedAt && blog.updatedAt !== blog.createdAt
                  ? `Updated ${formatDate(blog.updatedAt)}`
                  : `Published ${formatDate(blog.createdAt)}`}
              </Typography>
              <Typography variant="body2" sx={{ ml: 2 }}>
                {blog.content?.blogAuthor}
              </Typography>
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6} padding={{ xs: "1.5rem", lg: "3rem" }}>
            <img
              src={
                blog.content?.mainImage
                  ? `${IMAGE_BASE_URL}/${String(blog.content.mainImage).replace(/^\/?(images\/)?/, "")}`
                  : "/images/Logo.webp"
              }
              alt={blog.content?.title || "Adiance Blog"}
              style={{
                width: "100%",
                maxWidth: "1200px",
                height: "auto",
                margin: "auto",
                display: "block",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Main Content Column */}
          <Grid item xs={12} md={8}>
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
              {Array.isArray(blog.content?.brief) &&
                blog.content.brief.length > 0 &&
                blog.content.brief.map((block, index) => (
                  <Typography
                    key={index}
                    variant="subtitle1"
                    sx={{
                      fontSize: { xs: "1.125rem", md: "1.125rem" },
                      lineHeight: { xs: "1.75rem", md: "2.25rem" },
                      letterSpacing: { xs: "0.0437rem", md: "0.0437rem" },
                      minHeight: "1.5rem",
                    }}
                    paragraph
                  >
                    {block.children?.map((n, i) => (
                      <React.Fragment key={i}>
                        {n.text === "" ? <br /> : n.text}
                      </React.Fragment>
                    ))}
                  </Typography>
                ))}
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
              {Array.isArray(blog.content?.headingsAndImages) &&
                blog.content.headingsAndImages
                  .filter((c) => c.type !== "faq")
                  .reduce((groups, component) => {
                    if (["h2", "h3", "h4"].includes(component.type)) {
                      groups.push({
                        id: component.id,
                        heading: component,
                        content: [],
                      });
                    } else if (component.type === "p" && groups.length > 0) {
                      groups[groups.length - 1].content.push(component);
                    } else {
                      groups.push({ id: component.id, content: [component] });
                    }
                    return groups;
                  }, [])
                  .map((group) => (
                    <div key={group.id}>
                      {group.heading && (
                        <Typography
                          id={group.heading.id || `heading-${group.id}`}
                          variant={
                            group.heading.type === "h2"
                              ? "h2"
                              : group.heading.type === "h3"
                                ? "h3"
                                : "h4"
                          }
                          gutterBottom
                          sx={{
                            width: "100%",
                            fontSize: {
                              xs: "1.5rem",
                              md:
                                group.heading.type === "h2"
                                  ? "2.25rem" // 36px for H2 headings
                                  : group.heading.type === "h3"
                                    ? "1.5rem"
                                    : "1.25rem",
                            },
                            lineHeight: {
                              xs: "2.25rem",
                              md:
                                group.heading.type === "h2"
                                  ? "2.875rem"
                                  : group.heading.type === "h3"
                                    ? "2.25rem"
                                    : "2rem",
                            },
                            fontWeight: "500",
                            textAlign: getAlign(group.heading.content?.text),
                            scrollMarginTop: "80px", // Add offset for fixed header
                          }}
                        >
                          {renderSlate(group.heading.content?.text || [])}
                        </Typography>
                      )}
                      {group.content?.map((component, idx) => {
                        if (component.type === "p") {
                          return (
                            <Typography
                              key={component.id}
                              variant="body1"
                              paragraph
                              sx={{
                                width: "100%",
                                whiteSpace: "pre-wrap",
                                "& a": { fontWeight: "bold" },
                                fontSize: { xs: "1.125rem", md: "1.125rem" },
                                lineHeight: { xs: "1.75rem", md: "2.25rem" },
                                letterSpacing: {
                                  xs: "0.0437rem",
                                  md: "0.0437rem",
                                },
                                textAlign: getAlign(component.content?.text),
                              }}
                            >
                              {renderSlate(component.content?.text || [])}
                            </Typography>
                          );
                        }
                        if (component.type === "cta") {
                          const noFollow = !!component.content?.noFollow;
                          const link = component.content?.buttonLink || "#";
                          const buttonText =
                            component.content?.buttonText || "Learn more";
                          return (
                            <Box
                              key={component.id}
                              my={4}
                              sx={{ p: 2, bgcolor: "#f7f9fc", borderRadius: 2 }}
                            >
                              {component.content?.ctaText && (
                                <Typography variant="subtitle1" sx={{ mb: 2 }}>
                                  {component.content.ctaText}
                                </Typography>
                              )}
                              <a
                                href={link}
                                target="_blank"
                                rel={
                                  noFollow
                                    ? "nofollow noopener noreferrer"
                                    : "noopener noreferrer"
                                }
                                style={{
                                  display: "inline-block",
                                  background: "#BF0603",
                                  color: "#fff",
                                  padding: "8px 16px",
                                  borderRadius: 6,
                                  textDecoration: "none",
                                }}
                              >
                                {buttonText}
                              </a>
                            </Box>
                          );
                        }
                        if (component.type === "imageVideo") {
                          const raw =
                            component.content?.imagePath ||
                            component.content?.url ||
                            component.content?.file;
                          const str =
                            typeof raw === "string"
                              ? raw
                              : (raw && raw.path) || "";
                          if (!str) return null;
                          const normalized = str.startsWith("")
                            ? str
                            : `uploads/${str.replace(/^\//, "")}`;
                          const src = /^https?:\/\//i.test(str)
                            ? str
                            : `${IMAGE_BASE_URL}/${normalized.replace(
                              /^\//,
                              ""
                            )}`;
                          return (
                            <Box key={component.id || `img-${idx}`} my={4}>
                              <img
                                src={src}
                                alt={component.content?.description || "Image"}
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  borderRadius: 8,
                                }}
                              />
                            </Box>
                          );
                        }
                        return null;
                      })}
                    </div>
                  ))}

              {/* FAQ Section */}
              {Array.isArray(blog.content?.faqs?.items) &&
                blog.content.faqs.items.length > 0 && (
                  <Box sx={{ padding: "2%", borderRadius: "12px" }}>
                    <BlogFaq
                      faqdata={blog.content.faqs.items.map((f) => ({
                        question: f.question ?? "",
                        answer: f.answer ?? "",
                      }))}
                    />
                  </Box>
                )}

              {/* {Array.isArray(blog.content?.tags) &&
                blog.content.tags.length > 0 && (
                  <>
                    <Typography variant="h6" gutterBottom fontWeight={"bold"}>
                      Tags:
                    </Typography>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {blog.content.tags.map((tag, index) => (
                        <Chip key={index} icon={<Label />} label={tag} />
                      ))}
                    </div>
                  </>
                )} */}
            </div>
          </Grid>

          {/* Sidebar Column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: "sticky", top: "20px" }}>
              <TableOfContents
                headings={blog.content?.headingsAndImages || []}
              />
              <ContactForm redirectUrl="/blog-thank-you" />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Blog1;
