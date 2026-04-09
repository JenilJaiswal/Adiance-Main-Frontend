import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Stack,
  IconButton,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Menu,
  MenuItem,
  Divider,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate, useLocation } from "react-router-dom";
import ChangePassword from "../../pages/Dashboard/components/ChangePassword";

// Your SVG logo as a component
const Logo = ({ height }) => (
  <svg height={height} viewBox="0 0 98 26" fill="none">
    <path
      d="M2.06965 3.91725L12.479 21.9466L14.5487 25.7302L24.3879 8.68842L22.7459 5.64474L21.7486 3.91725L19.6789 0.332451H15.5395L17.6093 3.91725L20.2486 8.48946L14.5487 18.3617L6.20904 3.91725H9.75994L16.3242 15.2864L18.3938 11.7021L13.8996 3.91725L11.8297 0.332451H7.69029H4.13939H0L2.06965 3.91725Z"
      fill="#BF0603"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.8675 0.332451H22.8937L23.8807 2.04206L25.1225 4.19297L26.1095 5.90284L27.0966 4.19297L29.3255 0.332451H24.8675Z"
      fill="#DB7B3A"
    />
    <path
      d="M42.9423 7.88308L39.3612 16.1725L35.83 7.88308H32.9287L37.9355 19.4882H40.5881L45.6115 7.88308H42.9423ZM59.6509 19.4882L59.6177 7.88308H57.41L53.1354 15.0949L48.7946 7.88308H46.573V19.4882H49.093V12.6743L52.4889 18.2614H53.6992L57.1116 12.5252L57.1282 19.4882H59.6509ZM68.6228 10.5689V14.9788C68.6228 16.6201 67.7607 17.3827 66.567 17.3827C65.4231 17.3827 64.7599 16.7196 64.7599 15.2275V10.5689H62.1737V15.6088C62.1737 18.3609 63.7486 19.6209 65.9867 19.6209C67.081 19.6209 68.0757 19.2064 68.7555 18.4273V19.4882H71.2091V10.5689H68.6228ZM80.2611 19.4882H83.3945L79.3493 14.3488L83.063 10.5689H79.9793L76.1993 14.1499V7.18682H73.6131V19.4882H76.1993V17.217L77.4427 15.9901L80.2611 19.4882ZM89.6115 17.2335C89.3297 17.4491 88.9484 17.5651 88.5671 17.5651C87.8708 17.5651 87.4563 17.1506 87.4563 16.388V12.7573H89.6779V10.7678H87.4563V8.59597H84.87V10.7678H83.494V12.7573H84.87V16.4212C84.87 18.5433 86.0969 19.6209 88.2024 19.6209C88.9981 19.6209 89.7774 19.4385 90.3079 19.0572L89.6115 17.2335ZM93.06 9.32545C94.0215 9.32545 94.6681 8.69545 94.6681 7.83335C94.6681 7.03761 94.0215 6.44073 93.06 6.44073C92.0984 6.44073 91.4518 7.07073 91.4518 7.88308C91.4518 8.69544 92.0984 9.32545 93.06 9.32545ZM91.7668 19.4882H94.353V10.5689H91.7668V19.4882Z"
      fill="#BF0603"
    />
    <path
      d="M95.3696 6.87052H95.7073V5.68652H96.1742V5.41127H94.9027V5.68652H95.3696V6.87052ZM98 6.87052L97.9958 5.41127H97.7182L97.1808 6.31814L96.635 5.41127H96.3557V6.87052H96.6725V6.01379L97.0994 6.71629H97.2517L97.6807 5.99496L97.6828 6.87052H98Z"
      fill="black"
    />
  </svg>
);

const UserAvatar = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="20" fill="#E7E7E7" />
    <path
      d="M19.9993 19.9993C22.0252 19.9993 23.666 18.3585 23.666 16.3327C23.666 14.3068 22.0252 12.666 19.9993 12.666C17.9735 12.666 16.3327 14.3068 16.3327 16.3327C16.3327 18.3585 17.9735 19.9993 19.9993 19.9993ZM19.9993 21.8327C17.5518 21.8327 12.666 23.061 12.666 25.4993V27.3327H27.3327V25.4993C27.3327 23.061 22.4468 21.8327 19.9993 21.8327Z"
      fill="#BF0603"
    />
  </svg>
);

const Navbar = ({ adminSection, setAdminSection }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isChangePasswordOpen, setChangePasswordOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [adminMenuAnchorEl, setAdminMenuAnchorEl] = useState(null);
  const [userInfo, setUserInfo] = useState({
    role: localStorage.getItem("userRole") || "",
    email: localStorage.getItem("userEmail") || "",
  });
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = (event) => setAdminMenuAnchorEl(event.currentTarget);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleAdminMenuClose = () => setAdminMenuAnchorEl(null);

  const navigateTo = (path) => {
    navigate(path);
    handleMenuClose();
    setDrawerOpen(false);
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    setUserInfo({ role: "", email: "" });
    handleMenuClose();
    navigate("/admin", { replace: true });
  };

  useEffect(() => {
    // Update user info from localStorage
    setUserInfo({
      role: localStorage.getItem("userRole") || "",
      email: localStorage.getItem("userEmail") || "",
    });
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function isPathActive(path) {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  }

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: isNavbarVisible ? 0 : "-100px",
          transition: "top 0.3s ease-in-out",
          backgroundColor: "transparent",
          pt: 4,
        }}
      >
        <Container maxWidth="100%">
          <Toolbar
            disableGutters
            sx={{
              backgroundColor: "white",
              borderRadius: "20px",
              height: "50px",
              px: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <Box
              sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={() => navigateTo("/")}
            >
              {/* <Logo height="25px" /> */}
              <img
                src="../../images/Logo.webp"
                alt="Logo"
                style={{ height: "30px" }}
              />
            </Box>
            {/* ---------------------------------------------------- */}
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              {userInfo.role === "ADMIN" && adminSection && (
                <Box>
                  <Stack direction="row" bgcolor="#F5F5F5" borderRadius="24px">
                    <Button borderRadius="24px" variant="contained" onClick={handleMenuClick}>
                      Managing: {adminSection}
                    </Button>
                    <Menu
                      anchorEl={adminMenuAnchorEl}
                      open={Boolean(adminMenuAnchorEl)}
                      onClose={handleAdminMenuClose}
                    >
                      <MenuItem
                        onClick={() => {
                          setAdminSection("BLOG");
                          handleAdminMenuClose();
                        }}
                      >
                        Blogs
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setAdminSection("JOB");
                          handleAdminMenuClose();
                        }}
                      >
                        Jobs
                      </MenuItem>
                    </Menu>
                    <Button
                      onClick={() => setAdminSection(null)}
                    >
                      Back to Selection
                    </Button>
                  </Stack>
                </Box>
              )}
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              <Stack direction="row" alignItems="center" spacing={4}>
                {/* Add other desktop links here if needed */}
                <Box
                  onMouseEnter={handleMenuOpen}
                  onMouseLeave={handleMenuClose}
                >
                  <Button
                    aria-controls="user-menu"
                    aria-haspopup="true"
                    onClick={handleMenuOpen}
                    sx={{ p: 0, minWidth: 0, borderRadius: "50%" }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <UserAvatar />
                      <ExpandMoreIcon
                        color="primary"
                        sx={{
                          transform: anchorEl
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.2s",
                        }}
                      />
                    </Stack>
                  </Button>
                  <Menu
                    id="user-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    MenuListProps={{
                      onMouseLeave: handleMenuClose,
                      sx: { py: 1 },
                    }}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                    sx={{ mt: 1.5 }}
                  >
                    <MenuItem disabled sx={{ opacity: "1 !important" }}>
                      Username
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem
                      onClick={() => {
                        setChangePasswordOpen(true);
                        handleMenuClose();
                      }}
                    >
                      Change Password
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={logout} sx={{ color: "error.main" }}>
                      Logout
                    </MenuItem>
                  </Menu>
                </Box>
              </Stack>
            </Box>

            {/* Mobile Navigation */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                edge="end"
                color="primary"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, p: 2 }} role="presentation">
          <Typography variant="h6" sx={{ mb: 2 }}>
            Menu
          </Typography>
          <Divider />
          <Accordion elevation={0} disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>User Profile</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack>
                <Button
                  onClick={() => {
                    setChangePasswordOpen(true);
                    setDrawerOpen(false);
                  }}
                >
                  Change Password
                </Button>
                <Button onClick={logout} color="error">
                  Logout
                </Button>
              </Stack>
            </AccordionDetails>
          </Accordion>
          {/* Add other mobile navigation items here */}
        </Box>
      </Drawer>

      <ChangePassword
        isOpen={isChangePasswordOpen}
        onClose={() => setChangePasswordOpen(false)}
      />
    </>
  );
};

export default Navbar;
