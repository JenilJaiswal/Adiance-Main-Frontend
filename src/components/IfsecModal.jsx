import React, { useState, useEffect } from "react";
import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
  CircularProgress,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  MailOutline,
  Close,
  HighlightOff
} from "@mui/icons-material";
import axios from "axios";

const IfsecModal = () => {
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // const isFormSubmitted = localStorage.getItem("formSubmitted");
    const isFormSubmitted = sessionStorage.getItem("formSubmitted");

    if (!isFormSubmitted) {
      setTimeout(() => {
        setOpen(true);
      }, 1000);
    }
  }, []);

  const handleFormClose = () => {
    setOpen(false);
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
  };

  const validateForm = () => {
    let valid = true;
    let tempErrors = { name: "", email: "", mobile: "" };

    if (!name) {
      tempErrors.name = "Name is required";
      valid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      tempErrors.name = "Name must contain only letters and spaces";
      valid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      tempErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(email)) {
      tempErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (!mobile) {
      tempErrors.mobile = "Mobile number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      tempErrors.mobile = "Please enter a valid 10-digit mobile number";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      try {
        const requestData = {
          name,
          email,
          mobile,
        };

        console.log("Request data:", requestData);

        const response = await axios.post(
          "https://backend.adiance.com/submitEnquiryForm",
          requestData
        );

        console.log(response);
        const data = response.data;

        console.log(data);

        if (response.status === 201) {
          // localStorage.setItem("formSubmitted", "true");
          sessionStorage.setItem("formSubmitted", "true");
          setOpen(false);
          setSuccessOpen(true);
        } else {
          console.error("Failed to submit the form");
        }
      } catch (error) {
        // Log the error message
        console.error("Error:", error.response?.data || error.message);

        if (
          error.response &&
          error.response.data.message === "Email already exists"
        ) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: "This email is already registered.",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Something went wrong, please try again.",
          }));
        }
      } finally {
        setIsLoading(false); // Hide the loader once the request is completed (success or failure)
      }
    }
  };

  return (
    <>
      {/* form modal */}
      <Modal
        open={open}
        onClose={handleFormClose}
        aria-labelledby="form-modal-title"
        aria-describedby="form-modal-description"
      >
        <Box
          sx={{
            maxWidth: "1200px",
            height: "auto", // Maintain aspect ratio
            aspectRatio: "16 / 9",
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {
              xs: "auto%",
              lg: "80%",
              xl: "80%",
            },
            // height: "90%",
            backgroundImage: {
              xs: "none",
              lg: "url('/images/pop-up-image.png')",
            },
            backgroundSize: "cover",
            // backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            border: "none",
            borderRadius: 5,
            outline: "none",
            padding: { xs: "15px", lg: "none" },
          }}

   
        >

          <IconButton
            onClick={handleFormClose}
            sx={{
              display: { xs: "none", lg: "block" },
              position: { xs: "static", lg: "absolute" },
              top: { xs: "auto", lg: 10 },
              right: { xs: "auto", lg: 10 },
              color: "#ffffff",
             
              border: "none"
            }}
          >
            <HighlightOff fontSize="large" />
          </IconButton>

          <Box
            sx={{
           
              maxWidth: {xs: 350, lg: "auto"},  //new change 
              width: { xs: "auto", lg: "auto" },
              height: { xs: "auto", lg: "auto" },
              maxHeight: { lg: "75%" },
              bgcolor: "rgba(255, 255, 255, 1)",
              borderRadius: 5,
              boxShadow: 24,
              display: "flex",
              flexDirection: "column",
              py: 1,
              px: 2,
              position: { xs: "relative", lg: "absolute" },
              transform: { xs: "translate(-50%, -50%)", lg: "unset" },
              top: { xs: "50%", lg: "unset" },
              left: { xs: "50%", lg: "unset" },
              right: { lg: "2%" },
              bottom: { lg: "2%" },
            }}
          >
            <Box>
              <IconButton
                onClick={handleFormClose}
                sx={{
                  display: { xs: "block", lg: "none" },
                  position: "absolute",
                  top: 10,
                  right: 10,
                  color: "#000",
               
                  padding: "0",
                  fontSize: "1px",
               
                }}
              >
                <HighlightOff fontSize="small" />
              </IconButton>

              <Typography
                id="form-modal-title"
                variant="h6"
                align="center"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                Get in Touch
              </Typography>
              <Divider
                sx={{
                  width: 50,
                  height: 3,
                  bgcolor: "#BF0603",
                  mx: "auto",
                  mb: 2,
                }}
              />
              <form onSubmit={handleSubmit}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: 2, padding: 0 }}
                >
                  Name
                </Typography>
                <TextField
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  required
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      fontSize: "16px",
                      height: "40px",
                      "& input": {
                        padding: "8px 14px",
                      },
                    },
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: 2, padding: 0 }}
                >
                  Email address*
                </Typography>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  required
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      fontSize: "16px",
                      height: "40px",
                      "& input": {
                        padding: "8px 14px",
                      },
                    },
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: 2, padding: 0 }}
                >
                  Mobile number
                </Typography>
                <TextField
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter your number"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  required
                  error={Boolean(errors.mobile)}
                  helperText={errors.mobile}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      fontSize: "16px",
                      height: "40px",
                      "& input": {
                        padding: "8px 14px",
                      },
                    },
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isLoading}
                  sx={{
                    mt: 2,
                    bgcolor: isLoading ? "grey.500" : "#BF0603", // Dynamic color
                    ":hover": { bgcolor: isLoading ? "grey.500" : "#a50403" }, // Disable hover when loading
                    borderRadius: "12px",
                    marginBottom: 2,
                    fontWeight: "bold",
                  }}
                >
                  {isLoading ? (
                    <>
                      Sending...
                      <CircularProgress
                        size={20}
                        sx={{ color: "white", marginLeft: 1 }} // Adjust spinner size and spacing
                      />
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      </Modal>

      {/* {isLoading && <h1>Loading....</h1>} */}

      {/* Success Modal */}
      <Modal
        open={successOpen}
        onClose={handleSuccessClose}
        aria-labelledby="success-modal-title"
        aria-describedby="success-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 300, sm: 400 },
            bgcolor: "rgba(255, 255, 255, 1)",
            borderRadius: 5,
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            p: 4,
          }}
        >
          <Typography
            id="success-modal-title"
            variant="h6"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            Thanks for submitting!
          </Typography>
          <Divider
            sx={{
              width: 50,
              height: 3,
              bgcolor: "#BF0603",
              mx: "auto",
              mb: 3,
            }}
          />
          <Box>
            <IconButton>
              <MailOutline sx={{ fontSize: 100, color: "#A7A7A7" }} />
            </IconButton>
          </Box>
          <Typography
            id="success-modal-description"
            sx={{ mb: 3, fontSize: 14, color: "#333" }}
          >
            We’ll connect with you soon.
          </Typography>
          <Typography
            sx={{ fontSize: 14, fontWeight: "bold", mb: 1, color: "#555" }}
          >
            Let’s Connect
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mb: 2,
              fontSize: 16,
            }}
          >
            {/* Social Media Icons with Links */}
            <IconButton
              component="a"
              href="https://www.instagram.com/adiancetech"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontSize: 32 }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              component="a"
              href="https://twitter.com/adiancetech"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontSize: 32 }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.facebook.com/adiancetechnologies"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontSize: 32 }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/company/adiancetechnologies"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontSize: 32 }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
          <Button
            onClick={handleSuccessClose}
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#BF0603",
              ":hover": { bgcolor: "#a50403" },
              borderRadius: "12px",
              fontWeight: "bold",
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default IfsecModal;
