import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const AddBlogs = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [sections, setSections] = useState([{ heading: "", para: "" }]);
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);
  const [tags, setTags] = useState([]);
  const [uniqueFileName, setUniqueFileName] = useState("");
  const [imageUploaded, setImageUploaded] = useState(false);
  const [articleSchema, setArticleSchema] = useState("");
  const [faqSchema, setFaqSchema] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [urlTitle,setUrlTitle] = useState("");
  const inputRef = useRef(null); // Create a ref for the file input
  const navigate = useNavigate();
  const location = useLocation();
  const otpVerified = location.state?.otpVerified || false;
  // const otpVerified = true;
  const paraRefs = useRef([]); // Store references to TextField elements

  const handleSectionChange = (index, field, value) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const addSection = () => {
    setSections([...sections, { heading: "", para: "" }]);
  };

  const removeSection = (index) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  };

  // add-link section
  const insertLink = (index) => {
    const inputField = paraRefs.current[index];

    if (!inputField) return; // Ensure input field exists

    const selectionStart = inputField.selectionStart;
    const selectionEnd = inputField.selectionEnd;

    if (selectionStart === selectionEnd) {
      alert("Please select text to insert a link.");
      return;
    }

    const selectedText = inputField.value.substring(
      selectionStart,
      selectionEnd
    );
    const url = prompt("Enter URL:", "https://example.com");

    if (!url) return; // If the user cancels, do nothing

    // Wrap the selected text with <a> tag
    const updatedText =
      inputField.value.substring(0, selectionStart) +
      `<a href="${url}" target="_blank">${selectedText}</a>` +
      inputField.value.substring(selectionEnd);

    handleSectionChange(index, "para", updatedText);
  };

  // faq section
  const handleFaqChange = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const addFaq = () => setFaqs([...faqs, { question: "", answer: "" }]);
  const removeFaq = (index) => setFaqs(faqs.filter((_, i) => i !== index));

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (
        !title ||
        !description ||
        !image ||
        sections.some((section) => !section.heading || !section.para) ||
        // faqs.some((faq) => !faq.question || !faq.answer) ||
        !tags.length
        // || !articleSchema ||
        // !faqSchema
      ) {
        throw new Error("Please fill in all required fields.");
      }

      const data = {
        title,
        description,
        image: uniqueFileName,
        tags,
        sections,
        faqs,
        articleSchema,
        faqSchema,
        metaTitle,
        metaDescription,
        urlTitle
      };

      const response = await fetch(
        "https://backend.adiance.com:443/api/blogs/createBlog",
        // "http://localhost:8007/api/blogs/createBlog",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit blog. Please try again later.");
      }

      alert("Blog submitted successfully"); // Display alert message

      setTitle("");
      setDescription("");
      setImage(null);
      setSections([{ heading: "", para: "" }]);
      setFaqs([{ question: "", answer: "" }]);
      setTags([]);
      setImageUploaded(false);
      setArticleSchema("");
      setFaqSchema("");
      setMetaTitle("");
      setMetaDescription("");
      setUrlTitle("");

      // Clear the file input value
      inputRef.current.value = null;
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "Failed to submit blog. Please try again later."); // Display alert message
    }
  };

  const handleViewBlogsClick = () => {
    // Set otpVerified to true (or a value based on your verification logic)
    const otpVerified = true; // Replace with your logic to determine verification status

    navigate("/view-blogs", { state: { otpVerified } }); // Pass otpVerified as state
  };

  if (!otpVerified) {
    return (
      <Typography variant="body1">
        Please verify OTP to view blogs.
        <Link to="/otp-generator">Click here</Link>
      </Typography>
    );
  }

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Add New Blog
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                margin="normal"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                InputProps={{
                  sx: { padding: "15px" }, // Adds padding inside the input field
                }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                inputProps={{
                  style: { whiteSpace: "pre-line" }, // Allow line breaks to be displayed
                }}
              />
            </Grid>
            {/* url-title */}
            <Grid item xs={12}>
              <TextField
                label="Blog Url"
                variant="outlined"
                fullWidth
                multiline
                rows={2}
                margin="normal"
                value={urlTitle}
                onChange={(e) => setUrlTitle(e.target.value)}
                InputProps={{
                  sx: { padding: "15px" }, // Adds padding inside the input field
                }}
                required
              />
            </Grid>
            {/* meta title */}
            <Grid item xs={12}>
              <TextField
                label="Meta Title"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                // required
                inputProps={{
                  style: { whiteSpace: "pre-line" }, // Allow line breaks to be displayed
                }}
              />
            </Grid>
            {/* meta description */}
            <Grid item xs={12}>
              <TextField
                label="Meta Description"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                // required
                inputProps={{
                  style: { whiteSpace: "pre-line" }, // Allow line breaks to be displayed
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpload}
              >
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

            {/* Article Schema Field */}
            <Grid item xs={12}>
              <TextField
                label="Article Schema"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={3}
                value={articleSchema}
                onChange={(e) => setArticleSchema(e.target.value)}
                // required
              />
            </Grid>

            {/* FAQ Schema Field */}
            <Grid item xs={12}>
              <TextField
                label="FAQ Schema"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={3}
                value={faqSchema}
                onChange={(e) => setFaqSchema(e.target.value)}
                // required
              />
            </Grid>

            {/* blog-data section */}
            {sections.map((section, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12}>
                  <TextField
                    label={`Section ${index + 1} - Heading`}
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    margin="normal"
                    value={section.heading}
                    onChange={(e) =>
                      handleSectionChange(index, "heading", e.target.value)
                    }
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={`Section ${index + 1} - Paragraph`}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    value={section.para}
                    onChange={(e) =>
                      handleSectionChange(index, "para", e.target.value)
                    }
                    required
                    inputRef={(el) => (paraRefs.current[index] = el)} // Store ref to detect selection
                  />
                </Grid>

                {/* Insert Link Button */}
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => insertLink(index)}
                  >
                    Insert Link
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    style={{ color: "red", borderColor: "red" }}
                    onClick={() => removeSection(index)}
                  >
                    Remove Section
                  </Button>
                </Grid>
              </React.Fragment>
            ))}

            <Grid item xs={12}>
              <Button variant="outlined" color="primary" onClick={addSection}>
                Add Section
              </Button>
            </Grid>

            {/* FAQ Section */}
            <Grid item xs={12}>
              <Typography variant="h6" style={{ marginTop: "20px" }}>
                FAQs
              </Typography>
            </Grid>
            {faqs.map((faq, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} key={index}>
                  <TextField
                    label={`FAQ ${index + 1} Question`}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={faq.question}
                    onChange={(e) =>
                      handleFaqChange(index, "question", e.target.value)
                    }
                    InputProps={{
                      sx: { padding: "15px" }, // Adds padding inside the input field
                    }}
                    // required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={`FAQ ${index + 1} Answer`}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    value={faq.answer}
                    onChange={(e) =>
                      handleFaqChange(index, "answer", e.target.value)
                    }
                    // required
                    inputProps={{
                      style: { whiteSpace: "pre-line" }, // Allow line breaks to be displayed
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    style={{ color: "red", borderColor: "red" }}
                    onClick={() => removeFaq(index)}
                  >
                    Remove FAQ
                  </Button>
                </Grid>
              </React.Fragment>
            ))}
            <Grid item xs={12}>
              <Button variant="outlined" color="primary" onClick={addFaq}>
                Add Faq
              </Button>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Tags (Comma separated)"
                variant="outlined"
                fullWidth
                margin="normal"
                value={tags.join(",")}
                onChange={(e) => setTags(e.target.value.split(","))}
                InputProps={{
                  sx: { padding: "15px" }, // Adds padding inside the input field
                }}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={!imageUploaded} // Disable the button if imageUploaded is false
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={handleViewBlogsClick}
              >
                View Blogs
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AddBlogs;
