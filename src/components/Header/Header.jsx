import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const headerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (itemName) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleDesktopDropdownClick = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleDropdownLinkClick = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMobileMenu(null);
  };

  const toggleMobileSubmenu = (itemName) => {
    setExpandedMobileMenu(expandedMobileMenu === itemName ? null : itemName);
  };

  const navItems = [
    {
      name: "Products",
      path: "/s-series-ai-cctv-cameras",
      dropdownItems: [
        { name: "S-series", path: "/s-series-ai-cctv-cameras" },
        { name: "ECO Series", path: "/eco-series" },
        { name: "Edge AI Camera", path: "/edgeaicamera" },
        { name: "NDAA Compliance", path: "/ndaa-compliance" },
        { name: "US Market", path: "/us" }
      ]
    },
    {
      name: "Solution",
      path: "#",
      dropdownItems: [
        { name: "Public Safety and Security", path: "/public-safety" },
        { name: "Traffic Management & Monitoring", path: "/trafic-management" },
        { name: "Crowd Control", path: "/crowd-control" },
        { name: "Smart Cities & Infrastructure", path: "/smart-cities" },
        { name: "Remote-Security", path: "/remote-security" },
        { name: "High-Traffic Infrastructure", path: "/high-traffic" }
      ]
    },
    {
      name: "Services",
      path: "#",
      dropdownItems: [
        { name: "OEM Services", path: "/oem-services" },
        { name: "ODM Services", path: "/odm-services" },
        { name: "JDM Services", path: "/jdm-services" },
        { name: "PCB Assembly Services", path: "/pcb-assembly-service" }
      ]
    },
    {
      name: "Industry",
      path: "#",
      dropdownItems: [
        { name: "Education", path: "/education" },
        { name: "Healthcare", path: "/healthcare" },
        { name: "Public Transport", path: "/public-transport" },
        { name: "Retail", path: "/retail" },
        { name: "Smart & Safe City", path: "/smart-safe-city" },
        { name: "Bank & Finance", path: "/bank-finance" },
      ]
    },
    {
      name: "Resources",
      path: "#",
      dropdownItems: [
        { name: "Blogs", path: "/blog" },
        { name: "Events", path: "/event" }
      ]
    },
    {
      name: "About Us",
      path: "#",
      dropdownItems: [
        { name: "About Company", path: "/about" },
        { name: "Warranty Service", path: "/warranty-service" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Warranty Policy", path: "/warranty-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Feedback", path: "/feedback" }
      ]
    }
  ];

  return (
    <header className="main-header" ref={headerRef}>
      <div className="header-container">
        <div className="logo-section">
          <Link to="/">
            <img src="/images/Logo.png" alt="Adiance Logo" className="header-logo" />
          </Link>
        </div>

        <nav className="nav-section desktop-nav">
          <ul className="nav-items-list">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link-home active" : "nav-link-home")}>
                Home
              </NavLink>
            </li>

            {navItems.map((item) => (
              <li 
                key={item.name} 
                className="header-nav-dropdown-wrapper"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <div 
                  className={`header-nav-dropdown-trigger ${activeDropdown === item.name ? 'header-dropdown-active' : ''}`}
                  onClick={() => handleDesktopDropdownClick(item.name)}
                >
                  <span className="header-nav-text">{item.name}</span>
                  <img 
                    src="/N_Images/dropdown.svg" 
                    alt="dropdown" 
                    className={`header-dropdown-arrow ${activeDropdown === item.name ? 'header-arrow-rotated' : ''}`} 
                  />
                </div>

                <div className={`header-dropdown-panel ${activeDropdown === item.name ? 'header-dropdown-visible' : ''}`}>
                  <ul className="header-dropdown-list">
                    {item.dropdownItems.map((subItem, index) => (
                      <li key={index} className="header-dropdown-list-item">
                        <Link 
                          to={subItem.path} 
                          className="header-dropdown-list-link"
                          onClick={handleDropdownLinkClick}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="cta-section desktop-cta">
          <Link to="/partners" className="btn-partner">Partner with us</Link>
          <Link to="/contact" className="btn-connect">Connect with us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
        <div className="mobile-nav-content">
          <NavLink 
            to="/" 
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>

          {navItems.map((item) => (
            <div key={item.name} className="header-mobile-nav-dropdown">
              <div 
                className="header-mobile-nav-title"
                onClick={() => toggleMobileSubmenu(item.name)}
              >
                <span>{item.name}</span>
                <img 
                  src="/N_Images/dropdown.svg" 
                  alt="dropdown" 
                  className={`header-mobile-dropdown-arrow ${expandedMobileMenu === item.name ? 'header-mobile-arrow-rotated' : ''}`} 
                />
              </div>
              <div className={`header-mobile-nav-submenu ${expandedMobileMenu === item.name ? 'header-mobile-submenu-expanded' : ''}`}>
                {item.dropdownItems.map((subItem, index) => (
                  <Link 
                    key={index}
                    to={subItem.path} 
                    className="header-mobile-nav-sublink"
                    onClick={closeMobileMenu}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Mobile CTA Buttons */}
          <div className="mobile-cta-section">
            <Link to="/partners" className="btn-partner" onClick={closeMobileMenu}>
              Partner with us
            </Link>
            <Link to="/contact" className="btn-connect" onClick={closeMobileMenu}>
              Connect with us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
      )}
    </header>
  );
};

export default Header;