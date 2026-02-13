import React from "react";
import {
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Grid,
} from "@mui/material";
import { Download } from "@mui/icons-material";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer/Footer";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Downloads = () => {
  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;
  // Function to handle the download action
  const handleDownload = (filename) => {
    const downloadUrl = `http://alpha.adiance.com/wp-content/uploads/2020/12/${filename}`;
    window.open(downloadUrl);
  };

  return (
    <div>
      <Helmet>
        <title>Download Center – Software & Datasheets for Security</title>
        <meta
          name="description"
          content="Access the latest software and datasheets for security solutions. Download firmware, manuals, and technical documents for seamless integration and support."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"Download Center"} />
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          <div className="downloads-container" style={{ margin: "5% 10%" }}>
            <Typography
              variant="h4"
              gutterBottom
              textAlign="center"
              marginBottom={"5%"}
            >
              Software Download
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Software</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Version</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Date</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Size</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Action</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Adiance CMS</TableCell>
                    <TableCell>V2.4.0.9</TableCell>
                    <TableCell>2020.12.11</TableCell>
                    <TableCell>80.2M</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDownload("pages-1.zip")}>
                        <Download />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Adiance CMS (for Mac)</TableCell>
                    <TableCell>V2.4.0.8-r1</TableCell>
                    <TableCell>2020.12.13</TableCell>
                    <TableCell>70.1M</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDownload("pages-2.zip")}>
                        <Download />
                      </IconButton>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Adiance Smart Tools</TableCell>
                    <TableCell>V2.4.0.8-r1</TableCell>
                    <TableCell>2020.11.23</TableCell>
                    <TableCell>60.2M</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDownload("pages3.zip")}>
                        <Download />
                      </IconButton>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Adiance Pro (Android)</TableCell>
                    <TableCell>V3.1.0.4</TableCell>
                    <TableCell>2020.11.20</TableCell>
                    <TableCell>55.3M</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDownload("pages-4.zip")}>
                        <Download />
                      </IconButton>
                    </TableCell>
                  </TableRow>

                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Downloads;
