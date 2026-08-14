"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Link } from "@/compat/react-router-dom";
import {
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  Box,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from "@mui/material";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer/Footer";
import { Helmet } from "react-helmet";
import { getBlogs } from "../AdianceAdmin/api/blogs";
import { useSearchParams } from "next/navigation";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const searchParams = useSearchParams();

  const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
  const IMAGE_BASE_URL = `${BACKEND_BASE_URL}/images`;
  const PAGE_SIZE = 6;

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getBlogs(
        currentPage,
        PAGE_SIZE,
        searchQuery.trim(),
        sortOrder,
        "published"
      );
      if (response.status === "success") {
        const list = Array.isArray(response.data) ? response.data : [];
        setBlogs(list);
        setTotalPages(response.pagination?.total || 1);
      } else {
        setBlogs([]);
        setTotalPages(1);
      }
    } catch (err) {
      setError(err.message || "Failed to fetch blogs. Please try again later.");
      setBlogs([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  }, [currentPage, searchQuery, sortOrder]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Blogs are already sorted and paginated by the backend
  const pageBlogs = blogs;

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toDateString();
  };
  const isSearchPage = searchParams.has("q");

  return (
    <div>
      <Helmet>
        <title>Insights & Trends | Explore Our Security Blog - Adiance</title>
        <meta
          name="description"
          content="Stay updated with the latest security trends, AI innovations, and expert insights on surveillance, cybersecurity, and smart protection solutions from Adiance Technologies."
        />
        <meta property="og:title" content="Insights & Trends | Explore Our Security Blog - Adiance" />
        <meta property="og:description" content="Stay updated with the latest security trends, AI innovations, and expert insights on surveillance, cybersecurity, and smart protection solutions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.adiance.com/blog" />
        <meta property="og:url" content="https://www.adiance.com/blog" />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta property="og:image" content="https://www.adiance.com/images/Logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <meta name="twitter:title" content="Insights & Trends | Explore Our Security Blog - Adiance" />
        <meta name="twitter:description" content="Stay updated with the latest security trends, AI innovations, and expert insights on surveillance." />
        {isSearchPage && <meta name="robots" content="noindex, follow" />}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Adiance Blog",
            "description": "Stay updated with the latest security trends, AI innovations, and expert insights on surveillance.",
            "url": "https://www.adiance.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Adiance Technologies",
              "url": "https://www.adiance.com"
            }
          })}
        </script>
        {/* BreadcrumbList comes from <PageSchema> on /blog — not duplicated here. */}
      </Helmet>
      <Header />
      <Breadcrumb />
      <NavHeader text={"Blogs"} />
      {/* Filters */}
      <Stack
        direction={{ xs: "row", sm: "row" }}
        spacing={2}
        sx={{ mt: 2, px: { xs: 2, md: 6 } }}
        justifyContent={"center"}
      >
        <TextField
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search blog title..."
          size="small"
          // fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">🔎</InputAdornment>
            ),
          }}
        />
        <Select
          size="small"
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value);
            setCurrentPage(1);
          }}
          sx={{ minWidth: 160 }}
        >
          <MenuItem value="latest">Latest</MenuItem>
          <MenuItem value="oldest">Oldest</MenuItem>
        </Select>
      </Stack>
      <div className="innovation-container">
        {loading ? (
          <p>Loading...</p>
        ) : pageBlogs.length > 0 ? (
          pageBlogs.map((blog) => (
            <Link
              to={`/blog/${blog.metadata?.urlWords || "#"}`}
              className="innovation-item"
              key={blog._id}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <img
                src={
                  blog.content?.mainImage
                    ? `${IMAGE_BASE_URL}/${String(blog.content.mainImage).replace(/^\/?(images\/)?/, "")}`
                    : "/images/Logo.webp"
                }
                alt={blog.content?.imageText || blog.content?.title || "Adiance Blog"}
                className="item-image"
              />
              <div className="item-details">
                <h3 className="item-title">{blog.content?.title}</h3>
                <p className="item-description">
                  {blog.content?.brief?.[0]?.children?.[0]?.text || ""}
                </p>
                <div className="item-footer">
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
                  <span className="read-more-link">
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <Box justifyContent="center" alignItems="center" display="flex" m={5}>
            <p>No blogs found.</p>
          </Box>
        )}
      </div>
      {blogs.length > 0 && totalPages > 1 && (
        <Box sx={{ mt: 3, mb: 4, display: "flex", justifyContent: "center" }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            color="primary"
            onChange={(_e, p) => setCurrentPage(p)}
            showFirstButton
            showLastButton
            renderItem={(item) => <PaginationItem {...item} component="button" />}
          />
        </Box>
      )}
      <Footer />
      <style jsx>{`
        .innovation-container {
          // display: flex;
          // flex-direction: column;

          display: grid;
          grid-template-columns: 1fr; /* Default: single column */
          gap: 1rem;
          padding: 20px;
          margin: 5% 10%;
        }

        .full-blog {
          margin-bottom: 40px;
        }

        .full-blog h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .full-blog p {
          font-size: 16px;
          color: #333;
        }

        .full-blog-image {
          width: 100%;
          height: auto;
          margin-bottom: 20px;
        }

        .blog-list {
          display: grid;
          grid-gap: 20px;
        }

        .innovation-item {
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .item-image {
          width: 100%;
          height: auto;
          margin-bottom: 10px;
        }

        .item-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .item-description {
          font-size: 14px;
          color: #666;
        }

        .item-footer {
          display: flex;
          justify-content: space-between;
        }

        .item-date {
          font-size: 14px;
          color: #666;
        }

        .read-more-link {
          font-size: 14px;
          color: blue;
          text-decoration: none;
        }

        @media screen and (min-width: 768px) {
          .blog-list {
            grid-template-columns: repeat(2, 1fr);
          }
          .innovation-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media screen and (min-width: 1024px) {
          .blog-list {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default Blogs;
