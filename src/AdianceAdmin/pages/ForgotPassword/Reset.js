import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Typography,
  Paper,
  Alert,
  Snackbar,
} from "@mui/material";
import { LoadingButton } from "@mui/lab"; // For loading state
import { forgotPassword, resetPassword } from "../../api/auth";

const Reset = () => {
  const [isSending, setIsSending] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {};

  // State for MUI Snackbar (replacement for useToast)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // 'success' | 'error' | 'info' | 'warning'
  });

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  const onEmailSubmit = async (data) => {
    setIsSending(true);
    try {
      const response = await forgotPassword(data); // API for reset OTP
      if (response.status === "success") {
        setSnackbar({
          open: true,
          message: `OTP sent to ${response.data.email}. Use the OTP to reset your password.`,
          severity: "success",
        });
        navigate("/admin/verify", {
          replace: true,
          state: { email: response.data.email, purpose: "forgotPassword" },
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: error?.response?.data?.error || "Failed to send OTP",
        severity: "error",
      });
    } finally {
      setIsSending(false);
    }
  };

  const onResetPasswordSubmit = async (data) => {
    setIsSending(true);
    try {
      const payload = {
        ...data,
        otp: state.otp,
        email: state.email, // assuming email is passed along in state too
      };

      const response = await resetPassword(payload); // API for reset password

      if (response.status === "success") {
        setSnackbar({
          open: true,
          message: "Password Reset Successful. Your password has been reset.",
          severity: "success",
        });
        navigate("/admin", { replace: true });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: error?.response?.data?.error || "Password Reset Failed",
        severity: "error",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f4f7fe", // Added a light background for contrast
      }}
    >
      <form
        onSubmit={handleSubmit(
          state?.otp ? onResetPasswordSubmit : onEmailSubmit
        )}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: "24px",
            mx: "auto",
            mt: 5, // Chakra 10 (2.5rem/40px) -> MUI 5 (5 * 8px = 40px)
            px: { xs: 2, md: 4 }, // Chakra 4/8 (1rem/2rem) -> MUI 2/4 (16px/32px)
            py: { xs: 4, md: 6 }, // Chakra 8/12 (2rem/3rem) -> MUI 4/6 (32px/48px)
            maxWidth: "1565px",
            justifyContent: "space-evenly",
            gap: 4, // Chakra 8 (2rem/32px) -> MUI 4 (4 * 8px = 32px)
          }}
        >
          {/* Left Side (Logo) */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontSize: { xs: "32px", md: "48px" },
                fontWeight: 600,
                color: "#BF0603",
              }}
            >
              ADIANCE ADMIN
            </Typography>
          </Box>

          {/* Right Side (Form) */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flex: 1,
              gap: 3, // Chakra 6 (1.5rem/24px) -> MUI 3 (3 * 8px = 24px)
            }}
          >
            <Box>
              <Typography
                variant="h4"
                component="h2"
                sx={{ fontWeight: 600, fontSize: { xs: "24px", md: "36px" } }}
              >
                {state?.otp ? "Set New Password" : "Reset Password"}
              </Typography>
              <Typography
                variant="body1"
                sx={{ mt: 1 }} // Chakra mt={2} (0.5rem/8px) -> MUI mt={1} (8px)
              >
                {state?.otp
                  ? "Enter your new password."
                  : "Enter your email address and we'll send you an OTP to reset your password."}
              </Typography>
            </Box>

            {!state?.otp ? (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <TextField
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  fullWidth
                  {...register("email", { required: true })}
                />
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <TextField
                  type="password"
                  label="New Password"
                  placeholder="Enter new password"
                  fullWidth
                  {...register("newPassword", { required: true })}
                />
              </Box>
            )}

            <LoadingButton
              type="submit"
              loading={isSending}
              loadingIndicator={
                state?.otp ? "Resetting Password..." : "Sending OTP..."
              }
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#BF0603",
                color: "white",
                fontSize: "16px",
                fontWeight: 600,
                borderRadius: "8px",
                py: 1.5, // Make button a bit taller
                "&:hover": {
                  background: "#35668E",
                },
              }}
            >
              {state?.otp ? "Reset Password" : "Send OTP"}
            </LoadingButton>
          </Box>
        </Paper>
      </form>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Reset;
