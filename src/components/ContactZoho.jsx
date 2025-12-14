import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// MUI Components
import {
  Box,
  Container,
  Paper,
  Button,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Typography,
  Stack,
  Checkbox,
  FormControlLabel,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";

const ContactZoho = () => {
  const navigate = useNavigate();

  // State for Snackbar (MUI's equivalent of Chakra Toast)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  // The core form state remains the same
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    message: "",
    businessType: "",
    enquiryFor: "",
    customerType: "",
    camerasFor: "",
    customerQuantity: "",
    updates: false,
    leadType: "Adiance Website",
    businessUnit: "Adiance Technologies Pvt Ltd",
  });

  const [isLoading, setIsLoading] = useState(false);

  // API URLs remain the same
  const EMS_API_URL =
    "https://c-r-m-icr7b.ondigitalocean.app/backend/api/crmSales/createLead";

  // const ADIANCE_EMAIL_URL = "http://localhost:5000/api/send-email-adiance";
  const ADIANCE_EMAIL_URL = "https://backend.adiance.com:443/api/send-email-adiance"

  // handleChange logic remains identical
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  // handleSubmit logic is the same, just with Snackbar instead of Toast
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.company ||
      !formData.location ||
      !formData.businessType ||
      !formData.enquiryFor ||
      !formData.customerType ||
      !formData.camerasFor
    ) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields marked with *",
        severity: "error",
      });
      return;
    }

    setIsLoading(true);

    try {
      const emailPromise = fetch(ADIANCE_EMAIL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        // body: JSON.stringify({
        //     ...formData,
        //     formType: "Contact",
        //   }),
      });

      const crmPayload = {
        name: formData.name,
        mobile: formData.phone,
        email: formData.email,
        company: formData.company,
        location: formData.location,
        clientCategory: formData.customerType,
        industryType: formData.camerasFor,
        leadType: "Adiance website",
        customerType: formData.customerType,
        requirement: [],
        customerQuantity: formData.customerQuantity,
      };
      const crmPromise = axios.post(EMS_API_URL, crmPayload);

      const [emailRes, crmRes] = await Promise.all([emailPromise, crmPromise]);

      if (!emailRes.ok) throw new Error("Email API failed");
      if (!(crmRes.status === 200 || crmRes.status === 201))
        throw new Error("CRM API failed");

      // setSnackbar({
      //   open: true,
      //   message: "Your enquiry has been submitted successfully.",
      //   severity: "success",
      // });

      setTimeout(() => navigate("/thank-you"), 1500); // Navigate after a short delay
    } catch (error) {
      console.error("Submission Error:", error);
      setSnackbar({
        open: true,
        message: error.message || "An unexpected error occurred.",
        severity: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: "grey.100" }}>
      <Container maxWidth="full">
        <Paper elevation={3} sx={{ borderRadius: "20px", p: { xs: 2, sm: 4 } }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            textAlign="center"
            fontWeight="bold"
          >
            Share us your Requirements
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {/* Row 1 */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </Grid>
              {/* Row 2 */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Phone number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              {/* Row 3 */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="City"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Number of Cameras Needed"
                  name="customerQuantity"
                  type="number"
                  value={formData.customerQuantity}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value) && Number(value) >= 0) {
                      handleChange(e);
                    } else if (value === "") {
                      handleChange(e); // allow clearing field
                    }
                  }}
                  placeholder="e.g., 10"
                  inputProps={{ min: 0 }}
                />

              </Grid>
              {/* Row 4 */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  select
                  label="Business Type"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                >
                  <MenuItem value="End User">End User</MenuItem>
                  <MenuItem value="Government">Government</MenuItem>
                  <MenuItem value="Enterprise">Enterprise</MenuItem>
                  <MenuItem value="Distributor">Distributor</MenuItem>
                  <MenuItem value="Dealer">Dealer</MenuItem>
                  <MenuItem value="Consultant">Consultant</MenuItem>
                  <MenuItem value="OEM">OEM</MenuItem>
                  <MenuItem value="Reseller">Reseller</MenuItem>
                  <MenuItem value="System Integrator">
                    System Integrator
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  select
                  label="Enquiry For"
                  name="enquiryFor"
                  value={formData.enquiryFor}
                  onChange={handleChange}
                >
                  <MenuItem value="WiFi Camera">WiFi Camera</MenuItem>
                  <MenuItem value="4G Camera">4G Camera</MenuItem>
                  <MenuItem value="Thermal Camera">Thermal Camera</MenuItem>
                  <MenuItem value="Edge AI Camera">Edge AI Camera</MenuItem>
                  <MenuItem value="VMS VAS">VMS VAS</MenuItem>
                  <MenuItem value="Media Server">Media Server</MenuItem>
                  <MenuItem value="Government Projects">
                    Government Projects
                  </MenuItem>
                  <MenuItem value="Solutions">Solutions</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </TextField>
              </Grid>
              {/* Row 5 */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  select
                  label="I am a:"
                  name="customerType"
                  value={formData.customerType}
                  onChange={handleChange}
                >
                  <MenuItem value="Government">Government</MenuItem>
                  <MenuItem value="Stockist">Stockist</MenuItem>
                  <MenuItem value="Distributor">Distributor</MenuItem>
                  <MenuItem value="Dealer">Dealer</MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="New Customer">New Customer</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  select
                  label="I want cameras for:"
                  name="camerasFor"
                  value={formData.camerasFor}
                  onChange={handleChange}
                >
                  <MenuItem value="Office">Office</MenuItem>
                  <MenuItem value="Factory">Factory</MenuItem>
                  <MenuItem value="Home">Home</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              </Grid>
              {/* Full-width fields */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Description / Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="updates"
                      checked={formData.updates}
                      onChange={handleChange}
                    />
                  }
                  label="I’d like to receive updates and offers."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              loading={isLoading}
              fullWidth
              sx={{ mt: 3, py: 1.5, fontSize: "1rem" }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactZoho;
