"use client";

import { useState } from "react";

// --- MUI Imports ---
import {
  Box,
  Typography,
  Stack,
  Divider,
  CircularProgress,
  IconButton,
  Modal,
  Paper,
  Button,
  Chip,
} from "@mui/material";
import { TextField } from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  ContentCopy as ContentCopyIcon,
} from "@mui/icons-material";

// --- Third-party & Local Imports ---
import { toast } from "react-toastify";
import { getImageUrl } from "../../../config/config";
import { deleteBlog } from "../../../api/blogs";

const BlogList = ({ blogs, isLoading, onEdit, onBlogDeleted, searchQuery }) => {
  // console.log("Rendering BlogList with blogs:", blogs);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const [confirmTitle, setConfirmTitle] = useState("");

  const handleDeleteClick = (blog) => {
    setBlogToDelete(blog);
    setIsModalOpen(true);
    setConfirmTitle("");
  };

  const handleCloseModal = () => {
    setBlogToDelete(null);
    setIsModalOpen(false);
    setConfirmTitle("");
  };

  const handleConfirmDelete = async () => {
    if (!blogToDelete) return;
    try {
      await deleteBlog(blogToDelete._id);
      toast.success("Blog deleted successfully");
      onBlogDeleted(); // Refresh the blog list
      handleCloseModal();
    } catch (error) {
      toast.error(`Error deleting blog: ${error.message}`);
    }
  };

  // Helper to extract text from Slate JSON
  const extractTextFromSlate = (nodes) => {
    if (!Array.isArray(nodes)) return "";
    return nodes
      .map((node) => {
        if (node.text) return node.text;
        if (node.children) return extractTextFromSlate(node.children);
        return "";
      })
      .join(" ");
  };

  // --- Loading State ---
  if (isLoading || blogs === undefined) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <CircularProgress size="lg" />
      </Box>
    );
  }

  if (!Array.isArray(blogs) || blogs.length === 0) {
    return (
      <Box sx={{ p: 8, textAlign: "center" }}>
        <Typography color="text.secondary">
          {searchQuery
            ? `No match for the word "${searchQuery}"`
            : 'No blogs found. Create your first blog by clicking on "Create new" above.'}
        </Typography>
      </Box>
    );
  }

  const renderHighlighted = (text, query) => {
    if (!query || !text) return text;
    try {
      const parts = String(text).split(
        new RegExp(`(${query.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")})`, "ig")
      );
      return parts.map((part, idx) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <Box
            key={idx}
            component="span"
            sx={{
              bgcolor: "warning.light",
              color: "black",
              px: 0.3,
              borderRadius: 0.5,
            }}
          >
            {part}
          </Box>
        ) : (
          <Box key={idx} component="span">
            {part}
          </Box>
        )
      );
    } catch (e) {
      return text;
    }
  };

  return (
    <Box>
      {/* <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ m: 1.5 }}
      >
        <Typography variant="h6" fontWeight={700}>
          Total Blogs
        </Typography>
        <Chip
          label={`${blogs.length} total`}
          color="primary"
          size="small"
          sx={{ fontWeight: 600 }}
        />
      </Stack> */}
      {blogs.map((blog, index) => {
        if (!blog) return null;

        const title =
          blog?.content?.title ||
          blog?.title ||
          blog?.metadata?.metaTitle ||
          "Untitled Blog";

        let briefText = "";
        if (typeof blog?.content?.brief === "string") {
          briefText = blog.content.brief;
        } else if (Array.isArray(blog?.content?.brief)) {
          briefText = extractTextFromSlate(blog.content.brief);
        }

        const description =
          blog?.metadata?.metaDescription ||
          briefText ||
          blog?.description ||
          "No description available";

        const mainImagePath = blog?.content?.mainImage || blog?.image || null;
        const image = mainImagePath ? getImageUrl(mainImagePath) : null;
        const imageAlt = blog?.content?.imageText || title || "Blog thumbnail";

        // console.log("Rendering blog:", { title, description, image });

        return (
          <Box key={blog._id || index}>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                p: 2,
                alignItems: "center",
                "&:hover": { bgcolor: "grey.50" },
              }}
            >
              {/* Date column */}
              <Typography
                color="text.secondary"
                sx={{ fontSize: "0.875rem", width: "120px", flexShrink: 0 }}
              >
                {blog?.createdAt
                  ? new Date(blog.createdAt).toLocaleDateString()
                  : blog?.date
                  ? new Date(blog.date).toLocaleDateString()
                  : "--"}
              </Typography>

              {/* Image column */}
              <Box
                sx={{
                  width: "120px",
                  display: "flex",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {image ? (
                  <Box
                    component="img"
                    src={image}
                    alt={imageAlt}
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "10px",
                      bgcolor: "grey.200",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      color: "text.secondary",
                    }}
                  >
                    No Image
                  </Box>
                )}
              </Box>

              {/* Title and description column with search highlight support */}
              <Box sx={{ flex: 1, pr: 2 }}>
                <Typography color="text.primary" fontWeight={500} mb={0.5}>
                  {renderHighlighted(title, searchQuery)}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {renderHighlighted(description, searchQuery)}
                </Typography>
              </Box>

              {/* Status badge */}
              <Chip
                label={(
                  blog?.status || (blog?.published ? "published" : "unknown")
                )?.toUpperCase()}
                size="small"
                // The color prop now only needs to handle the non-draft cases
                color={blog?.status === "published" ? "success" : "default"}
                sx={{
                  textTransform: "capitalize",
                  mr: 2,
                  p: 2,
                  ...(blog?.status === "draft" && {
                    backgroundColor: "#c1af2dff",
                    color: "white",
                  }),
                }}
              />

              {/* Action buttons */}
              <Stack direction="row" spacing={1}>
                <IconButton
                  color="success"
                  aria-label="Edit blog"
                  size="small"
                  onClick={() => onEdit(blog)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  aria-label="Delete blog"
                  size="small"
                  onClick={() => handleDeleteClick(blog)}
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </Stack>
            {index < blogs.length - 1 && <Divider />}
          </Box>
        );
      })}

      {/* --- Delete Confirmation Modal --- */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 360, sm: 480 },
            boxShadow: 24,
            p: 3,
            borderRadius: 3,
            backdropFilter: "blur(6px)",
            border: "1px solid",
            borderColor: "grey.200",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
            <DeleteIcon color="error" />
            <Typography variant="h6" component="h2" fontWeight={700}>
              Delete Blog
            </Typography>
          </Stack>
          <Typography sx={{ color: "text.secondary" }}>
            Type the blog title to confirm deletion. This action cannot be
            undone.
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              mt: 2,
              p: 1.5,
              bgcolor: "grey.50",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "grey.200",
            }}
          >
            <Typography fontWeight={600} sx={{ flex: 1 }} noWrap>
              {blogToDelete?.content?.title ||
                blogToDelete?.title ||
                blogToDelete?.metadata?.metaTitle ||
                "Untitled Blog"}
            </Typography>
            <IconButton
              size="small"
              onClick={() => {
                const t =
                  blogToDelete?.content?.title ||
                  blogToDelete?.title ||
                  blogToDelete?.metadata?.metaTitle ||
                  "";
                navigator.clipboard?.writeText(t);
              }}
              aria-label="Copy title"
            >
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Stack>
          <TextField
            sx={{ mt: 2 }}
            fullWidth
            label="Enter blog title to confirm"
            value={confirmTitle}
            onChange={(e) => setConfirmTitle(e.target.value)}
            autoFocus
            helperText={
              blogToDelete?.content?.title ||
              blogToDelete?.title ||
              blogToDelete?.metadata?.metaTitle
                ? "Case-insensitive. Spaces at ends are ignored."
                : ""
            }
          />
          <Stack
            direction="row"
            spacing={2}
            sx={{ mt: 4, justifyContent: "flex-end" }}
          >
            <Button variant="outlined" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleConfirmDelete}
              disabled={
                !blogToDelete ||
                confirmTitle.trim().toLowerCase() !==
                  (
                    blogToDelete?.content?.title ||
                    blogToDelete?.title ||
                    blogToDelete?.metadata?.metaTitle ||
                    ""
                  )
                    .trim()
                    .toLowerCase()
              }
            >
              Delete
            </Button>
          </Stack>
        </Paper>
      </Modal>
    </Box>
  );
};

export default BlogList;
