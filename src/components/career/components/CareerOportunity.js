"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  FormControl,
  Grid,
  TextField,
  InputAdornment,
  CircularProgress,
  Alert,
  Snackbar,
} from "@mui/material";
import { LoadingButton } from "@mui/lab"; // For button with loading state
import { FiPaperclip } from "react-icons/fi";
import CloseIcon from "@mui/icons-material/Close";
import { Helmet } from "react-helmet";
import { useNavigate } from "@/compat/react-router-dom";
import { getJobs } from "../../../AdianceAdmin/api/jobs";

const CareerOportunity = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    yearsOfExperience: "",
    email: "",
    about: "",
    phone: "",
    currentCompany: "",
  });
  const [resumeName, setResumeName] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await getJobs(1, 50, "OPEN");
        if (response.status === "success") {
          setJobs(response.data.jobs || []);
        } else {
          setError("Failed to fetch jobs");
        }
      } catch (err) {
        // setError("Failed to load job opportunities");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleResumePick = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      setSnackbar({
        open: true,
        message: "Resume file must be <= 2MB.",
        severity: "warning",
      });
      e.target.value = "";
      setResumeFile(null);
      setResumeName("");
      return;
    }
    setResumeFile(file);
    setResumeName(file.name);
  };

  const handleSubmit = async () => {
    if (
      !form.fullName ||
      !form.yearsOfExperience ||
      !form.email ||
      !form.phone ||
      !form.about
    ) {
      setSnackbar({
        open: true,
        message: "Please fill out all fields marked with *.",
        severity: "warning",
      });
      return;
    }
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("fullName", form.fullName);
    formData.append("yearsOfExperience", form.yearsOfExperience);
    formData.append("email", form.email);
    formData.append("about", form.about);
    formData.append("phone", form.phone);
    formData.append("currentCompany", form.currentCompany);
    formData.append("jobTitle", selectedJob?.jobRole || "");
    if (resumeFile) formData.append("resume", resumeFile);

    try {
      const response = await fetch(
        "https://vmukti.com/backend/api/send-email-career-adiance",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        let errorData = {};
        try {
          errorData = await response.json();
        } catch (e) {
        }
        throw new Error(errorData.message || "Failed to submit application.");
      }
      setSnackbar({
        open: true,
        message: "Application submitted successfully.",
        severity: "success",
      });
      navigate("/careers-thank-you");
      setIsModalOpen(false);
      setForm({
        fullName: "",
        yearsOfExperience: "",
        email: "",
        about: "",
        phone: "",
        currentCompany: "",
      });
      setResumeFile(null);
      setResumeName("");
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.message || "An error occurred. Please try again.",
        severity: "error",
      });
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
  };

  const JobCard = ({ job }) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "center" },
        p: 3,
        borderBottom: "1px solid #BF0603",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: { xs: 2, md: 0 },
          flex: 1.5,
          gap: 2,
        }}
      >
        {/* SVG Icon */}
        <Box>
          <svg
            width="30"
            height="35"
            viewBox="0 0 30 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 28.094C0 30.4956 0.147258 32.1022 2.06616 33.6841C2.44831 33.9991 2.96593 34.3144 3.43685 34.501C4.10194 34.7644 4.91057 34.9982 5.81055 34.9982H23.379C24.2392 34.9982 25.1024 34.7885 25.706 34.5226C26.3465 34.2404 26.9501 33.92 27.4649 33.4102C29.2553 31.6371 29.1896 30.0933 29.1896 27.8204C29.1896 26.4305 28.9389 24.9395 28.67 23.7599C28.1064 21.2872 26.8769 18.7052 24.4974 17.5417C23.6063 17.1059 22.5462 16.8828 21.465 16.8828C19.9592 16.8828 16.6484 21.5801 10.7314 18.5245C9.75665 18.021 8.6286 16.8828 7.51957 16.8828C3.47777 16.8828 1.19481 20.3272 0.506878 23.8838C0.377601 24.5519 0.238506 25.1943 0.156145 25.8573C0.0646902 26.5921 0 27.3096 0 28.0938L0 28.094Z"
              fill="#BF0603"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.94552 7.99803C5.94552 9.07286 5.92857 9.54481 6.20407 10.6105C6.28323 10.9168 6.34926 11.0954 6.44867 11.3914L6.91577 12.4281C8.97986 16.2164 13.5545 17.9482 17.8117 16.1729C18.3641 15.9425 19.3054 15.3571 19.737 14.9536C20.7036 14.0498 21.4611 13.2963 22.0562 12.009C23.7751 8.29058 22.5861 4.05089 19.3742 1.61054C18.5697 0.999288 17.58 0.527959 16.6105 0.272608C16.0261 0.118633 15.4018 0.0272815 14.768 0H13.9573C12.8201 0.048776 11.6941 0.30392 10.7525 0.773699C8.08319 2.10574 5.94552 4.94229 5.94552 7.99813V7.99803Z"
              fill="#BF0603"
            />
          </svg>
        </Box>
        <Box>
          <Typography fontWeight="bold" fontSize="16px" color="#BF0603">
            {job.jobRole}
          </Typography>
          <Box
            sx={{
              width: "16px",
              height: "2.5px",
              borderRadius: "99px",
              bgcolor: "#BF0603",
            }}
          />
          <Typography fontSize="16px" fontWeight={500} color="#000" mt={1}>
            {job.employmentType}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ flex: 1, mb: { xs: 2, md: 0 } }}>
        <Typography fontWeight="700" fontSize="16px">
          Location
        </Typography>
        <Box
          sx={{
            width: "16px",
            height: "2.5px",
            borderRadius: "99px",
            bgcolor: "#BF0603",
          }}
        />
        <Typography fontSize="16px" fontWeight={400} mt={0.5}>
          {job.location}
        </Typography>
      </Box>
      <Box sx={{ flex: 1, mb: { xs: 2, md: 0 } }}>
        <Typography fontWeight="bold">Year of Experience</Typography>
        <Box
          sx={{
            width: "16px",
            height: "2.5px",
            borderRadius: "99px",
            bgcolor: "#BF0603",
          }}
        />
        <Typography fontSize="16px" fontWeight={400} mt={0.5}>
          {job.experience}
        </Typography>
      </Box>
      <Box sx={{ flex: 1, mb: { xs: 2, md: 0 } }}>
        <Typography fontWeight="bold">Openings</Typography>
        <Box
          sx={{
            width: "16px",
            height: "2.5px",
            borderRadius: "99px",
            bgcolor: "#BF0603",
          }}
        />
        <Typography fontSize="16px" fontWeight={400} mt={0.5}>
          {job.openings}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#E7E7E7",
            color: "#000",
            fontSize: "16px",
            px: 4,
            borderRadius: "20px",
            "&:hover": { bgcolor: "#dcdcdc" },
          }}
          onClick={() => handleApplyClick(job)}
        >
          Apply
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <Helmet>
        <title>Career Opportunities at Vmukti</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Vmukti. Join our innovative team and contribute to cutting-edge technology solutions. Apply now!"
        />
      </Helmet>

      <Box sx={{ mt: "2%" }}>
        <Box sx={{ mx: "auto", bgcolor: "white", borderRadius: "24px", p: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 3,
              borderBottom: "1px solid #BF0603",
            }}
          >
            <Box>
              <Typography component="h2" variant="h4" fontWeight="bold">
                Current{" "}
                <Box component="span" sx={{ color: "#BF0603" }}>
                  Opening
                </Box>
              </Typography>
              <Typography fontWeight={500} mt={2}>
                {loading ? "Loading..." : `${jobs.length} Jobs found`}
              </Typography>
            </Box>
          </Box>

          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 4,
              }}
            >
              <CircularProgress sx={{ color: "#BF0603" }} />
            </Box>
          ) : error ? (
            <Alert severity="error" sx={{ borderRadius: "8px" }}>
              {error}
            </Alert>
          ) : jobs.length === 0 ? (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography variant="h6" color="text.secondary">
                No job opportunities available at the moment.
              </Typography>
            </Box>
          ) : (
            <Stack spacing={0} direction="column">
              {jobs.slice(0, 10).map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </Stack>
          )}
        </Box>

        {selectedJob && (
          <Dialog
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            maxWidth="lg"
            fullWidth
            PaperProps={{ sx: { borderRadius: "24px" } }}
          >
            <DialogTitle
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.75rem", md: "2rem" },
              }}
            >
              Submit your{" "}
              <Box component="span" sx={{ color: "#DB7B3A" }}>
                Application
              </Box>
              <IconButton
                onClick={() => setIsModalOpen(false)}
                sx={{ position: "absolute", right: 8, top: 8 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent>
              {/* Job Info in Modal */}
              <Box sx={{ mb: 3 }}>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {selectedJob.skillsAndResponsibilities?.trim().length > 0
                    ? selectedJob.skillsAndResponsibilities
                    : "No additional details available."}
                </Typography>
                {selectedJob.jdUrl && (
                  <Button
                    component="a"
                    href={selectedJob.jdUrl}
                    target="_blank"
                    variant="text"
                    sx={{
                      textTransform: "none",
                      color: "#BF0603",
                      fontWeight: 700,
                    }}
                  >
                    Download Job Description
                  </Button>
                )}
              </Box>

              {/* Form */}
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    variant="filled"
                    hiddenLabel
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    name="yearsOfExperience"
                    value={form.yearsOfExperience}
                    onChange={handleChange}
                    placeholder="Year of experience *"
                    variant="filled"
                    hiddenLabel
                  />
                </Grid>
                <Grid item xs={12} md={4} rowSpan={2}>
                  <TextField
                    fullWidth
                    name="about"
                    value={form.about}
                    onChange={handleChange}
                    placeholder="Tell us about you *"
                    variant="filled"
                    hiddenLabel
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    type="email"
                    variant="filled"
                    hiddenLabel
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    name="currentCompany"
                    value={form.currentCompany}
                    onChange={handleChange}
                    placeholder="Current company name"
                    variant="filled"
                    hiddenLabel
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    type="tel"
                    variant="filled"
                    hiddenLabel
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <TextField
                      variant="filled"
                      hiddenLabel
                      placeholder={resumeName || "Upload resume"}
                      value={resumeName || ""}
                      InputProps={{
                        readOnly: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => fileInputRef.current?.click()}
                            >
                              <FiPaperclip />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <input
                      ref={fileInputRef}
                      onChange={handleResumePick}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      style={{ display: "none" }}
                    />
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      MAX-2MB
                    </Typography>
                  </FormControl>
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions sx={{ p: 3 }}>
              <LoadingButton
                variant="contained"
                onClick={handleSubmit}
                loading={isSubmitting}
                sx={{
                  bgcolor: "#BF0603",
                  color: "white",
                  width: "146px",
                  height: "50px",
                  borderRadius: "20px",
                  "&:hover": { bgcolor: "#335f8a" },
                }}
              >
                Submit
              </LoadingButton>
            </DialogActions>
          </Dialog>
        )}
      </Box>

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
    </>
  );
};

export default CareerOportunity;
