import React from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  TextField,
  MenuItem,
  Divider,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import {
  createJob,
  updateJob,
  uploadJobJD,
  deleteJobJD,
} from "../../../api/jobs"; // Assuming API calls are correct

const HRAddJobPage = ({ onShowList, editJob }) => {
  const { register, handleSubmit, reset, watch, setValue } = useForm({
    defaultValues: {
      jobRole: "",
      employmentType: "Full-Time",
      location: "",
      experience: "",
      openings: 1,
      skillsAndResponsibilities: "",
      jdFilename: undefined,
    },
  });

  const [jdUploading, setJdUploading] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "success",
  });
  const jdInputRef = React.useRef(null);
  const jdFilename = watch("jdFilename");

  // --- Snackbar (Toast) handler ---
  const showToast = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  const onSubmit = async (values) => {
    try {
      const payload = {
        jobRole: values.jobRole,
        employmentType: values.employmentType,
        location: values.location,
        experience: values.experience,
        openings: Number(values.openings),
        ...(values.skillsAndResponsibilities
          ? { skillsAndResponsibilities: values.skillsAndResponsibilities }
          : {}),
        ...(values.jdFilename ? { jdFilename: values.jdFilename } : {}),
      };

      const res = editJob?._id
        ? await updateJob(editJob._id, payload)
        : await createJob(payload);

      if (res.status === "success") {
        showToast(
          editJob?._id
            ? "Job updated successfully"
            : "Job created successfully",
          "success"
        );
        if (editJob?._id) {
          onShowList && onShowList();
        } else {
          reset();
        }
      }
    } catch (err) {
      showToast(
        String(err?.error || err.message || "An unknown error occurred"),
        "error"
      );
    }
  };

  const handleJdPick = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      showToast("Only PDF files are allowed.", "warning");
      e.target.value = "";
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      showToast("File is too large. Maximum size is 5MB.", "warning");
      e.target.value = "";
      return;
    }

    try {
      setJdUploading(true);
      const res = await uploadJobJD(file);
      if (res.status === "success") {
        setValue("jdFilename", res.data.filename);
        showToast("JD uploaded successfully.", "success");
        if (jdInputRef.current) {
          jdInputRef.current.value = "";
        }
      }
    } catch (err) {
      showToast(String(err?.message || "JD upload failed."), "error");
    } finally {
      setJdUploading(false);
    }
  };

  const handleJdDelete = async () => {
    if (!jdFilename) return;
    try {
      setJdUploading(true);
      await deleteJobJD(jdFilename);
      if (editJob?._id) {
        try {
          await updateJob(editJob._id, { jdFilename: null });
        } catch (e) {
          // Ignore persistence error here; UI will still clear
        }
      }
      setValue("jdFilename", undefined);
      showToast("JD deleted successfully.", "success");
      if (jdInputRef.current) {
        jdInputRef.current.value = "";
      }
    } catch (err) {
      showToast(String(err?.message || "Failed to delete JD."), "error");
    } finally {
      setJdUploading(false);
    }
  };

  React.useEffect(() => {
    if (editJob && editJob._id) {
      setValue("jobRole", editJob.jobRole || "");
      setValue("employmentType", editJob.employmentType || "Full-Time");
      setValue("location", editJob.location || "");
      setValue("experience", editJob.experience || "");
      setValue("openings", Number(editJob.openings) || 1);
      if (
        typeof editJob.jdFilename === "string" &&
        editJob.jdFilename.length > 0
      ) {
        setValue("jdFilename", editJob.jdFilename);
      }
      if (
        typeof editJob.skillsAndResponsibilities === "string" &&
        editJob.skillsAndResponsibilities.length > 0
      ) {
        setValue(
          "skillsAndResponsibilities",
          editJob.skillsAndResponsibilities
        );
      } else {
        const legacy = [
          ...(Array.isArray(editJob.keyResponsibilities)
            ? editJob.keyResponsibilities
            : []),
          ...(Array.isArray(editJob.keySkills) ? editJob.keySkills : []),
        ].join("\n");
        setValue("skillsAndResponsibilities", legacy);
      }
    }
  }, [editJob, setValue]);

  return (
    <Paper elevation={2} sx={{ p: 4, borderRadius: "16px" }}>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "#E7E7E7",
          borderRadius: "24px",
          p: 0.5,
          mb: 2,
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{ borderRadius: "20px", textTransform: "none" }}
        >
          {editJob?._id ? "Edit Job" : "Create New"}
        </Button>
        <Button
          variant="text"
          size="small"
          onClick={() => onShowList && onShowList()}
          sx={{ borderRadius: "20px", textTransform: "none" }}
        >
          Existing Jobs
        </Button>
      </Box>
      <Divider sx={{ mb: 3 }} />
      <Typography variant="h5" component="h1" gutterBottom>
        {editJob?._id ? "Edit Job" : "Add Job"}
      </Typography>
      <Stack
        component="form"
        spacing={3}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {/* Form Fields */}
        <TextField
          label="Job Role"
          variant="outlined"
          fullWidth
          required
          {...register("jobRole", { required: true })}
        />

        <TextField
          label="Employment Type"
          variant="outlined"
          fullWidth
          select
          required
          defaultValue="Full-Time"
          {...register("employmentType", { required: true })}
        >
          <MenuItem value="Full-Time">Full-Time</MenuItem>
          <MenuItem value="Fresher">Fresher</MenuItem>
          <MenuItem value="Intern">Intern</MenuItem>
        </TextField>

        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          required
          placeholder="Enter job location"
          {...register("location", { required: true })}
        />

        <TextField
          label="Experience"
          variant="outlined"
          fullWidth
          required
          placeholder="e.g., 2-4 years or Intern"
          {...register("experience", { required: true })}
        />

        <TextField
          label="Number of Openings"
          variant="outlined"
          fullWidth
          required
          type="number"
          InputProps={{ inputProps: { min: 1 } }}
          {...register("openings", { required: true, valueAsNumber: true })}
        />

        <TextField
          label="Skills and Responsibilities"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={6}
          placeholder="Enter skills and responsibilities (you can paste formatted text or one per line)"
          {...register("skillsAndResponsibilities", { required: true })}
        />

        {/* JD Upload Section */}
        <Box>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Upload JD (PDF, max 5MB)
          </Typography>
          <input type="hidden" {...register("jdFilename")} />
          <Stack direction="row" spacing={2} alignItems="center">
            <LoadingButton
              variant="contained"
              size="small"
              onClick={() => jdInputRef.current?.click()}
              loading={jdUploading}
            >
              Upload PDF
            </LoadingButton>
            {jdFilename && (
              <>
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                  {jdFilename}.pdf
                </Typography>
                <LoadingButton
                  size="small"
                  color="error"
                  variant="outlined"
                  onClick={handleJdDelete}
                  loading={jdUploading}
                >
                  Delete
                </LoadingButton>
                {jdFilename && editJob?.jdUrl && (
                  <Button
                    component="a"
                    href={editJob.jdUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    variant="outlined"
                  >
                    View
                  </Button>
                )}
              </>
            )}
          </Stack>
          <input
            ref={jdInputRef}
            type="file"
            accept="application/pdf"
            style={{ display: "none" }}
            onChange={handleJdPick}
          />
        </Box>

        <Box>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Stack>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
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
    </Paper>
  );
};

export default HRAddJobPage;
