import React from "react";
import ProductSinglePage from "./ProductSinglePage";
import Header from "./Header";
import Footer from "./Footer";
import NavHeader from "./NavHeader";
import { Helmet } from "react-helmet";
import HeroSection from "./s-series-page/HeroSection";
import ValuedClients from "./s-series-page/ValuedClients";
import WhySSeriesComponent from "./s-series-page/WhySSeriesComponent";
import OneStopSolution from "./s-series-page/OneStopSolution";
import Features from "./s-series-page/Features";
import LetestNews from "./s-series-page/LetestNews";
import Industries from "./s-series-page/Industries";
import SseriesCamera from "./s-series-page/SseriesCamera";
import Testimonials from "./s-series-page/Testimonials";
import TechnologyPartner from "./s-series-page/TechnologyPartner";
import { useLocation } from "react-router-dom";

function SSeries({ productTitle, imgIdx }) {
  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;
  // Assuming products is an array of product objects]
  // Made the list of ther images so that for another product which is identical we can show the another image  but sane product like 4K bullet

  // Find the product object based on the title

  const products = [
    {
      title: "ADIANCE CLOUD BASED THERMAL CAMERA – (VM-72F210AC)",
      description:
        "AI & Cloud-Based Thermal Fever Screening Camera with VMS & VAS Solution By monitoring the visitor’s temperature, it is most directly known whether the visitor has a fever or not, and even further can speculate on the effect of the COVID-19 and further send employees/ visitors to quarantine for treatment and prevention",
      imgUrl: "/images/P2-VMUKTI-CLOUD-BASED-THERMAL-CAMERA-VM-72F210AC-01.png",
      benefits: [
        "Easy Installation and Integration",
        "Fast, flexible and accurate screening for preliminary measurement",
        "Monitors body temperature from a safe remote location",
        "Protects your office/home premises from COVID-19 pandemic",
        "Screen body temperature without letting people know of the same",
        "Allows easy record keeping of employees and visitors",
        "Ensures the safety of elderly people by confirming suitable social distancing in public places",
        "Ensures that disabled and indigenous people have safe access to public places",
        "Monitor visitor/employee activities and assist in making the right health-related decisions",
      ],
      features: [
        "Temperature Screening",
        "Accuracy +0.3°C",
        "Abnormal Alarm",
        "Full HD (1080p)",
        "AP Hotspot",
        "Cloud Storage",
        "3G/4G SIM Support",
        "Wi-Fi Support",
        "Two-way Audio",
        "Rechargeable Battery",
      ],
      applications: [
        "Corporate House monitoring",
        "Govt. Office monitoring",
        "Govt. Service Centres monitoring",
        "Hotel monitoring",
        "Hospital monitoring",
        "Gym monitoring",
        "Airports monitoring",
        "Bus Station monitoring",
        "Railway Station monitoring",
        "Metro Station monitoring",
        "Retail Showroom monitoring",
        "Malls monitoring",
        "Banks monitoring",
        "Schools monitoring",
        "College/ Universities monitoring",
      ],
      specifications: [
        "Type: Indoor",
        "No. of People: 1 Person at a time",
        "Human Detection: 5 Mtr",
        "Temperature Detection: 0.2 to 1 Mtr.",
        "Platform: Cloud-Based",
        "Video: HD, Live feed",
        "Network: Wi-Fi, 4G",
        "Temperature angle: 32 degrees left and right, 32 degrees up and down",
        "Resolution: 2 MP CMOS Sensor, 1920x1080P",
        "Battery: 2pcs 3000mah battery",
        "Cloud: Support Cloud Monitoring and Storage",
      ],
      setup:
        "You don’t need any professional team or technical knowledge to install the cameras. It’s a simple DIY process that takes just a minute. After that, you can control everything using your computers and mobiles.",
    },
    {
      title: "ADIANCE CLOUD BASED THERMAL CAMERA – (VM-72N210AC)",
      description:
        "AI & Cloud-Based Thermal Fever Screening Camera with VMS & VAS Solution By monitoring the visitor’s temperature, it is most directly known whether the visitor has a fever or not, and even further can speculate on the effect of the COVID-19 and further send employees/ visitors to quarantine for treatment and prevention.",
      imgUrl: "/images/P1-VMUKTI-CLOUD-BASED-THERMAL-CAMERA-VM-72N210AC-01.png",
      benefits: [
        "Fast and Accurate Screening",
        "Multi-Person Monitoring",
        "Easy Installation and Integration",
        "Fast, flexible and accurate screening for preliminary measurement",
        "Monitors body temperature from a safe remote location",
        "Protects your office/home premises from COVID-19 pandemic",
        "Screen body temperature without letting people know of the same",
        "Allows easy record keeping of employees and visitors",
        "Ensures the safety of elderly people by confirming suitable social distancing in public places",
        "Ensures that disabled and indigenous people have safe access to public places",
        "Monitor visitor/employee activities and assist in making the right health-related decisions",
      ],
      features: [
        "No-contact infrared sensor-integrated technology that picks up positively contagious people",
        "Helps to detect people with high temperature even in the queues and crowds",
        "Replace manual screening and offers more secure and accurate monitoring",
        "Allows you to screen your visitors, guests, and employees to detect fever",
        "Multi-person monitoring in a single instance of time",
        "A preventive measure to offer extra protection against COVID-19",
      ],
      applications: [
        "Corporate House",
        "Govt. Office",
        "Govt. Service Centres",
        "Hotel",
        "Hospital",
        "Gym",
        "Airports",
        "Bus Station",
        "Railway Station",
        "Metro Station",
        "Retail Showroom",
        "Malls",
        "Banks",
        "Schools",
        "College/ Universities",
      ],
      specifications: [
        "Type: Indoor",
        "No. of People: 5 to 6 Person",
        "Temperature Detection Range: 5 Mtr.",
        "Platform: Cloud-Based",
        "Video: HD, Live feed",
        "Network: LAN, 4G",
        "Wavelength range: 8～14μm",
        "Resolution: 1080P, 640P, 320P",
        "Abnormal temperature alarm: Alarm of over temperature of 37.3 ℃ automatically",
        "Emissivity black background correction: Automatic correction according to input emissivity and background temperature, emissivity 0.01~1 adjustable",
        "Cloud: Support Cloud Monitoring and Storage",
      ],
      setup:
        "You don’t need any professional team or technical knowledge to install the cameras. It’s a simple DIY process that takes just a minute. After that, you can control everything using your computers and mobiles.",
    },
    // Add more products as needed
    {
      title: "ADIANCE CLOUD BASED THERMAL CAMERA – (VM-72L210AC)",
      description:
        "AI & Cloud-Based Thermal Fever Screening Camera with VMS & VAS Solution By monitoring the visitor’s temperature, it is most directly known whether the visitor has a fever or not, and even further can speculate on the effect of the COVID-19 and further send employees/ visitors to quarantine for treatment and prevention.",
      imgUrl: "/images/Vmukti-Thermal-Camera-New-1.png",
      benefits: [
        "Fast and Accurate Screening",
        "Multi-Person Monitoring",
        "Easy Installation and Integration",
        "Fast, flexible and accurate screening for preliminary measurement",
        "Monitors body temperature from a safe remote location",
        "Protects your office/home premises from COVID-19 pandemic",
        "Screen body temperature without letting people know of the same",
        "Allows easy record keeping of employees and visitors",
        "Ensures the safety of elderly people by confirming suitable social distancing in public places",
        "Ensures that disabled and indigenous people have safe access to public places",
        "Monitor visitor/employee activities and assist in making the right health-related decisions",
      ],
      features: [
        "No-contact infrared sensor-integrated technology that picks up positively contagious people",
        "Helps to detect people with high temperature even in the queues and crowds",
        "Replace manual screening and offers more secure and accurate monitoring",
        "Allows you to screen your visitors, guests, and employees to detect fever",
        "Multi-person monitoring in a single instance of time",
        "A preventive measure to offer extra protection against COVID-19",
      ],
      applications: [
        "Border monitoring",
        "Airports monitoring",
        "Bus Station monitoring",
        "Railway Station monitoring",
        "Metro Station monitoring",
        "Stadiums Monitoring",
        "Hospital monitoring",
        "Malls & Parking Lots monitoring",
        "College/ Universities monitoring",
      ],
      specifications: [
        "Type: Outdoor",
        "No. of People: 100 to 120 Person",
        "Detection Range: 400+ Mtr.",
        "Platform: Cloud-Based",
        "Video: HD, Live feed",
        "Network: LAN, 4G, WI-FI",
        "Video Compression: H.265, H.264",
        "Face Snapping: Built-in deep learning AI algorithm, Supports simultaneous detection of 120 -130 faces",
        "Cloud: Support Cloud Monitoring and Storage",
        "Protection: IP66",
      ],
      setup:
        "You don’t need any professional team or technical knowledge to install the cameras. It’s a simple DIY process that takes just a minute. After that, you can control everything using your computers and mobiles.",
    },

    {
      title: "Edge AI Based PTZ ANPR Bullet Camera",
      description:
        "Adiance’s smart product family, 4k products are equipped with Edge AI features such as ANPR detection, object detection, facial recognition, Intrusion, and more. Adiance FHD, H.265+ PTZ Bullet Network Camera delivers up to FHD resolution (2592×1944, effectively four times that of Full HD) at 30 frames per second (fps), providing users with an ultra-high-definition video viewing experience.",
      imgUrl: [
        "/images/P6-Edge-AI-Based-PTZ-ANPR-Bullet-Camera-VM-72BPTZ5AIVE-01.png",
        "/images/P6-Edge-AI-Based-PTZ-ANPR-Bullet-Camera-VM-72BPTZ5AIVE-02.png",
        "/images/P6-Edge-AI-Based-PTZ-ANPR-Bullet-Camera-VM-72BPTZ5AIVE-03.png",
      ],
      benefits: [
        "Enhanced security monitoring with FHD Video surveillance",
        "Increased clarity in low-light situations",
        "PTZ Camera can work over the network",
        "Cloud monitoring for optimum security and reliability",
        "FHD streams to make every ANPR detail visible",
        "Intelligent compression saves recording space by optimizing video performance based on available bandwidth",
        "Monitor remotely from any location across the planet",
        "Access live streams from your desktop, mobile, and tablets",
        "Built-in motion detection to track every intruder",
        "Clear Night imaging for improved low light performance",
        "Wide Angle View for wide coverage",
      ],
      features: [
        "Accurate and fast focusing",
        "Smart IR, up to 120m IR distance",
        "Get maximum coverage by the digital 4x optical zoom",
        "Review fine details in increased resolution without losing image quality",
        "Record 4K FHD video and experience accurate picture and color representation",
        "Environmental durability",
        "Auto Shutter speed control for moving objects",
        "Outstanding low light performance",
        "SD card edge recording to keep your data safe",
      ],
      applications: [
        "Highway Monitoring",
        "Hotel monitoring",
        "Hospital monitoring",
        "Parking Lot monitoring",
        "Airports monitoring",
        "Bus Station monitoring",
        "Railway Station monitoring",
        "Metro Station monitoring",
        "Malls monitoring",
        "Banks monitoring",
        "Schools monitoring",
        "College/ Universities monitoring",
      ],
      specifications: [
        "Sensor: 1/2.8″ Progressive Scan CMOS",
        "Display Resolution: 2592×1944",
        "Focal Length: 5.3~64mm, 12X Optical Zoom",
        "IR Distance: Up to 120m",
        "View Angle: H57°~H4°/D69°~D5°/V44°~V1°",
        "Compression: H.265 +/H.265(HEVC)/H.264 +/H.264/MJPEG",
        "Bit Rate: 16~4096kbps",
        "Power: DC 12V±10%",
        "Power Consumption: 5.5W MAX 11W MAX (With IR on)",
        "SD Card Support: up to 256GB",
      ],
      setup:
        "We have added Various design features to shorten installation times. The camera has also been designed to be capable of pointing in the preferred direction at the preferred location. When attached to the mounting plate, the camera’s direction can be easily changed at intervals of PTZ Rotating the viewing area around the lens further allows the lens to be pointed in the desired direction.",
    },

    {
      title: "Edge AI Based Face Recognition Dome Camera",
      description:
        "Adiance’s smart product family, 4k products are equipped with Edge AI features such as ANPR detection, object detection, facial recognition, Intrusion, and more. Adiance FHD, H.265+ Bullet Camera delivers up to 4k resolution 3840×2160, effectively four times that of Full HD) at 30 frames per second (fps), providing users with an ultra-high-definition video viewing experience.",
      imgUrl: [
        "/images/P5-Edge-AI-Based-Face-Recognition-VM-72D5AIVE-01-1.png",
        "/images/P5-Edge-AI-Based-Face-Recognition-VM-72D5AIVE-02.png",
      ],
      benefits: [
        "Enhanced security monitoring with FHD Video surveillance",
        "Increased clarity in low-light situations",
        "4k Camera can works over the network",
        "Cloud monitoring for optimum security and reliability",
        "FHD streams to make every face detail visible",
        "Intelligent compression saves recording space by optimizing video performance based on available bandwidth",
        "Monitor remotely from any location across the planet",
        "Access live streams from your desktop, mobile, and tablets",
        "Built-in motion detection to track every intruder",
        "Clear Night imaging for improved low light performance",
        "Wide Angle View for wide coverage",
      ],
      features: [
        "Accurate and fast focusing",
        "Smart IR, up to 120m IR distance",
        "Get maximum coverage by the digital 4x optical zoom",
        "Review fine details in increased resolution without losing image quality",
        "Record 4K FHD video and experience accurate picture and color representation",
        "Environmental durability",
        "Auto Shutter speed control for moving objects",
        "Outstanding low light performance",
        "SD card edge recording to keep your data safe",
      ],
      applications: [
        "Banking",
        "Enterprise",
        "Government",
        "Education",
        "Critical Infrastructure",
        "Power Sector",
        "Smart City",
        "Transportation",
        "Hospitality",
        "Retail",
        "Oil & Gas",
        "Industries",
      ],
      specifications: [
        "Sensor: 1/2.8″ Progressive Scan CMOS",
        "Display Resolution: 3840×2160",
        "Lens: Motorized 2.7~13.5mm @F1.4 P-Iris(Optional)",
        "IR Distance: Up to 50m",
        "View Angle: H96°~H33°/D112°~D37°/V53°~V18°",
        "Compression: H.265 +/H.265(HEVC)/H.264 +/H.264/MJPEG",
        "Bit Rate: 16Kbps~16Mbps",
        "Power: DC 12V±10%",
        "Power Consumption: 6.2W MAX 9.4W MAX (With IR on)",
        "SD Card Support: up to 256GB",
      ],
      setup:
        "We have added Various design features to shorten installation times. The camera has also been designed to be capable of pointing in the preferred direction at the preferred location. When attached to the mounting plate, the camera’s direction can be easily changed at intervals of PTZ Rotating the viewing area around the lens further allows the lens to be pointed in the desired direction.",
    },

    {
      title: "Edge AI Based Object & Face Detection Cameras",
      description:
        "Adiance’s smart product family, 4k products are equipped with Edge AI features such as ANPR detection, object detection, facial recognition, Intrusion, and more. Adiance FHD, H.265+ PTZ Dome & Bullet Camera delivers up to FHD resolution (2592×1944, effectively four times that of Full HD) at 30 frames per second (fps), providing users with ultra-high-definition video viewing experience.",
      imgUrl: [
        "/images/P4-Edge-AI-Based-Object-Face-Detection-Cameras-VM-72B5AIVE-01.png",
        "/images/P4-Edge-AI-Based-Object-Face-Detection-Cameras-VM-72B5AIVE-02.png",
      ],
      benefits: [
        "Enhanced security monitoring with FHD Video surveillance",
        "Increased clarity in low-light situations",
        "PTZ Camera can work over the network",
        "Cloud monitoring for optimum security and reliability",
        "FHD streams to make every ANPR detail visible",
        "Intelligent compression saves recording space by optimizing video performance based on available bandwidth",
        "Monitor remotely from any location across the planet",
        "Access live streams from your desktop, mobile, and tablets",
        "Built-in motion detection to track every intruder",
        "Clear Night imaging for improved low light performance",
        "Wide Angle View for wide coverage",
      ],
      features: [
        "Accurate and fast focusing",
        "Smart IR, up to 120m IR distance",
        "Get maximum coverage by the digital 4x optical zoom",
        "Review fine details in increased resolution without losing image quality",
        "Record 4K FHD video and experience accurate picture and color representation",
        "Environmental durability",
        "Auto Shutter speed control for moving objects",
        "Outstanding low light performance",
        "SD card edge recording to keep your data safe",
      ],
      applications: [
        "Banking",
        "Enterprise",
        "Government",
        "Education",
        "Critical Infrastructure",
        "Power Sector",
        "Smart City",
        "Transportation",
        "Hospitality",
        "Retail",
        "Oil & Gas",
        "Industries",
      ],
      specifications: [
        "Sensor: 1/2.8″ Progressive Scan CMOS",
        "Display Resolution: 2592×1944",
        "Focal Length: 5.3~64mm, 12X Optical Zoom | 5~117mm, 23X Optical Zoom",
        "IR Distance: Up to 120m",
        "View Angle: H93°~H33°/D107°~D38°/V52°~V18°",
        "Compression: H.265 +/H.265(HEVC)/H.264 +/H.264/MJPEG",
        "Bit Rate: 16Kbps~16Mbps",
        "Power: DC 12V±10%",
        "Power Consumption: 6.2W MAX 9.4W MAX (With IR on)",
        "SD Card Support: up to 256GB",
      ],
      setup:
        "We have added Various design features to shorten installation times. The camera has also been designed to be capable of pointing in the preferred direction at the preferred location. When attached to the mounting plate, the camera’s direction can be easily changed at intervals of PTZ Rotating the viewing area around the lens further allows the lens to be pointed in the desired direction.",
    },

    {
      title: "AMBICAM 4G Dome PTZ Camera (VM-72BPTZ410AC)",
      description:
        "Ambicam 4G Dome PTZ smart cloud cameras are a professional surveillance system for cover wide area and camera works by moving the camera in different directions using PTZ Option to get a whole picture of the surveillance area and zooming in for further detail of security events. The pan, tilt, and zoom capabilities make it possible to monitor large areas with a single camera. 4G Dome PTZ cameras work 24/7 via cloud to help you monitor every minute of the day. Easy to install and use, the bullet cameras even save your costs. Order your very own Ambicam 4G dome PTZ smart cameras today.",
      imgUrl: "/images/PTZ.jpg",
      benefits: [
        "Cloud/4G monitoring for optimum security and reliability",
        "HD streams to make every detail visible",
        "Save 80% of your storage and bandwidth costs",
        "Monitor your property remotely from any location on the planet",
        "Access live streams from your desktop, mobile, and tablets",
        "Built-in motion detection to track every intruder",
        "Digital Zoom in for a closer look at persons and objects",
        "Compact and space-saving",
        "Wide Angle View for wide coverage",
      ],
      features: [
        "FHD resolution",
        "SD Card Support up to 128GB storage",
        "Low Bandwidth Consumption",
        "Plug and Play, Instant Alert",
        "Share and download videos",
        "H.264 compression",
        "Cloud storage and live view",
        "No wires or cables, 3G/4G SIM Support",
        "DIY setup",
        "Mobile app",
      ],
      applications: [
        "Factory and Malls",
        "Smart City",
        "Commercial buildings",
        "Airport and Stadium",
        "Parking Lots",
        "Medical institutions",
        "Warehouses and storage spaces",
        "Vehicle Monitoring",
        "Harbors",
      ],
      specifications: [
        "Sensor: 1.3MP (Available in 2MP, 4MP) CMOS Low Lux",
        "Display Resolution: 1920×1080",
        "Lens: 2.7-13.5 MM lens, 4xZoom Auto Focus lens",
        "IR LED: 6Pcs Array IR LED, IR Distance 40 to 45M",
        "View Angle: 360° Panoramic View Angle",
        "Compression: H.264",
        "Bit Rate: 16~4096kbps",
        "Power: 12V/1A",
        "Power Consumption: 3w max",
        "SD Card Support: up to 128 GB",
      ],
      setup:
        "The 4G Dome PTZ cameras just take a minute of your time to get working. You can easily install the cameras and start monitoring your property right away. A home or office Wi-Fi network as well 3G/4G SIM is all the cameras need for 24/7 monitoring.",
    },

    {
      title: "AMBICAM 4G Mini Bullet Camera (VM-72H4G110AC)",
      description:
        "Ambicam 4G Mini Bullet smart cloud cameras are a professional surveillance system for your workspace or residence. 4G Mini Bullet cameras work 24/7 via cloud to help you monitor every minute of the day. Easy to install and use, the bullet cameras even save your costs. Order your very own Ambicam 4G Mini Bullet smart cameras today. With unparalleled Wi-Fi video capabilities, you cannot go wrong with this one!",
      imgUrl: "/images/adiance-4g-camera.png",
      benefits: [
        "Cloud/4G monitoring for optimum security and reliability",
        "HD streams to make every detail visible",
        "Save 80% of your storage and bandwidth costs",
        "Monitor your property remotely from any location on the planet",
        "Access live streams from your desktop, mobile, and tablets",
        "Built-in motion detection to track every intruder",
        "Digital Zoom in for a closer look at persons and objects",
        "Compact and space-saving",
        "Wide Angle View for wide coverage",
      ],
      features: [
        "FHD resolution",
        "SD Card Support up to 64GB storage",
        "Low Bandwidth Consumption",
        "Plug and Play, Instant Alert",
        "Share and download videos",
        "H.264 compression",
        "Cloud storage and live view",
        "No wires or cables, 3G/4G SIM Support",
        "DIY setup",
        "Mobile app",
      ],
      applications: [
        "Factory and Malls",
        "Offices and enterprises",
        "Commercial buildings",
        "Hotels and restaurants",
        "Educational institutions",
        "Clinics and medical institutions",
        "Warehouses and storage spaces",
        "Vehicle Monitoring",
        "Schools Bus and Colleges",
      ],
      specifications: [
        "Sensor: 2MP FHD",
        "Display Resolution: 1920×1080",
        "Lens: 3.6 MM, 2.8 MM lens",
        "IR LED: 10pcs*F5 IR Led, IR Distance 20 M",
        "View Angle: 360° Panoramic View Angle",
        "Compression: H.264/H.265",
        "Bit Rate: 16~4096kbps",
        "Power: 12V/1A",
        "Power Consumption: 3w max, Night <8W",
        "SD Card Support: up to 128 GB",
      ],
      setup:
        "The 4G mini bullet cameras just take a minute of your time to get working. You can easily install the cameras and start monitoring your property right away. A home or office Wi-Fi network as well 3G/4G SIM is all the cameras need for 24/7 monitoring.",
    },

    {
      title: "AMBICAM 4G Dome Camera (VM-72AD4G210C)",
      description:
        "Ambicam 4G Dome smart cloud cameras are a professional surveillance system for your School Bus or Vehicle and remote Location monitoring. 4G Dome cameras work 24/7 via cloud to help you monitor every minute of the day. Easy to install and use, the bullet cameras even save your costs. Order your very own Ambicam 4G dome smart cameras today. With unparalleled 4G video capabilities, you cannot go wrong with this one!",
      imgUrl: "/images/P9-AMBICAM-4g-dome-camera-VM-72AD4G210C-02.png",
      benefits: [
        "Cloud/4G monitoring for optimum security and reliability",
        "HD streams to make every detail visible",
        "Save 80% of your storage and bandwidth costs",
        "Monitor your property remotely from any location on the planet",
        "Access live streams from your desktop, mobile, and tablets",
        "Built-in motion detection to track every intruder",
        "Digital Zoom in for a closer look at persons and objects",
        "Compact and space-saving",
        "Wide Angle View for wide coverage",
      ],
      features: [
        "FHD resolution",
        "SD Card Support up to 64GB storage",
        "60-seconds summary",
        "Plug and Play",
        "Share and download videos",
        "H.265+, H.264 compression",
        "Cloud storage and live view",
        "No wires or cables, 3G/4G SIM Support",
        "DIY setup",
        "Mobile app",
      ],
      applications: [
        "Homes and apartments",
        "Offices and enterprises",
        "Commercial buildings",
        "Hotels and restaurants",
        "Educational institutions",
        "Clinics and medical institutions",
        "Warehouses and storage spaces",
        "Vehicle Monitoring",
        "Schools Bus and Colleges",
      ],
      specifications: [
        "Sensor: 2MP CMOS Low Lux",
        "Display Resolution: 1920×1080",
        "Lens: 2.8MM / 3.6MM",
        "IR LED: 34 IR LED, 3 IR LED IR Distance 20 M",
        "Compression: H.264",
        "Bit Rate: 16~4096kbps",
        "Power: 12V/1A",
        "Power Consumption: 3w max",
        "SD Card Support: up to 64 GB",
      ],
      setup:
        "The 4G Dome cameras just take a minute of your time to get working. You can easily install the cameras and start monitoring your property right away. A home or office Wi-Fi network as well 3G/4G SIM is all the cameras need for 24/7 monitoring.",
    },

    {
      title: "AMBICAM H.265+ 4G Dome PTZ Camera (VM-72BPTZ410AC)",
      description:
        "Ambicam 4G H.265+ Dome PTZ smart cloud cameras are a professional surveillance system for cover wide area and camera works by moving the camera in different directions using PTZ Option to get a whole picture of the surveillance area and zooming in for further detail of security events. The pan, tilt, and zoom capabilities make it possible to monitor large areas with a single camera. 4G H.265+ Dome PTZ cameras work 24/7 via cloud to help you monitor every minute of the day. Easy to install and use, the bullet cameras even save your costs. Order your very own Ambicam 4G dome PTZ smart cameras today.",
      imgUrl: "/images/P7-AMBICAM-4g-dome-ptz-camera-VM-72BPTZ410AC-02.png",
      benefits: [
        "Cloud/4G monitoring for optimum security and reliability",
        "HD streams to make every detail visible",
        "Save 80% of your storage and bandwidth costs",
        "Monitor your property remotely from any location on the planet",
        "Access live streams from your desktop, mobile, and tablets",
        "Built-in motion detection to track every intruder",
        "Digital Zoom in for a closer look at persons and objects",
        "Compact and space-saving",
        "Wide Angle View for wide coverage",
      ],
      features: [
        "FHD resolution",
        "SD Card Support up to 64GB storage",
        "Low Bandwidth Consumption",
        "Plug and Play, Instant Alert",
        "Share and download videos",
        "H.264 compression",
        "Cloud storage and live view",
        "No wires or cables, 3G/4G SIM Support",
        "DIY setup",
        "Mobile app",
      ],
      applications: [
        "Factory and Malls",
        "Smart City",
        "Commercial buildings",
        "Airport and Stadium",
        "Parking Lots",
        "Medical institutions",
        "Warehouses and storage spaces",
        "Vehicle Monitoring",
        "Harbors",
      ],
      specifications: [
        "Sensor: 1.3MP (Available in 2MP, 4MP) CMOS Low Lux",
        "Display Resolution: 1920×1080",
        "Lens: 2.7-13.5 MM lens, 4xZoom Auto Focus lens",
        "IR LED: 6Pcs Array IR LED, IR Distance 40 to 45M",
        "View Angle: 360° Panoramic View Angle",
        "Compression: H.264",
        "Bit Rate: 16~4096kbps",
        "Power: 12V/1A",
        "Power Consumption: 3w max",
        "SD Card Support: up to 128 GB",
      ],
      setup:
        "The 4G Dome PTZ cameras just take a minute of your time to get working. You can easily install the cameras and start monitoring your property right away. A home or office Wi-Fi network as well 3G/4G SIM is all the cameras need for 24/7 monitoring.",
    },

    {
      title: "ADIANCE 8-16 Channel XVR – VM-72XVR816",
      description:
        "Definition of Cloud XVR: Cloud XVR typically refers to a video surveillance system that leverages cloud computing for storage, management, and analysis of recorded video footage. It allows users to access and manage their video data remotely through an internet connection.",
      imgUrl: "/images/XVR.jpg",
      features: ["Cloud Storage", "Remote Access", "Scalability", "Analytics"],
      benefits: [
        "Cost Effective",
        "Flexibility",
        "Low Bandwidth Consumption",
        "Remote Monitoring",
        "Enhanced Security",
      ],
      applications: [
        "Business Security",
        "Smart Cities",
        "Residential Security",
      ],
      specifications: [
        "Storage Capacity: Scalable storage.",
        "Data Redundancy: Reliable protection.",
        "Bandwidth: Adequate for streaming.",
        "Internet Connection: Stable, high-speed.",
        "Compatibility: Support for various cameras.",
        "Compression Standards: H.264/H.265.",
        "AI Compatibility: Advanced analytics.",
        "Integration Protocols: ONVIF support.",
      ],
      setup:
        "To set up a Cloud XVR system, start by selecting a reputable cloud service provider such as AWS, Azure, or Google Cloud. Create accounts securely with proper credentials management. Integrate IP cameras with the system, ensuring compatibility and secure streaming protocols. Configure storage plans and retention policies, establish analytics algorithms, and define event triggers for automatic alerts. Additionally, ensure network configuration supports required bandwidth and implement security measures like encryption, user permissions, firewall settings, and regular system monitoring and maintenance to ensure optimal performance and security.",
    },

    {
      title: "AI 3MP Nexgen 4G PT Camera - S Series",
      description:
        "This advanced tool introduces precision with 4G connectivity for unfailing surveillance, integrated with AI for sharp detail and efficient object recognition. Designed to operate in varying environment conditions, the A8S offers high-definition imagery with 3 Megapixel clarity and adapts through pan-tilt functionality for extended viewings. It stands out for its reliability in remote access and storage capacities, making security oversight manageable and more effective. Perfect for environments requiring vigilant monitoring without compromise.",
      imgUrl: "/images/AI3MP.jpg",
      features: [
        '3 Megapixel camera with 1/2.8" CMOS sensor, 4MM lens, 347° pan, and 90° tilt range.',
        "Supports multiple 4G bands (FDD-LTE: B1/B3/B5/B8; TDD-LTE: B34/B38/B39/B40/B41).",
        "Video compression in H.264/H.265 with max resolution of 2688*1520 @30fps.",
        "Audio decoding in AAC, G711 with two-way audio support.",
        "Minimum illumination: Color 0.1Lux, BW 0.01 Lux.",
        "Network protocols: RTMP, RTSP, FTP, ONVIF, with interface protocols: ONVIF, SIP, Webrtc, Modbus.",
        "Smart alarm features including motion and face detection.",
        "Supports Micro SD storage up to 256GB.",
        "Dual LED with 18 white light and 18 infrared, max distance 30 meters.",
        "Weatherproof (IP66) with surge protection (6KV).",
      ],
      benefits: [
        "High-resolution video capture",
        "Advanced AI features for enhanced security",
        "Wide network compatibility",
        "Robust build for outdoor use",
        "Efficient power consumption",
        "Two-way audio communication",
      ],
      applications: [
        "Home security",
        "Business surveillance",
        "Public spaces",
        "Construction sites",
        "Remote monitoring",
      ],
      specifications: [
        '3 Megapixel camera with 1/2.8" CMOS sensor and 4MM lens',
        "347° pan and 90° tilt range",
        "Supports FDD-LTE:B1/B3/B5/B8; TDD-LTE:B34/B38/B39/B40/B41",
        "Power consumption: ≤5W, DC 12V/1A",
        "Video compression: H.264/H.265",
        "Resolution: Main stream 2304*1296; sub-stream D1 (800*448)",
        "Network: 1 RJ45 port; Audio: 1 external RCA, built-in microphone",
        "Reset button supported; storage: Micro SD up to 256GB",
        "AI features: Mobile APP, web browser, CMS monitoring",
        "Surge protection: 6KV; digital zoom: 5X",
        "RTC supported; IR range: 50M, spotlight 15-20M",
        "Supporting agreement: N1 AI 3MP NexGen 4G PT Camera",
        "Installation height: 3-5 meters; IP grade: IP66",
        "Power: DC 12V 2A",
      ],
      setup:
        "Mount the camera at a height of 3-5 meters for optimal coverage and connect it to a DC 12V 2A power source. Insert a Micro SD card (up to 256GB) if local storage is needed. Configure network settings through the web interface or mobile app, ensuring compatibility with your 4G network band. Adjust the camera's pan and tilt functions to cover the desired area. Use the provided software to set up smart alarms and other AI features, and adjust the dual LED settings for appropriate illumination based on the environment.",
    },

    {
      title: "3MP 4G Bullet All Time Color Camera - A Series",
      description:
        " The 3MP 4G Bullet All-Time Color Camera offers high-resolution 3MP imaging, full-time color vision, and reliable 4G connectivity, making it ideal for remote areas. With features like motion and human detection, two-way audio, and versatile storage options (micro SD card up to 256GB and cloud storage), it ensures enhanced security. The camera supports multiple network protocols and provides wide coverage with its 75° horizontal viewing angle. Easy to set up with plug-and-play functionality, it includes robust IR and white LEDs for night vision up to 30 meters, and its weather-resistant design ensures durability in various environments.",
      imgUrl: "/images/CCTV_01.png",
      features: [
        '1/2.8" CMOS Sensor for clear imaging.',
        "4mm lens with a 75° horizontal viewing angle.",
        "IR-cut Auto ICR for automatic day/night switching.",
        "D-WDR and 3DNR for improved image clarity.",
        "H.264/H.265/H.265+ video decode for efficient storage.",
        "Smart alarms with motion and human detection.",
        "Supports 4 privacy zones.",
        "On-screen display (OSD) for date, time, and title.",
        "Network protocols: N1/Onvif/Rtmp/Rtsp.",
        "Built-in microphone and speakers for two-way audio.",
        "10x digital zoom.",
        "4 IR and 4 white LEDs for up to 30 meters IR distance and 20 meters white LED distance.",
      ],
      benefits: [
        "Enhanced image quality with 3MP resolution.",
        "Always color vision with full-time color mode.",
        "Reliable 4G connectivity for remote areas.",
        "Motion and human detection for improved security.",
        "Two-way audio communication.",
        "Multiple storage options: micro SD card up to 256GB and cloud storage.",
        "Easy setup with plug-and-play functionality.",
        "Supports multiple network protocols for versatility.",
        "Wide viewing angles provide comprehensive coverage.",
        "Robust IR and white LED array for night vision up to 30 meters.",
        "Durable design suitable for various environments.",
        "Low power consumption (≤ 6W) for energy efficiency.",
        "Weather-resistant housing for outdoor use.",
        "Automatic white balance and electronic shutter for optimal image quality.",
        "User-friendly interface with on-screen display (OSD) for easy navigation and configuration.",
      ],
      applications: [
        "Home Security",
        "Business Surveillance",
        "Remote Areas",
        "Parking Lots",
        "Warehouses",
        "Public Spaces",
      ],
      specifications: [
        'Sensor Type: 1/2.8" CMOS',
        "Lens: 4mm",
        "Viewing Angle: H 75°, V 59°, D 88°",
        "Audio: Built-in microphone and speakers",
        "Power: DC 12V/1A",
        "Alarm: 1ch alarm input/output, 1ch RS485",
        "Storage: Micro SD Card up to 256GB, cloud storage optional",
        "Light Modes: Full Color, Infrared, Intelligent",
        "IR Distance: 30 meters",
        "White LED Distance: 20 meters",
        "Power Consumption: ≤ 6W",
        "Housing: Plastic",
        "Working Temperature: 0-50° C",
        "Storage Temperature: -20° C to 60° C",
        "Humidity: RH Less than 95% (No Condensation), Storage 20% to 90% RH",
      ],
      setup:
        "To set up the 3MP 4G Bullet All Time Color Camera, start by connecting the camera to a power source using the DC 12V/1A adapter. Insert a 4G SIM card or connect via the RJ45 LAN connector to establish network connectivity. Utilize the built-in microphone and speakers for two-way audio communication. Configure the smart alarm settings and privacy zones through the camera's interface. Adjust the light mode settings to full color, infrared, or intelligent based on your needs. Finally, ensure the camera is securely mounted in your desired location for optimal coverage.",
    },

    {
      title: "R Series",
      description:
        "Personalize this product series to fit your unique style and needs—endless customization options await!",
      imgUrl: "/images/CCTV_03.png",
      features: [],
      benefits: [],
      applications: [],
      specifications: [],
      setup: "",
    },
  ];

  const productToShow = products.find(
    (product) => product.title === productTitle
  );

  console.log("check check imgIdx from Show", imgIdx);
  return (
    <div>
      <Helmet>
        <title>Explore S Series Cameras | Smart Security Solutions</title>
        <meta
          name="description"
          content="Discover Adiance S Series Cameras with AI-powered security, ANPR, and real-time monitoring. Stay updated with the latest news & industry innovations."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />

      {/* main content */}

      <div>
        <HeroSection />
        <ValuedClients />
        <WhySSeriesComponent />
        <Features />
        <OneStopSolution />
        <SseriesCamera />
        <Industries />
        <Testimonials />
        <TechnologyPartner />

        <LetestNews />
      </div>

      <Footer />
    </div>
  );
}

export default SSeries;
