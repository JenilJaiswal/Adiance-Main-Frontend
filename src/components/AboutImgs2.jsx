import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OurOfferings = () => {
  const innovationItems = [
    {
      id: 1,
      title: "Cloud Storage",

      imageUrl: "/images/cloudAbout.webp",
      url: "/public-transport",
    },
    {
      id: 2,
      title: "Customization",
      imageUrl: "/images/customizedAbout.webp",
      url: "/remote-security",
    },
    {
      id: 4,
      title: "PCB Design",
      description:
        "Our 360-degree approach to security focuses on customization, recognizing that every security scenario is unique and requires tailored solutions. We offer specific CCTV camera types, advanced features, and smart software integrations to help customers customize their security systems.",
      imageUrl: "/images/PCBAbout.webp",
      url: "/healthcare",
    },
  ];

  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setDisplayItems(innovationItems);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="innovation-container">
        {displayItems.map((item, index) => (
          <div
            key={item.id}
            className="innovation-item"
            // style={{
            //   marginTop:
            //     index === 0 || index === displayItems.length - 1 ? "20px" : "0",
            // }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="innovation-image"
            />
            {/* <div className="item-details">
              <div className="item-title">{item.title}</div>
              <div className="item-description">{item.description}</div>
            </div> */}
            <div className="item-title-overlay">{item.title}</div>
          </div>
        ))}
        <style jsx>{`
          .innovation-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 20px;
          }

          .innovation-item {
            position: relative;
            max-width: 325px;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .innovation-item:hover {
            transform: translateY(-5px);
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
          }

          .innovation-image {
            max-width: 100%;
            height: auto;
            display: block;
            border-radius: 8px;
            transition: transform 0.3s;
          }

          .innovation-item:hover .innovation-image {
            transform: scale(1.1);
          }

          .item-details {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 20px;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
            transform: translateY(100%);
          }

          .innovation-item:hover .item-details {
            opacity: 1;
            transform: translateY(0);
          }

          .item-title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .item-description {
            font-size: 12px;
            color: #666;
          }

          .item-title-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            box-sizing: border-box;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
          }

          @media (min-width: 768px) {
            .innovation-item {
              flex-basis: 45%;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default OurOfferings;
