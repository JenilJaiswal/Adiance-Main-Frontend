"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  TextField,
  MenuItem,
  Divider,
  Paper,
  Snackbar,
  Alert,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useDropzone } from "react-dropzone";
import { useForm, Controller } from "react-hook-form";
import {
  createNews as apiCreateNews,
  updateNews as apiUpdateNews,
} from "../../../api/news";
import NewsListPage from "./NewsListPage";

const BACKEND_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
const IMAGE_BASE_URL = `${BACKEND_BASE_URL}/images`;

const CATEGORIES = [
  "Announcement",
  "Press Release",
  "Event",
  "Product Launch",
  "Partnership",
  "Award",
  "General",
];

const slugify = (str) =>
  String(str || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const todayISO = () => new Date().toISOString().slice(0, 10);

const CreateNewsPage = () => {
  const [view, setView] = useState("create"); // 'create' | 'list'
  const [editing, setEditing] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const showToast = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };
  const handleCloseSnackbar = (e, reason) => {
    if (reason === "clickaway") return;
    setSnackbar((s) => ({ ...s, open: false }));
  };

  const { register, handleSubmit, reset, watch, setValue, control } = useForm({
    defaultValues: {
      title: "",
      urlWords: "",
      category: "Announcement",
      publishedAt: todayISO(),
      brief: "",
      content: "",
      metaTitle: "",
      metaDescription: "",
      image: undefined,
    },
  });

  const titleValue = watch("title");
  const urlWordsValue = watch("urlWords");
  const imageValue = watch("image");

  // Auto-fill slug from title when creating a new news item and slug is empty
  useEffect(() => {
    if (!editing && titleValue && !urlWordsValue) {
      setValue("urlWords", slugify(titleValue), { shouldDirty: true });
    }
  }, [titleValue, urlWordsValue, editing, setValue]);

  useEffect(() => {
    if (editing && editing._id) {
      reset({
        title: editing.title || "",
        urlWords: editing.urlWords || "",
        category: editing.category || "Announcement",
        publishedAt: editing.publishedAt
          ? new Date(editing.publishedAt).toISOString().slice(0, 10)
          : todayISO(),
        brief: editing.brief || "",
        content: editing.content || "",
        metaTitle: editing.metaTitle || "",
        metaDescription: editing.metaDescription || "",
        image: undefined,
      });
      if (editing.image) {
        const src = /^https?:\/\//i.test(editing.image)
          ? editing.image
          : `${IMAGE_BASE_URL}/${String(editing.image).replace(
              /^\/?(images\/)?/,
              ""
            )}`;
        setImagePreview(src);
      }
    } else {
      reset({
        title: "",
        urlWords: "",
        category: "Announcement",
        publishedAt: todayISO(),
        brief: "",
        content: "",
        metaTitle: "",
        metaDescription: "",
        image: undefined,
      });
      setImagePreview("");
    }
  }, [editing, reset]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast("Only image files are allowed.", "warning");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      showToast("Image is too large (max 10MB).", "warning");
      return;
    }
    setValue("image", file, { shouldDirty: true });
    setImagePreview(URL.createObjectURL(file));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "image/*": [] },
  });

  const submitWithStatus = async (values, status) => {
    setSubmitting(true);
    try {
      const payload = {
        title: values.title?.trim(),
        urlWords: slugify(values.urlWords || values.title),
        category: values.category || "General",
        publishedAt: values.publishedAt || todayISO(),
        brief: values.brief || "",
        content: values.content || "",
        metaTitle: values.metaTitle || "",
        metaDescription: values.metaDescription || "",
        status,
      };
      if (values.image instanceof File) {
        payload.image = values.image;
      }

      const res = editing?._id
        ? await apiUpdateNews(editing._id, payload)
        : await apiCreateNews(payload);

      if (res.status === "success") {
        showToast(
          editing?._id
            ? "News updated successfully"
            : status === "draft"
            ? "News saved as draft"
            : "News published successfully",
          "success"
        );
        setEditing(null);
        setImagePreview("");
        reset();
        setView("list");
      } else {
        showToast(res.message || "Failed to save news", "error");
      }
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to save news. Please try again.";
      showToast(msg, "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (newsItem) => {
    setEditing(newsItem);
    setView("create");
  };

  const handleShowCreate = () => {
    setEditing(null);
    setImagePreview("");
    setView("create");
  };

  if (view === "list") {
    return (
      <NewsListPage onEdit={handleEdit} onShowCreate={handleShowCreate} />
    );
  }

  return (
    <Paper elevation={2} sx={{ p: { xs: 2, md: 4 }, borderRadius: "16px" }}>
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
          variant="contained"
          size="small"
          sx={{ borderRadius: "20px", textTransform: "none" }}
        >
          {editing?._id ? "Edit News" : "Create New"}
        </Button>
        <Button
          variant="text"
          size="small"
          onClick={() => setView("list")}
          sx={{ borderRadius: "20px", textTransform: "none" }}
        >
          Existing News
        </Button>
      </Box>
      <Divider sx={{ mb: 3 }} />

      <Typography variant="h5" component="h1" gutterBottom>
        {editing?._id ? "Edit News" : "Add News"}
      </Typography>

      <Stack
        component="form"
        spacing={3}
        noValidate
        onSubmit={handleSubmit((v) => submitWithStatus(v, "published"))}
      >
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          required
          {...register("title", { required: true })}
        />

        <TextField
          label="URL Slug"
          variant="outlined"
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                https://www.adiance.com/news/
              </InputAdornment>
            ),
          }}
          {...register("urlWords", { required: true })}
          onBlur={(e) => setValue("urlWords", slugify(e.target.value))}
        />

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Category"
                select
                fullWidth
                required
              >
                {CATEGORIES.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          <TextField
            label="Published Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            {...register("publishedAt")}
          />
        </Stack>

        {/* Image dropzone */}
        <Box>
          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            Main Image
          </Typography>
          <Box
            {...getRootProps()}
            sx={{
              border: "2px dashed",
              borderColor: isDragActive ? "#BF0603" : "#cccccc",
              borderRadius: "12px",
              p: 3,
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: isDragActive
                ? "rgba(191,6,3,0.04)"
                : "#fafafa",
              transition: "all 0.2s ease",
              "&:hover": {
                borderColor: "#BF0603",
                backgroundColor: "rgba(191,6,3,0.04)",
              },
            }}
          >
            <input {...getInputProps()} />
            {imagePreview ? (
              <Box>
                <img
                  src={imagePreview}
                  alt="preview"
                  style={{
                    maxWidth: "100%",
                    maxHeight: 220,
                    borderRadius: 8,
                  }}
                />
                <Typography variant="caption" display="block" mt={1}>
                  {imageValue instanceof File
                    ? `Selected: ${imageValue.name}`
                    : "Existing image — drop a new one to replace."}
                </Typography>
              </Box>
            ) : (
              <Typography color="text.secondary">
                Drag &amp; drop an image here, or click to select. Max 10MB.
              </Typography>
            )}
          </Box>
        </Box>

        <TextField
          label="Brief"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          placeholder="Short summary shown on the news card and as a lead paragraph on the detail page."
          {...register("brief")}
        />

        <TextField
          label="Content"
          variant="outlined"
          fullWidth
          multiline
          rows={10}
          placeholder="Full article body (plain text)."
          {...register("content")}
        />

        <Divider />
        <Typography variant="subtitle1" fontWeight={600}>
          SEO (optional)
        </Typography>
        <TextField
          label="Meta Title"
          variant="outlined"
          fullWidth
          {...register("metaTitle")}
        />
        <TextField
          label="Meta Description"
          variant="outlined"
          fullWidth
          multiline
          rows={2}
          {...register("metaDescription")}
        />

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} pt={1}>
          <LoadingButton
            loading={submitting}
            variant="outlined"
            onClick={handleSubmit((v) => submitWithStatus(v, "draft"))}
            sx={{
              borderColor: "#BF0603",
              color: "#BF0603",
              "&:hover": {
                borderColor: "#9c0502",
                backgroundColor: "rgba(191,6,3,0.04)",
              },
            }}
          >
            Save as Draft
          </LoadingButton>
          <LoadingButton
            loading={submitting}
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#BF0603",
              "&:hover": { backgroundColor: "#9c0502" },
            }}
          >
            {editing?._id ? "Update News" : "Publish News"}
          </LoadingButton>
          {editing?._id && (
            <Button
              variant="text"
              onClick={() => {
                setEditing(null);
                setImagePreview("");
                reset();
              }}
            >
              Cancel Edit
            </Button>
          )}
        </Stack>
      </Stack>

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

export default CreateNewsPage;
