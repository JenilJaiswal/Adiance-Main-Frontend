"use client";

import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import BlogHeader from "./BlogHeader";
import BlogList from "./BlogList";
import Pagination from "./Pagination";

// --- API Import (Remains the same) ---
import { getBlogs } from "../../../api/blogs";

const BlogListPage = ({ onEditBlog }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [allBlogs, setAllBlogs] = useState([]); // Store all filtered blogs
  const [statusFilter, setStatusFilter] = useState("all");
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const blogsPerPage = 10;

  // Fetch ALL blogs from the database
  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      // Fetch a large number to get all blogs
      const response = await getBlogs(
        1,
        1000, // Fetch many blogs to get all
        searchQuery || undefined,
        "latest", // sortOrder
        statusFilter === "all" ? "all" : statusFilter // Pass "all" for all blogs
      );
      if (response.status === "success") {
        // For admin view, show all blogs regardless of metadata.urlWords
        // Only filter out blogs that don't have basic content
        const filteredBlogs = response.data.filter((blog) => 
          blog?.content?.title || blog?.title // Support both old and new schema
        );
        
        setAllBlogs(filteredBlogs);
        
        // Calculate total pages based on filtered blogs count
        const totalPagesCount = Math.ceil(filteredBlogs.length / blogsPerPage);
        setTotalPages(totalPagesCount);
      }
    } catch (error) {
      // Replaced Chakra's toast with react-toastify's toast.error
      toast.error(`Error fetching blogs: ${error.message}`, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch blogs when filters change (not when page changes)
  useEffect(() => {
    fetchBlogs();
  }, [statusFilter, searchQuery]);

  // Calculate current page blogs from allBlogs
  const getCurrentPageBlogs = () => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    return allBlogs.slice(startIndex, endIndex);
  };

  // All handler functions remain exactly the same
  const handlePageChange = (page) => setCurrentPage(page);
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };
  const handleChangeStatus = (status) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };
  const handleEdit = (blog) => onEditBlog(blog);

  return (
    // Replaced Chakra's Box with MUI's Box. The functionality is identical.
    <Box>
      <BlogHeader
        onSearch={handleSearch}
        searchQuery={searchQuery}
        statusFilter={statusFilter}
        onChangeStatus={handleChangeStatus}
      />
      <BlogList
        blogs={getCurrentPageBlogs()}
        isLoading={isLoading}
        onEdit={handleEdit}
        onBlogDeleted={fetchBlogs} // Renamed for clarity, can be onRefresh or similar
        searchQuery={searchQuery}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        disabled={allBlogs.length === 0}
      />
    </Box>
  );
};

export default BlogListPage;
