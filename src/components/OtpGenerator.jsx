import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const OtpGenerator = () => {
  const [otp, setOtp] = useState("");
  const [verificationOtp, setVerificationOtp] = useState("");
  const [message, setMessage] = useState("");
  const [otpVerified, setOtpVerified] = useState(false); // State to track OTP verification
  const navigate = useNavigate();

  const generateOtp = async () => {
    try {
      const response = await fetch(
        "https://backend.adiance.com:443/generate-otp",
        {
          method: "POST",
        }
      );
      const data = await response.json();
      setOtp(data.otp);
      setMessage(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://backend.adiance.com:443/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            otp: verificationOtp,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setOtpVerified(true); // Set OTP verification status to true
        navigate("/view-blogs", { state: { otpVerified: true } });
      } else {
        const errorData = await response.json();
        setMessage(errorData.message); // Display error message from the backend
        setVerificationOtp(""); // Clear the input field
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Helmet>
        <title>OTP Generator | Secure One-Time Passwords Instantly</title>
        <meta
          name="description"
          content="Generate secure one-time passwords (OTP) instantly for authentication and verification. Enhance security with reliable and fast OTP generation."
        />
      </Helmet>
      <Container maxWidth="xs">
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h5" align="center" gutterBottom>
            OTP Generator
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={generateOtp}
              >
                Generate OTP
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                {message}
              </Typography>
            </Grid>
            {message && message.includes("OTP generated") && (
              <>
                <Grid item xs={12}>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      label="Enter OTP"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={verificationOtp}
                      onChange={(e) => setVerificationOtp(e.target.value)}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Verify OTP
                    </Button>
                  </form>
                </Grid>
              </>
            )}
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default OtpGenerator;
