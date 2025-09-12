import React from "react";
import Header from "./Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Innovation = () => {
  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  // Sample data for innovation items
  const innovationItems = [
    {
      id: 1,
      title: "OEM & ODM",
      description:
        "Adiance is transitioning from an Original Equipment Manufacturer (OEM) to a hybrid OEM & Original Design Manufacturer (ODM), focusing on customized Printed Circuit Boards for surveillance cameras and electronic devices, enhancing efficiency and reducing lead times.",
      imageUrl: "/images/oemodm.png",
    },
    {
      id: 2,
      title: "Cloud System",
      description:
        "Adiance's NVR-free approach and cloud storage offer cost-effective, scalable, and secure solutions for modern surveillance environments. This eliminates on-premises hardware, simplifies setup, and enhances data security, allowing seamless integration with other services.",
      imageUrl: "/images/NVRFree.png",
    },
    {
      id: 3,
      title: "Patent",
      description:
        "Our cloud service technology utilizes advanced compression algorithms to optimize data storage, efficiency, and bandwidth usage, reducing storage size, costs, and ensuring seamless scalability, enabling businesses to manage data growth effectively.",
      imageUrl: "/images/patent.jpg",
    },
    {
      id: 4,
      title: "Customized",
      description:
        "Our 360-degree approach to security focuses on customization, recognizing that every security scenario is unique and requires tailored solutions. We offer specific CCTV camera types, advanced features, and smart software integrations to help customers customize their security systems.",
      imageUrl: "/images/customized.png",
    },
    {
      id: 5,
      title: " Backward Integration",
      description:
        "Our company is transitioning from OEM services to embracing both OEM and ODM approaches, demonstrating our commitment to backward integration. This allows us to offer a wider range of products, cater to diverse market demands, and foster deeper partnerships, enhancing innovation and product quality. ",
      imageUrl: "/images/backward.png",
    },
    {
      id: 6,
      title: "PTZ Surveillance",
      description:
        "PTZ cameras are versatile surveillance tools used in public spaces and industrial settings. They offer comprehensive coverage with dynamic control over pan, tilt, and zoom functions, focusing on specific areas of interest. These cameras are essential in sectors like transportation, infrastructure, education, hospitality, and retail, providing flexible control and enhanced security measures.",
      imageUrl: "/images/PTZCamera.jpg",
    },
    {
      id: 7,
      title: "Panoramic",
      description:
        "Panoramic surveillance cameras provide a 360-degree field of view, eliminating blind spots and providing comprehensive coverage. They offer high-resolution imaging, low-light performance, and advanced detection capabilities. They are used in large outdoor areas and indoor environments, enhancing security and situational awareness. They can cover entire spaces with a single unit, reducing the need for multiple cameras.",
      imageUrl: "/images/Panoromic.jpg",
    },
    {
      id: 8,
      title: "Smart ANPR/LPR",
      description:
        "Smart Automatic Number Plate Recognition/License Plate Recognition (ANPR/LPR) surveillance cameras use optical character recognition technology to accurately capture and interpret vehicle license plates. They offer rapid identification, high accuracy rates, and integration with databases for instant verification. These cameras are used in law enforcement for traffic monitoring, parking management, toll collection, and vehicle access control, enhancing efficiency and security.",
      imageUrl: "/images/SmartLPRANPR.jpg",
    },
    {
      id: 9,
      title: "Smart Facial Recognition",
      description:
        "Smart facial recognition surveillance cameras use advanced algorithms to identify individuals in real-time based on facial features. They offer high-definition imaging, low-light performance, and remote access for 24/7 surveillance. These cameras are used in law enforcement, retail, and access control systems for security, customer experiences, and public safety. They automate identification processes, streamlining security operations.",
      imageUrl: "/images/FacialRecognition.jpg",
    },
    {
      id: 10,
      title: "Super WDR",
      description:
        "The Super WDR surveillance camera uses advanced imaging technology to capture clear, detailed footage in challenging lighting conditions. It balances exposure levels in bright and dark areas, ensuring accurate image reproduction. This camera is crucial for high-security environments like banks, casinos, and government facilities, as well as outdoor settings like parking lots and traffic intersections, enhancing surveillance effectiveness and security.",
      imageUrl: "/images/SuperWDR.png",
    },
    {
      id: 11,
      title: "Smart Technology",
      description:
        "Smart technology surveillance cameras use advanced features like facial recognition, object tracking, and behavioral analysis to detect and alert authorities to suspicious activities. They enhance security in public spaces, transportation hubs, and commercial establishments. AI algorithms provide real-time insights, enabling proactive responses to potential threats. They facilitate efficient investigation processes and safeguard communities, improving public safety and deterring criminal activities.",
      imageUrl: "/images/SmartTech.png",
    },
    {
      id: 12,
      title: "Artificial Intelligence",
      description:
        "AI-based surveillance cameras, using deep learning algorithms, detect and track people, vehicles, and objects in real-time. They are used in law enforcement, retail, transportation, and smart cities to enhance security, prevent crime, and respond to emergencies. They also aid in traffic management, crowd control, and retail analytics, improving operational efficiency and public safety. With their ability to analyze vast data, AI surveillance cameras are essential tools for maintaining security.",
      imageUrl: "/images/Adiance-Banner-002-1024x415.jpg",
    },
    {
      id: 13,
      title: "Smart WiFi & Smart 4G",
      description:
        "Smart WiFi and Smart 4G surveillance cameras offer versatile features like easy installation and remote access via smartphone apps. They provide high-definition video recording, motion detection, two-way audio communication, and cloud storage options. These cameras are used in home security, small business monitoring, pet surveillance, and outdoor surveillance where traditional wired connections are impractical. They provide convenient and reliable security solutions.",
      imageUrl: "/images/SmartWifi.png",
    },
    {
      id: 14,
      title: "Innovation",
      description:
        "Surveillance cameras have advanced features like high-definition imaging, wide-angle coverage, low-light performance, AI-powered analytics, remote monitoring, and tamper detection. These innovations enhance security monitoring, providing detailed capture, real-time insights, remote monitoring, and seamless integration capabilities, enhancing public safety and security in the modern world.",
      imageUrl: "/images/Innovation.png",
    },
    {
      id: 15,
      title: "VMS",
      description:
        "Our CCTV cameras are integrated with our Video Management System (VMS), enhancing efficiency and scalability through centralized management, real-time monitoring, and advanced analytics, enhancing situational awareness and providing valuable insights.",
      imageUrl: "/images/VMS.jpg",
    },
  ];

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://www.adiance.com/innovation" />
        <title>Innovative Surveillance Solutions - ANPR, Cloud Systems</title>
        <meta
          name="description"
          content="Cutting-edge surveillance with Adiance Technologies: AI PTZ cameras, ANPR, cloud security, and custom OEM/ODM solutions for smart security."
        />

        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"Innovation"} />
      <div className="innovation-container">
        {innovationItems.map((item) => (
          <div key={item.id} className="innovation-item">
            <img src={item.imageUrl} alt={item.title} className="item-image" />
            <div className="item-details">
              {/* <h3 className="item-title">{item.title}</h3> */}
              <p className="item-description">{item.description}</p>
            </div>
            <div className="item-title-overlay">
              <h4 style={{ fontSize: "17px" }}>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      <style jsx>{`
        .innovation-container {
          display: grid;
          grid-gap: 50px;
          padding: 20px;
          margin: 5% 10%;
          grid-template-columns: repeat(
            auto-fit,
            minmax(300px, 1fr)
          ); /* Adjust column width as per your requirement */
        }

        .innovation-item {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, z-index 0.3s ease;
        }

        .innovation-item:hover {
          transform: scale(1.05);
          z-index: 1;
        }

        .item-image {
          width: 100%;
          height: 100%; /* Ensure the image fills its container */
          border-radius: 10px;
          object-fit: cover; /* Stretch the image to fit the container while maintaining aspect ratio */
          transition: transform 0.3s ease;
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
          transform: translateY(100%);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .innovation-item:hover .item-details {
          opacity: 1;
          transform: translateY(0);
        }

        .item-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .item-description {
          font-size: 18px;
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
        }
      `}</style>
    </div>
  );
};

export default Innovation;
