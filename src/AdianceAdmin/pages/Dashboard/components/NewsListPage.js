"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  TextField,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Chip,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { getNews, deleteNews, updateNewsStatus } from "../../../api/news";

const BACKEND_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
const IMAGE_BASE_URL = `${BACKEND_BASE_URL}/images`;

const resolveImage = (img) => {
  if (!img) return "";
  if (/^https?:\/\//i.test(img)) return img;
  const clean = String(img).replace(/^\/?(images\/)?/, "");
  return `${IMAGE_BASE_URL}/${clean}`;
};

const formatDate = (d) => {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const NewsListPage = ({ onEdit, onShowCreate }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [itemToDelete, setItemToDelete] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const showToast = (message, severity = "success") =>
    setSnackbar({ open: true, message, severity });
  const handleCloseSnackbar = (e, reason) => {
    if (reason === "clickaway") return;
    setSnackbar((s) => ({ ...s, open: false }));
  };

  const load = async () => {
    try {
      setLoading(true);
      const res = await getNews({
        page: 1,
        limit: 1000,
        year: "all",
        category: "all",
        search,
        status: statusFilter === "all" ? "" : statusFilter,
      });
      if (res.status === "success") {
        setItems(Array.isArray(res.data) ? res.data : []);
      }
    } catch (err) {
      showToast("Failed to load news", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter]);

  useEffect(() => {
    const t = setTimeout(load, 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setDeleteConfirmation("");
  };

  const handleDeleteCancel = () => {
    setItemToDelete(null);
    setDeleteConfirmation("");
  };

  const handleDeleteConfirm = async () => {
    if (!itemToDelete || deleteConfirmation !== itemToDelete.title) {
      showToast("Title does not match. Please type it exactly.", "error");
      return;
    }
    try {
      await deleteNews(itemToDelete._id);
      showToast("News deleted successfully", "success");
      setItemToDelete(null);
      setDeleteConfirmation("");
      load();
    } catch (err) {
      showToast("Delete failed", "error");
    }
  };

  const handleStatusChange = async (item, newStatus) => {
    try {
      await updateNewsStatus(item._id, newStatus);
      showToast(`Status updated to ${newStatus}`, "success");
      load();
    } catch (err) {
      showToast("Status update failed", "error");
    }
  };

  return (
    <Paper elevation={2} sx={{ p: { xs: 2, md: 3 }, borderRadius: "16px" }}>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "#E7E7E7",
          borderRadius: "24px",
          p: 0.5,
          mb: 2,
        }}
      >
        <Button
          variant="text"
          size="small"
          onClick={() => onShowCreate && onShowCreate()}
          sx={{ borderRadius: "20px", textTransform: "none" }}
        >
          Create New
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            backgroundColor: "#BF0603",
            "&:hover": { backgroundColor: "#9c0502" },
          }}
        >
          Existing News
        </Button>
      </Box>
      <Divider sx={{ mb: 2 }} />

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", sm: "center" }}
        mb={2}
      >
        <Typography variant="h5" component="h1">
          News List
        </Typography>
        <Stack direction="row" spacing={1.5}>
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search news..."
            size="small"
          />
          <Select
            size="small"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            sx={{ minWidth: 140 }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="published">Published</MenuItem>
            <MenuItem value="draft">Draft</MenuItem>
            <MenuItem value="archived">Archived</MenuItem>
          </Select>
        </Stack>
      </Stack>

      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Published</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No news found.
                </TableCell>
              </TableRow>
            ) : (
              items.map((item) => (
                <TableRow key={item._id} hover>
                  <TableCell sx={{ width: 80 }}>
                    {item.image ? (
                      <img
                        src={resolveImage(item.image)}
                        alt={item.title}
                        style={{
                          width: 64,
                          height: 40,
                          objectFit: "cover",
                          borderRadius: 6,
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: 64,
                          height: 40,
                          backgroundColor: "#eee",
                          borderRadius: 1,
                        }}
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    <Stack>
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          maxWidth: 360,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        /news/{item.urlWords}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{item.category || "—"}</TableCell>
                  <TableCell>
                    {formatDate(item.publishedAt || item.createdAt)}
                  </TableCell>
                  <TableCell>
                    <Select
                      size="small"
                      value={item.status}
                      onChange={(e) =>
                        handleStatusChange(item, e.target.value)
                      }
                      sx={{ minWidth: 120 }}
                    >
                      <MenuItem value="published">
                        <Chip
                          size="small"
                          label="Published"
                          color="success"
                          sx={{ fontWeight: 600 }}
                        />
                      </MenuItem>
                      <MenuItem value="draft">
                        <Chip
                          size="small"
                          label="Draft"
                          color="warning"
                          sx={{ fontWeight: 600 }}
                        />
                      </MenuItem>
                      <MenuItem value="archived">
                        <Chip
                          size="small"
                          label="Archived"
                          color="default"
                          sx={{ fontWeight: 600 }}
                        />
                      </MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      size="small"
                      onClick={() => onEdit && onEdit(item)}
                      sx={{ color: "#BF0603" }}
                    >
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => handleDeleteClick(item)}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Delete confirmation */}
      <Dialog
        open={Boolean(itemToDelete)}
        onClose={handleDeleteCancel}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ color: "error.main" }}>Delete News</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            Are you sure you want to delete this news item? This action cannot
            be undone.
          </Typography>
          {itemToDelete && (
            <Paper variant="outlined" sx={{ p: 2, my: 2, bgcolor: "grey.50" }}>
              <Typography variant="body2">
                <strong>Title:</strong> {itemToDelete.title}
              </Typography>
              <Typography variant="body2">
                <strong>Category:</strong> {itemToDelete.category}
              </Typography>
              <Typography variant="body2">
                <strong>Slug:</strong> /news/{itemToDelete.urlWords}
              </Typography>
            </Paper>
          )}
          <Typography variant="body2" gutterBottom>
            To confirm, type the news title:
          </Typography>
          <Typography
            fontFamily="monospace"
            sx={{ p: 1, bgcolor: "grey.100", borderRadius: 1, mb: 2 }}
          >
            {itemToDelete?.title}
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type news title here..."
            value={deleteConfirmation}
            onChange={(e) => setDeleteConfirmation(e.target.value)}
            autoFocus
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>Cancel</Button>
          <Button
            color="error"
            variant="contained"
            onClick={handleDeleteConfirm}
            disabled={deleteConfirmation !== itemToDelete?.title}
          >
            Delete News
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default NewsListPage;
