import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";

// MUI Core components
import {
  Box,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  IconButton,
  InputAdornment,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

// MUI Icons
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Your API import remains the same
import { login } from "../api/auth";

const LoginDash = () => {
  // State for the local Snackbar notification
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success", // 'success' | 'error' | 'warning' | 'info'
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSending(true);
    try {
      const response = await login(data);
      if (response.status === "success") {
        // Check if we received a token (Master Password flow)
        if (response.token) {
          localStorage.setItem("jwtToken", response.token);
          if (response?.data?.user?.role) {
            localStorage.setItem("userRole", response.data.user.role);
          }
          setNotification({
            open: true,
            message: "Login successful!",
            severity: "success",
          });
          // Navigate directly to dashboard
          navigate("/admin/dashboard", { replace: true });
        } else {
          // Normal flow: OTP sent
          setNotification({
            open: true,
            message: `OTP has been sent to ${response.data.email}`,
            severity: "success",
          });
          navigate("/admin/verify", {
            replace: true,
            state: { email: response.data.email },
          });
        }
      }
    } catch (error) {
      setNotification({
        open: true,
        message:
          error?.response?.data?.error ||
          "Failed to send OTP. Unexpected error.",
        severity: "error",
      });
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  const handleCloseNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotification({ ...notification, open: false });
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      {/* Self-contained Snackbar for notifications */}
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
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

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "white",
          borderRadius: "24px",
          boxShadow: 3,
          maxWidth: "1200px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Left Side: Brand Name */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 4, md: 6 },
            minHeight: { xs: 150, md: "auto" },
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 600,
              color: "#BF0603",
              fontSize: { xs: "32px", md: "48px" },
            }}
          >
            ADIANCE ADMIN
          </Typography>
        </Box>

        {/* Right Side: Form */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack spacing={4}>
            {/* Header */}
            <Box>
              <Typography variant="h4" component="h2" fontWeight="600">
                Log in
              </Typography>
              <Typography color="text.secondary" mt={1}>
                Welcome back! Please enter your details.
              </Typography>
            </Box>

            {/* Form Fields */}
            <Stack spacing={2.5}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                {...register("email", { required: true })}
              />

              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                {...register("password", { required: true })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            {/* Remember Me & Forgot Password */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <FormControlLabel
                control={<Checkbox {...register("remember")} />}
                label={
                  <Typography variant="body2">Remember for 30 days</Typography>
                }
              />
              <Link
                component={RouterLink}
                to="/admin/reset"
                variant="body2"
                fontWeight="600"
                sx={{ color: "#BF0603" }}
              >
                Forgot password
              </Link>
            </Box>

            {/* Submit Button */}
            <LoadingButton
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              loading={isSending}
              loadingIndicator="Sending OTP..."
              sx={{
                bgcolor: "#BF0603",
                color: "white",
                fontWeight: 600,
                borderRadius: "8px",
                textTransform: "none",
                fontSize: "16px",
                py: 1.5,
                "&:hover": {
                  bgcolor: "#35668E",
                },
              }}
            >
              Sign in
            </LoadingButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginDash;
