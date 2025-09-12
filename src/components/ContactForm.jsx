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

const ContactForm = () => {
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [userType, setUserType] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://backend.adiance.com:443/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company,
        email,
        mobile,
        userType,
        country,
        message,
      }),
    });

    if (res.ok) {
      setOpen(true);
      setSuccess(true);
      setCompany("");
      setEmail("");
      setMobile("");
      setUserType("");
      setCountry("");
      setMessage("");
    } else {
      setOpen(true);
      setSuccess(false);
    }
  };

  return (
    <div style={{ margin: "5% 10%" }}>
      <Typography variant="h4" gutterBottom align="center">
        Share us your Requirements
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        align="center"
        style={{ marginBottom: "5%" }}
      >
        and we will get back to you.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} justifyContent="center">
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
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>User Type</InputLabel>
              <Select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                label="User Type"
                required
              >
                <MenuItem value="End-User">End-User</MenuItem>
                <MenuItem value="Consultant">Consultant</MenuItem>
                <MenuItem value="Distributor">Distributor</MenuItem>
                <MenuItem value="Installer">Installer</MenuItem>
                <MenuItem value="Reseller">Reseller</MenuItem>
                <MenuItem value="System Integrator">System Integrator</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="What products or service are you looking for?"
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
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
  );
};

export default ContactForm;
