"use client";

import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "@/compat/react-router-dom";
import { Box, Chip, Typography, Button, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Breadcrumb from "./Breadcrumb";
import { Helmet } from "react-helmet-async";
import { getNewsByUrlWords } from "../AdianceAdmin/api/news";

const NewsDetail = () => {
  const { slug, urlTitle, urlWords } = useParams();
  const key = slug || urlTitle || urlWords;
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  const BACKEND_BASE_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
  const IMAGE_BASE_URL = `${BACKEND_BASE_URL}/images`;

  const resolveImage = (img) => {
    if (!img) return "https://www.adiance.com/images/Logo.webp";
    if (/^https?:\/\//i.test(img)) return img;
    const clean = String(img).replace(/^\/?(images\/)?/, "");
    return `${IMAGE_BASE_URL}/${clean}`;
  };

  const formatDate = (d) => {
    if (!d) return "";
    return new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    if (!key) return;
    if (typeof window !== "undefined") window.prerenderReady = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await getNewsByUrlWords(key);
        if (res.status === "success" && res.data) {
          setItem(res.data);
        } else {
          setError(res.message || "News not found");
        }
      } catch (err) {
        setError(err?.message || "Failed to load news");
      } finally {
        setLoading(false);
        if (typeof window !== "undefined") window.prerenderReady = true;
      }
    })();
  }, [key]);

  if (loading) {
    return (
      <div>
        <Header hideBreadcrumb />
        <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
          <Typography>Loading...</Typography>
        </Container>
        <Footer />
      </div>
    );
  }

  if (error || !item) {
    return (
      <div>
        <Header hideBreadcrumb />
        <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
          <Typography variant="h5" color="error" gutterBottom>
            {error || "News not found"}
          </Typography>
          <Button
            component={Link}
            to="/news"
            variant="contained"
            sx={{ mt: 2, backgroundColor: "#BF0603" }}
            startIcon={<ArrowBackIcon />}
          >
            Back to all news
          </Button>
        </Container>
        <Footer />
      </div>
    );
  }

  const ogImage = resolveImage(item.image);
  const metaTitle = item.metaTitle || `${item.title} | Adiance News`;
  const metaDescription = item.metaDescription || item.brief || "";

  return (
    <div>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      <Header hideBreadcrumb />
      <Breadcrumb />

      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <Button
          component={Link}
          to="/news"
          startIcon={<ArrowBackIcon />}
          sx={{
            color: "#BF0603",
            mb: 3,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Back to all news
        </Button>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2, mb: 2 }}>
          {item.category && (
            <Chip
              label={item.category}
              sx={{
                backgroundColor: "#BF0603",
                color: "#fff",
                fontWeight: 600,
              }}
              size="small"
            />
          )}
          <Chip
            label={formatDate(item.publishedAt || item.createdAt)}
            variant="outlined"
            size="small"
            sx={{ borderColor: "#DB7B3A", color: "#DB7B3A" }}
          />
        </Box>

        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 3,
            fontSize: { xs: "1.8rem", md: "2.4rem" },
            lineHeight: 1.2,
          }}
        >
          {item.title}
        </Typography>

        {item.image && (
          <Box
            sx={{
              width: "100%",
              borderRadius: "14px",
              overflow: "hidden",
              mb: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={ogImage}
              alt={item.title}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Box>
        )}

        {item.brief && (
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "#333",
              mb: 3,
              borderLeft: "4px solid #BF0603",
              pl: 2,
              py: 1,
              backgroundColor: "rgba(191, 6, 3, 0.04)",
              fontSize: { xs: "1rem", md: "1.15rem" },
              lineHeight: 1.55,
            }}
          >
            {item.brief}
          </Typography>
        )}

        {item.content && (
          <Typography
            component="div"
            sx={{
              color: "#333",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              whiteSpace: "pre-wrap",
              "& p": { mb: 2 },
            }}
          >
            {item.content}
          </Typography>
        )}
      </Container>

      <Footer />
    </div>
  );
};

export default NewsDetail;
