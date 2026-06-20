"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
  CircularProgress,
  useMediaQuery,
  useTheme,
  InputAdornment,
} from "@mui/material";
import {
  HighlightOff,
  MailOutline,
  Instagram,
  Twitter,
  Facebook,
  LinkedIn,
  Person,
  Phone,
  Email,
  Event,
  LocationOn,
} from "@mui/icons-material";

const PopUpForm = () => {
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", mobile: "" });
  const [isLoading, setIsLoading] = useState(false);

  const theme = useTheme();
  const isMobileScreen = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const isFormSubmitted = sessionStorage.getItem("formSubmitted");
    if (!isFormSubmitted) {
      setTimeout(() => {
        setOpen(true);
      }, 1000);
    }
  }, []);

  const handleFormClose = () => setOpen(false);
  const handleSuccessClose = () => setSuccessOpen(false);

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
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const requestData = { name, email, mobile };
      console.log("Request data:", requestData);

      const response = await axios.post(
        "https://backend.adiance.com/submitEnquiryForm",
        requestData
      );

      if (response.status === 201) {
        sessionStorage.setItem("formSubmitted", "true");
        setOpen(false);
        setSuccessOpen(true);
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setErrors((prevErrors) => ({
        ...prevErrors,
        email:
          error.response?.data.message === "Email already exists"
            ? "This email is already registered."
            : "Something went wrong, please try again.",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleIscRegister = () => {
    window.open(
      "https://iscwest25.nvytes.co/iscwest25/landing/ISCW25CIP709.html",
      "_blank"
    );
  };

  return (
    <>
      {/* Modal for large and small screens */}
      {!isMobileScreen ? (
        <Modal open={open} onClose={handleFormClose}>
          <Box
            sx={{
              maxWidth: "1200px",
              aspectRatio: "16 / 9",
              position: "relative",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { lg: "80%", sm: "90%" },
              backgroundImage: "url('/images/iscWestPopup.webp')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: 5,
              outline: "none",
              border: "none",
              p: 3,
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
            onClick={() =>
              window.open(
                "https://iscwest25.nvytes.co/iscwest25/landing/ISCW25CIP709.html",
                "_blank"
              )
            }
          >
            <IconButton
              onClick={(e) => {
                e.stopPropagation(); // Prevents the click event from bubbling up to the Box
                handleFormClose();
              }}
              sx={{
                position: "absolute",
                top: 7,
                right: 7,
                color: "#ffffff",

                border: "none",
              }}
            >
              <HighlightOff
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.5rem",
                    md: "2rem",
                    lg: "2.2rem",
                    xl: "2.3rem",
                    "2xl": "2.5rem",
                  },
                }}
              />
            </IconButton>

            {/* get in touch form */}
            {/* <form onSubmit={handleSubmit}>
              <Box
                bgcolor="white"
                position="absolute"
                right="0"
                bottom="0"
                maxHeight="70%"
                //   maxWidth="50%"
                maxWidth="min(35%, 500px)"
                // minHeight="40%"
                minWidth="35%"
                sx={{ py: 1, px: 2, borderRadius: 5 }}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Typography
                  variant="h6"
                  fontSize="1rem"
                  align="center"
                  sx={{ fontWeight: "bold" }}
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
                <Box
                  sx={{
                    flexDirection: "column",
                 
             
                  }}
                >
                <TextField
                  fullWidth
                  //   label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                  margin="dense"
                  placeholder="Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ color: "#a1a1aa" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "1rem",
                      fontSize: "1rem",
                      height: { lg: "2.2rem", xl: "2.5rem", "2xl": "3rem" },
                      "& input": {
                        padding: "8px 14px",
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  //   label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  margin="dense"
                  placeholder="Email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email sx={{ color: "#a1a1aa" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "1rem",
                      fontSize: "1rem",
                      height: { lg: "2.2rem", xl: "2.5rem", "2xl": "3rem" },
                      "& input": {
                        padding: "8px 14px",
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  //   label="Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  error={Boolean(errors.mobile)}
                  helperText={errors.mobile}
                  margin="dense"
                  placeholder="Phone"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone sx={{ color: "#a1a1aa" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "1rem",
                      fontSize: "1rem",
                      height: { lg: "2.2rem", xl: "2.5rem", "2xl": "3rem" },
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
                  sx={{
                    borderRadius: "12px",
                    bgcolor: "#BF0603",
                    ":hover": { bgcolor: isLoading ? "grey.500" : "#a50403" },
                  }}
                  size="small"
                >
                  {isLoading ? (
                    <CircularProgress size={20} sx={{ color: "white" }} />
                  ) : (
                    "Submit"
                  )}
                </Button>
                </Box>
              </Box>
            </form> */}
          </Box>
        </Modal>
      ) : (
        <Modal open={open} onClose={handleFormClose}>
          <Box
            sx={{
              width: "90%",
              maxWidth: 400,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              borderRadius: 5,
              boxShadow: 24,
              p: 3,
              outline: "none",
              border: "none",
              textAlign: "center",
            }}
          >
            {/* Logos Row */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                mb: 2,
              }}
            >
              <img src="/Adiance-Logo.webp" alt="adiance" width="30%" loading="lazy" />
              {/* <img
                src="/images/iscWestLogo.webp"
                alt="event"
                width="30%"
                bgcolor="gray"
              /> */}
              <text
                style={{
                  color: "#BF0603",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                {" "}
                IscWest
              </text>
            </Box>

            {/* Title */}
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              VMukti Solutions Exhibiting at <br /> ISC WEST!
            </Typography>
            <Divider
              sx={{
                width: 50,
                height: 3,
                bgcolor: "#BF0603",
                mx: "auto",
                mt: 1,
                mb: 1,
              }}
            />

            {/* Event Details */}
            <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>
              <span
                style={{
                  color: "#BF0603",
                  display: "block",
                  fontSize: "1.3rem",
                }}
              >
                Join us
              </span>
              <span
                style={{ display: "block", marginTop: 4, fontSize: "1.2rem" }}
              >
                March 31 - April 4, 2025
              </span>
              <span
                style={{
                  fontStyle: "italic",
                  display: "block",
                  marginTop: 2,
                  fontSize: "1.2rem",
                }}
              >
                Exhibit Hall: April 2 - 4
              </span>
            </Typography>

            {/* Booth Number */}
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#BF0603", mb: 2 }}
            >
              Booth No: 18142
            </Typography>

            {/* Register Button */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                borderRadius: "12px",
                bgcolor: "#BF0603",
                py: 1.5,
                fontSize: "1rem",
                ":hover": { bgcolor: "#a50403" },
              }}
              onClick={handleIscRegister}
            >
              Register Now
            </Button>

            {/* <form onSubmit={handleSubmit}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                <TextField
                  fullWidth
                  //   label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                  margin="dense"
                  placeholder="Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ color: "#a1a1aa" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "1rem",
                      fontSize: "1rem",
                      height: { xs: "2.5rem" },
                      "& input": {
                        padding: "8px 14px",
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  //   label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  margin="dense"
                  placeholder="Email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email sx={{ color: "#a1a1aa" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "1rem",
                      fontSize: "1rem",
                      height: { xs: "2.5rem" },
                      "& input": {
                        padding: "8px 14px",
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  //   label="Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  error={Boolean(errors.mobile)}
                  helperText={errors.mobile}
                  margin="dense"
                  placeholder="Phone"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone sx={{ color: "#a1a1aa" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "1rem",
                      fontSize: "1rem",
                      height: { xs: "2.5rem" },
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
                  sx={{
                    borderRadius: "12px",
                    bgcolor: "#BF0603",
                    ":hover": { bgcolor: isLoading ? "grey.500" : "#a50403" },
                  }}
                  size="medium"
                >
                  {isLoading ? (
                    <CircularProgress size={20} sx={{ color: "white" }} />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Box>
            </form> */}
          </Box>
        </Modal>
      )}

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
          {/* <Typography
                  id="success-modal-title"
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  Thanks for submitting!
                </Typography> */}
          <Typography
            id="success-modal-title"
            variant="h6"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            Thank you, {name || "Guest"}! {/* eslint-disable-line no-restricted-globals */}
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

          {/* Confirmation Details */}
          <Typography
            id="success-modal-description"
            sx={{ mb: 2, fontSize: 14, color: "#333" }}
          >
            We have received your details and will connect with you soon.
          </Typography>

          {/* <Box sx={{ mb: 3 }}>
            <Typography fontSize={14} fontWeight="bold">
              Submitted Details:
            </Typography>
            <Typography fontSize={14} color="gray.600">
              📧 Email: {email || "Not provided"}
            </Typography>
            <Typography fontSize={14} color="gray.600">
              📞 Phone: {mobile || "Not provided"}
            </Typography>
          </Box> */}
          {/* <Typography
            id="success-modal-description"
            sx={{ mb: 3, fontSize: 14, color: "#333" }}
          >
            We’ll connect with you soon.
          </Typography> */}
          <Typography
            sx={{ fontSize: 14, fontWeight: "bold", mb: 1, color: "#555" }}
          >
            Let’s Connect on Social Media
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

export default PopUpForm;
