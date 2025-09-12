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
import Header from "./Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Datasheet = () => {
  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  const handleDownload = (filename) => {
    const downloadUrl = `http://alpha.adiance.com/wp-content/uploads/2020/12/${filename}`;
    window.open(downloadUrl);
  };

  return (
    <div>
      <Helmet>
        <title>Download Datasheets for Security & Surveillance Product</title>
        <meta
          name="description"
          content="Access and download datasheets for security and surveillance products. Get detailed specifications and features for informed decision-making."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"Datasheet"} />
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          <div className="downloads-container" style={{ margin: "5% 10%" }}>
            <Typography
              variant="h4"
              gutterBottom
              textAlign="center"
              marginBottom={"5%"}
            >
              Datasheet Download
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Datasheet</strong>
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
                    <TableCell>4K H.265 PoE NVR 5000 Series</TableCell>
                    <TableCell>2020.12.25</TableCell>
                    <TableCell>0.1M</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDownload("pages-1.zip")}>
                        <Download />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>AI Motorized Pro Dome Camera</TableCell>
                    <TableCell>2020.12.12</TableCell>
                    <TableCell>0.3M</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDownload("pages-2.zip")}>
                        <Download />
                      </IconButton>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>30X/36X AI Speed Dome Camera</TableCell>
                    <TableCell>2020.12.02</TableCell>
                    <TableCell>1.0M</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDownload("pages3.zip")}>
                        <Download />
                      </IconButton>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>H.265 Speed Dome Camera</TableCell>
                    <TableCell>2020.11.25</TableCell>
                    <TableCell>1.2M</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDownload("pages-4.zip")}>
                        <Download />
                      </IconButton>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>180° Panoramic Mini Bullet Camera</TableCell>
                    <TableCell>2020.11.15</TableCell>
                    <TableCell>1.5M</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDownload("pages-5.zip")}>
                        <Download />
                      </IconButton>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>H.265 Motorized Pro Dome Camera</TableCell>
                    <TableCell>2020.11.05</TableCell>
                    <TableCell>2.05M</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDownload("pages-6.zip")}>
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

export default Datasheet;
