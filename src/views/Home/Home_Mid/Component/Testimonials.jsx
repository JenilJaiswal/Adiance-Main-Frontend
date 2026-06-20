"use client";

import { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    title: "Smart City Program Manager",
    review: "ArcisAI S-Series AI CCTV Cameras gave us real-time visibility across plazas and transit hubs. We moved from passive footage to instant actions—crowd alerts, incident clips, and clear audit trails. Exactly what a modern city needs.",
    star: 5,
  },
  {
    title: "University Security Director",
    review: "We deployed EdgeAI CCTV Cameras in exam halls and corridors. False alarms dropped, proctoring got easier, and the team finally has one app for live view, alerts, and reports. It's made campus security calmer and smarter.",
    star: 5,
  },
  {
    title: "Hospital Operations Head",
    review: "The AI Security Cameras helped us protect ICU entrances and pharmacy counters without adding staff. Access control, clear face captures, and reliable night vision keep compliance simple and patients safer.",
    star: 5,
  },
  {
    title: "Banking (Branch Network Lead)",
    review: "With Arc-S-Series AI CCTV Cameras, we standardized security across branches and ATMs. Instant deterrence and clean evidence shortened investigations and improved audit readiness. It's security we can bank on.",
    star: 5,
  },
  {
    title: "Traffic Management Center Supervisor",
    review: "Our EdgeAI CCTV Cameras now flag incidents and lane violations in seconds. Operators get fewer noise alerts and more actionable ones—signal timing and response units both improved.",
    star: 5,
  },
  {
    title: "Retail Chain Loss Prevention Manager",
    review: "The AI Security Cameras caught missing-object events in stockrooms and identified repeat patterns. Shrink went down, and the reports helped us adjust staffing and floor layout. Real ROI, not just video.",
    star: 5,
  },
  {
    title: "Manufacturing Plant EHS Manager",
    review: "ArcisAI S-Series AI CCTV Cameras gave us clear coverage on loading bays and restricted zones. Line-crossing and area-intrusion alerts trigger instantly, and the footage is actually usable for training and safety reviews.",
    star: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={index < rating ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleBack = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = (currentWidth) => {
    const numToShow =
      currentWidth < 600 ? 1 : currentWidth < 960 ? 2 : currentWidth < 1280 ? 3 : 4;
    const visible = [];
    for (let i = 0; i < numToShow; i++) {
      visible.push(testimonials[(index + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials(width);

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Testimonials</h2>
        </div>

        <div className="testimonials-content">
          <div className="testimonials-grid">
            {visibleTestimonials.map((testimonial, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-card-content">
                  <StarRating rating={testimonial.star} />
                  <p className="testimonial-review">{testimonial.review}</p>
                  <h3 className="testimonial-title">{testimonial.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-controls">
          <button onClick={handleBack} className="testimonial-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </button>
          <button onClick={handleNext} className="testimonial-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
