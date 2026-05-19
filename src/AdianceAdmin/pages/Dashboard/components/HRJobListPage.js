"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Snackbar,
  Alert,
  Menu,
  MenuItem,
  Chip,
  TextField,
  Stack,
  Divider,
  DialogActions,
} from "@mui/material";
import {
  Edit,
  Delete,
  KeyboardArrowDown,
  DragIndicator,
  Check,
  Close,
} from "@mui/icons-material";
import {
  getJobs,
  deleteJob,
  updateJobStatus,
  updateJobOrder,
} from "../../../api/jobs";

const HRJobListPage = ({ onShowCreate, onEdit }) => {
  const [jobs, setJobs] = useState([]);
  const [originalJobs, setOriginalJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobToDelete, setJobToDelete] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [isReordering, setIsReordering] = useState(false);
  const [draggedJob, setDraggedJob] = useState(null);

  // State for modals/dialogs
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // State for snackbar (toast)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // --- Snackbar (Toast) handler ---
  const showToast = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
  };

  const load = async () => {
    try {
      const res = await getJobs(1, 100);
      const jobsData = res?.data?.jobs || [];
      setJobs(jobsData);
      setOriginalJobs([...jobsData]);
    } catch (err) {
      showToast("Failed to load jobs", "error");
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDeleteClick = (job) => {
    setJobToDelete(job);
    setDeleteConfirmation("");
    setIsDeleteOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!jobToDelete || deleteConfirmation !== jobToDelete.jobRole) {
      showToast("Job title does not match. Please type it exactly.", "error");
      return;
    }
    try {
      await deleteJob(jobToDelete._id);
      showToast("Job deleted successfully", "success");
      setIsDeleteOpen(false);
      setJobToDelete(null);
      setDeleteConfirmation("");
      load();
    } catch (err) {
      showToast("Delete failed", "error");
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteOpen(false);
    setJobToDelete(null);
    setDeleteConfirmation("");
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateJobStatus(id, newStatus);
      showToast(
        newStatus === "CLOSED" ? "Job closed" : "Job reopened",
        "success"
      );
      load();
    } catch (err) {
      showToast("Status update failed", "error");
    }
  };

  const handlePreview = (job) => {
    setSelectedJob(job);
    setIsPreviewOpen(true);
  };

  // --- Reordering functions ---
  const handleStartReordering = () => {
    setIsReordering(true);
    setOriginalJobs([...jobs]);
  };

  const handleCancelReordering = () => {
    setIsReordering(false);
    setJobs([...originalJobs]);
    setDraggedJob(null);
  };

  const handleSaveOrder = async () => {
    try {
      const jobOrders = jobs.map((job, index) => ({
        jobId: job._id,
        order: index + 1,
      }));
      await updateJobOrder(jobOrders);
      showToast("Job order saved successfully", "success");
      setIsReordering(false);
      setOriginalJobs([...jobs]);
    } catch (err) {
      showToast("Failed to save job order", "error");
    }
  };

  const handleDragStart = (e, job) => {
    setDraggedJob(job);
    e.dataTransfer.effectAllowed = "move";
  };
  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e, targetJob) => {
    e.preventDefault();
    if (!draggedJob || draggedJob._id === targetJob._id) {
      setDraggedJob(null);
      return;
    }
    const newJobs = [...jobs];
    const draggedIndex = newJobs.findIndex((job) => job._id === draggedJob._id);
    const targetIndex = newJobs.findIndex((job) => job._id === targetJob._id);
    newJobs.splice(draggedIndex, 1);
    newJobs.splice(targetIndex, 0, draggedJob);
    setJobs(newJobs);
    setDraggedJob(null);
  };

  // For the status change menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentJobForMenu, setCurrentJobForMenu] = useState(null);
  const handleMenuClick = (event, job) => {
    setAnchorEl(event.currentTarget);
    setCurrentJobForMenu(job);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentJobForMenu(null);
  };

  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: "16px" }}>
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
          variant="text"
          size="small"
          onClick={() => onShowCreate && onShowCreate()}
          sx={{ borderRadius: "20px", textTransform: "none" }}
        >
          Create New
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{ borderRadius: "20px", textTransform: "none" }}
        >
          Existing Jobs
        </Button>
      </Box>
      <Divider sx={{ mb: 2 }} />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5" component="h1">
          Job List
        </Typography>
        {!isReordering ? (
          <Button
            size="small"
            startIcon={<DragIndicator />}
            variant="outlined"
            onClick={handleStartReordering}
            sx={{ borderRadius: "20px", textTransform: "none" }}
          >
            Reorder Jobs
          </Button>
        ) : (
          <Stack direction="row" spacing={1}>
            <Button
              size="small"
              startIcon={<Check />}
              color="success"
              variant="contained"
              onClick={handleSaveOrder}
              sx={{ borderRadius: "20px", textTransform: "none" }}
            >
              Save Order
            </Button>
            <Button
              size="small"
              startIcon={<Close />}
              variant="outlined"
              onClick={handleCancelReordering}
              sx={{ borderRadius: "20px", textTransform: "none" }}
            >
              Cancel
            </Button>
          </Stack>
        )}
      </Stack>

      {isReordering ? (
        <Stack spacing={2}>
          {jobs.map((job) => (
            <Paper
              key={job._id}
              elevation={2}
              draggable
              onDragStart={(e) => handleDragStart(e, job)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, job)}
              sx={{
                p: 2,
                cursor: "move",
                border: "2px solid",
                borderColor:
                  draggedJob?._id === job._id ? "primary.main" : "grey.300",
                backgroundColor:
                  draggedJob?._id === job._id
                    ? "action.hover"
                    : "background.paper",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  borderColor: "primary.light",
                  backgroundColor: "action.hover",
                },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <DragIndicator color="action" />
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ flexGrow: 1 }}
                >
                  {job.jobRole}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.employmentType} • {job.location}
                </Typography>
                <Chip
                  label={job.status}
                  color={job.status === "OPEN" ? "success" : "error"}
                  size="small"
                />
              </Stack>
            </Paper>
          ))}
        </Stack>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Role</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Experience</TableCell>
                <TableCell>Openings</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job._id}>
                  <TableCell>{job.jobRole}</TableCell>
                  <TableCell>{job.employmentType}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{job.experience}</TableCell>
                  <TableCell>{job.openings}</TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                      <Chip
                        label={job.status}
                        color={job.status === "OPEN" ? "success" : "error"}
                        size="small"
                      />
                      <IconButton
                        size="small"
                        onClick={(e) => handleMenuClick(e, job)}
                      >
                        <KeyboardArrowDown />
                      </IconButton>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => handlePreview(job)}
                      >
                        Preview
                      </Button>
                      <IconButton
                        size="small"
                        onClick={() => onEdit && onEdit(job)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => handleDeleteClick(job)}
                      >
                        <Delete />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Status Change Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {currentJobForMenu?.status === "OPEN" && (
          <MenuItem
            onClick={() => {
              handleStatusChange(currentJobForMenu._id, "CLOSED");
              handleMenuClose();
            }}
            sx={{ color: "error.main" }}
          >
            Close Job
          </MenuItem>
        )}
        {currentJobForMenu?.status === "CLOSED" && (
          <MenuItem
            onClick={() => {
              handleStatusChange(currentJobForMenu._id, "OPEN");
              handleMenuClose();
            }}
            sx={{ color: "success.main" }}
          >
            Reopen Job
          </MenuItem>
        )}
      </Menu>

      {/* Preview Dialog */}
      <Dialog
        open={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Preview Job</DialogTitle>
        <DialogContent dividers>
          {selectedJob && (
            <Stack spacing={1.5}>
              <Typography>
                <strong>Role:</strong> {selectedJob.jobRole}
              </Typography>
              <Typography>
                <strong>Employment Type:</strong> {selectedJob.employmentType}
              </Typography>
              <Typography>
                <strong>Location:</strong> {selectedJob.location}
              </Typography>
              <Typography>
                <strong>Experience:</strong> {selectedJob.experience}
              </Typography>
              <Typography>
                <strong>Openings:</strong> {selectedJob.openings}
              </Typography>
              <Typography variant="body1" component="div" whiteSpace="pre-wrap">
                <strong>Skills and Responsibilities:</strong>
                <br />
                {selectedJob.skillsAndResponsibilities}
              </Typography>
            </Stack>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsPreviewOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={isDeleteOpen}
        onClose={handleDeleteCancel}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ color: "error.main" }}>Delete Job</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            Are you sure you want to delete this job? This action cannot be
            undone.
          </Typography>
          {jobToDelete && (
            <Paper variant="outlined" sx={{ p: 2, my: 2, bgcolor: "grey.50" }}>
              <Typography variant="body2">
                <strong>Role:</strong> {jobToDelete.jobRole}
              </Typography>
              <Typography variant="body2">
                <strong>Type:</strong> {jobToDelete.employmentType}
              </Typography>
              <Typography variant="body2">
                <strong>Location:</strong> {jobToDelete.location}
              </Typography>
            </Paper>
          )}
          <Typography variant="body2" gutterBottom>
            To confirm, type the job title:
          </Typography>
          <Typography
            fontFamily="monospace"
            sx={{ p: 1, bgcolor: "grey.100", borderRadius: 1, mb: 2 }}
          >
            {jobToDelete?.jobRole}
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type job title here..."
            value={deleteConfirmation}
            onChange={(e) => setDeleteConfirmation(e.target.value)}
            autoFocus
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>Cancel</Button>
          <Button
            color="error"
            variant="contained"
            onClick={handleDeleteConfirm}
            disabled={deleteConfirmation !== jobToDelete?.jobRole}
          >
            Delete Job
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
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

export default HRJobListPage;
