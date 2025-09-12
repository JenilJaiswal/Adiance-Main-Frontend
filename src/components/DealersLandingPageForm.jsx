import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Container,
  Paper,
  Grid,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";

const DealersLandingPageForm = () => {
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const interests = [
    "Distributor",
    "Dealer",
    "System Integrator",
    "OEM/EDM",
    "End User",
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    interest: "",
    email: "",
    city: "",
    state: "",
    companyName: "",
    gstNo: "",
    // address: "",
    message: "",
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false); // Track submission state
  const [popupOpen, setPopupOpen] = useState(false); // Controls the dialog visibility
  const [popupMessage, setPopupMessage] = useState(""); // Stores response message

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPopupMessage(""); // Reset previous message

    try {
      const response = await fetch(
        "https://backend.adiance.com/api/dealer-contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setPopupMessage(data.message);
        setFormData({
          fullName: "",
          phone: "",
          interest: "",
          email: "",
          city: "",
          companyName: "",
          gstNo: "",
          // address: "",
          message: "",
          termsAccepted: false,
        });
      } else {
        setPopupMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setPopupMessage("Failed to submit form. Please try again later.");
    } finally {
      setLoading(false);
      setPopupOpen(true); // Open the popup with the response message
    }
  };

  return (
    <Container maxWidth="lg">
      <Paper
        elevation={6}
        sx={{
          mt: 6,
          p: 4,
          borderRadius: 3,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          bgcolor: "#fff",
        }}
      >
        <Typography
          variant="h6"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{
            color: "darkslategray",
            mb: 3,
            fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem", lg: "2.0rem" },
          }}
        >
          Dealer Contact Form
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            margin="normal"
            required
            variant="outlined"
            sx={{
              backgroundColor: "#f9f9f9",
              borderRadius: 1,
              "& .MuiInputBase-root": { height: 48 },
            }}
          />

          {/* Phone No. & WhatsApp No. - Side by Side on md+ Screens */}
          <Grid container spacing={{ xs: 0, md: 2 }}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone No."
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                margin="normal"
                required
                variant="outlined"
                sx={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: 1,
                  "& .MuiInputBase-root": { height: 48 },
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              {/* Interest Dropdown */}
              <FormControl
                fullWidth
                margin="normal"
                required
                variant="outlined"
                sx={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: 1,
                  "& .MuiInputBase-root": { height: 48 },
                }}
              >
                <InputLabel id="interest-label">Interest</InputLabel>
                <Select
                  labelId="interest-label"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  label="Interest"
                >
                  {interests.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            variant="outlined"
            sx={{
              backgroundColor: "#f9f9f9",
              borderRadius: 1,
              "& .MuiInputBase-root": { height: 48 },
            }}
          />

          <Grid container spacing={{ xs: 0, md: 2 }}>
            <Grid item xs={12} md={6}>
              {/* State Dropdown */}
              <FormControl
                fullWidth
                margin="normal"
                required
                variant="outlined"
                sx={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: 1,
                  "& .MuiInputBase-root": { height: 48 },
                }}
              >
                <InputLabel id="state-label">State</InputLabel>
                <Select
                  labelId="state-label"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  label="State"
                >
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                margin="normal"
                required
                variant="outlined"
                sx={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: 1,
                  "& .MuiInputBase-root": { height: 48 },
                }}
              />
            </Grid>
          </Grid>

          {/* Company Name & GST No. - Side by Side on md+ Screens */}
          <Grid container spacing={{ xs: 0, md: 2 }}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Company Name (As per GST)"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                margin="normal"
                required
                variant="outlined"
                sx={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: 1,
                  "& .MuiInputBase-root": { height: 48 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="GST No."
                name="gstNo"
                value={formData.gstNo}
                onChange={handleChange}
                margin="normal"
                required
                variant="outlined"
                sx={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: 1,
                  "& .MuiInputBase-root": { height: 48 },
                }}
              />
            </Grid>
          </Grid>

          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={3}
            variant="outlined"
            sx={{ backgroundColor: "#f9f9f9", borderRadius: 1 }}
          />

          <FormControlLabel
            control={
              <Checkbox
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
                sx={{ color: "primary.main" }}
              />
            }
            label={
              <Typography variant="body2" component="span">
                I agree to the&nbsp;
                <Typography
                  component="a"
                  href="/terms-of-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    fontWeight: "bold",
                    "&:hover": {
                      textDecoration: "underline",
                      color: "primary.dark",
                    },
                  }}
                >
                  Terms & Conditions
                </Typography>
              </Typography>
            }
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{
              mt: 2,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: "bold",
              backgroundColor: "#1976D2",
              "&:hover": { backgroundColor: "#1565C0" },
            }}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Paper>

      {/* Popup Dialog */}

      <Dialog
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent sx={{ textAlign: "center", py: 3 }}>
          {popupMessage.includes("successfully") ? (
            <>
              {/* Success UI */}
              <CheckCircleOutline sx={{ fontSize: 50, color: "green" }} />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                Stay Tuned!
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, color: "gray" }}>
                We will contact you soon.
              </Typography>
            </>
          ) : (
            <>
              {/* Error UI */}
              <ErrorOutline sx={{ fontSize: 50, color: "red" }} />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                Submission Failed!
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, color: "gray" }}>
                {popupMessage}
              </Typography>
            </>
          )}
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button
            variant="contained"
            onClick={() => setPopupOpen(false)}
            sx={{ px: 4, py: 1, fontWeight: "bold", borderRadius: 2 }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DealersLandingPageForm;
