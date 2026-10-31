"use client";

import React, { useState, useEffect, useRef } from "react";
import ThankYou from "./ThankYou";
import axios from "axios";
import "./EventMainDash.css";

const API_URL = "https://backend.adiance.com:443/api";
// const API_URL = "http://localhost:5000/api";

// IFSEC India 2026 popup. Loaded by EventPopupLoader.jsx (mounted in
// app/layout.js) once the page has finished loading.
const EVENT_IMAGE_SRC = "/images/ifsec-india-2026-popup-1080.webp";
const EVENT_IMAGE_SRCSET = [640, 828, 1080]
  .map((w) => `/images/ifsec-india-2026-popup-${w}.webp ${w}w`)
  .join(", ");
// Rendered image width at each breakpoint in EventMainDash.css, so the
// browser downloads only the size it needs
const EVENT_IMAGE_SIZES =
  "(min-width: 720px) 600px, (orientation: landscape) and (min-width: 560px) 50vw, calc(100vw - 32px)";
const EVENT_ALT =
  "Adiance at IFSEC India 2026 — Booth E-10, Bharat Mandapam, New Delhi, 3–5 December 2026";
const EVENT_DATES = ["3 Dec", "4 Dec", "5 Dec"];
const CUSTOMER_TYPES = [
  "Government",
  "Stockist",
  "Regional Distributor",
  "Sub Regional Distributor",
  "Dealer",
  "System Integrator",
  "Installer",
  "Customer",
  "New Customer",
  "End User",
  "Other",
];

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

const TIME_SLOTS = generateTimeSlots();

const EventMainDash = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    customerType: "",
    date: "",
    timeSlot: "",
  });
  const dialogRef = useRef(null);

  // Open only once the image is downloaded and decoded, so the popup appears
  // fully drawn instead of painting in. If the image fails, don't show it.
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.sizes = EVENT_IMAGE_SIZES;
    img.srcset = EVENT_IMAGE_SRCSET;
    img.src = EVENT_IMAGE_SRC;
    img
      .decode()
      .then(() => {
        if (!cancelled) setIsOpen(true);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Focus the dialog itself (not the close button) so keyboard users land
    // inside it without a focus ring showing on open
    dialogRef.current?.focus({ preventScroll: true });

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

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
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone, // Sending as phone as per state
        customerType: formData.customerType, // same key as the contact form
        slots: `${formData.date} - ${formData.timeSlot}`,
        formType: "IFSEC Event",
      };

      await axios.post(`${API_URL}/send-email-adiance`, payload);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="event-popup-overlay" onClick={handleClose}>
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="event-popup-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Book your slot with Adiance at IFSEC India 2026"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="event-popup-close"
          aria-label="Close"
          onClick={handleClose}
        >
          &times;
        </button>

        {/* Image on top + form below on phones/tablets, side by side on
            wider screens (see EventMainDash.css) */}
        <div className="event-popup-card">
          <div className="event-popup-media">
            <img
              className="event-popup-image"
              src={EVENT_IMAGE_SRC}
              srcSet={EVENT_IMAGE_SRCSET}
              sizes={EVENT_IMAGE_SIZES}
              alt={EVENT_ALT}
              width={1080}
              height={1080}
              decoding="async"
            />
          </div>

          {/* Slot booking form or Thank You */}
          <div className="event-popup-panel">
            <div className="event-popup-panel-inner">
              {isSubmitted ? (
                <ThankYou onClose={handleClose} />
              ) : (
                <>
                  <h2 className="event-popup-title">Book Your Slot</h2>
                  <p className="event-popup-subtitle">
                    IFSEC India 2026 &middot; Booth E-10
                  </p>

                  {/* Labels are visually hidden where space is tight (the
                      placeholders carry the meaning) but always read out by
                      screen readers — see .event-popup-label in the CSS */}
                  <form className="event-popup-form" onSubmit={handleSubmit}>
                    <label className="event-popup-field event-popup-field--wide">
                      <span className="event-popup-label">Name</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </label>

                    <label className="event-popup-field event-popup-field--wide">
                      <span className="event-popup-label">Email address*</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </label>

                    <label className="event-popup-field event-popup-field--wide">
                      <span className="event-popup-label">Phone number</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        autoComplete="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </label>

                    <label className="event-popup-field event-popup-field--wide">
                      <span className="event-popup-label">Who you are</span>
                      <select
                        name="customerType"
                        required
                        value={formData.customerType}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select who you are
                        </option>
                        {CUSTOMER_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="event-popup-field">
                      <span className="event-popup-label">Book a slot</span>
                      <select
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select date
                        </option>
                        {EVENT_DATES.map((date) => (
                          <option key={date} value={date}>
                            {date}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="event-popup-field">
                      <span className="event-popup-label">Time slot</span>
                      <select
                        name="timeSlot"
                        required
                        value={formData.timeSlot}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select time
                        </option>
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </label>

                    <button
                      type="submit"
                      className="event-popup-submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>

                    {submitError && (
                      <p className="event-popup-error" role="alert">
                        {submitError}
                      </p>
                    )}
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
