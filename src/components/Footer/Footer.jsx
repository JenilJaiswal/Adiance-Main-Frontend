import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo and Contact Info */}
        <div className="footer-left">
          <div className="footer-logo-section">
            <div className="logo-container">
              <img src="/N_Images/footer_logo.svg" alt="Adiance" className="footer-logo" loading="lazy" />
            </div>
            <div className="made-in-india-badge">
              <img src="/N_Images/make_in_india.svg" alt="Made in India" className="made-in-india" loading="lazy" />
            </div>
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <img src="/N_Images/website_icon.svg" alt="Website" className="contact-icon-img" loading="lazy" />
              <a href="https://www.adiance.com" target="_blank" rel="noopener noreferrer">www.adiance.com</a>
            </div>
            <div className="contact-item">
              <img src="/N_Images/email_icon.svg" alt="Email" className="contact-icon-img" loading="lazy" />
              <a href="mailto:Contact@adiance.com">Contact@adiance.com</a>
            </div>
            <div className="contact-item">
              <img src="/N_Images/call_icon.svg" alt="Phone" className="contact-icon-img" loading="lazy" />
              <span>(+91) 968 777 9999</span>
            </div>
            <div className="contact-item address">
              <img src="/N_Images/location_icon.svg" alt="Location" className="contact-icon-img" loading="lazy" />
              <span>House No. 7, Arista Eight, Corporate House, Rajpath Rangoli Rd, behind Satyam House, Bodakdev, Ahmedabad, Gujarat 380059</span>
            </div>
          </div>
        </div>

        {/* Right Section - Links and Social */}
        <div className="footer-right">
          <div className="footer-links">
            {/* Products Column */}
            <div className="footer-column">
              <h3>PRODUCTS</h3>
              <ul>
                <li><a href="/edge-ai-cctv-cameras">Edge AI Cameras</a></li>
                <li><a href="/eco-series">ECO Series</a></li>
                <li><a href="/ndaa-compliance">NDAA Compliance</a></li>
                <li><a href="/us">US Market</a></li>
                <li><a href="/ndaa-compliant-cctv-camera-manufacturer">NDAA Compliant Cameras</a></li>
                <li><a href="/white-label-cctv-camera-manufacturer">White Label Cameras</a></li>
                <li><a href="/non-chinese-cctv-camera-manufacturer">Non-Chinese Cameras</a></li>
                <li><a href="/private-label-security-camera-supplier">Private Label Cameras</a></li>
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="footer-column">
              <h3>SOLUTIONS</h3>
              <ul>
                <li><a href="/public-safety">Public Safety And Security</a></li>
                <li><a href="/traffic-management">Traffic Management & Monitoring</a></li>
                <li><a href="/crowd-control">Crowd Control</a></li>
                <li><a href="/smart-cities">Smart Cities & Infrastructure</a></li>
                <li><a href="/remote-security">Remote Security</a></li>
                <li><a href="/high-traffic">High-Traffic Infrastructure</a></li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="footer-column">
              <h3>SERVICES</h3>
              <ul>
                <li><a href="/oem-services">OEM Services</a></li>
                <li><a href="/odm-services">ODM Services</a></li>
                <li><a href="/jdm-services">JDM Services</a></li>
                <li><a href="/pcb-assembly-service">PCB Assembly Services</a></li>
                <li><a href="/oem-cctv-camera-manufacturer-usa">OEM Camera USA</a></li>
                <li><a href="/full-solution-oem-camera-manufacturer">OEM Camera India</a></li>
                <li><a href="/bis-er-certification">BIS-ER Certification</a></li>
              </ul>
            </div>

            {/* Industry Column */}
            <div className="footer-column">
              <h3>INDUSTRY</h3>
              <ul>
                <li><a href="/education">Education</a></li>
                <li><a href="/healthcare">Healthcare</a></li>
                <li><a href="/public-transport">Public Transport</a></li>
                <li><a href="/retail">Retail</a></li>
                <li><a href="/smart-safe-city">Smart Safe City</a></li>
                <li><a href="/bank-finance">Banking & Finance</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="footer-column">
              <h3>RESOURCES</h3>
              <ul>
                <li><a href="/blog">Blogs</a></li>
                <li><a href="/event">Events</a></li>
              </ul>
            </div>

            {/* About Us Column */}
            <div className="footer-column">
              <h3>ABOUT US</h3>
              <ul>
                <li><a href="/about">About Company</a></li>
                <li><a href="/warranty-service">Warranty Service</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/warranty-policy">Warranty Policy</a></li>
                <li><a href="/terms-of-service">Terms Of Service</a></li>
                <li><a href="/firmware">Firmware</a></li>
                <li><a href="/tools">Tools</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media and Action Buttons */}
          <div className="footer-bottom-right">
            <div className="social-media">
              <a href="https://www.facebook.com/adiancetechnologies" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                <img src="/N_Images/facebook.svg" alt="Facebook" loading="lazy" />
              </a>
              <a href="https://twitter.com/adiancetech" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                <img src="/N_Images/X.svg" alt="Twitter/X" loading="lazy" />
              </a>
              <a href="https://www.instagram.com/adiancetech/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <img src="/N_Images/Instagram.svg" alt="Instagram" loading="lazy" />
              </a>
              <a href="https://www.linkedin.com/company/adiancetechnologies/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <img src="/N_Images/linkedin.svg" alt="LinkedIn" loading="lazy" />
              </a>
            </div>
            
            <div className="action-buttons">
              <a href="/partners" className="action-btn">PARTNER WITH US</a>
              <span className="separator">|</span>
              <a href="/contact" className="action-btn">CONTACT US</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
      {/* Copyright */}
      <div className="footer-copyright">
        <p>Copyright © 2026 Adiance technologies. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer