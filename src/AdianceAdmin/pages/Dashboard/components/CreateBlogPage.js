import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
  IconButton,
  Modal,
  Paper,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputAdornment,
  Checkbox,
  Chip,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import {
  Upload as UploadIcon,
  Image as ImageIcon,
  Visibility as VisibilityIcon,
  Add as AddIcon,
  Title as TitleIcon,
  HelpOutline as HelpOutlineIcon,
  Code as CodeIcon,
  Delete as DeleteIcon,
  Notes as NotesIcon,
  Link as LinkIcon,
  ArrowUpward as ArrowUpwardIcon,
  DragIndicator as DragIndicatorIcon,
} from "@mui/icons-material";
import { Reorder } from "framer-motion";
import { useDropzone } from "react-dropzone";
import BlogListPage from "./BlogListPage";
import {
  createBlog as apiCreateBlog,
  updateBlog as apiUpdateBlog,
  deleteFile,
} from "../../../api/blogs";
import { SlateEditor, createEmptyParagraph } from "./SlateEditor";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
const IMAGE_BASE_URL = `${BACKEND_BASE_URL}/images`;

const BlogPreview = ({ formData, components, faqTitle, tags }) => (
  <Box p={2}>
    <Typography variant="h4">{formData.blogTitle}</Typography>
    <Typography variant="subtitle1">by {formData.blogAuthor}</Typography>
    {tags && tags.length > 0 && (
      <Box sx={{ my: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            size="large"
            color="primary"
            variant="outlined"
          />
        ))}
      </Box>
    )}
    {/* <Divider sx={{ my: 2 }} /> */}
    <Divider
      sx={{
        borderBottomWidth: "5px", // This controls the 'height' or thickness
        borderStyle: "dashed",
        borderColor: "#FF0000", // Or any color like 'red', '#FF0000', etc.
      }}
    />
    <Typography>This is a placeholder for the blog preview.</Typography>
  </Box>
);

const createNewComponent = (type) => {
  const newComponent = {
    id: `component-${Date.now()}`,
    type,
    content: {},
  };
  if (type === "faq") {
    newComponent.question = "";
    newComponent.answer = createEmptyParagraph();
  } else if (type === "cta") {
    newComponent.content = {
      ctaText: "",
      buttonText: "",
      buttonLink: "",
      noFollow: false,
    };
  } else if (["h2", "h3", "h4", "p"].includes(type)) {
    newComponent.content.text = createEmptyParagraph();
  } else if (type === "imageVideo") {
    newComponent.content = { description: "", imagePath: null, file: null };
  } else if (type === "schema") {
    newComponent.content.schemaData = "";
  }
  return newComponent;
};

const CreateBlogPage = () => {
  const [activeView, setActiveView] = useState("create");
  const [editingBlog, setEditingBlog] = useState(null);
  const [isMinorUpdate, setIsMinorUpdate] = useState(false);

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setActiveView("create");
  };

  return (
    <Box
      sx={{
        bgcolor: "grey.50",
        minHeight: "100vh",
        p: { xs: 1, sm: 2, md: 4 },
      }}
    >
      <Paper
        elevation={2}
        sx={{ borderRadius: 2, overflow: "hidden", position: "relative" }}
      >
        <Box
          sx={{
            p: 2,
            borderBottom: 1,
            borderColor: "divider",
            position: "sticky",
            top: 0,
            bgcolor: "white",
            zIndex: 10,
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6" fontWeight="600" color="#f61818ff">
                {activeView === "create"
                  ? editingBlog
                    ? "Modify your existing blog"
                    : "Create/manage your blogs here."
                  : "Edit/delete your existing blogs"}
              </Typography>
            </Grid>
            {editingBlog && activeView === "create" && (
              <Grid item sx={{ ml: 2 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isMinorUpdate}
                      onChange={(e) => setIsMinorUpdate(e.target.checked)}
                      sx={{
                        color: "#f61818ff",
                        "&.Mui-checked": {
                          color: "#f61818ff",
                        },
                      }}
                    />
                  }
                  label="Minor update (keep previous date)"
                />
              </Grid>
            )}
            <Grid item>
              <Box
                sx={{
                  bgcolor: "grey.100",
                  borderRadius: 50,
                  p: "2px",
                  display: "flex",
                }}
              >
                <Button
                  onClick={() => {
                    setActiveView("create");
                    setEditingBlog(null);
                  }}
                  sx={{
                    borderRadius: 50,
                    px: 3,
                    textTransform: "none",
                    bgcolor:
                      activeView === "create" ? "#fa0000ff" : "transparent",
                    color: activeView === "create" ? "white" : "#fa0000ff",
                    "&:hover": {
                      bgcolor:
                        activeView === "create" ? "primary.dark" : "grey.400",
                    },
                  }}
                >
                  {editingBlog ? "Editing" : "Create new"}
                </Button>
                <Button
                  onClick={() => {
                    setActiveView("existing");
                    setEditingBlog(null);
                  }}
                  sx={{
                    borderRadius: 50,
                    px: 3,
                    textTransform: "none",
                    bgcolor:
                      activeView === "existing" ? "#fa0000ff" : "transparent",
                    color: activeView === "existing" ? "white" : "#fa0000ff",
                    "&:hover": {
                      bgcolor:
                        activeView === "existing" ? "primary.dark" : "grey.400",
                    },
                  }}
                >
                  Existing blogs
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {activeView === "create" ? (
          <CreateBlogForm
            key={editingBlog?._id || "new"}
            blog={editingBlog}
            isMinorUpdate={isMinorUpdate}
            onBlogSave={handleEditBlog}
          />
        ) : (
          <BlogListPage onEditBlog={handleEditBlog} />
        )}
      </Paper>
    </Box>
  );
};

const CreateBlogForm = ({ blog, isMinorUpdate, onBlogSave }) => {
  const [headingsAndImages, setHeadingsAndImages] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [schemas, setSchemas] = useState([]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [faqTitle, setFaqTitle] = useState("");
  const [showFaqTitleInput, setShowFaqTitleInput] = useState(false);
  const [tags, setTags] = useState([]);
  const [isAddComponentModalOpen, setIsAddComponentModalOpen] = useState(false);
  const [addComponentIndex, setAddComponentIndex] = useState(null);
  const [mainImagePath, setMainImagePath] = useState("");
  const [submittingAction, setSubmittingAction] = useState(null);

  // Snackbar state for notifications
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // 'success' | 'error' | 'warning' | 'info'
  });

  // Snackbar handlers
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  const showSnackbar = (message, severity = "success") => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };
  const [newMainImage, setNewMainImage] = useState(null);
  const [formData, setFormData] = useState({
    urlWords: "",
    metaTitle: "",
    metaDescription: "",
    blogTitle: "",
    blogAuthor: "",
    imageText: "",
    status: "draft",
    brief: createEmptyParagraph(),
    mainImage: null,
  });

  const resetForm = () => {
    setFormData({
      urlWords: "",
      metaTitle: "",
      metaDescription: "",
      blogTitle: "",
      blogAuthor: "",
      imageText: "",
      status: "draft",
      brief: createEmptyParagraph(),
      mainImage: null,
    });
    setMainImagePath("");
    setNewMainImage(null);
    setHeadingsAndImages([]);
    setFaqs([]);
    setFaqTitle("");
    setShowFaqTitleInput(false);
    setSchemas([]);
    setTags([]);
  };

  // Helper to convert plain text into a Slate paragraph node
  const paragraphFromText = (text) => [
    {
      type: "paragraph",
      children: [{ text: typeof text === "string" ? text : "" }],
    },
  ];

  useEffect(() => {
    if (!blog) {
      resetForm();
      return;
    }

    // Work directly with new schema - no normalization needed
    const vmContent = blog.content || {};
    const vmMeta = blog.metadata || {};

    // console.log("The content is ", vmContent);
    // console.log("The brief of the blog is ", vmContent.brief);
    // Set form data directly from new schema
    setFormData({
      urlWords: vmMeta.urlWords || "",
      metaTitle: vmMeta.metaTitle || "",
      metaDescription: vmMeta.metaDescription || "",
      blogTitle: vmContent.title || "",
      blogAuthor: vmContent.blogAuthor || "",
      imageText: vmContent.imageText || "",
      status: blog.status || "draft",
      brief: vmContent.brief || "JENIL JAIISWAL",
      mainImage: vmContent.mainImage ? { path: vmContent.mainImage } : null,
    });

    // Set main image path
    const mainImagePath = vmContent.mainImage || "";
    setMainImagePath(mainImagePath);
    setNewMainImage(null);

    // Set components directly from new schema
    setHeadingsAndImages(vmContent.headingsAndImages || []);

    // Set FAQs
    setFaqs(vmContent.faqs?.items || []);
    setFaqTitle(vmContent.faqs?.title || "");
    setShowFaqTitleInput(
      (vmContent.faqs?.items || []).length > 0 || !!vmContent.faqs?.title
    );

    // Set schemas and tags
    setSchemas(
      (vmContent.schemas || []).map((s) => ({
        ...s,
        content: {
          schemaData:
            typeof s.content === "string"
              ? s.content
              : s.content?.schemaData || "",
        },
      }))
    );
    setTags(vmContent.tags || []);
  }, [blog]);

  const openAddComponentModal = (index) => {
    setAddComponentIndex(index);
    setIsAddComponentModalOpen(true);
  };
  const closeAddComponentModal = () => {
    setIsAddComponentModalOpen(false);
    setAddComponentIndex(null);
  };

  const addComponentInPosition = (position, type) => {
    if (addComponentIndex === null || !type) return;
    const newComponent = createNewComponent(type);
    const insertionIndex =
      position === "above" ? addComponentIndex : addComponentIndex + 1;
    const newHeadingsAndImages = [...headingsAndImages];
    newHeadingsAndImages.splice(insertionIndex, 0, newComponent);
    setHeadingsAndImages(newHeadingsAndImages);
    closeAddComponentModal();
  };

  const handleSubmit = async (newStatus) => {
    // Validate required fields for both draft and published
    if (
      !formData.blogAuthor ||
      !formData.urlWords ||
      !formData.metaTitle ||
      !formData.metaDescription ||
      !formData.blogTitle
    ) {
      const action =
        newStatus === "published" ? "publishing" : "saving as draft";
      showSnackbar(
        `Please fill in all required fields before ${action}`,
        "warning"
      );
      return;
    }
    // Build payload in VMukti schema
    const stripUploads = (path) =>
      typeof path === "string"
        ? path.replace(/^https?:\/\/[^/]+\//, "").replace(/^.*uploads\//, "")
        : path;

    const serializedComponents = headingsAndImages.map((comp) => {
      if (["h2", "h3", "h4", "p"].includes(comp.type)) {
        return {
          id: comp.id,
          type: comp.type,
          content: { text: comp.content?.text || createEmptyParagraph() },
        };
      }
      if (comp.type === "imageVideo") {
        const content = {
          description: comp.content?.description || "",
        };
        if (comp.content?.file instanceof File) {
          // Newly selected file not yet uploaded via helper; API layer will index
          content.file = comp.content.file;
        } else if (comp.content?.imagePath) {
          // Persisted server path
          content.imagePath = stripUploads(comp.content.imagePath);
        } else if (
          comp.content?.file &&
          typeof comp.content.file === "object" &&
          typeof comp.content.file.path === "string" &&
          comp.content.file.path
        ) {
          content.imagePath = stripUploads(comp.content.file.path);
        }
        return { id: comp.id, type: "imageVideo", content };
      }
      if (comp.type === "cta") {
        return { id: comp.id, type: "cta", content: { ...comp.content } };
      }
      return comp;
    });

    const ensuredBrief =
      Array.isArray(formData.brief) && formData.brief.length
        ? formData.brief
        : createEmptyParagraph();

    const payload = {
      metadata: {
        urlWords: formData.urlWords,
        metaTitle: formData.metaTitle,
        metaDescription: formData.metaDescription,
      },
      content: {
        title: formData.blogTitle,
        blogAuthor: formData.blogAuthor,
        imageText: formData.imageText,
        // Use newly selected file if present, otherwise keep existing uploaded path
        mainImage:
          newMainImage instanceof File
            ? newMainImage
            : formData?.mainImage?.path || null,
        imageVideos: [],
        brief: ensuredBrief,
        headingsAndImages: serializedComponents,
        tags: tags,
        faqs:
          faqTitle || faqs.length
            ? {
                title: faqTitle,
                items: faqs.map((f) => ({
                  id: f.id,
                  question: f.question,
                  answer: f.answer,
                })),
              }
            : undefined,
        schemas: schemas.map((s) => ({
          id: s.id,
          content: s.content?.schemaData || "",
        })),
      },
      status: newStatus,
      isMinorUpdate: !!isMinorUpdate, // Pass simple boolean
    };
    // console.log("Submitting payload:", payload);
    setSubmittingAction(newStatus);
    try {
      let savedBlog = null;
      if (blog && blog._id) {
        const response = await apiUpdateBlog(blog._id, payload);
        savedBlog = response && response.data ? response.data : response;
        showSnackbar(
          newStatus === "published"
            ? "Blog updated and published successfully!"
            : "Blog draft updated successfully!",
          "success"
        );
      } else {
        const response = await apiCreateBlog(payload);
        savedBlog = response && response.data ? response.data : response;
        showSnackbar(
          newStatus === "published"
            ? "Blog created and published successfully!"
            : "Blog draft saved successfully!",
          "success"
        );
      }

      if (savedBlog && savedBlog.metadata?.urlWords) {
        // Redirect to new tab
        // Assuming relative path works for SPA, otherwise construct full URL
        window.open(`/blog/${savedBlog.metadata.urlWords}`, "_blank");
        
        // Update parent state to prevent duplicate creation
        if (onBlogSave) {
          onBlogSave(savedBlog);
        }
      }

    } catch (err) {
      showSnackbar(`Failed to save: ${err?.message || err}`, "error");
    } finally {
      setSubmittingAction(null);
    }
  };

  // Helper function to upload image to backend
  const uploadImageToBackend = async (file) => {
    if (!file) return null;

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("https://backend.adiance.com:443/upload", {
        // const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image.");
      }
      console.log("Image Name:",file)
      const result = await response.json();
      console.log("Image uploaded successfully", result);

      if (typeof result.path === "string" && result.path) return result.path;
      if (typeof result.filePath === "string" && result.filePath)
        return result.filePath;
      if (typeof result.filename === "string" && result.filename)
        return `${result.filename}`;
      return null;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const handleImageUpload = async (file) => {
    setNewMainImage(file || null);
    if (!file) {
      setFormData((prev) => ({ ...prev, mainImage: null }));
      return;
    }

    try {
      const imagePath = await uploadImageToBackend(file);
      console.log("Uploaded image path:", imagePath);
      setFormData((prev) => ({
        ...prev,
        mainImage: { path: imagePath },
      }));
      // Keep the server path so delete uses the correct timestamped filename
      setMainImagePath(imagePath);
    } catch (error) {
      showSnackbar("Failed to upload image. Please try again.", "error");
      setNewMainImage(null);
      setFormData((prev) => ({ ...prev, mainImage: null }));
    }
  };

  const addComponent = (type) => {
    const newComponent = createNewComponent(type);
    if (["h2", "h3", "h4", "p", "imageVideo", "cta"].includes(type)) {
      setHeadingsAndImages((prev) => [...prev, newComponent]);
    } else if (type === "faq") {
      setFaqs((prev) => [...prev, newComponent]);
      if (faqs.length === 0) setShowFaqTitleInput(true);
    } else if (type === "schema") {
      setSchemas((prev) => [...prev, newComponent]);
    }
  };

  const handleDeleteComponent = async (id, array, setArray) => {
    // ... Logic to find component, delete associated files if necessary, and update state
    const newArray = array.filter((component) => component.id !== id);
    setArray(newArray);

    // If deleting FAQ and no FAQs remain, reset FAQ title and hide title input
    if (array === faqs && newArray.length === 0) {
      setFaqTitle("");
      setShowFaqTitleInput(false);
    }
  };

  const updateComponentContent = (id, field, value, array, setArray) => {
    setArray(
      array.map((component) =>
        component.id === id
          ? { ...component, content: { ...component.content, [field]: value } }
          : component
      )
    );
  };

  const updateFAQField = (id, field, value) => {
    setFaqs(
      faqs.map((component) =>
        component.id === id ? { ...component, [field]: value } : component
      )
    );
  };

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Grid container sx={{ minHeight: "calc(100vh - 100px)" }}>
      <Grid
        item
        sx={{
          width: "250px",
          borderRight: 1,
          borderColor: "divider",
          p: 2,
          position: "sticky",
          top: "80px",
          height: "calc(100vh - 82px)",
          overflowY: "auto",
          bgcolor: "white",
        }}
      >
        <Typography variant="body2" fontWeight="medium" mb={2}>
          Select options to Add more
        </Typography>
        <Stack spacing={1}>
          <ComponentOption
            icon={TitleIcon}
            title="Heading H2"
            subtitle="36px"
            onClick={() => addComponent("h2")}
          />
          <ComponentOption
            icon={TitleIcon}
            title="Heading H3"
            subtitle="20px"
            onClick={() => addComponent("h3")}
          />
          <ComponentOption
            icon={TitleIcon}
            title="Heading H4"
            subtitle="16px"
            onClick={() => addComponent("h4")}
          />
          <ComponentOption
            icon={NotesIcon}
            title="Paragraph"
            subtitle="16px"
            onClick={() => addComponent("p")}
          />
          <ComponentOption
            icon={ImageIcon}
            title="Image/Video"
            subtitle="Media"
            onClick={() => addComponent("imageVideo")}
          />
          <ComponentOption
            icon={LinkIcon}
            title="Add CTA"
            subtitle="Call to Action"
            // color="success.main"
            onClick={() => addComponent("cta")}
          />
          <ComponentOption
            icon={HelpOutlineIcon}
            title="Add FAQ"
            subtitle="Question + Ans"
            color="error.main"
            onClick={() => addComponent("faq")}
          />
          <ComponentOption
            icon={CodeIcon}
            title="Add Schema"
            subtitle="Schema"
            onClick={() => addComponent("schema")}
          />
        </Stack>
        <Stack direction="column" mt={3} spacing={1}>
          <Button
            startIcon={<VisibilityIcon />}
            variant="outlined"
            size="large"
            fullWidth
            onClick={() => setIsPreviewOpen(true)}
          >
            Preview
          </Button>
          <Button
            startIcon={<UploadIcon />}
            onClick={() => handleSubmit("draft")}
            variant="contained"
            color="success"
            size="large"
            fullWidth
            disabled={!!submittingAction}
          >
            {submittingAction === "draft" ? (
              <>
                <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
                Drafting Blog...
              </>
            ) : (
              "Save Draft"
            )}
          </Button>
        </Stack>
        <Button
          startIcon={<UploadIcon />}
          fullWidth
          sx={{ mt: 1 }}
          onClick={() => handleSubmit("published")}
          variant="contained"
          size="large"
          disabled={!!submittingAction}
        >
          {submittingAction === "published" ? (
            <>
              <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
              {blog ? "Updating Blog..." : "Publishing Blog..."}
            </>
          ) : blog ? (
            "Publish Updated Blog"
          ) : (
            "Publish Blog"
          )}
        </Button>
      </Grid>

      <Grid
        item
        xs
        sx={{ p: 3, overflowY: "auto", height: "calc(100vh - 82px)" }}
      >
        <Stack spacing={2}>
          <Typography fontWeight="medium">URL words</Typography>
          <TextField
            fullWidth
            placeholder="your-url-words"
            value={formData.urlWords}
            onChange={(e) => handleFormChange("urlWords", e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box
                    sx={{
                      bgcolor: "#e5e7eb",
                      color: "#111827",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    https://adiance.com/blog/
                  </Box>
                </InputAdornment>
              ),
            }}
          />
          <Typography fontWeight="medium">Meta Title</Typography>
          <TextField
            fullWidth
            placeholder="Write your meta title"
            value={formData.metaTitle}
            onChange={(e) => handleFormChange("metaTitle", e.target.value)}
          />
          <Typography fontWeight="medium">Meta Description</Typography>
          <TextField
            fullWidth
            placeholder="Write your meta description"
            value={formData.metaDescription}
            onChange={(e) =>
              handleFormChange("metaDescription", e.target.value)
            }
          />
          {/* <Divider sx={{ borderStyle: "dashed" }} /> */}
          <Divider
            sx={{
              borderBottomWidth: "5px", // This controls the 'height' or thickness
              borderStyle: "dashed",
              borderColor: "#ff0000ff", // Or any color like 'red', '#FF0000', etc.
            }}
          />

          <Typography fontWeight="medium">Blog Title</Typography>
          <TextField
            fullWidth
            placeholder="Write your blog title"
            value={formData.blogTitle}
            onChange={(e) => handleFormChange("blogTitle", e.target.value)}
          />
          <Typography fontWeight="medium">Author</Typography>
          <FormControl fullWidth>
            <Select
              value={formData.blogAuthor}
              onChange={(e) => handleFormChange("blogAuthor", e.target.value)}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select an author
              </MenuItem>
              {["Hardik Sanghvi", "Kushal Sanghvi", "Parimal Panchal"].map(
                (author) => (
                  <MenuItem key={author} value={author}>
                    {author}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
          <Typography fontWeight="medium">Main Image</Typography>
          <TextField
            fullWidth
            placeholder="Write text for image/video/etc"
            value={formData.imageText}
            onChange={(e) => handleFormChange("imageText", e.target.value)}
          />
          <FileUploadBox
            onFileUpload={(files) => handleImageUpload(files ? files[0] : null)}
            file={
              newMainImage || (mainImagePath ? { path: mainImagePath } : null)
            }
            serverDeleteName={
              // Ensure we pass just the filename for DELETE
              mainImagePath ? String(mainImagePath).split("/").pop() : null
            }
            onDelete={async () => {
              // Delete stored main image from server if present
              const filename = mainImagePath
                ? String(mainImagePath).split("/").pop()
                : null;
              if (filename) {
                try {
                  await deleteFile(filename);
                } catch (e) {
                  console.error("Failed to delete main image on server:", e);
                }
              }
              // Clear local state
              setMainImagePath(null);
              setFormData((prev) => ({ ...prev, mainImage: null }));
            }}
          />
          {/* <Divider sx={{ borderStyle: "dashed" }} /> */}
          <Divider
            sx={{
              borderBottomWidth: "5px", // This controls the 'height' or thickness
              borderStyle: "dashed",
              borderColor: "primary.main", // Or any color like 'red', '#FF0000', etc.
            }}
          />

          <Typography fontWeight="medium">Brief</Typography>
          <SlateEditor
            value={formData.brief}
            onChange={(value) => handleFormChange("brief", value)}
            placeholder="Write your brief..."
          />
          {/* <Divider sx={{ borderStyle: "dashed", my: 2 }} /> */}
          <Divider
            sx={{
              borderBottomWidth: "5px", // This controls the 'height' or thickness
              borderStyle: "dashed",
              borderColor: "primary.main", // Or any color like 'red', '#FF0000', etc.
            }}
          />

          <Typography fontWeight="bold">
            Content Elements (Headings, Images, Paragraphs, CTAs)
          </Typography>
          <Reorder.Group
            as="div"
            axis="y"
            values={headingsAndImages}
            onReorder={setHeadingsAndImages}
          >
            {headingsAndImages.map((component, index) => (
              <Reorder.Item key={component.id} value={component}>
                <Paper sx={{ mb: 2, p: 2, border: 1, borderColor: "divider" }}>
                  <Stack direction="row" alignItems="center" mb={1}>
                    <Box
                      sx={{
                        color: "grey.500",
                        mr: 1,
                        cursor: "grab",
                        "&:active": { cursor: "grabbing" },
                      }}
                    >
                      <DragIndicatorIcon />
                    </Box>
                    <Typography fontWeight="bold" flexGrow={1}>
                      {component.type
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </Typography>
                    <IconButton
                      size="large"
                      onClick={() => openAddComponentModal(index)}
                    >
                      <AddIcon />
                    </IconButton>
                    <IconButton
                      size="large"
                      color="error"
                      onClick={() =>
                        handleDeleteComponent(
                          component.id,
                          headingsAndImages,
                          setHeadingsAndImages
                        )
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                  <DynamicComponent
                    component={component}
                    onContentChange={(field, value) =>
                      updateComponentContent(
                        component.id,
                        field,
                        value,
                        headingsAndImages,
                        setHeadingsAndImages
                      )
                    }
                    onFileUpload={async (file) => {
                      if (!file) {
                        updateComponentContent(
                          component.id,
                          "file",
                          null,
                          headingsAndImages,
                          setHeadingsAndImages
                        );
                        updateComponentContent(
                          component.id,
                          "imagePath",
                          null,
                          headingsAndImages,
                          setHeadingsAndImages
                        );
                        return;
                      }

                      // Set file for immediate preview
                      updateComponentContent(
                        component.id,
                        "file",
                        file,
                        headingsAndImages,
                        setHeadingsAndImages
                      );

                      try {
                        const uploadedPath = await uploadImageToBackend(file);
                        const filenameOnly = String(uploadedPath).replace(
                          /^.*uploads\//,
                          ""
                        );
                        // Save filename only for DB
                        updateComponentContent(
                          component.id,
                          "imagePath",
                          filenameOnly,
                          headingsAndImages,
                          setHeadingsAndImages
                        );
                        // Switch preview to server URL immediately
                        updateComponentContent(
                          component.id,
                          "file",
                          { path: `${filenameOnly}` },
                          headingsAndImages,
                          setHeadingsAndImages
                        );
                      } catch (e) {
                        showSnackbar(
                          "Failed to upload image. Please try again.",
                          "error"
                        );
                        updateComponentContent(
                          component.id,
                          "file",
                          null,
                          headingsAndImages,
                          setHeadingsAndImages
                        );
                      }
                    }}
                  />
                </Paper>
              </Reorder.Item>
            ))}
          </Reorder.Group>
          {/* <Divider sx={{ borderStyle: "dashed" }} /> */}
          <Divider
            sx={{
              borderBottomWidth: "5px", // This controls the 'height' or thickness
              borderStyle: "dashed",
              borderColor: "primary.main", // Or any color like 'red', '#FF0000', etc.
            }}
          />

          {/* <Typography fontWeight="bold">Tags</Typography>
          <Box sx={{ maxWidth: "50%" }}>
            <TextField
              placeholder="Add tag and press Enter"
              size="large"
              fullWidth
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const value = e.target.value.trim();
                  if (value && !tags.includes(value)) {
                    setTags([...tags, value]);
                    e.target.value = "";
                  }
                }
              }}
            />
            <Box sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
              {tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  onDelete={() => setTags(tags.filter((_, i) => i !== index))}
                  color="primary"
                  variant="outlined"
                  size="large"
                />
              ))}
            </Box>
          </Box> */}
          {/* <Divider
            sx={{
              borderBottomWidth: "5px", // This controls the 'height' or thickness
              borderStyle: "dashed",
              borderColor: "primary.main", // Or any color like 'red', '#FF0000', etc.
            }}
          /> */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontWeight="bold">FAQs</Typography>
            {showFaqTitleInput && (
              <TextField
                placeholder="Enter FAQ section title"
                value={faqTitle}
                onChange={(e) => setFaqTitle(e.target.value)}
                sx={{ width: "70%" }}
                size="large"
              />
            )}
          </Stack>
          <Reorder.Group as="div" axis="y" values={faqs} onReorder={setFaqs}>
            {faqs.map((component) => (
              <Reorder.Item key={component.id} value={component}>
                <Paper sx={{ mb: 2, p: 2, border: 1, borderColor: "divider" }}>
                  <Stack direction="row" alignItems="center" mb={1}>
                    <Box sx={{ color: "grey.500", mr: 1, cursor: "grab" }}>
                      <DragIndicatorIcon />
                    </Box>
                    <Typography fontWeight="bold" flexGrow={1}>
                      FAQ
                    </Typography>
                    <IconButton
                      size="large"
                      color="error"
                      onClick={() =>
                        handleDeleteComponent(component.id, faqs, setFaqs)
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                  <FAQComponent
                    component={component}
                    onFieldChange={updateFAQField}
                  />
                </Paper>
              </Reorder.Item>
            ))}
          </Reorder.Group>
          {/* <Divider sx={{ borderStyle: "dashed" }} /> */}
          <Divider
            sx={{
              borderBottomWidth: "5px", // This controls the 'height' or thickness
              borderStyle: "dashed",
              borderColor: "primary.main", // Or any color like 'red', '#FF0000', etc.
            }}
          />
          <Typography fontWeight="bold" mb={2}>
            Schemas
          </Typography>
          <Stack spacing={2}>
            {schemas.map((component) => (
              <Paper
                key={component.id}
                sx={{ p: 2, border: 1, borderColor: "divider" }}
              >
                <Stack direction="row" alignItems="center" mb={1}>
                  <Typography fontWeight="bold" flexGrow={1}>
                    Schema
                  </Typography>
                  <IconButton
                    size="large"
                    color="error"
                    onClick={() =>
                      handleDeleteComponent(component.id, schemas, setSchemas)
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
                <TextField
                  placeholder="Enter JSON schema"
                  multiline
                  // rows={13}
                  height="auto"
                  fullWidth
                  value={component.content?.schemaData || ""}
                  onChange={(e) =>
                    updateComponentContent(
                      component.id,
                      "schemaData",
                      e.target.value,
                      schemas,
                      setSchemas
                    )
                  }
                />
              </Paper>
            ))}
          </Stack>

          <Stack direction="row" spacing={2} pt={2}>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleSubmit("draft")}
            >
              Save Draft
            </Button>
            <Button
              variant="contained"
              onClick={() => handleSubmit("published")}
            >
              {blog ? "Publish Updated Blog" : "Publish Blog"}
            </Button>
          </Stack>
        </Stack>
      </Grid>

      <Modal open={isPreviewOpen} onClose={() => setIsPreviewOpen(false)}>
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90vw",
            height: "90vh",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" component="h2">
            Blog Preview
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              my: 2,
              p: 1,
              border: "1px solid #ddd",
            }}
          >
            <BlogPreview
              formData={formData}
              components={[...headingsAndImages, ...faqs, ...schemas]}
              faqTitle={faqTitle}
              tags={tags}
            />
          </Box>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              variant="outlined"
              onClick={() =>
                window.open(`/blog/${formData.urlWords || "preview"}`, "_blank")
              }
            >
              Open in new tab
            </Button>
            <Button variant="contained" onClick={() => setIsPreviewOpen(false)}>
              Close
            </Button>
          </Stack>
        </Paper>
      </Modal>

      <AddComponentModal
        isOpen={isAddComponentModalOpen}
        onClose={closeAddComponentModal}
        onConfirm={addComponentInPosition}
      />

      {/* Snackbar for notifications */}
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
    </Grid>
  );
};

const AddComponentModal = ({ isOpen, onClose, onConfirm }) => {
  const [position, setPosition] = useState("below");
  const [componentType, setComponentType] = useState("p");
  const handleConfirm = () => {
    onConfirm(position, componentType);
    onClose();
  };
  useEffect(() => {
    if (isOpen) {
      setPosition("below");
      setComponentType("p");
    }
  }, [isOpen]);
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2" mb={2}>
          Add a New Component
        </Typography>
        <Stack spacing={3}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Position</FormLabel>
            <RadioGroup
              row
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <FormControlLabel
                value="above"
                control={<Radio />}
                label="Above"
              />
              <FormControlLabel
                value="below"
                control={<Radio />}
                label="Below"
              />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>Component Type</FormLabel>
            <Select
              value={componentType}
              onChange={(e) => setComponentType(e.target.value)}
            >
              <MenuItem value="h2">Heading H2</MenuItem>
              <MenuItem value="h3">Heading H3</MenuItem>
              <MenuItem value="h4">Heading H4</MenuItem>
              <MenuItem value="p">Paragraph</MenuItem>
              <MenuItem value="imageVideo">Image/Video</MenuItem>
              <MenuItem value="cta">CTA</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack direction="row" spacing={2} mt={4} justifyContent="flex-end">
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="contained" onClick={handleConfirm}>
            Add Component
          </Button>
        </Stack>
      </Paper>
    </Modal>
  );
};

const DynamicComponent = ({ component, onContentChange, onFileUpload }) => {
  const { type, content = {} } = component;
  switch (type) {
    case "h2":
    case "h3":
    case "h4":
    case "p":
      return (
        <SlateEditor
          value={content.text || createEmptyParagraph()}
          onChange={(value) => onContentChange("text", value)}
          placeholder={`Enter ${type} text...`}
        />
      );
    case "imageVideo":
      return (
        <Stack spacing={2}>
          <TextField
            fullWidth
            multiline
            rows={2}
            placeholder="Enter image description"
            value={content.description || ""}
            onChange={(e) => onContentChange("description", e.target.value)}
          />
          <FileUploadBox
            onFileUpload={(files) => onFileUpload(files ? files[0] : null)}
            file={
              content.file ||
              (content.imagePath ? { path: content.imagePath } : null)
            }
            serverDeleteName={
              content.imagePath
                ? String(content.imagePath).split("/").pop()
                : null
            }
            onDelete={() => {
              onContentChange("imagePath", null);
            }}
          />
        </Stack>
      );
    case "cta":
      return (
        <CTAComponent component={component} onContentChange={onContentChange} />
      );
    default:
      return null;
  }
};

const FAQComponent = ({ component, onFieldChange }) => {
  return (
    <Stack spacing={2}>
      <TextField
        fullWidth
        placeholder="Enter question"
        value={component.question || ""}
        onChange={(e) =>
          onFieldChange(component.id, "question", e.target.value)
        }
      />
      <Box>
        <Typography variant="body2" fontWeight="medium" mb={1}>
          Answer
        </Typography>
        <SlateEditor
          value={component.answer || createEmptyParagraph()}
          onChange={(value) => onFieldChange(component.id, "answer", value)}
          placeholder="Enter answer..."
        />
      </Box>
    </Stack>
  );
};

const CTAComponent = ({ component, onContentChange }) => {
  const { content = {} } = component;
  return (
    <Stack spacing={2}>
      <FormControl fullWidth>
        <FormLabel>CTA Text</FormLabel>
        <TextField
          multiline
          rows={2}
          placeholder="Enter text for CTA background"
          value={content.ctaText || ""}
          onChange={(e) => onContentChange("ctaText", e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth>
        <FormLabel>Button Text</FormLabel>
        <TextField
          placeholder="Enter text for button"
          value={content.buttonText || ""}
          onChange={(e) => onContentChange("buttonText", e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth>
        <FormLabel>Button Link</FormLabel>
        <TextField
          placeholder="https://example.com"
          value={content.buttonLink || ""}
          onChange={(e) => onContentChange("buttonLink", e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">URL</InputAdornment>
            ),
          }}
        />
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={content.noFollow || false}
            onChange={(e) => onContentChange("noFollow", e.target.checked)}
          />
        }
        label="No Follow"
      />
    </Stack>
  );
};

const FileUploadBox = ({ onFileUpload, file, onDelete, serverDeleteName }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [], "video/*": [] },
    maxSize: 10485760,
    onDrop: onFileUpload,
  });
  const extractServerFilename = (f) => {
    if (!f) return null;
    const rawPath = typeof f === "string" ? f : f.path || "";
    if (!rawPath) return null;
    const parts = String(rawPath).split("/");
    return parts[parts.length - 1] || null;
  };
  const getImageSource = (file) => {
    if (!file) return null;
    
    // Handle File objects (for preview during upload)
    if (file instanceof File) return URL.createObjectURL(file);
    
    // Handle string paths
    if (typeof file === "string") {
      // If it's already a full URL, return as-is
      if (/^https?:\/\//i.test(file)) return file;
      // Otherwise, construct the URL with just the filename and encode it properly
      const filename = file.includes("/") ? file.split("/").pop() : file;
      const encodedFilename = encodeURIComponent(filename);
      return `${IMAGE_BASE_URL}/${encodedFilename}`;
    }
    
    // Handle object with path property
    if (file && file.path) {
      // If it's already a full URL, return as-is
      if (/^https?:\/\//i.test(file.path)) return file.path;
      // Otherwise, construct the URL with just the filename and encode it properly
      const filename = file.path.includes("/") ? file.path.split("/").pop() : file.path;
      const encodedFilename = encodeURIComponent(filename);
      return `${IMAGE_BASE_URL}/${encodedFilename}`;
    }
    
    return null;
  };
  return (
    <Box
      {...getRootProps()}
      sx={{
        height: "150px",
        bgcolor: "grey.100",
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        border: "2px dashed",
        borderColor: "grey.300",
        "&:hover": { bgcolor: "grey.200", cursor: "pointer" },
        position: "relative",
      }}
    >
      <input {...getInputProps()} />
      {file &&
      (file.path || file instanceof File || typeof file === "string") ? (
        <>
          <Box
            component="img"
            src={getImageSource(file)}
            alt="Uploaded file"
            sx={{ maxHeight: "130px", maxWidth: "100%", objectFit: "contain" }}
          />
          <IconButton
            size="large"
            color="error"
            sx={{ position: "absolute", top: 8, right: 8 }}
            onClick={async (e) => {
              e.stopPropagation();
              // console.log('Delete button clicked, file object:', file);
              const serverName =
                serverDeleteName || extractServerFilename(file);
              if (
                serverName &&
                !(typeof file === "string" && file.startsWith("blob:"))
              ) {
                try {
                  // console.log('Attempting to delete file:', serverName);
                  await deleteFile(serverName);
                  console.log("File deleted from server:", serverName);
                } catch (error) {
                  console.error("Error deleting file from server:", error);
                }
              } else {
                // console.log('No file to delete from server, file object:', file);
              }
              // Call the onDelete callback if provided
              if (onDelete) {
                onDelete();
              }
              // Clear the file
              onFileUpload(null);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ) : (
        <>
          <ArrowUpwardIcon sx={{ fontSize: 24, color: "#BF0603" }} />
          <Typography fontWeight="medium" mt={1} variant="body2">
            Drag and drop a file here, or click to upload
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            mt={0.5}
            textAlign="center"
          >
            Supported formats: JPG, PNG, GIF, SVG, WEBM, MP4, MOV (max 10MB)
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            textAlign="center"
          >
            all size should be in{" "}
            <Typography component="span" fontWeight="bold">
              16:9
            </Typography>
          </Typography>
        </>
      )}
    </Box>
  );
};

const ComponentOption = ({
  icon: Icon,
  title,
  subtitle,
  color = "#BF0603",
  onClick,
}) => {
  return (
    <Stack
      direction="row"
      spacing={1.5}
      alignItems="center"
      onClick={onClick}
      sx={{
        p: 1,
        borderRadius: 1,
        "&:hover": { bgcolor: "grey.50", cursor: "pointer" },
      }}
    >
      <Box
        sx={{
          bgcolor: color,
          color: "white",
          borderRadius: 1,
          p: 0.75,
          display: "flex",
        }}
      >
        <Icon sx={{ fontSize: 16 }} />
      </Box>
      <Box flexGrow={1}>
        <Typography variant="body2" fontWeight="medium">
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>
      <Box color="grey.400">
        <AddIcon sx={{ fontSize: 14 }} />
      </Box>
    </Stack>
  );
};

export default CreateBlogPage;
