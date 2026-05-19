"use client";

import React, { useEffect, useState } from "react";
import { useNavigate } from "@/compat/react-router-dom";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Container,
  Paper,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

// Import your page components (assuming they are also converted to MUI)
import Navbar from "../../components/ui/Navbar";
import CreateBlogPage from "./components/CreateBlogPage";
import HRAddJobPage from "./components/HRAddJobPage";
import HRJobListPage from "./components/HRJobListPage";

const Dashboard = () => {
  const jwt = localStorage.getItem("jwtToken");
  const role = localStorage.getItem("userRole");
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwt) {
      navigate("/admin", { replace: true });
    }
  }, [jwt, navigate]);

  // State to manage which view is active
  const [adminSection, setAdminSection] = useState(null); // 'BLOG' | 'JOB'
  const [jobView, setJobView] = useState("list"); // 'create' | 'list'
  const [editingJob, setEditingJob] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // Define your custom MUI theme
  const theme = createTheme({
    palette: {
      primary: { main: "#BF0603" }, // Adiance red
      secondary: { main: "#DB7B3A" },
      background: { default: "#fafafa" },
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: "Inter, Roboto, Helvetica, Arial, sans-serif",
      button: { textTransform: "none", fontWeight: 600 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 12 },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          },
        },
      },
    },
  });

  if (!jwt) return null;

  const renderContent = () => {
    // --- HR Role ---
    if (role === "HR") {
      if (jobView === "create") {
        return (
          <HRAddJobPage
            onShowList={() => {
              setJobView("list");
              setEditingJob(null);
            }}
            editJob={editingJob}
          />
        );
      }
      if (jobView === "list") {
        return (
          <HRJobListPage
            onShowCreate={() => {
              setEditingJob(null);
              setJobView("create");
            }}
            onEdit={(job) => {
              setEditingJob(job);
              setJobView("create");
            }}
          />
        );
      }
    }

    // --- MARKETING Role ---
    if (role === "MARKETING") {
      return <CreateBlogPage />;
    }

    // --- ADMIN Role ---
    if (role === "ADMIN") {
      // If no section is selected, show the selection screen
      if (!adminSection) {
        return (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="calc(100vh - 64px)"
          >
            <Paper sx={{ p: 4, textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                Select a section to manage:
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                <Button
                  variant="contained"
                  onClick={() => setAdminSection("BLOG")}
                >
                  Blogs
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setAdminSection("JOB")}
                >
                  Jobs
                </Button>
              </Stack>
            </Paper>
          </Box>
        );
      }

      // If a section is selected, show the corresponding component
      if (adminSection === "BLOG") {
        return <CreateBlogPage />;
      }

      if (adminSection === "JOB") {
        if (jobView === "create") {
          return (
            <HRAddJobPage
              onShowList={() => {
                setJobView("list");
                setEditingJob(null);
              }}
              editJob={editingJob}
            />
          );
        }
        if (jobView === "list") {
          return (
            <HRJobListPage
              onShowCreate={() => {
                setEditingJob(null);
                setJobView("create");
              }}
              onEdit={(job) => {
                setEditingJob(job);
                setJobView("create");
              }}
            />
          );
        }
      }
    }

    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - 64px)"
      >
        <Paper sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h6" color="error">
            Access Denied
          </Typography>
          <Typography>
            You do not have a role assigned. Please contact an administrator.
          </Typography>
        </Paper>
      </Box>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        <Navbar adminSection={adminSection} setAdminSection={setAdminSection} />
        <Container maxWidth="xl" sx={{ pt: 4, pb: 4 }}>
          {renderContent()}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
