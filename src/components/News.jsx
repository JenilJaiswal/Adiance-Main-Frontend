"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Link } from "@/compat/react-router-dom";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  Pagination,
  Chip,
} from "@mui/material";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer/Footer";
import { Helmet } from "react-helmet";
import { getNews } from "../AdianceAdmin/api/news";

const News = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [year, setYear] = useState("all");
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ years: [], categories: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BACKEND_BASE_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
  const IMAGE_BASE_URL = `${BACKEND_BASE_URL}/images`;
  const NEWS_PER_PAGE = 12;

  const resolveImage = (img) => {
    if (!img) return "/images/Logo.webp";
    if (/^https?:\/\//i.test(img)) return img;
    const clean = String(img).replace(/^\/?(images\/)?/, "");
    return `${IMAGE_BASE_URL}/${clean}`;
  };

  const formatDate = (d) => {
    if (!d) return "";
    const date = new Date(d);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getNews({
        page: currentPage,
        limit: NEWS_PER_PAGE,
        year,
        category,
        search: search.trim(),
        status: "published",
      });
      if (res.status === "success") {
        setItems(Array.isArray(res.data) ? res.data : []);
        setTotalPages(res.pagination?.total || 1);
        setFilters({
          years: res.filters?.years || [],
          categories: res.filters?.categories || [],
        });
      } else {
        setItems([]);
        setTotalPages(1);
      }
    } catch (err) {
      setError(err?.message || "Failed to fetch news.");
      setItems([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  }, [currentPage, year, category, search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Helmet>
        <title>News & Press Releases | Adiance Technologies</title>
        <meta
          name="description"
          content="Latest news, announcements and press releases from Adiance Technologies — NDAA compliant OEM camera manufacturer."
        />
        <link rel="canonical" href="https://www.adiance.com/news" />
        <meta
          property="og:title"
          content="News & Press Releases | Adiance Technologies"
        />
        <meta
          property="og:description"
          content="Latest news, announcements and press releases from Adiance Technologies — NDAA compliant OEM camera manufacturer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.adiance.com/news" />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta
          property="og:image"
          content="https://www.adiance.com/images/Logo.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
      </Helmet>
      <Header />
      <Breadcrumb />
      <NavHeader text={"News & Press Releases"} />

      <Box className="news-toolbar">
        <Typography variant="h6" className="news-toolbar-count">
          Showing {items.length} News
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          className="news-toolbar-filters"
        >
          <TextField
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search news..."
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">🔎</InputAdornment>
              ),
            }}
          />
          <Select
            size="small"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              setCurrentPage(1);
            }}
            sx={{ minWidth: 140 }}
          >
            <MenuItem value="all">All Years</MenuItem>
            {filters.years.map((y) => (
              <MenuItem key={y} value={String(y)}>
                {y}
              </MenuItem>
            ))}
          </Select>
          <Select
            size="small"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1);
            }}
            sx={{ minWidth: 160 }}
          >
            <MenuItem value="all">All Categories</MenuItem>
            {filters.categories.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </Box>

      <div className="news-grid-container">
        {loading ? (
          <Box className="news-empty">
            <Typography>Loading news...</Typography>
          </Box>
        ) : error ? (
          <Box className="news-empty">
            <Typography color="error">{error}</Typography>
          </Box>
        ) : items.length > 0 ? (
          <div className="news-grid">
            {items.map((item) => (
              <Link
                key={item._id}
                to={`/news/${item.urlWords}`}
                className="news-card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="news-card-image-wrap">
                  <img
                    src={resolveImage(item.image)}
                    alt={item.title}
                    className="news-card-image"
                    loading="lazy"
                  />
                  {item.category && (
                    <Chip
                      label={item.category}
                      size="small"
                      className="news-card-category"
                    />
                  )}
                </div>
                <div className="news-card-body">
                  <Typography
                    variant="caption"
                    className="news-card-date"
                  >
                    {formatDate(item.publishedAt || item.createdAt)}
                  </Typography>
                  <Typography variant="h6" className="news-card-title">
                    {item.title}
                  </Typography>
                  {item.brief && (
                    <Typography variant="body2" className="news-card-brief">
                      {item.brief}
                    </Typography>
                  )}
                  <span className="news-card-readmore">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <Box className="news-empty">
            <Typography>No news found.</Typography>
          </Box>
        )}
      </div>

      {items.length > 0 && totalPages > 1 && (
        <Box
          sx={{
            mt: 3,
            mb: 5,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_e, p) => setCurrentPage(p)}
            showFirstButton
            showLastButton
            sx={{
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "#BF0603",
                color: "#fff",
              },
              "& .MuiPaginationItem-root": {
                color: "#BF0603",
                borderColor: "#BF0603",
              },
            }}
          />
        </Box>
      )}

      <Footer />

      <style jsx>{`
        :global(.news-toolbar) {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem 10%;
          align-items: stretch;
        }
        :global(.news-toolbar-count) {
          color: #1a1a1a;
          font-weight: 600;
        }
        :global(.news-toolbar-filters) {
          align-items: stretch;
        }
        @media (min-width: 768px) {
          :global(.news-toolbar) {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        :global(.news-grid-container) {
          padding: 0 10% 2rem 10%;
        }
        :global(.news-grid) {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 600px) {
          :global(.news-grid) {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          :global(.news-grid) {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        :global(.news-card) {
          display: flex;
          flex-direction: column;
          border-radius: 14px;
          background-color: #fff;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          border: 1px solid #f0f0f0;
        }
        :global(.news-card:hover) {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(191, 6, 3, 0.18);
        }

        :global(.news-card-image-wrap) {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
          overflow: hidden;
          background: #f5f5f5;
        }
        :global(.news-card-image) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        :global(.news-card:hover .news-card-image) {
          transform: scale(1.04);
        }
        :global(.news-card-category) {
          position: absolute !important;
          top: 12px;
          left: 12px;
          background-color: #BF0603 !important;
          color: #fff !important;
          font-weight: 600 !important;
          letter-spacing: 0.4px;
        }

        :global(.news-card-body) {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1.1rem 1.2rem 1.4rem 1.2rem;
          flex-grow: 1;
        }
        :global(.news-card-date) {
          color: #888;
          font-size: 0.78rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        :global(.news-card-title) {
          font-weight: 700 !important;
          font-size: 1.05rem !important;
          line-height: 1.35 !important;
          color: #1a1a1a;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        :global(.news-card-brief) {
          color: #555;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        :global(.news-card-readmore) {
          margin-top: auto;
          color: #BF0603;
          font-weight: 600;
          font-size: 0.92rem;
        }

        :global(.news-empty) {
          padding: 4rem 0;
          text-align: center;
        }

        @media (max-width: 768px) {
          :global(.news-toolbar),
          :global(.news-grid-container) {
            padding-left: 5%;
            padding-right: 5%;
          }
        }
      `}</style>
    </div>
  );
};

export default News;
