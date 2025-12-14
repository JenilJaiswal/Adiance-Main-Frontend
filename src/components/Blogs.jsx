import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  Box,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import Header from "./Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { getBlogs } from "../AdianceAdmin/api/blogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");

  const IMAGE_BASE_URL = (
    "https://backend.adiance.com:443/images" || "http://localhost:5000/uploads"
  ).replace(/\/$/, "");
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

  return (
    <div>
      <Helmet>
        <title>Insights & Trends | Explore Our Security Blog</title>
        <meta
          name="description"
          content="Stay updated with the latest security trends, AI innovations, and expert insights on surveillance, cybersecurity, and smart protection solutions."
        />
      </Helmet>
      <Header />
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
            <div className="innovation-item" key={blog._id}>
              <img
                src={`${IMAGE_BASE_URL}/${String(
                  blog.content?.mainImage || ""
                ).replace(/^\/?(images\/)?/, "")}`}
                alt={blog.content?.imageText || blog.content?.title}
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
                  <Link
                    to={`/blog/${blog.metadata?.urlWords || "#"}`}
                    className="read-more-link"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Box justifyContent="center" alignItems="center" display="flex" m={5}>
            <p>No blogs found.</p>
          </Box>
        )}
      </div>
      {blogs.length > 0 && totalPages > 1 && (
        <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            color="primary"
            onChange={(_e, p) => setCurrentPage(p)}
            showFirstButton
            showLastButton
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
