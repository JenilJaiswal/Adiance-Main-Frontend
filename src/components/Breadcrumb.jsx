"use client";

import React from "react";
import { Link, useLocation } from "@/compat/react-router-dom";

const breadcrumbNameMap = {
  "/": "Home",
  "/about": "About Us",
  "/contact": "Contact Us",
  "/blog": "Blog",
  "/products": "Products",
  "/solutions": "Solutions",
  "/partners": "Partners",
  "/innovation": "Technology",
  "/event": "Events",
  "/edge-ai-cctv-cameras": "Edge AI Cameras",
  "/eco-series": "ECO Series",
  "/ndaa-compliance": "NDAA Compliance",
  "/us": "US Market",
  "/oem-services": "OEM Services",
  "/odm-services": "ODM Services",
  "/jdm-services": "JDM Services",
  "/pcb-assembly-service": "PCB Assembly",
  "/public-safety": "Public Safety",
  "/traffic-management": "Traffic Management",
  "/crowd-control": "Crowd Control",
  "/smart-cities": "Smart Cities",
  "/remote-security": "Remote Security",
  "/high-traffic": "High Traffic",
  "/education": "Education",
  "/healthcare": "Healthcare",
  "/public-transport": "Public Transport",
  "/retail": "Retail",
  "/smart-safe-city": "Smart Safe City",
  "/bank-finance": "Banking & Finance",
  "/privacy-policy": "Privacy Policy",
  "/terms-of-service": "Terms of Service",
  "/warranty-service": "Warranty Service",
  "/warranty-policy": "Warranty Policy",
  "/thermal-camera": "Thermal Camera",
  "/anpr-camera": "ANPR Camera",
  "/4kcamera": "4K Camera",
  "/edgeaicamera": "Edge AI Camera",
  "/4gcamera": "4G Camera",
  "/robotics": "Robotics",
  "/manufacturing": "Manufacturing",
  "/product-engineering": "Product Engineering",
  "/cloud-application": "Cloud Application",
  "/compliance": "Compliance",
  "/cyber-security": "Cyber Security",
  "/firmware": "Firmware",
  "/tools": "Tools",
  "/downloads": "Downloads",
  "/ndaa-compliant-cctv-camera-manufacturer": "NDAA Compliant Cameras",
  "/white-label-cctv-camera-manufacturer": "White Label Cameras",
  "/oem-cctv-camera-manufacturer-usa": "OEM Camera USA",
  "/non-chinese-cctv-camera-manufacturer": "Non-Chinese Cameras",
  "/private-label-security-camera-supplier": "Private Label Cameras",
  "/full-solution-oem-camera-manufacturer": "OEM Camera India",
};

const Breadcrumb = ({ customTitle }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  if (location.pathname === "/") return null;

  const crumbs = [{ path: "/", label: "Home" }];

  // For blog posts: /blog/:slug
  if (pathSegments[0] === "blog" && pathSegments.length === 2) {
    crumbs.push({ path: "/blog", label: "Blog" });
    crumbs.push({
      path: location.pathname,
      label: customTitle || pathSegments[1].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    });
  }
  // For case studies: /case-study/:slug
  else if (pathSegments[0] === "case-study" && pathSegments.length === 2) {
    crumbs.push({ path: location.pathname, label: customTitle || "Case Study" });
  }
  // For all other pages
  else {
    const fullPath = location.pathname;
    crumbs.push({
      path: fullPath,
      label: customTitle || breadcrumbNameMap[fullPath] || pathSegments[pathSegments.length - 1].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    });
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `https://www.adiance.com${crumb.path === "/" ? "" : crumb.path}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" style={styles.nav}>
        <ol style={styles.ol}>
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <li key={crumb.path} style={styles.li}>
                {!isLast ? (
                  <>
                    <Link to={crumb.path} style={styles.link}>
                      {crumb.label}
                    </Link>
                    <span style={styles.separator}>/</span>
                  </>
                ) : (
                  <span style={styles.current}>{crumb.label}</span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

const styles = {
  nav: {
    padding: "12px 5%",
    fontSize: "14px",
    fontFamily: "'Roboto', sans-serif",
    background: "#ffffff",
  },
  ol: {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    margin: 0,
    padding: 0,
    maxWidth: "1565px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  li: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    color: "#BF0603",
    textDecoration: "none",
    minHeight: "32px",
    display: "inline-flex",
    alignItems: "center",
  },
  separator: {
    margin: "0 8px",
    color: "#666",
  },
  current: {
    color: "#333",
    fontWeight: 500,
  },
};

export default Breadcrumb;