"use client";

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "@/compat/react-router-dom";

// MUI Core components
import {
  Box,
  Typography,
  Stack,
  Button,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";

// The OTP library
import OtpInput from "react-otp-input";

// Your API import remains the same
import { verifyOtp } from "../../api/auth";

const OtpVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location; // { email, purpose? }

  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Redirect if the location state (with email) is not present
  useEffect(() => {
    if (!state?.email) {
      navigate("/admin", { replace: true });
    }
  }, [state, navigate]);

  // Main verification logic
  const runVerification = async (value) => {
    if (isVerifying) return;
    setIsVerifying(true);

    try {
      const response = await verifyOtp({ email: state.email, otp: value });

      if (response.status === "success") {
        localStorage.setItem("jwtToken", response.token);

        // ADDED: Save user role to localStorage if it exists in the response
        if (response?.data?.user?.role) {
          localStorage.setItem("userRole", response.data.user.role);
        }

        setNotification({
          open: true,
          message: "OTP verified successfully!",
          severity: "success",
        });

        const destination =
          state.purpose === "forgotPassword"
            ? "/admin/reset"
            : "/admin/dashboard";
        const navState =
          state.purpose === "forgotPassword"
            ? { email: state.email, otp: value }
            : { email: response.data.email };

        // Delay navigation slightly to allow user to see success message
        setTimeout(() => {
          navigate(destination, { replace: true, state: navState });
        }, 1000);
      } else {
        setNotification({
          open: true,
          message: response.error || "Failed to verify OTP. Please try again.",
          severity: "error",
        });
      }
    } catch (error) {
      setNotification({
        open: true,
        message:
          error?.response?.data?.error || "An unexpected error occurred.",
        severity: "error",
      });
      console.error(error);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleOtpChange = (newOtp) => {
    setOtp(newOtp);
    // Automatically trigger verification when 6 digits are entered
    if (newOtp.length === 6) {
      runVerification(newOtp);
    }
  };

  const handleVerifyClick = () => {
    if (otp.length === 6) {
      runVerification(otp);
    } else {
      setNotification({
        open: true,
        message: "Please enter all 6 digits of the OTP.",
        severity: "warning",
      });
    }
  };

  const handleCloseNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotification({ ...notification, open: false });
  };

  if (!state?.email) return null;

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
    >
      <Snackbar
        open={notification.open}
        autoHideDuration={4000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 4,
          maxWidth: "450px",
          width: "100%",
          mx: 2,
        }}
      >
        <Stack spacing={3} alignItems="center">
          <Typography variant="h5" component="h1" fontWeight="bold">
            Enter OTP
          </Typography>

          <Typography variant="body2" color="text.secondary" textAlign="center">
            We've sent a 6-digit verification code to <br />{" "}
            <strong>{state.email}</strong>
          </Typography>

          <OtpInput
            value={otp}
            onChange={handleOtpChange}
            numInputs={6}
            containerStyle={{
              display: "flex",
              justifyContent: "space-between",
              gap: "8px",
            }}
            renderInput={(props) => (
              <input
                {...props}
                style={{
                  width: "45px",
                  height: "50px",
                  textAlign: "center",
                  fontSize: "1.2rem",
                  border: "1px solid #c4c4c4",
                  borderRadius: "8px",
                  outline: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#1976d2";
                  e.target.style.boxShadow =
                    "0 0 0 2px rgba(25, 118, 210, 0.25)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#c4c4c4";
                  e.target.style.boxShadow = "none";
                }}
              />
            )}
          />

          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleVerifyClick}
            disabled={isVerifying}
          >
            {isVerifying ? "Verifying..." : "Verify"}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default OtpVerification;
