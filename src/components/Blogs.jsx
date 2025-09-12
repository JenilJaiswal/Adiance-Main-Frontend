import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import Header from "./Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import axios from "axios";
import { Helmet } from "react-helmet";

const generateUrlTitle = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .trim();
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(6); // Number of blogs per page
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://backend.adiance.com:443/api/blogs/getAllBlogs?page=${currentPage}`
          // `http://localhost:8007/api/blogs/getAllBlogs?page=${currentPage}`
        );
        const { blogs, totalPages } = response.data;

        // Prepend hardcoded blog to fetched blogs
        setBlogs(blogs);
        setFilteredBlogs(blogs);
        setTotalPages(totalPages);
      } catch (error) {
        setError(
          error.message || "Failed to fetch blogs. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, limit]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Function to truncate the description to 50 words
  const truncateDescription = (description, maxWords = 50) => {
    const words = description.split(/\s+/);
    const truncated = words.slice(0, maxWords).join(" ");
    if (words.length > maxWords) {
      return truncated + "...";
    }
    return truncated;
  };

  // Function to format date to display only the date portion
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString(); // Returns date in "Day Month Date Year" format (e.g., "Fri Mar 20 2024")
  };

  return (
    <div>
      <Helmet>
        <title>Insights & Trends | Explore Our Security Blog</title>
        <meta
          name="description"
          content="Stay updated with the latest security trends, AI innovations, and expert insights on surveillance, cybersecurity, and smart protection solutions."
        />
      </Helmet>
      <Header />
      <NavHeader text={"Blogs"} />
      <div
        className="innovation-container"
        // style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div className="innovation-item" key={blog._id}>
              <img
                src={`https://backend.adiance.com:443/images/${blog.image}`}
                alt={blog.title}
                className="item-image"
              />
              <div className="item-details">
                <h3 className="item-title">{blog.title}</h3>
                <p className="item-description">
                  {truncateDescription(blog.description)}
                </p>
                <div className="item-footer">
                  <p className="item-date">
                    {formatDate(blog.createdAt || blog.date)}
                  </p>
                  <Link
                    // to={`/blog/${blog._id}`}
                    //  to={ `/blog/${generateUrlTitle(blog.title)}`}
                    to={`/blog/${blog.urlTitle}`}
                    className="read-more-link"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="blog-data-main-container">
            <div style={{ textAlign: "center" }}>
              <h1 style={{ marginBottom: "10px" }}>
                India's New CCTV Regulations: A Game-Changer for Surveillance
              </h1>
              <h3 style={{ marginBottom: "10px" }}>
                Breaking News: Indian Government to Implement New CCTV
                Guidelines on October 8?
              </h3>
            </div>

            <p>
              As part of a sweeping move to enhance national security, the
              Indian government is set to enforce{" "}
              <span style={{ fontWeight: "bold" }}>new CCTV regulations</span>{" "}
              starting October 8. According to{" "}
              <span style={{ fontWeight: "bold" }}>recent reports</span>, these
              changes will have a profound impact on the surveillance industry,
              with foreign players—particularly those from China—likely to be
              phased out. This isn't just another regulatory update; it's a
              seismic shift that will redefine the playing field for CCTV
              manufacturers and security solution providers across the nation.
            </p>
            <p>
              This is big news for Indian companies like Adiance, as the
              government's guidelines favor{" "}
              <span style={{ fontWeight: "bold" }}>"trusted locations"</span>{" "}
              and{" "}
              <span style={{ fontWeight: "bold" }}>local manufacturers</span>,
              positioning{" "}
              <span style={{ fontWeight: "bold" }}>"Make in India"</span> CCTV
              solutions to dominate the market.
            </p>
            <p>
              At Adiance, we see this not just as a change in policy, but as the
              dawn of a new era for{" "}
              <span style={{ color: "blue" }}>
                Make in India CCTV solutions
              </span>
              . Let's delve into what this means for the industry and how
              forward-thinking businesses can position themselves at the
              forefront of this revolution.
            </p>

            <h4 style={{ fontWeight: "initial" }}>
              What the New Guidelines Mean for Foreign Players and Indian
              Companies
            </h4>

            <div>
              <p style={{ fontStyle: "italic" }}>
                Per the latest news, "The government's policy on surveillance
                cameras is likely to come into effect on October 8. Once it
                comes out, all the Chinese players will be out of the picture,
                and Indian companies are likely to gain."
              </p>
              <img
                src="/images/India'sCCTVRegulations.png"
                alt=""
                style={{ width: "100%", height: "650px" }}
              />
            </div>

            <p>
              This marks a significant shift in India’s approach to
              surveillance, driven by concerns over{" "}
              <span style={{ fontWeight: "bold" }}>data privacy</span> and
              <span style={{ fontWeight: "bold" }}>cybersecurity</span> threats
              from foreign-made products. The government’s fast-tracked
              guidelines will require CCTV cameras and other surveillance
              equipment to adhere to strict standards, which include:
            </p>

            <h6 style={{ fontWeight: "bold" }}>
              Exclusion of Products from Non-Trusted Countries
            </h6>
            <p>
              Chinese CCTV manufacturers will be heavily impacted, as they are
              seen as posing potential risks to national security. The
              government’s focus on{" "}
              <span style={{ fontWeight: "bold" }}>trusted locations</span>{" "}
              means only companies from nations deemed secure will be able to
              sell their surveillance products in India.
            </p>
            <h6 style={{ fontWeight: "bold" }}>
              Boost for Indian CCTV Manufacturers
            </h6>
            <p>
              With foreign players being restricted, Indian manufacturers like
              Adiance are poised to take center stage. The government’s push for
              <span style={{ fontWeight: "bold" }}>Make in India</span>{" "}
              solutions has created a fertile ground for local companies to
              thrive and meet the growing demand for secure, certified
              surveillance systems.
            </p>
            <h6 style={{ fontWeight: "bold" }}>
              New Certification Requirements
            </h6>
            <p>
              The government is expected to tighten security checks for
              surveillance equipment. In addition to the Bureau of Indian
              Standards (BIS) certification, enhanced scrutiny will ensure that
              CCTV systems installed in India do not become tools for espionage
              or data leakage, especially in critical sectors.
            </p>
            <h6 style={{ fontWeight: "bold" }}>Redefined Cybersecurity</h6>
            <p>
              With the exodus of Chinese players, the focus on cybersecurity in
              CCTV systems will intensify. Make in India solutions will need to
              demonstrate unparalleled security features, potentially driving
              innovations in encryption and secure data transmission
            </p>
            <h6 style={{ fontWeight: "bold" }}>
              AI and Analytics: An Indian Perspective
            </h6>
            <p>
              As Indian companies fill the void, we'll likely see AI and
              analytics solutions tailored specifically for Indian contexts.
              Imagine facial recognition systems optimized for India's diverse
              population or traffic monitoring AI that understands the unique
              flow of Indian streets.
            </p>
            <h6 style={{ fontWeight: "bold" }}>Supply Chain Transformation</h6>
            <p>
              The shift to trusted locations will necessitate a complete
              overhaul of existing supply chains. This presents an opportunity
              for Indian component manufacturers and software developers to step
              up and fill crucial gaps in the production ecosystem.
            </p>
            <h6 style={{ fontWeight: "bold" }}>
              Skill Development and Job Creation
            </h6>
            <p>
              The emphasis on Make in India CCTV solutions will likely spur
              significant investment in skill development. We foresee the
              emergence of specialized training programs in CCTV technology,
              cybersecurity, and AI, creating a new generation of high-skilled
              jobs.
            </p>

            <h4 style={{ fontWeight: "initial" }}>
              Why These Rules Are Crucial for Indian Businesses
            </h4>
            <p>
              For businesses that rely on CCTV systems, these regulatory changes
              signal a clear directive: non-compliance is not an option. If your
              company uses foreign-made CCTV cameras, especially from
              non-trusted countries like China,{" "}
              <span style={{ fontWeight: "bold" }}>
                you may need to replace or upgrade your systems
              </span>{" "}
              to meet the new standards.
            </p>
            <p>The key takeaways for businesses include:</p>
            <div>
              <ul>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    Immediate Need for Compliant Solutions:
                  </span>{" "}
                  Companies operating in critical sectors—such as defense,
                  public infrastructure, and government facilities—will need to
                  prioritize upgrading their surveillance systems to meet the
                  new regulatory standards.
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Data Privacy and Cybersecurity Risks:
                  </span>{" "}
                  The new rules ensure that CCTV systems are secure by design,
                  eliminating the risk of data leaks and breaches associated
                  with foreign-made equipment.
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Business Continuity and Security Assurance:
                  </span>{" "}
                  Non-compliance could lead to operational disruptions or even
                  legal challenges, particularly for companies handling
                  sensitive or classified information.
                </li>
              </ul>
            </div>

            <h4>
              Adiance: Leading the Charge with Compliant, Make-in-India CCTV
              Solutions
            </h4>
            <p>
              The good news for Indian businesses is that trusted local
              manufacturers like{" "}
              <span style={{ fontWeight: "bold" }}>Adiance</span> are fully
              prepared to meet the government’s new security guidelines. As a
              pioneer in{" "}
              <span style={{ fontWeight: "bold" }}>Make in India</span>{" "}
              surveillance solutions, Adiance offers{" "}
              <span style={{ fontWeight: "bold" }}>certified, compliant,</span>
              and{" "}
              <span style={{ fontWeight: "bold" }}>
                customized CCTV systems
              </span>{" "}
              tailored to the specific needs of Indian industries.
            </p>

            <p>
              Here’s why Adiance is your best choice for staying ahead of the
              regulatory curve:
            </p>

            <div>
              <ul>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Fully Certified for Indian Standards:
                  </span>{" "}
                  Adiance CCTV systems are built to comply with both the BIS
                  standards and the newly introduced security regulations. This
                  ensures that your business can continue operating smoothly,
                  without the risk of regulatory breaches.
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Local Manufacturing for Maximum Security:
                  </span>{" "}
                  Adiance’s "Make in India" commitment means we have full
                  control over the supply chain, ensuring no foreign components
                  that could pose security threats. Our systems are designed to
                  be{" "}
                  <span style={{ fontWeight: "bold" }}>secure by design,</span>
                  making them ideal for sensitive and high-risk environments.
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Custom Solutions for Critical Infrastructure:
                  </span>{" "}
                  Whether you operate in government, defense, or private
                  industries, Adiance can create bespoke surveillance solutions
                  tailored to your specific regulatory and operational needs.
                </li>
              </ul>
            </div>
            <h4>
              The Future of Indian CCTV Solutions & Surveillance: A Push for
              Local, Secure Solutions
            </h4>
            <p>
              The new policy aims to build a self-reliant, secure, and
              sustainable surveillance ecosystem within India. This shift is
              expected to:
            </p>

            <div>
              <ul>
                <li>Accelerate innovation in the local industry</li>
                <li>
                  Position Indian manufacturers to lead with trusted, high-tech
                  solutions
                </li>
                <li>
                  Enable the integration of AI-enabled analytics at competitive
                  prices
                </li>
                <li>
                  Open doors for Indian companies to expand into global markets
                  with certified, trusted products
                </li>
              </ul>
            </div>

            <h4>Time to Upgrade: Secure Your Business with Adiance</h4>
            <p>
              With the new CCTV regulations set to take effect soon, the time to
              act is now. Don’t wait for compliance issues to arise—take
              proactive steps to secure your business with Adiance’s{" "}
              <span style={{ fontWeight: "bold" }}>Make in India</span>{" "}
              solutions.
            </p>
            <br />
            <p>
              By choosing Adiance, you’ll not only comply with the latest
              government guidelines but also invest in the future of{" "}
              <span style={{ fontWeight: "bold" }}>
                secure, AI-driven surveillance technology.
              </span>
            </p>
            <br />
            <p>Here’s why you should partner with Adiance:</p>
            <div>
              <ul>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Compliance with New Regulations:
                  </span>{" "}
                  We are already aligned with the October 8 policy changes,
                  offering fully certified surveillance solutions that meet the
                  latest standards.
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Custom Solutions Across Industries:
                  </span>{" "}
                  Whether you need surveillance for public sector projects,
                  private enterprises, or critical infrastructure, Adiance
                  provides tailored solutions designed to meet regulatory
                  requirements.
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Competitive Pricing for High-Security Systems:
                  </span>{" "}
                  Despite the regulatory changes, Adiance offers cost-effective,
                  fully compliant surveillance systems that don’t compromise on
                  security.
                </li>
              </ul>
            </div>
            <h4>Conclusion: Stay Ahead of the Curve with Adiance</h4>
            <p>
              India’s new CCTV regulations represent a pivotal moment for
              businesses that rely on surveillance. By enforcing stringent
              guidelines and focusing on{" "}
              <span style={{ fontWeight: "bold" }}>Make in India</span>{" "}
              solutions, the government is signaling a long-term commitment to{" "}
              <span style={{ fontWeight: "bold" }}>national security</span> and{" "}
              <span style={{ fontWeight: "bold" }}>data protection.</span>
            </p>
            <p>
              By partnering with Adiance, your business can stay ahead of these
              changes, ensuring compliance and securing your future with
              trusted, innovative surveillance solutions.
            </p>
            <p>
              Adiance is more than just a CCTV manufacturer—we’re your partner
              in navigating this new regulatory landscape.{" "}
              <span style={{ fontWeight: "bold" }}>
                Let us help you secure your tomorrow, today.
              </span>
            </p>
          </div>
        )}
      </div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Typography variant="body1">
          Page {currentPage} of {totalPages}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          style={{ marginRight: "10px" }}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
      <Footer />
      <style jsx>{`
        .innovation-container {
          // display: flex;
          // flex-direction: column;

          display: grid;
          grid-template-columns: 1fr; /* Default: single column */
          gap: 1rem;
          padding: 20px;
          margin: 5% 10%;
        }

        .full-blog {
          margin-bottom: 40px;
        }

        .full-blog h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .full-blog p {
          font-size: 16px;
          color: #333;
        }

        .full-blog-image {
          width: 100%;
          height: auto;
          margin-bottom: 20px;
        }

        .blog-list {
          display: grid;
          grid-gap: 20px;
        }

        .innovation-item {
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .item-image {
          width: 100%;
          height: auto;
          margin-bottom: 10px;
        }

        .item-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .item-description {
          font-size: 14px;
          color: #666;
        }

        .item-footer {
          display: flex;
          justify-content: space-between;
        }

        .item-date {
          font-size: 14px;
          color: #666;
        }

        .read-more-link {
          font-size: 14px;
          color: blue;
          text-decoration: none;
        }

        @media screen and (min-width: 768px) {
          .blog-list {
            grid-template-columns: repeat(2, 1fr);
          }
          .innovation-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media screen and (min-width: 1024px) {
          .blog-list {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default Blogs;
