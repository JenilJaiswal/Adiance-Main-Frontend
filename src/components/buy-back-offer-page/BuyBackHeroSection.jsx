import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Paper,
  InputAdornment,
  Container,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationCity,
  Camera,
  Person,
  CheckCircleOutline,
  ErrorOutline,
} from "@mui/icons-material";
import axios from "axios";
import { BiSolidCctv } from "react-icons/bi";

const BuyBackHeroSection = () => {
  const navigate = useNavigate(); // Initialize navigation

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    numberOfCameras: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPopupMessage("");

    try {
      const response = await axios.post(
        "https://backend.adiance.com:443/api/buy-back/buyback-form",
        formData
      );

      if (response.status === 201) {
        setIsSuccess(true);
        setPopupMessage(
          "Your request has been submitted successfully! Our team will contact you soon."
        );
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          city: "",
          numberOfCameras: "",
          message: "",
        });
        // Navigate to Thank You Page
        navigate("/thank-you");
      } else {
        setPopupMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setPopupMessage("Failed to submit. Please check your details and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          maxWidth: "100%",
          // background: "linear-gradient(to right, #FFF5F5, #FFD1D0)",
          backgroundColor: "#FFFFFF",
          color: "white",
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 6 },
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
        >
          {/* Left Side - Heading & Description */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h1"
              fontWeight="bold"
              gutterBottom
              color="#000"
              sx={{
                fontSize: { xs: "2.7rem", md: "3rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Exclusive AI CCTV Camera Buyback Offer – Limited Time Deal!
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ color: "#7D7D7D", textAlign: { xs: "center", md: "left" } }}
            >
              Have outdated or broken CCTV security cameras? Don’t let it go to waste! Upgrade with our Buyback Offer and get ArcisAI’s best CCTV camera, including advanced 4G, 5G, Wi-Fi, Bullet, and Wireless AI-powered CCTV camera for better, faster, and smarter security surveillance!
            </Typography>
          </Grid>

          {/* Right Side - Form */}
          <Grid item xs={12} md={6} display="flex" justifyContent="flex-end">
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 3,
                // backgroundColor: "white",
                backgroundColor: "#FFFFFF",
                color: "black",
                maxWidth: 450,
                // mx: "auto",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                fontWeight="bold"
                textAlign="center"
                mb={2}
                sx={{ color: "#BF0603" }}
              >
                Claim Your Exclusive Buyback Deal!
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <TextField
                  name="fullName"
                  variant="outlined"
                  placeholder="Full Name"
                  required
                  fullWidth
                  onChange={handleChange}
                  value={formData.fullName}
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
                  name="email"
                  variant="outlined"
                  type="email"
                  placeholder="Email"
                  fullWidth
                  onChange={handleChange}
                  value={formData.email}
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
                  name="phone"
                  variant="outlined"
                  placeholder="Phone Number"
                  required
                  onChange={handleChange}
                  value={formData.phone}
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
                <TextField
                  name="city"
                  placeholder="City"
                  variant="outlined"
                  required
                  fullWidth
                  onChange={handleChange}
                  value={formData.city}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationCity sx={{ color: "#a1a1aa" }} />
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
                  name="numberOfCameras"
                  placeholder="Number of Cameras"
                  variant="outlined"
                  type="number"
                  required
                  fullWidth
                  onChange={handleChange}
                  value={formData.numberOfCameras}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BiSolidCctv color="#a1a1aa" size="1.5rem" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "1rem",
                    },
                  }}
                />
                <TextField
                  name="message"
                  placeholder="Message"
                  variant="outlined"
                  multiline
                  // InputProps={{
                  //     startAdornment: (
                  //       <InputAdornment position="start">
                  //         <TbMessage2Filled color="#a1a1aa" size="1.5rem"/>

                  //       </InputAdornment>
                  //     ),
                  //   }}

                  rows={2}
                  fullWidth
                  onChange={handleChange}
                  value={formData.message}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "1rem",
                    },
                  }}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={loading}
                  // sx={{
                  //   mt: 2,
                  //   background: "linear-gradient(to right, #1e88e5, #0d47a1)",
                  //   "&:hover": { background: "linear-gradient(to right, #1565c0, #0d47a1)" },
                  //   borderRadius: 2,
                  //   py: 1.5,
                  // }}
                  sx={{
                    mt: 2,
                    backgroundColor: "#BF0603",
                    "&:hover": { backgroundColor: "#800f0f" },
                    borderRadius: 2,
                    py: 1.5,
                    fontWeight: "bold",
                  }}
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Submit Details"
                  )}
                </Button>

                {/* API Response Messages */}
                {/* Success/Error Popup */}
                {/* <Dialog
                  open={popupOpen}
                  onClose={() => setPopupOpen(false)}
                  maxWidth="xs"
                  fullWidth
                >
                  <DialogContent sx={{ textAlign: "center", py: 3 }}>
                    {isSuccess ? (
                      <>
                        <CheckCircleOutline
                          sx={{ fontSize: 50, color: "green" }}
                        />
                        <Typography variant="h6" fontWeight="bold">
                          Submission Successful!
                        </Typography>
                        <Typography variant="body1">{popupMessage}</Typography>
                      </>
                    ) : (
                      <>
                        <ErrorOutline sx={{ fontSize: 50, color: "red" }} />
                        <Typography variant="h6" fontWeight="bold">
                          Submission Failed!
                        </Typography>
                        <Typography variant="body1">{popupMessage}</Typography>
                      </>
                    )}
                  </DialogContent>
                  <DialogActions sx={{ justifyContent: "center" }}>
                    <Button
                      variant="contained"
                      onClick={() => setPopupOpen(false)}
                      sx={{
                        mt: 2,
                        backgroundColor: "#BF0603",
                        "&:hover": { backgroundColor: "#800f0f" },
                        borderRadius: 2,
                        py: 1.5,
                        fontWeight: "bold",
                      }}
                    >
                      OK
                    </Button>
                  </DialogActions>
                </Dialog> */}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BuyBackHeroSection;
