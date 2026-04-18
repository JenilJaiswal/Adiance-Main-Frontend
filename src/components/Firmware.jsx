import React, { useMemo, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

// API configuration
const API_BASE_URL = "https://etaems.arcisai.io:5000/api/version";
const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// API functions
const getAllFirmware = async () => {
  try {
    const res = await instance.get("/firmware/getAllFirmware");
    return res.data;
  } catch (err) {
    console.error("Firmware fetch failed:", err);
    throw err;
  }
};

const downloadFirmwareById = async (id, type) => {
  try {
    console.log("Downloading firmware/release notes | id:", id, "type:", type);

    // Make API request with blob response
    const response = await instance.get(
      `/firmware/download/${id}?type=${type}`,
      { responseType: "blob" } // important for binary files
    );

    // Determine filename from Content-Disposition header
    let filename = "download";
    const disposition = response.headers["content-disposition"];
    if (disposition && disposition.includes("filename=")) {
      filename = disposition
        .split("filename=")[1]
        .replace(/["']/g, "")
        .trim();
    } else if (type === "releaseNotes") {
      filename = "releaseNotes.txt";
    } else if (type === "firmware") {
      filename = "firmwareFiles.zip";
    }

    // Create blob URL and trigger download
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);

    return { success: true };
  } catch (error) {
    console.error("Firmware download failed:", error);

    // Check if backend sent JSON error instead of file
    let message = "Download failed";
    if (error.response && error.response.data) {
      try {
        const reader = new FileReader();
        reader.onload = () => {
          const text = reader.result;
          console.error("Backend response:", text);
        };
        reader.readAsText(error.response.data);
      } catch (e) { }
      message = error.response.data?.message || message;
    }

    return { success: false, message };
  }
};

const Firmware = () => {
  const location = useLocation();
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const pageSize = 10;
  
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return data;
    const q = searchQuery.toLowerCase();
    return data.filter((row) => {
      const camera = String(row.cameraName || "").toLowerCase();
      const version = String(row.versionName || "").toLowerCase();
      const model = String(row.modelNumber || "").toLowerCase();
      return (
        camera.includes(q) ||
        version.includes(q) ||
        model.includes(q)
      );
    });
  }, [data, searchQuery]);

  const totalPages = Math.ceil(filteredData.length / pageSize) || 1;
  const pageData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [currentPage, filteredData]);

  // Reset to page 1 whenever search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Fetch firmware data on component mount
  useEffect(() => {
    const fetchFirmware = async () => {
      try {
        setLoading(true);
        const response = await getAllFirmware();
        if (response.success && response.data) {
          setData(response.data);
        } else {
          setError("Failed to fetch firmware data");
        }
      } catch (err) {
        console.error("Error fetching firmware:", err);
        setError("Failed to load firmware data");
      } finally {
        setLoading(false);
      }
    };

    fetchFirmware();
  }, []);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleDownload = async (id, type) => {
    try {
      const response = await downloadFirmwareById(id, type);
      if (!response.success) {
        alert(response.message || "Download failed");
      }
    } catch (error) {
      console.error("Download error:", error);
      alert("Download failed");
    }
  };

  return (
    <div>
      <Helmet>
        <title>Firmware Downloads | Camera Firmware Updates | Adiance</title>
        <meta
          name="description"
          content="Download the latest firmware updates for Adiance security cameras. Keep your surveillance system secure and up-to-date."
        />
        <meta property="og:image" content="https://www.adiance.com/images/Logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <div className="container" style={{ paddingTop: "100px", paddingBottom: "60px" }}>
        <h1 style={{ marginBottom: "8px" }}>Firmware</h1>
        <p style={{ marginBottom: "24px", color: "#555" }}>
          Download the latest firmware and read corresponding release notes.
        </p>

        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "nowrap" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 420 }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by model, camera or version"
                aria-label="Search firmware by model, camera or version"
                style={{
                  width: "100%",
                  padding: "10px 40px 10px 12px",
                  border: "1px solid #ddd",
                  borderRadius: 6,
                  outline: "none",
                }}
              />
              <SearchIcon
                fontSize="small"
                style={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#888",
                  pointerEvents: "none",
                }}
              />
            </div>
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              style={{
                padding: "10px 12px",
                background: "#f5f5f5",
                border: "1px solid #ddd",
                borderRadius: 6,
                cursor: "pointer",
                whiteSpace: "nowrap",
                minWidth: 72,
                visibility: searchQuery ? "visible" : "hidden",
              }}
            >
              Clear
            </button>
          </div>
        </div>

        {loading && (
          <div style={{ textAlign: "center", padding: "40px" }}>
            <p>Loading firmware data...</p>
          </div>
        )}

        {error && (
          <div style={{ textAlign: "center", padding: "40px", color: "#d32f2f" }}>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {filteredData.length === 0 ? (
              <div style={{ textAlign: "center", padding: 40, color: "#666" }}>
                <p>No results found. Try a different search.</p>
              </div>
            ) : (
              <>
                <div style={{ overflowX: "auto" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "separate",
                      borderSpacing: 0,
                      boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                    }}
                  >
                    <thead>
                      <tr style={{ backgroundColor: "#f7f7f7" }}>
                        <th style={headerCellStyle}>Model Number</th>
                        <th style={headerCellStyle}>Version</th>
                        <th style={headerCellStyle}>Uploaded On</th>
                        <th style={headerCellStyle}>Release Notes</th>
                        <th style={headerCellStyle}>Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pageData.map((row, index) => {
                        const isLastRow = index === pageData.length - 1;
                        return (
                          <tr key={row._id}>
                            <td style={bodyCellStyle(isLastRow)}>{row.cameraName}</td>
                            <td style={bodyCellStyle(isLastRow)}>{row.versionName}</td>
                            <td style={bodyCellStyle(isLastRow)}>{formatDate(row.updatedAt || row.uploadedAt || row.createdAt)}</td>
                            <td style={bodyCellStyle(isLastRow)}>
                              <button
                                onClick={() => handleDownload(row._id, 'releaseNotes')}
                                className="link"
                                aria-label={`Open release notes for ${row.cameraName}`}
                                style={{ 
                                  display: "inline-flex", 
                                  alignItems: "center", 
                                  gap: 8,
                                  background: "none",
                                  border: "none",
                                  cursor: "pointer",
                                  padding: 0
                                }}
                              >
                                <DescriptionOutlinedIcon fontSize="small" />
                                <span>View</span>
                              </button>
                            </td>
                            <td style={bodyCellStyle(isLastRow)}>
                              <button
                                onClick={() => handleDownload(row._id, 'firmware')}
                                className="link"
                                aria-label={`Download firmware for ${row.cameraName}`}
                                style={{ 
                                  display: "inline-flex", 
                                  alignItems: "center", 
                                  gap: 8,
                                  background: "none",
                                  border: "none",
                                  cursor: "pointer",
                                  padding: 0
                                }}
                              >
                                <DownloadForOfflineOutlinedIcon fontSize="small" />
                                <span>Download</span>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
                  <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} style={buttonStyle}>
                    Previous
                  </button>

                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {Array.from({ length: Math.max(totalPages, 1) }).map((_, i) => {
                      const page = i + 1;
                      const isActive = page === currentPage;
                      return (
                        <button
                          key={page}
                          onClick={() => goToPage(page)}
                          style={{
                            ...buttonStyle,
                            backgroundColor: isActive ? "#222" : "#fff",
                            color: isActive ? "#fff" : "#222",
                            borderColor: isActive ? "#222" : "#ddd",
                          }}
                        >
                          {page}
                        </button>
                      );
                    })}
                  </div>

                  <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage >= totalPages} style={buttonStyle}>
                    Next
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

const headerCellStyle = {
  textAlign: "left",
  padding: "14px 16px",
  fontWeight: 600,
  color: "#222",
  borderBottom: "1px solid #e6e6e6",
};

const bodyCellStyle = (isLastRow) => ({
  padding: "14px 16px",
  color: "#222",
  borderBottom: isLastRow ? "none" : "1px solid #efefef",
});

const buttonStyle = {
  padding: "8px 12px",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  color: "#222",
  borderRadius: 6,
  cursor: "pointer",
  minWidth: 36,
};

export default Firmware;

function formatDate(dateString) {
  if (!dateString) return "-";
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "-";
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch (e) {
    return "-";
  }
}


