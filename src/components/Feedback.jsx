"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NavHeader from "./NavHeader";
import { Helmet } from "react-helmet";
import { useLocation } from "@/compat/react-router-dom";

const Feedback = () => {
  const [company, setCompany] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  // const [skype, setSkype] = useState("NA");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  const handleClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://backend.adiance.com:443/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({
        name: userName, // eslint-disable-line no-restricted-globals
        company,
        email,
        mobile,
        country,
        message,
        // skype,
        subject,
      }),
    });

    if (res.ok) {
      setSnackbarOpen(true);
      setSuccess(true);
      setCompany("");
      setEmail("");
      setMobile("");
      setCountry("");
      setMessage("");
      // setSkype("");
      setSubject("");
      setUserName("");
    } else {
      setSnackbarOpen(true);
      setSuccess(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Share Your Feedback - Adiance Technologies</title>
        <meta
          name="description"
          content="We value your feedback! Share your thoughts and experiences with Adiance Technologies to help us improve our products and services"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />

      <div className="nav-header">
        <img src="/images/scaled.webp" alt="Header" className="header-image" />
        <div className="text-overlay">Feedback</div>

        <style jsx>{`
          .nav-header {
            position: relative;
            width: 100%;
            max-width: 100%;
          }

          .header-image {
            width: 100%;
            height: auto; /* Set height to auto to maintain aspect ratio */
            max-height: 400px; /* Limit maximum height */
          }

          .text-overlay {
            position: absolute;
            top: 55%;
            left: 10%; /* Adjust text position from the left */
            transform: translateY(-50%);
            color: white; /* Text color */
            font-size: 36px; /* Text font size */
            font-weight: bold; /* Text font weight */
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Text shadow */
            width: 30%;
          }

          @media screen and (max-width: 768px) {
            .text-overlay {
              font-size: 14px; /* Adjust font size for smaller screens */
              // width: 100%;
            }
          }
        `}</style>
      </div>

      <div style={{ margin: "5% 10%" }}>
        <Typography variant="h4" gutterBottom align="center">
          Share us your Feedback
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <TextField
                label="Name"
                variant="outlined"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Company"
                variant="outlined"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Mobile"
                variant="outlined"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                fullWidth
                // required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Country"
                variant="outlined"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <TextField
                label="Skype"
                variant="outlined"
                value={country}
                onChange={(e) => setSkype(e.target.value)}
                fullWidth
                required
              />
            </Grid> */}

            {/* <Grid item xs={12} md={6}>
              <TextField
                label="Subject"
                variant="outlined"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                multiline
                fullWidth
                required
              />
            </Grid> */}

            <Grid item xs={12} md={6}>
              <TextField
                label="Write Your Feedback Here"
                variant="outlined"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} align="center">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity={success ? "success" : "error"}
          >
            {success
              ? "Email sent successfully"
              : "Failed to send email. Please try again later."}
          </MuiAlert>
        </Snackbar>
      </div>
      <Footer />
    </div>
  );
};

export default Feedback;
