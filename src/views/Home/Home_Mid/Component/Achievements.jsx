"use client";

import React, { useEffect, useState, useRef } from "react";

// Custom hook for count-up animation with viewport detection
const useCountUp = (target, duration = 1000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [isVisible, target, duration]);

  return { count, ref };
};

const AnimatedValue = ({ value }) => {
  const hasNumber = /\d/.test(value);
  const firstNumberMatch = hasNumber ? value.match(/\d+/) : null;
  const numericValue = firstNumberMatch ? parseInt(firstNumberMatch[0], 10) : 0;
  
  const { count, ref } = useCountUp(numericValue, 500);

  if (!hasNumber) {
    return <span>{value}</span>;
  }

  const suffix = value.replace(firstNumberMatch[0], "");
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Achievements = ({ 
  heading = "Why Adiance Is the Right Choice for Trusted Security System Manufacturing Excellence",
  description = "Recognized as a top security camera manufacturer in India trusted by enterprises worldwide."
}) => {
  const achievementsData = [
    {
      value: "20+",
      label: "Years of Engineering Excellence",
      bgColor: "#ECECEC",
      valueColor: "#bf0603",
      labelColor: "#000000",
      dashColor: "#bf0603",
      border: "1px solid #bf0603",
    },
    {
      value: "15+",
      label: "Quality Checks",
      bgColor: "#bf0603",
      valueColor: "#FFFFFF",
      labelColor: "#FFFFFF",
      dashColor: "#FFFFFF",
      border: "none",
    },
    {
      value: "24x7",
      label: "Toll-Free Support",
      bgColor: "#ECECEC",
      valueColor: "#bf0603",
      labelColor: "#000000",
      dashColor: "#bf0603",
      border: "1px solid #bf0603",
    },
    {
      value: "100%",
      label: "Made in India, for the World",
      bgColor: "#bf0603",
      valueColor: "#FFFFFF",
      labelColor: "#FFFFFF",
      dashColor: "#FFFFFF",
      border: "none",
    },
  ];

  return (
    <div className="achievements-container">
      <div className="achievements-header">
        <h2 className="achievements-title">{heading}</h2>
        <p className="achievements-description">{description}</p>
      </div>

      <div className="marquee-container">
        <div className="marquee-content">
          {[...achievementsData, ...achievementsData].map((item, index) => (
            <div 
              key={index} 
              className="achievement-card"
              style={{
                backgroundColor: item.bgColor,
                color: item.valueColor,
                border: item.border
              }}
            >
              <div 
                className="achievement-value"
                style={{ color: item.valueColor }}
              >
                <AnimatedValue value={item.value} />
              </div>
              <div 
                className="achievement-label"
                style={{ color: item.labelColor }}
              >
                {item.label}
                <div 
                  className="achievement-dash"
                  style={{ backgroundColor: item.dashColor }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .achievements-container {
          position: relative;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 60px 20px;
          background-color: #ffffff;
          width: 100%;
          overflow: hidden;
          margin-top: 1%;
        }

        .achievements-header {
          margin-bottom: 40px;
        }

        .achievements-title {
          font-family: "Roboto", sans-serif;
          color: #444444;
          font-size: 48px;
          font-weight: 600;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .achievements-description {
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #000000;
          margin: 0 auto;
          text-align: center;
          line-height: 1.4;
          max-width: 1565px;
        }

        .marquee-container {
          width: 100%;
          overflow: hidden;
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }

        .marquee-content {
          display: flex;
          width: max-content;
          flex-wrap: nowrap;
          animation: marqueeScroll 15s linear infinite;
        }

        .achievement-card {
          width: 280px;
          margin: 0 16px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          position: relative;
        aspect-ratio: 1/1;
        }

        .achievement-value {
          font-size: clamp(48px, 6vw, 64px);
          font-weight: 600;
          position: absolute;
          top: 50%;
          left: 50%;
          text-align: center;
          transform: translate(-50%, -50%);
        }

        .achievement-label {
          font-size: clamp(12px, 1.5vw, 16px);
          font-weight: 700;
          position: absolute;
          bottom: 20px;
          text-align: center;
          width: calc(100% - 40px);
          left: 50%;
          transform: translateX(-50%);
          line-height: 1.2;
        }

        .achievement-dash {
          width: 20px;
          height: 3px;
          border-radius: 24px;
          margin: 5px auto 0;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Tablet Styles */
        @media screen and (max-width: 1024px) {
          .achievements-container {
            padding: 50px 15px;
          }

          .achievements-title {
            font-size: 36px;
          }

          .achievements-description {
            font-size: 16px;
          }

          .achievement-card {
            width: 220px;
            margin: 0 16px;
            padding: 15px;
          }

          .achievement-value {
            font-size: clamp(48px, 6vw, 64px);
          }

          .achievement-label {
            font-size: clamp(12px, 1.5vw, 16px);
            bottom: 15px;
          }
        }

        /* Mobile Styles */
        @media screen and (max-width: 768px) {
          .achievements-container {
            padding: 40px 10px;
          }

          .achievements-title {
            font-size: 26px;
          }

          .achievements-description {
            font-size: 14px;
          }

          .achievement-card {
            width: 166px;
            margin: 0 4px;
            padding: 10px;
          }

          .achievement-value {
            font-size: clamp(32px, 8vw, 48px);
          }

          .achievement-label {
            font-size: clamp(12px, 2vw, 12px);
            bottom: 10px;
          }
        }

        /* Small Mobile Styles */
        @media screen and (max-width: 480px) {
          .achievements-container {
            padding: 30px 10px;
          }

          .achievements-title {
            font-size: 24px;
          }

          .achievements-description {
            font-size: 13px;
          }

          .achievement-card {
            width: 150px;
            margin: 0 2px;
          }
        }
      `}</style>
    </div>
  );
};

export default Achievements;