import React, { useState, useRef, useEffect } from "react";
import {
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Link } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const ViewBlogs = () => {
  // Check if OTP is verified, if not redirect back to OTP generation page
  const [blogs, setBlogs] = useState([]);
  const location = useLocation();
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogImg, setOpenDialogImg] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedSections, setUpdatedSections] = useState([]);
  const [updatedFaqs, setUpdatedFaqs] = useState([]);
  const [updatedTags, setUpdatedTags] = useState("");
  const [updatedArticleSchema, setUpdateArticleSchema] = useState("");
  const [updatedFaqSchema, setUpdateFaqSchema] = useState("");
  const [updatedMetaTitle, setUpdatedMetaTitle] = useState("");
  const [updatedMetaDescription, setUpdatedMetaDescription] = useState("");
  const [updatedUrlTitle, setUpdatedUrlTitle] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(10); // Number of blogs per page
  const [updatedData, setUpdatedData] = useState();
  const navigate = useNavigate();
  const otpVerified = location.state?.otpVerified || false;
  // const otpVerified = true;

  const [image, setImage] = useState(null);
  const [uniqueFileName, setUniqueFileName] = useState("");
  const [imageUploaded, setImageUploaded] = useState(false);
  const inputRef = useRef(null); // Create a ref for the file input

  // useEffect(() => {
  //   if (!otpVerified) {
  //     navigate("/otp-generator");
  //   }
  // }, [otpVerified, navigate]); // Include otpVerified in the dependency array

  // console.log(otpVerified);

  // if (!otpVerified) {
  //   navigate("/otp-generator");
  // }

  const useStyles = makeStyles({
    clippedText: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    editDeleteButton: {
      "&:hover": {
        color: "white",
        backgroundColor: "black !important",
      },
    },
    marginedTitle: {
      marginTop: "20px",
    },
    paddedTitle: {
      paddingBottom: "10px",
    },
    card: {
      transition: "box-shadow 0.3s ease",
      "&:hover": {
        boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
      },
    },
    flexContainer: {
      display: "flex",
      alignItems: "center", // Align items vertically in the center
    },
    searchBar: {
      marginLeft: "10px", // Adjusted margin-right for spacing
    },
    addButton: {
      marginBottom: "10px", // Added margin-bottom for spacing
    },
  });

  const classes = useStyles();
  useEffect(() => {
    //console.log("checked");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://backend.adiance.com:443/api/blogs/getAllBlogs?page=${currentPage}`
          // `http://localhost:8007/api/blogs/getAllBlogs?page=${currentPage}`
        );
        const { blogs, totalPages } = response.data;
        setBlogs(blogs);
        setFilteredBlogs(blogs);
        setTotalPages(totalPages);
      } catch (error) {
        setError(
          error.message || "Failed to fetch blogs. Please try again later."
        );
      }
    };
    // setUpdatedData(fetchData);
    fetchData();
  }, [currentPage, limit]);

  const handleEdit = (blog) => {
    setCurrentBlog(blog);
    setUpdatedTitle(blog.title);
    setUpdatedDescription(blog.description);
    setUpdatedSections(blog.sections);
    setUpdatedFaqs(blog.faqs);
    setUpdatedTags(blog.tags.join(", "));
    setUpdateArticleSchema(blog.articleSchema);
    setUpdateFaqSchema(blog.faqSchema);
    setUpdatedMetaTitle(blog.metaTitle);
    setUpdatedMetaDescription(blog.metaDescription);
    setUpdatedUrlTitle(blog.urlTitle);
    setOpenDialog(true);
  };
  const handleImage = (blog) => {
    setCurrentBlog(blog);
    setOpenDialogImg(true);
  };
  const handleDialogCloseImg = () => {
    setOpenDialogImg(false);
    setCurrentBlog(null);
    setImageUploaded(false);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setCurrentBlog(null);
    setUpdatedTitle("");
    setUpdatedDescription("");
    setUpdatedSections([]);
    setUpdatedFaqs([]);
    setUpdateArticleSchema("");
    setUpdateFaqSchema("");
    setUpdatedTags("");
  };

  const handleUpdate = async () => {
    try {
      const updatedBlog = {
        ...currentBlog,
        title: updatedTitle,
        description: updatedDescription,
        sections: updatedSections,
        faqs: updatedFaqs,
        tags: updatedTags.split(",").map((tag) => tag.trim()),
        articleSchema: updatedArticleSchema,
        faqSchema: updatedFaqSchema,
        metaTitle: updatedMetaTitle,
        metaDescription: updatedMetaDescription,
        urlTitle: updatedUrlTitle,
      };
      await axios.put(
        `https://backend.adiance.com:443/api/blogs/update/${currentBlog._id}`,
        // `http://localhost:8007/api/blogs/update/${currentBlog._id}`,
        updatedBlog
      );
      const updatedBlogs = blogs.map((blog) =>
        blog._id === currentBlog._id ? updatedBlog : blog
      );
      setBlogs(updatedBlogs);
      setFilteredBlogs(updatedBlogs);
      toast.success("Blog updated successfully!");
      handleDialogClose();
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Failed to update blog. Please try again later.");
    }
  };
  const data = {
    NEWimage: uniqueFileName,
  };
  const handleUpdateImg = async () => {
    try {
      // const formData = new FormData();
      // formData.append("image", image); // Add the new image file to the form data

      // Make a PUT request to the update API endpoint
      //console.log(data.NEWimage);
      const response = await axios.put(
        // `http://localhost:8007/api/blogs/updateImage/${currentBlog._id}`,
        // Assuming the API endpoint is /updateImage/:id
        // formData,
        `https://backend.adiance.com:443/api/blogs/updateImage/${currentBlog._id}`,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
          },
          body: JSON.stringify(data),
        }
      );

      // Handle the response
      if (response.status === 200) {
        // If the update was successful, update the state with the updated blog
        const updatedBlog = response.data;
        const updatedBlogs = blogs.map((blog) =>
          blog._id === updatedBlog._id ? updatedBlog : blog
        );
        setOpenDialogImg(false);
        setBlogs(updatedBlogs);
        setFilteredBlogs(updatedBlogs);
        setCurrentBlog(null);
        setImageUploaded(false);
        toast.success("Blog updated successfully!");
      } else {
        // If the update failed, show an error message
        toast.error("Failed to update blog. Please try again later.");
      }
    } catch (error) {
      // Handle any errors
      console.error("Error updating blog:", error);
      toast.error("Failed to update blog. Please try again later.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://backend.adiance.com:443/api/blogs/delete/${id}`
        // `http://localhost:8007/api/blogs/delete/${id}`
      );
      const updatedBlogs = blogs.filter((blog) => blog._id !== id);
      setBlogs(updatedBlogs);
      setFilteredBlogs(updatedBlogs);
      toast.success("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog. Please try again later.");
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.tags.join(" ").toLowerCase().includes(searchTerm)
    );
    setFilteredBlogs(filtered);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.name}`;
    setUniqueFileName(fileName);
  };

  const handleUpload = async () => {
    if (!uniqueFileName) {
      console.error("Unique filename is not set.");
      return;
    }
    const formData = new FormData();
    formData.append("image", image, uniqueFileName);

    try {
      const response = await fetch("https://backend.adiance.com:443/upload", {
        // const response = await fetch("http://localhost:8007/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image.");
      }

      console.log("Image uploaded successfully");
      setImageUploaded(true); // Set imageUploaded to true after successful upload
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // comment uncomment this to check the page without otp
  if (!otpVerified) {
    return (
      <Typography variant="body1">
        Please verify OTP to view blogs.
        <Link to="/otp-generator">Click here</Link>
      </Typography>
    );
  }

  return (
    <Container maxWidth="md" className={classes.marginedTitle}>
      <Helmet>
        <title>View Blogs | Latest Insights on Security & Innovation</title>
        <meta
          name="description"
          content="Explore our blogs for the latest trends, expert insights, and innovations in security, AI surveillance, cybersecurity, and smart protection solutions."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        className={classes.paddedTitle}
      >
        View Blogs
      </Typography>
      {error && (
        <Typography variant="body1" color="error" align="center">
          {error}
        </Typography>
      )}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={10}>
          <TextField
            className={classes.searchBar}
            label="Search Blogs"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            fullWidth
            InputProps={{
              sx: { padding: "10px" }, // Adds padding inside the input field
            }}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Link to="/add-blogs" state={{ otpVerified: true }}>
            <Button variant="contained" color="primary" fullWidth>
              Add Blog
            </Button>
          </Link>
        </Grid>
      </Grid>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBlogs.map((blog, index) => (
              <TableRow key={blog._id}>
                <TableCell>{(currentPage - 1) * limit + index + 1}</TableCell>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.tags.join(", ")}</TableCell>
                <TableCell>
                  <div className={classes.flexContainer}>
                    <IconButton size="small" onClick={() => handleEdit(blog)}>
                      <EditIcon className={classes.editIcon} />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDelete(blog._id)}
                    >
                      <DeleteIcon className={classes.deleteIcon} />
                    </IconButton>
                    <IconButton size="small" onClick={() => handleImage(blog)}>
                      <AddPhotoAlternateIcon className={classes.editIcon} />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ToastContainer />
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Typography variant="body1">
          Page {currentPage} of {totalPages}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          style={{ marginRight: "10px" }}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>

      {/* dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Edit Blog</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />

          <TextField
            margin="dense"
            label="Blog Url"
            type="text"
            fullWidth
            multiline
            rows={2}
            value={updatedUrlTitle}
            onChange={(e) => setUpdatedUrlTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Meta Title"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={updatedMetaTitle}
            onChange={(e) => setUpdatedMetaTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Meta Description"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={updatedMetaDescription}
            onChange={(e) => setUpdatedMetaDescription(e.target.value)}
          />

          <Typography
            variant="subtitle1"
            color="textSecondary"
            gutterBottom
            style={{ marginBottom: "10px", fontWeight: "bold" }} // Adjust styles as needed
          >
            Current Image
          </Typography>
          {currentBlog && (
            <img
              src={`https://backend.adiance.com:443/images/${currentBlog.image}`}
              // src={`http://localhost:8007/images/${currentBlog.image}`}
              alt={currentBlog.title}
              className="item-image"
              style={{
                maxHeight: "200px", // Adjust max height as needed
                maxWidth: "100%", // Adjust max width as needed
                borderRadius: "8px", // Add border radius for rounded corners
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow for depth
                marginBottom: "5px",
              }}
            />
          )}

          <TextField
            margin="dense"
            label="Tags (Comma separated)"
            type="text"
            fullWidth
            value={updatedTags}
            onChange={(e) => setUpdatedTags(e.target.value)}
          />

          {/* article schema */}
          <TextField
            margin="dense"
            label="Article Schema"
            type="text"
            fullWidth
            multiline
            rows={3}
            value={updatedArticleSchema}
            onChange={(e) => setUpdateArticleSchema(e.target.value)}
          />

          {/* faq schema */}
          <TextField
            margin="dense"
            label="Faq Schema"
            type="text"
            fullWidth
            multiline
            rows={3}
            value={updatedFaqSchema}
            onChange={(e) => setUpdateFaqSchema(e.target.value)}
          />
          {updatedSections.map((section, index) => (
            <div key={index}>
              <TextField
                margin="dense"
                label={`Section ${index + 1} - Heading`}
                type="text"
                fullWidth
                value={section.heading}
                onChange={(e) => {
                  const newSections = [...updatedSections];
                  newSections[index].heading = e.target.value;
                  setUpdatedSections(newSections);
                }}
              />
              <TextField
                margin="dense"
                label={`Section ${index + 1} - Paragraph`}
                type="text"
                fullWidth
                multiline
                rows={4}
                value={section.para}
                onChange={(e) => {
                  const newSections = [...updatedSections];
                  newSections[index].para = e.target.value;
                  setUpdatedSections(newSections);
                }}
              />
            </div>
          ))}

          {updatedFaqs.map((faq, index) => (
            <div key={index}>
              <TextField
                margin="dense"
                label={`Faq ${index + 1} - Question`}
                type="text"
                fullWidth
                value={faq.question}
                onChange={(e) => {
                  const newFaqs = [...updatedFaqs];
                  newFaqs[index].question = e.target.value;
                  setUpdatedFaqs(newFaqs);
                }}
              />
              <TextField
                margin="dense"
                label={`Faq ${index + 1} - Answer`}
                type="text"
                fullWidth
                multiline
                rows={4}
                value={faq.answer}
                onChange={(e) => {
                  const newFaqs = [...updatedFaqs];
                  newFaqs[index].answer = e.target.value;
                  setUpdatedFaqs(newFaqs);
                }}
              />
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleUpdate} variant="contained" color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openDialogImg} onClose={handleDialogCloseImg}>
        <DialogTitle>Edit Image of Blog</DialogTitle>
        <DialogContent>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            gutterBottom
            style={{ marginBottom: "10px", fontWeight: "bold" }} // Adjust styles as needed
          >
            Current Image
          </Typography>
          {currentBlog && (
            <img
              src={`https://backend.adiance.com:443/images/${currentBlog.image}`}
              // src={`http://localhost:8007/images/${currentBlog.image}`}
              alt={currentBlog.title}
              className="item-image"
              style={{
                maxHeight: "200px", // Adjust max height as needed
                maxWidth: "100%", // Adjust max width as needed
                borderRadius: "8px", // Add border radius for rounded corners
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow for depth
                marginBottom: "5px",
              }}
            />
          )}
          <Grid item xs={6}>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={handleUpload}>
              Upload Image
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              style={{ color: imageUploaded ? "green" : "black" }}
            >
              {imageUploaded
                ? "Image uploaded successfully"
                : "Please Upload Image and then the submit will be enabled"}
            </Typography>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogCloseImg}>Cancel</Button>
          <Button
            onClick={handleUpdateImg}
            variant="contained"
            color="primary"
            disabled={!imageUploaded}
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ViewBlogs;
