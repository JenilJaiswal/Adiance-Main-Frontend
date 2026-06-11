/**
 * Per-route SEO catalog (server-only).
 *
 * Each entry is keyed by URL path (e.g. "/about") and produces a Next.js
 * Metadata object via `buildMetadata(path)`. Pages that aren't listed fall
 * back to a sensible default derived from the slug so we never emit the
 * homepage <title>/<description>/<canonical> on inner routes.
 */

const SITE = "https://www.adiance.com";
const DEFAULT_OG = `${SITE}/images/Logo.webp`;
const SITE_NAME = "Adiance Technologies";
const TWITTER = "@adiancetech";

function titleCase(slug) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bCctv\b/g, "CCTV")
    .replace(/\bOem\b/g, "OEM")
    .replace(/\bOdm\b/g, "ODM")
    .replace(/\bJdm\b/g, "JDM")
    .replace(/\bAi\b/g, "AI")
    .replace(/\bNdaa\b/g, "NDAA")
    .replace(/\bGdpr\b/g, "GDPR")
    .replace(/\bAnpr\b/g, "ANPR")
    .replace(/\bLpr\b/g, "LPR")
    .replace(/\bPtz\b/g, "PTZ")
    .replace(/\bUsa\b/g, "USA")
    .replace(/\bUk\b/g, "UK")
    .replace(/\bUae\b/g, "UAE")
    .replace(/\bBis\b/g, "BIS")
    .replace(/\bEr\b/g, "ER")
    .replace(/\bStqc\b/g, "STQC")
    .replace(/\bSoc\b/g, "SoC")
    .replace(/\bIsp\b/g, "ISP")
    .replace(/\bV2\b/g, "");
}

/** Country page descriptors used to template title/description for /cctv-camera-manufacturer-* pages */
const COUNTRY_PAGES = {
  "cctv-camera-manufacturer-usa": "USA",
  "cctv-camera-manufacturer-india": "India",
  "cctv-camera-manufacturer-uk": "United Kingdom",
  "cctv-camera-manufacturer-germany": "Germany",
  "cctv-camera-manufacturer-australia": "Australia",
  "cctv-camera-manufacturer-uae": "UAE",
  "cctv-camera-manufacturer-saudi-arabia": "Saudi Arabia",
  "cctv-camera-manufacturer-japan": "Japan",
  "cctv-camera-manufacturer-canada": "Canada",
  "cctv-camera-manufacturer-france": "France",
  "cctv-camera-manufacturer-italy": "Italy",
  "cctv-camera-manufacturer-spain": "Spain",
  "cctv-camera-manufacturer-netherlands": "Netherlands",
  "cctv-camera-manufacturer-sweden": "Sweden",
  "cctv-camera-manufacturer-poland": "Poland",
  "cctv-camera-manufacturer-czech-republic": "Czech Republic",
  "cctv-camera-manufacturer-ireland": "Ireland",
  "cctv-camera-manufacturer-singapore": "Singapore",
  "cctv-camera-manufacturer-malaysia": "Malaysia",
  "cctv-camera-manufacturer-thailand": "Thailand",
  "cctv-camera-manufacturer-indonesia": "Indonesia",
  "cctv-camera-manufacturer-philippines": "Philippines",
  "cctv-camera-manufacturer-vietnam": "Vietnam",
  "cctv-camera-manufacturer-south-korea": "South Korea",
  "cctv-camera-manufacturer-taiwan": "Taiwan",
  "cctv-camera-manufacturer-new-zealand": "New Zealand",
  "cctv-camera-manufacturer-brazil": "Brazil",
  "cctv-camera-manufacturer-argentina": "Argentina",
  "cctv-camera-manufacturer-colombia": "Colombia",
  "cctv-camera-manufacturer-chile": "Chile",
  "cctv-camera-manufacturer-peru": "Peru",
  "cctv-camera-manufacturer-venezuela": "Venezuela",
  "cctv-camera-manufacturer-mexico": "Mexico",
  "cctv-camera-manufacturer-nigeria": "Nigeria",
  "cctv-camera-manufacturer-kenya": "Kenya",
  "cctv-camera-manufacturer-south-africa": "South Africa",
  "cctv-camera-manufacturer-egypt": "Egypt",
  "cctv-camera-manufacturer-ghana": "Ghana",
  "cctv-camera-manufacturer-morocco": "Morocco",
  "cctv-camera-manufacturer-israel": "Israel",
  "cctv-camera-manufacturer-bahrain": "Bahrain",
  "cctv-camera-manufacturer-kuwait": "Kuwait",
  "cctv-camera-manufacturer-oman": "Oman",
  "cctv-camera-manufacturer-qatar": "Qatar",
  "cctv-camera-manufacturer-turkey": "Turkey",
};

const CATALOG = {
  "/": {
    title:
      "NDAA Compliant OEM Camera Manufacturer | White Label CCTV | Adiance",
    description:
      "Adiance is an NDAA-compliant OEM/ODM CCTV camera manufacturer in India. White-label cameras, edge-AI surveillance, NVRs, and cloud VMS for global security integrators.",
    keywords:
      "NDAA compliant camera manufacturer, OEM CCTV camera, ODM surveillance camera, white label CCTV, AI surveillance camera, edge AI camera",
    ogImage: `${SITE}/images/SCameraPageOG.webp`,
  },
  "/about": {
    title:
      "About Adiance | NDAA Compliant Camera Manufacturer Since 2003",
    description:
      "Adiance Technologies has manufactured surveillance cameras since 2003. NDAA-compliant, non-Chinese SoC cameras with in-house AI VMS for global security markets.",
    keywords:
      "Adiance Technologies, CCTV manufacturer India, surveillance camera company",
  },
  "/innovation": {
    title:
      "AI & Innovation in Surveillance | Edge AI Technology | Adiance",
    description:
      "Adiance leads innovation in AI-powered surveillance with edge-AI processing, smart video analytics, and next-generation camera technology.",
    keywords:
      "AI surveillance innovation, edge AI camera technology, smart video analytics",
  },
  "/contact": {
    title: "Contact Adiance | Get a Quote for CCTV Cameras & OEM Services",
    description:
      "Contact Adiance for OEM/ODM CCTV camera quotes, white-label partnerships, or technical inquiries. Global manufacturer serving 30+ countries.",
    keywords:
      "contact CCTV manufacturer, get a quote CCTV camera, OEM camera inquiry",
  },
  "/blog": {
    title: "Security Camera Blog | Industry Insights & Guides | Adiance",
    description:
      "Expert articles on CCTV cameras, NDAA compliance, AI surveillance, and OEM manufacturing from Adiance Technologies.",
    keywords:
      "CCTV camera blog, surveillance industry insights, NDAA compliance guide",
  },
  "/event": {
    title: "Adiance Events & Trade Shows | Surveillance Industry Events",
    description:
      "Meet Adiance at global security trade shows including IFSEC, ISC West, Intersec, and Secutech. Discover NDAA-compliant cameras and edge-AI products.",
  },
  "/news": {
    title: "News & Press Releases | Adiance Technologies",
    description:
      "Latest news, announcements and press releases from Adiance Technologies — NDAA compliant OEM camera manufacturer.",
    keywords:
      "Adiance news, surveillance industry news, CCTV press releases, NDAA news",
  },
  "/thank-you": {
    title: "Thank You | Adiance Technologies",
    description: "Thanks for contacting Adiance. Our team will reach out shortly.",
    noindex: true,
  },
  "/blog-thank-you": {
    title: "Thank You | Adiance Blog",
    description: "Thanks for subscribing to the Adiance blog.",
    noindex: true,
  },
  "/partner-thank-you": {
    title: "Thank You | Adiance Partners",
    description: "Thanks for your partner enquiry. Our team will reach out shortly.",
    noindex: true,
  },
  "/thanks": {
    title: "Thank You | Adiance Technologies",
    description: "Thanks for getting in touch with Adiance Technologies.",
    noindex: true,
  },
  "/partners": {
    title: "Adiance Partners | OEM, ODM & Distribution Partners",
    description:
      "Become an Adiance partner. White-label OEM/ODM CCTV manufacturing for distributors and security brands worldwide.",
  },
  "/terms-of-service": {
    title: "Terms of Service | Adiance Technologies",
    description:
      "Read the terms of service governing the use of Adiance's website, products, and services.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Adiance Technologies",
    description:
      "Read how Adiance Technologies collects, uses, and protects your personal data.",
  },
  "/warranty-service": {
    title: "Warranty Service | Adiance Cameras & Surveillance",
    description:
      "Submit a warranty service request for Adiance CCTV cameras and surveillance products.",
  },
  "/warranty-policy": {
    title: "Warranty Policy | Adiance Technologies",
    description:
      "Learn about Adiance's warranty policy for CCTV cameras, NVRs, and surveillance hardware.",
  },
  "/downloads": {
    title: "Downloads | Adiance Datasheets, Firmware & Tools",
    description:
      "Download Adiance camera datasheets, firmware updates, and surveillance software tools.",
  },
  "/datasheet": {
    title: "Camera Datasheets | Adiance NDAA-Compliant Cameras",
    description:
      "Download detailed product datasheets for Adiance CCTV cameras, edge-AI cameras, ANPR, thermal, and PTZ models.",
  },
  "/firmware": {
    title: "Firmware Downloads | Adiance CCTV Cameras",
    description:
      "Download the latest firmware for Adiance CCTV cameras, NVRs, and edge-AI surveillance devices.",
  },
  "/tools": {
    title: "Surveillance Tools & Utilities | Adiance",
    description:
      "Free surveillance tools: lens calculators, bandwidth estimators, storage calculators, and firmware utilities from Adiance.",
  },

  "/anpr-camera": {
    title: "ANPR / LPR Cameras | Edge-AI License Plate Recognition | Adiance",
    description:
      "Adiance ANPR / LPR cameras with on-device edge-AI plate recognition. NDAA-compliant, region-trained models for USA, EU, GCC, and India.",
    keywords: "ANPR camera, LPR camera, license plate recognition, edge AI ANPR",
  },
  "/thermal-camera": {
    title: "Thermal Cameras | Cloud-Based Thermal Surveillance | Adiance",
    description:
      "Adiance cloud-based thermal cameras for industrial, perimeter, and critical-infrastructure surveillance. NDAA-compliant thermal imaging.",
    keywords: "thermal camera, thermal imaging surveillance, IR thermal CCTV",
  },
  "/4kcamera": {
    title: "4K CCTV Cameras | Ultra-HD Surveillance | Adiance",
    description:
      "Adiance 4K bullet, dome, and PTZ cameras with ultra-HD resolution, edge AI, and NDAA-compliant chipsets.",
    keywords: "4K CCTV camera, 4K surveillance camera, ultra HD CCTV",
  },
  "/4gcamera": {
    title: "4G CCTV Cameras | Cellular Surveillance | Adiance",
    description:
      "Adiance 4G cellular CCTV cameras for off-grid, remote, and rural surveillance. SIM-based wireless cameras with cloud VMS.",
    keywords: "4G camera, cellular CCTV, 4G surveillance, SIM CCTV camera",
  },
  "/edgeaicamera": {
    title: "Edge AI Cameras | On-Device AI Surveillance | Adiance",
    description:
      "Adiance edge-AI cameras with on-device ANPR, face recognition, object detection, intrusion analytics, and people counting.",
    keywords: "edge AI camera, on-device AI surveillance, AI CCTV camera",
  },
  "/edge-ai-cctv-cameras": {
    title: "Edge AI CCTV Cameras (S-Series) | Qualcomm AI Surveillance | Adiance",
    description:
      "Adiance S-Series edge-AI CCTV cameras on Qualcomm SoC with on-device analytics and 4K imaging.",
    keywords: "S-Series CCTV camera, Qualcomm edge AI camera, AI surveillance",
  },
  "/eco-series": {
    title: "Eco Series CCTV Cameras | Value-Tier Surveillance | Adiance",
    description:
      "Adiance Eco Series CCTV cameras — value-tier NDAA-compliant surveillance for entry-level deployments.",
  },
  "/r-series": {
    title: "R-Series Cameras | Mid-Tier IP Surveillance | Adiance",
    description:
      "Adiance R-Series IP cameras — mid-tier NDAA-compliant surveillance with edge analytics and ONVIF compatibility.",
  },
  "/h-series": {
    title: "H-Series Cameras | High-End IP Surveillance | Adiance",
    description:
      "Adiance H-Series IP cameras — high-end NDAA-compliant surveillance with 4K, low-light, and edge AI.",
  },
  "/wifi-ptz-camera": {
    title: "WiFi PTZ Camera | Wireless Pan-Tilt-Zoom Surveillance | Adiance",
    description:
      "Adiance WiFi PTZ camera with pan, tilt, zoom, two-way audio, and cloud VMS. NDAA-compliant wireless surveillance.",
  },
  "/cloudxvr": {
    title: "Cloud XVR | 8/16-Channel Hybrid Recorder | Adiance",
    description:
      "Adiance Cloud XVR VM-72XVR816 — 8/16-channel hybrid recorder with cloud VMS, AI events, and remote streaming.",
  },
  "/4g-dome-ptz-camera": {
    title: "4G Dome PTZ Camera VM-72BPTZ410AC | Adiance",
    description:
      "Adiance VM-72BPTZ410AC 4G Dome PTZ camera with pan-tilt-zoom and cellular connectivity for off-grid surveillance.",
  },
  "/4g-mini-bullet-camera": {
    title: "4G Mini Bullet Camera VM-72H4G110AC | Adiance",
    description:
      "Compact Adiance VM-72H4G110AC 4G mini bullet camera with cellular connectivity for off-grid surveillance.",
  },
  "/4k-bullet-anpr-ptz-camera": {
    title: "4K Edge-AI Bullet ANPR PTZ Camera | Adiance",
    description:
      "Adiance 4K edge-AI bullet ANPR PTZ camera for lane-speed license plate recognition.",
  },
  "/4k-face-recognition-camera": {
    title: "4K Edge AI Face Recognition Dome Camera | Adiance",
    description:
      "Adiance 4K edge-AI face recognition dome camera with on-device analytics for access control and security.",
  },
  "/edge-ai-based-object-n-face-detection-cameras": {
    title: "Edge AI Object & Face Detection Cameras | Adiance",
    description:
      "Adiance edge-AI cameras for on-device object detection, face detection, and people counting.",
  },
  "/adiance-thermal-camera-f": {
    title: "Adiance Cloud Thermal Camera VM-72F210AC | Fixed Lens",
    description:
      "Cloud-based thermal camera VM-72F210AC with fixed lens for industrial and perimeter surveillance.",
  },
  "/adiance-thermal-camera-n": {
    title: "Adiance Cloud Thermal Camera VM-72N210AC | Narrow Field",
    description:
      "Cloud-based thermal camera VM-72N210AC with narrow field of view for long-distance monitoring.",
  },
  "/adiance-thermal-camera-l": {
    title: "Adiance Cloud Thermal Camera VM-72L210AC | Long Range",
    description:
      "Cloud-based thermal camera VM-72L210AC for long-range thermal surveillance.",
  },

  "/oem-services": {
    title: "OEM Camera Manufacturing | White-Label CCTV | Adiance",
    description:
      "Adiance OEM CCTV camera manufacturing: custom branding, firmware customization, NDAA compliance, and global shipping.",
    keywords: "OEM CCTV camera manufacturer, white label camera, OEM surveillance",
  },
  "/odm-services": {
    title: "ODM Camera Manufacturing | Custom Hardware Design | Adiance",
    description:
      "Adiance ODM CCTV camera manufacturing with custom hardware design, firmware engineering, and exclusive SKUs.",
  },
  "/jdm-services": {
    title: "JDM Camera Manufacturing | Joint Design Manufacturing | Adiance",
    description:
      "Adiance JDM partnerships: co-engineered CCTV cameras and IoT devices with customer R&D collaboration.",
  },
  "/pcb-assembly-service": {
    title: "PCB Assembly Service | SMT & Through-Hole | Adiance India",
    description:
      "Adiance PCB design and SMT assembly services for CCTV cameras, IoT devices, and electronics manufacturing in India.",
  },
  "/ndaa-compliance": {
    title: "NDAA Section 889 Compliance | Non-Chinese CCTV Cameras | Adiance",
    description:
      "Adiance cameras are NDAA Section 889 compliant — non-Chinese SoCs, US Federal eligible, and manufactured in India.",
    keywords: "NDAA compliance, NDAA Section 889, non-Chinese CCTV, federal CCTV",
  },
  "/us": {
    title: "Adiance USA | NDAA-Compliant CCTV Manufacturer for the US Market",
    description:
      "Adiance offers NDAA-compliant, non-Chinese CCTV cameras for the US federal, state, and enterprise market.",
  },

  "/robotics": {
    title: "Robotics & Electronics Manufacturing | Adiance India",
    description:
      "Adiance robotics and electronics contract manufacturing in India: PCB, firmware, mechanical, and assembly.",
  },
  "/public-safety": {
    title: "Public Safety Surveillance Solutions | Adiance",
    description:
      "Public-safety surveillance solutions including command-and-control, perimeter security, and police-integration cameras.",
  },
  "/traffic-management": {
    title: "Traffic Management CCTV Solutions | ANPR & ITMS | Adiance",
    description:
      "Adiance traffic-management CCTV: ANPR / LPR, red-light enforcement, vehicle counting, and ITMS solutions.",
  },
  "/crowd-control": {
    title: "Crowd Control Surveillance | Crowd Analytics | Adiance",
    description:
      "Adiance crowd-control surveillance with AI crowd analytics, density estimation, and event-management cameras.",
  },
  "/smart-cities": {
    title: "Smart City Surveillance Solutions | AI-Powered CCTV | Adiance",
    description:
      "Adiance smart-city surveillance: AI-powered CCTV cameras, citywide video analytics, and traffic monitoring for municipal governments.",
    keywords: "smart city surveillance, city CCTV camera, municipal security",
  },
  "/remote-security": {
    title: "Remote & Perimeter Security Cameras | Solar 4G | Adiance",
    description:
      "Adiance remote-security cameras for off-grid sites: solar-powered, 4G connectivity, edge AI for oil & gas, mining, and agriculture.",
  },
  "/education": {
    title: "Education Campus Surveillance Solutions | Adiance",
    description:
      "Adiance campus surveillance: perimeter security, attendance via face recognition, and classroom safety for schools and universities.",
  },
  "/healthcare": {
    title: "Healthcare Surveillance Solutions | Hospitals & Pharmacies | Adiance",
    description:
      "Adiance healthcare surveillance for hospitals, pharmacies, and restricted-access analytics with GDPR-ready privacy controls.",
  },
  "/public-transport": {
    title: "Public Transport Surveillance | Bus & Rail CCTV | Adiance",
    description:
      "Adiance public-transport surveillance for bus, rail, and metro stations with ANPR, crowd analytics, and vandalism detection.",
  },
  "/retail": {
    title: "Retail Surveillance Solutions | People Counting & Heat Maps | Adiance",
    description:
      "Adiance retail surveillance: people counting, queue detection, heat maps, and loss-prevention analytics.",
  },
  "/smart-safe-city": {
    title: "Smart Safe City Solutions | Citywide AI Surveillance | Adiance",
    description:
      "Adiance smart safe-city solutions with citywide AI surveillance, command centers, and integrated traffic and public-safety analytics.",
  },
  "/bank-finance": {
    title: "Banking & Finance Surveillance | ATM Security | Adiance",
    description:
      "Adiance banking and finance surveillance for branches, ATMs, vaults, and ONVIF-integrated solutions.",
  },
  "/high-traffic": {
    title: "High-Traffic Venue Surveillance | Stadiums & Malls | Adiance",
    description:
      "Adiance surveillance for stadiums, malls, exhibition centers, and airports with crowd analytics and edge AI.",
  },
  "/cyber-security": {
    title: "Cybersecurity for CCTV & Surveillance | Adiance",
    description:
      "Adiance cybersecurity-first surveillance with encrypted streams, secure firmware, and hardened cloud VMS.",
  },
  "/manufacturing": {
    title: "Manufacturing Plant Surveillance | Adiance",
    description:
      "Adiance manufacturing-plant surveillance: floor monitoring, perimeter, PPE compliance, and ANPR vehicle-gate cameras.",
  },
  "/product-engineering": {
    title: "Product Engineering Services | CCTV & IoT | Adiance",
    description:
      "Adiance product-engineering services: hardware design, firmware development, mechanical engineering, and certifications for CCTV and IoT devices.",
  },
  "/cloud-application": {
    title: "Cloud Surveillance App | Ambicam Cloud VMS | Adiance",
    description:
      "Adiance cloud surveillance application with multi-site streaming, AI events, mobile app, and white-label deployment.",
  },
  "/compliance": {
    title: "Compliance | NDAA, GDPR, STQC, BIS-ER, CE/FCC | Adiance",
    description:
      "Adiance compliance: NDAA Section 889, GDPR-ready, STQC, BIS-ER, CE, FCC, RoHS, and ONVIF profiles S/G/T.",
  },
  "/autoplay": {
    title: "Adiance Showcase Video | Surveillance Camera Demonstration",
    description:
      "Watch Adiance's surveillance showcase video covering edge-AI cameras, NDAA compliance, and OEM manufacturing.",
    noindex: true,
  },

  "/anpr-camera-manufacturer": {
    title: "ANPR Camera Manufacturer | NDAA-Compliant LPR Cameras | Adiance",
    description:
      "Adiance is an ANPR / LPR camera manufacturer with on-device edge AI, region-trained models, and NDAA compliance.",
  },
  "/edge-ai-camera-manufacturer": {
    title: "Edge AI Camera Manufacturer | On-Device AI CCTV | Adiance",
    description:
      "Adiance edge-AI camera manufacturer with on-device ANPR, face recognition, object detection, and intrusion analytics.",
  },
  "/complete-surveillance-solutions": {
    title: "Complete Surveillance Solutions | Cameras, NVR, VMS | Adiance",
    description:
      "Adiance complete surveillance solutions: cameras, NVR/XVR, cloud VMS, mobile app, and edge AI — one stack from one OEM.",
  },
  "/non-chinese-soc-camera-manufacturer": {
    title: "Non-Chinese SoC Camera Manufacturer | NDAA-Compliant | Adiance",
    description:
      "Adiance manufactures cameras on non-Chinese SoCs — Qualcomm, Ambarella, and Novatek — for NDAA compliance.",
  },
  "/non-chinese-cctv-camera-manufacturer": {
    title: "Non-Chinese CCTV Camera Manufacturer | India | Adiance",
    description:
      "Adiance is a non-Chinese CCTV camera manufacturer based in India with NDAA-compliant, made-in-India surveillance.",
  },
  "/oem-white-label-platform": {
    title: "OEM White-Label CCTV Platform | Adiance",
    description:
      "Adiance white-label OEM platform: launch your own CCTV brand with our hardware, firmware, mobile app, and cloud VMS.",
  },
  "/full-solution-oem-camera-manufacturer": {
    title: "Full-Solution OEM Camera Manufacturer | Adiance",
    description:
      "Adiance is a full-solution OEM camera manufacturer covering hardware, firmware, mobile app, cloud VMS, and certifications.",
  },
  "/oem-camera-manufacturer-europe": {
    title: "OEM Camera Manufacturer for Europe | GDPR-Ready | Adiance",
    description:
      "Adiance OEM CCTV manufacturer for Europe — GDPR-ready, NDAA-compliant white-label surveillance cameras.",
  },
  "/oem-camera-manufacturer-middle-east": {
    title: "OEM Camera Manufacturer for the Middle East | UAE, KSA | Adiance",
    description:
      "Adiance OEM CCTV manufacturer for the Middle East — NDAA-compliant cameras for UAE, Saudi Arabia, Qatar, and GCC.",
  },
  "/private-label-security-camera-supplier": {
    title: "Private-Label Security Camera Supplier | Adiance",
    description:
      "Adiance private-label security camera supplier with full white-label OEM/ODM and NDAA compliance.",
  },
  "/custom-cctv-camera-manufacturer": {
    title: "Custom CCTV Camera Manufacturer | ODM/JDM | Adiance",
    description:
      "Adiance designs custom CCTV cameras: bespoke hardware, lens, sensor, firmware, and form-factor for OEM/ODM/JDM customers.",
  },
  "/white-label-cctv-camera-manufacturer": {
    title: "White-Label CCTV Camera Manufacturer | OEM/ODM India | Adiance",
    description:
      "Adiance white-label CCTV camera manufacturer in India with full OEM/ODM, custom firmware, branding, and NDAA compliance.",
    keywords: "white label CCTV camera, white label surveillance, OEM camera manufacturer",
  },
  "/ndaa-compliant-cctv-camera-manufacturer": {
    title: "NDAA-Compliant CCTV Camera Manufacturer | Adiance",
    description:
      "Adiance is an NDAA-compliant CCTV camera manufacturer with non-Chinese SoCs and US Federal eligibility.",
    keywords:
      "NDAA compliant CCTV manufacturer, NDAA 889 camera, US federal CCTV",
  },
  "/gdpr-compliant-surveillance-manufacturer": {
    title: "GDPR-Compliant Surveillance Manufacturer | Adiance",
    description:
      "Adiance GDPR-compliant surveillance manufacturer with privacy-by-design firmware and EU-region cloud options.",
  },
  "/stqc-compliant-cctv-cameras": {
    title: "STQC-Compliant CCTV Cameras | India | Adiance",
    description:
      "Adiance STQC-tested CCTV cameras compliant with Indian government Essential Requirements for surveillance.",
  },
  "/global-presence": {
    title: "Adiance Global Presence | 50+ Countries Served",
    description:
      "Adiance Technologies serves 50+ countries with NDAA-compliant cameras, white-label OEM, and edge-AI surveillance.",
  },
  "/oem-cctv-camera-manufacturer-usa": {
    title: "OEM CCTV Camera Manufacturer for USA | NDAA-Compliant | Adiance",
    description:
      "Adiance OEM CCTV manufacturer for the USA — NDAA Section 889 compliant, non-Chinese SoC, US Federal eligible.",
  },
  "/qualcomm-edge-ai-camera-manufacturer": {
    title: "Qualcomm Edge AI Camera Manufacturer | Adiance",
    description:
      "Adiance Qualcomm edge-AI camera manufacturer — on-device analytics, ANPR, face recognition on Qualcomm SoCs.",
  },
  "/qualcomm-soc-future-edge-ai-surveillance-cameras": {
    title: "Qualcomm SoC: Future of Edge-AI Surveillance Cameras | Adiance",
    description:
      "How Qualcomm SoC powers next-generation edge-AI surveillance cameras for NDAA-compliant deployments.",
  },
  "/start-your-own-cctv-brand": {
    title: "Start Your Own CCTV Brand | White-Label OEM | Adiance",
    description:
      "Launch your own CCTV brand with Adiance white-label OEM. We handle hardware, firmware, mobile app, and packaging.",
  },
  "/cctv-oem-for-telecom-isp": {
    title: "CCTV OEM for Telecom & ISP | Branded Cameras | Adiance",
    description:
      "Adiance CCTV OEM for telecom and ISP operators — branded cameras and cloud VMS for value-added surveillance services.",
  },
  "/alternative-to-chinese-cameras": {
    title: "Alternative to Chinese CCTV Cameras | NDAA-Safe | Adiance",
    description:
      "Looking for an alternative to Chinese CCTV cameras? Adiance offers NDAA-compliant, non-Chinese SoC surveillance.",
  },
  "/alternative-to-hikvision": {
    title: "Alternative to Hikvision | NDAA-Compliant OEM Cameras | Adiance",
    description:
      "Replace Hikvision with NDAA-compliant, non-Chinese OEM CCTV cameras from Adiance. Edge AI, ONVIF S/G/T, white-label, drop-in model mapping.",
    keywords:
      "alternative to Hikvision, Hikvision replacement, NDAA compliant alternative, non-Chinese CCTV, OEM CCTV manufacturer",
  },
  "/alternative-to-dahua": {
    title: "Alternative to Dahua | NDAA-Compliant OEM Cameras | Adiance",
    description:
      "Replace Dahua with NDAA-compliant, non-Chinese OEM CCTV cameras from Adiance. Edge AI, ONVIF S/G/T, white-label, drop-in model mapping.",
    keywords:
      "alternative to Dahua, Dahua replacement, NDAA compliant alternative, non-Chinese CCTV, OEM CCTV manufacturer",
  },
  "/smart-city-cctv-solutions": {
    title: "Smart-City CCTV Solutions | AI Surveillance | Adiance",
    description:
      "Adiance smart-city CCTV solutions: AI-powered cameras, citywide analytics, command and control, and ITMS.",
  },
  "/banking-finance-cctv-manufacturer": {
    title: "Banking & Finance CCTV Camera Manufacturer | Adiance",
    description:
      "Adiance CCTV manufacturer for banking and finance — branch surveillance, ATM monitoring, and vault analytics.",
  },
  "/product-portfolio": {
    title: "Adiance Product Portfolio | CCTV, NVR, VMS, Edge AI",
    description:
      "Browse the full Adiance product portfolio: edge-AI cameras, ANPR, thermal, 4G, 4K cameras, NVR, XVR, and Cloud VMS.",
  },
  "/smart-home-oem-camera-manufacturer": {
    title: "Smart Home OEM Camera Manufacturer | White-Label | Adiance",
    description:
      "Adiance smart-home OEM camera manufacturer for white-label baby monitors, pet cameras, WiFi PTZ, and home security.",
  },
  "/white-label-baby-monitor-manufacturer": {
    title: "White-Label Baby Monitor Manufacturer | Adiance",
    description:
      "Adiance white-label baby monitor manufacturer with WiFi, two-way audio, lullabies, and a private-label mobile app.",
  },
  "/white-label-pet-camera-manufacturer": {
    title: "White-Label Pet Camera Manufacturer | Adiance",
    description:
      "Adiance white-label pet camera manufacturer: WiFi PTZ cameras with treat-dispenser API and a private-label mobile app.",
  },
  "/bis-er-certification": {
    title: "BIS ER-01 Certified CCTV Camera Manufacturer | Reg. R-72003735 | Adiance",
    description:
      "Adiance Technologies is a BIS ER-01 registered CCTV camera manufacturer (BIS registration R-72003735, brands Adiance & ArcisAI, verifiable on crsbis.in). ER-01 compliant cameras for government, enterprise, and OEM partners.",
  },
  "/innovation/edge-ai": {
    title: "Edge AI Innovation | Adiance",
    description:
      "Adiance edge-AI innovation in surveillance — on-device analytics for ANPR, face recognition, object detection.",
  },

  "/admin": { title: "Adiance Admin Login", description: "Adiance internal admin login.", noindex: true },
  "/admin/reset": { title: "Adiance Admin Reset", description: "Reset password.", noindex: true },
  "/admin/dashboard": { title: "Adiance Admin Dashboard", description: "Admin dashboard.", noindex: true },
  "/admin/verify": { title: "Adiance Admin OTP Verification", description: "Verify OTP.", noindex: true },
};

/** Country pages — single template, dynamic insertions */
Object.entries(COUNTRY_PAGES).forEach(([slug, country]) => {
  CATALOG["/" + slug] = {
    title: `CCTV Camera Manufacturer in ${country} | NDAA Compliant | Adiance`,
    description: `Adiance is a leading NDAA-compliant CCTV camera manufacturer supplying ${country} with white-label OEM cameras, edge AI, and cloud VMS.`,
    keywords: `CCTV camera manufacturer ${country}, surveillance camera ${country}, OEM CCTV ${country}, NDAA compliant ${country}`,
  };
  // v2 variants
  CATALOG[`/${slug}-v2`] = CATALOG["/" + slug];
});

/** Resolve metadata for any path; falls back to a slug-derived title. */
function lookup(rawPath) {
  if (!rawPath) return null;
  const path = rawPath === "/" ? "/" : rawPath.replace(/\/+$/, "");
  if (CATALOG[path]) return CATALOG[path];
  // Strip a trailing /:slug for dynamic routes (e.g. /blog/[urlTitle])
  const parent = path.replace(/\/[^/]+$/, "");
  if (parent && CATALOG[parent]) return null; // dynamic page should provide its own metadata
  return null;
}

export function buildMetadata(path, override = {}) {
  const cfg = lookup(path) || {};
  const slug = path === "/" ? "home" : path.replace(/^\//, "").split("/").pop();
  const fallbackTitle = `${titleCase(slug)} | Adiance Technologies`;
  const title = override.title || cfg.title || fallbackTitle;
  const description =
    override.description ||
    cfg.description ||
    "Adiance Technologies is an NDAA-compliant OEM/ODM CCTV camera manufacturer based in India.";
  const keywords = override.keywords || cfg.keywords;
  const ogImage = override.ogImage || cfg.ogImage || DEFAULT_OG;
  const canonical = override.canonical || path;
  const noindex = override.noindex ?? cfg.noindex ?? false;

  const allowIndex =
    process.env.NEXT_PUBLIC_ALLOW_INDEX === "true" ||
    process.env.VERCEL_ENV === "production";

  const metadata = {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${SITE}${canonical}`,
        "x-default": `${SITE}${canonical}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE}${canonical}`,
      siteName: SITE_NAME,
      images: [ogImage],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER,
      title,
      description,
      images: [ogImage],
    },
    robots:
      noindex || !allowIndex
        ? { index: false, follow: !noindex }
        : {
            index: true,
            follow: true,
            googleBot: {
              index: true,
              follow: true,
              "max-image-preview": "large",
              "max-snippet": -1,
              "max-video-preview": -1,
            },
          },
  };
  if (keywords) metadata.keywords = keywords;
  return metadata;
}

export function isKnownRoute(path) {
  return Boolean(lookup(path));
}

export { CATALOG };
