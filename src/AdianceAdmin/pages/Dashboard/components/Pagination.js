"use client";

import { Box, Pagination as MuiPagination } from "@mui/material";

const Pagination = ({ currentPage, totalPages, onPageChange, disabled }) => {
  // If disabled or no pages, render nothing.
  if (disabled || totalPages === 0) {
    return null;
  }

  // The MUI Pagination component's onChange event provides two arguments: (event, page).
  // We only need the 'page' number to pass to our onPageChange prop.
  const handleChange = (event, page) => {
    onPageChange(page);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 2,
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color="primary" // You can change this to "secondary" or remove for default styling
        showFirstButton
        showLastButton
      />
    </Box>
  );
};

export default Pagination;
