import React, { useState, useEffect } from "react";
import ThankYou from "./ThankYou";
import axios from "axios";

const API_URL = "https://backend.adiance.com:443/api";
// const API_URL = "http://localhost:5000/api";

const EventMainDash = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "",
  });

  // Ensure popup opens on every load/refresh
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone, // Sending as phone as per state
        slots: `${formData.date} - ${formData.timeSlot}`,
        formType: "IFSEC Event",
      };

      // console.log("Sending payload:", payload);
      await axios.post(`${API_URL}/send-email-adiance`, payload);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally handle error state here
    }
  };

  if (!isOpen) return null;

  // Time slots generation: 10:00 AM to 6:00 PM, 30 min intervals
  const generateTimeSlots = () => {
    const slots = [];
    let startHour = 10;
    let startMin = 0;
    const endHour = 18; // 6 PM

    while (startHour < endHour || (startHour === endHour && startMin === 0)) {
      const ampm = startHour >= 12 ? "PM" : "AM";
      const hour12 = startHour % 12 || 12;
      const minStr = startMin === 0 ? "00" : "30";
      slots.push(`${hour12}:${minStr} ${ampm}`);

      if (startMin === 0) {
        startMin = 30;
      } else {
        startMin = 0;
        startHour++;
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const styles = `
    @media (max-width: 768px) {
      .popup-content {
        width: 95vw !important;
        height: 90vh !important;
        padding-bottom: 10px !important;
      }
      .logo-row {
        padding: 10px 15px !important;
      }
      .logo-ifsec { height: 30px !important; }
      .logo-adiance { height: 25px !important; }
      .logo-mii { height: 40px !important; }
      
      .content-wrapper {
        flex-direction: column !important;
        padding-top: 0 !important;
      }
      .text-section {
        padding: 0 15px 10px 15px !important;
        text-align: center;
        align-items: center;
      }
      .text-section h1 {
        font-size: 20px !important;
        margin-bottom: 5px !important;
      }
      .text-section p {
        font-size: 14px !important;
      }
      
      .form-wrapper {
        padding: 5px !important;
      }
      .form-box {
        max-width: 95% !important;
        margin: 2px auto !important;
        padding: 10px !important;
      }
    }
  `;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.6)", // White overlay opacity 0.6
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(2px)",
      }}
    >
      <style>{styles}</style>
      <div
        className="popup-content"
        style={{
          width: "85vw", // Increased width
          maxWidth: "none",
          height: "85vh", // Increased height
          maxHeight: "none",
          overflowY: "auto", // Allow scrolling if needed
          paddingBottom: "20px", // Add breathing room
          background: "linear-gradient(75deg, #e95a5aff 5%, #f83e3eff 90%)",
          // opacity: 0.1,
          borderRadius: "15px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden", // Keep hidden for border radius, but y is auto above if needed (actually overflow-y overrides)
          position: "relative",
          color: "white",
        }}
      >
        {/* Background Image Overlay - Covers Entire Popup */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/images/IFSEC-main-image.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15, // Slightly increased opacity for visibility
            zIndex: 0,
            pointerEvents: "none",
          }}
        ></div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
            zIndex: 20,
          }}
        >
          ✕
        </button>

        {/* Row 1: Logos (IFSEC/Adiance Left, MakeInIndia Right) */}
        <div
          className="logo-row"
          style={{
            padding: "15px 40px 5px 40px", // Reduced padding
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          {/* Left: IFSEC & Adiance */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img
              src="/images/IFSEC-Logo.webp"
              alt="SmartTech"
              className="logo-ifsec"
              style={{ height: "50px", objectFit: "contain" }}
              loading="lazy"
              decoding="async"
              width="200"
              height="50"
            />
            <img
              src="/Adiance-Logo.webp"
              alt="Adiance"
              className="logo-adiance"
              style={{
                height: "40px",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
              }}
              loading="lazy"
              decoding="async"
              width="160"
              height="40"
            />
          </div>

          {/* Right: Make In India */}
          <img
            src="/images/MakeInIndiaLogo.jfif"
            alt="Make In India"
            className="logo-mii"
            style={{ height: "60px", objectFit: "contain" }}
            loading="lazy"
            decoding="async"
            width="120"
            height="60"
          />
        </div>

        {/* Row 3: Bottom Content (Left Text, Right Form) */}
        <div
          className="content-wrapper"
          style={{
            display: "flex",
            flex: 1,
            zIndex: 2,
            flexWrap: "wrap", // Responsive wrapping
          }}
        >
          {/* Left Side - Date & Location */}
          <div
            className="text-section"
            style={{
              flex: 1.2,
              padding: "0 40px 20px 40px", // Reduced bottom padding
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: "300px", // Ensure it doesn't get too squished
            }}
          >
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                lineHeight: "1.2",
                margin: "0 0 10px 0", // Reduced margin
                maxWidth: "90%",
              }}
            >
              Book Your Slot with Adiance Team at IFSEC India 2025
            </h1>

            <div style={{ marginTop: "5px" }}> {/* Reduced margin */}
              <p style={{ fontSize: "14px", opacity: 0.9 }}>Join us at</p>
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                11th - 13th December 2025
              </p>
            </div>

            <div style={{ marginTop: "10px" }}> {/* Reduced margin */}
              <p style={{ fontSize: "14px", fontWeight: "500" }}>
                | Booth i10, Hall 4, Bharat Mandapam, New Delhi
              </p>
            </div>
          </div>

          {/* Right Side - Form or Thank You */}
          <div
            className="form-wrapper"
            style={{
              flex: 0.8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div
              className="form-box"
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                width: "100%",
                maxWidth: "350px",
                height: "auto", // Changed to auto
                padding: "15px", // Reduced padding
                color: "#333",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {isSubmitted ? (
                <ThankYou onClose={handleClose} />
              ) : (
                <>
                  <h3
                    style={{
                      textAlign: "center",
                      fontSize: "14px", // Reduced font size
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    Get In Touch
                  </h3>
                  <div
                    style={{
                      width: "30px",
                      height: "2px",
                      backgroundColor: "#333",
                      margin: "0 auto 10px auto", // Reduced margin
                    }}
                  ></div>

                  <form
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px", // Reduced gap
                      flex: 1,
                    }}
                  >
                    <div>
                      <label
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          display: "block",
                          marginBottom: "3px",
                        }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "8px",
                          borderRadius: "5px",
                          border: "1px solid #ccc",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    <div>
                      <label
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          display: "block",
                          marginBottom: "3px",
                        }}
                      >
                        Email address*
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "8px",
                          borderRadius: "5px",
                          border: "1px solid #ccc",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    <div>
                      <label
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          display: "block",
                          marginBottom: "3px",
                        }}
                      >
                        phone number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "8px",
                          borderRadius: "5px",
                          border: "1px solid #ccc",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    {/* Date Selection */}
                    <div>
                      <label
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          display: "block",
                          marginBottom: "3px",
                        }}
                      >
                        Book a SLOT
                      </label>
                      <select
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "8px",
                          borderRadius: "5px",
                          border: "1px solid #ccc",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      >
                        <option value="" disabled>
                          Select Date
                        </option>
                        <option value="11 Dec">11 Dec</option>
                        <option value="12 Dec">12 Dec</option>
                        <option value="13 Dec">13 Dec</option>
                      </select>
                    </div>

                    {/* Time Slot Selection */}
                    <div>
                      <label
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          display: "block",
                          marginBottom: "3px",
                        }}
                      >
                        Time Slot
                      </label>
                      <select
                        name="timeSlot"
                        required
                        value={formData.timeSlot}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "8px",
                          borderRadius: "5px",
                          border: "1px solid #ccc",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      >
                        <option value="" disabled>
                          Select Time
                        </option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="submit"
                      style={{
                        marginTop: "auto",
                        backgroundColor: "#b91c1c",
                        color: "white",
                        padding: "10px",
                        border: "none",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                    >
                      SUBMIT
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventMainDash;
