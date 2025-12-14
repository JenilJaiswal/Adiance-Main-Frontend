"use client";

import {
  Box,
  Stack,
  Typography,
  Button,
  ButtonGroup,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const BlogHeader = ({
  onSearch,
  searchQuery,
  statusFilter,
  onChangeStatus,
}) => {
  return (
    <Box>
      {/* Column headers and search bar */}
      <Stack
        direction="row"
        sx={{
          p: 2,
          bgcolor: "grey.50",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        {/* Left side: Column headers */}
        <Stack
          direction="row"
          spacing={4}
          sx={{
            color: "text.secondary",
            fontWeight: 500,
            fontSize: "0.875rem",
            alignItems: "center",
          }}
        >
          <Typography sx={{ width: "120px" }}>Posted date</Typography>
          <Typography sx={{ width: "120px" }}>Image</Typography>
          <Typography>Description</Typography>
        </Stack>

        {/* Right side: Filters and Search */}
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          {/* Status Filter Buttons */}
          <ButtonGroup
            size="small"
            variant="outlined"
            aria-label="blog status filter group"
          >
            <Button
              onClick={() => onChangeStatus("all")}
              variant={statusFilter === "all" ? "contained" : "outlined"}
            >
              All
            </Button>
            <Button
              onClick={() => onChangeStatus("draft")}
              variant={statusFilter === "draft" ? "contained" : "outlined"}
              // color="warning"
              sx={{
                // Styles for the active/'contained' state
                ...(statusFilter === "draft" && {
                  backgroundColor: "#c1af2dff", // A neutral grey
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#9b9604ff", // A slightly darker grey for hover
                  },
                }),
                // Styles for the inactive/'outlined' state
                ...(statusFilter !== "draft" && {
                  color: "#b8b506ff",
                  borderColor: "#767804ff",
                }),
              }}
            >
              Draft
            </Button>
            <Button
              onClick={() => onChangeStatus("published")}
              variant={statusFilter === "published" ? "contained" : "outlined"}
              color="success" // Using semantic colors
            >
              Published
            </Button>
          </ButtonGroup>

          {/* Search Input */}
          <TextField
            placeholder="Search blog"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            size="small"
            sx={{ maxWidth: "250px", bgcolor: "white" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "grey.400" }} />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default BlogHeader;
