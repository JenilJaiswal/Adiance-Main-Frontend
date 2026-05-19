"use client";

import React from "react";
import Header from "./Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import AboutSlider from "./AboutSlider";
import { Helmet } from "react-helmet";
import ZohoSupport from "./zoho-support/ZohoSupport";

const Support = () => {
  return (
    <div>
      <Helmet>
        <title>Support | The Best Security Camera Manufacturer</title>
        <meta
          name="description"
          content="Adiance is the best security camera manufacturer original equipment manufacturing company specializing in the production of high quality security camera systems"
        />
      </Helmet>
      <Header />
      <NavHeader text={"Support"} />
      <ZohoSupport />

      <div className="support-container">
        <div className="support-column">
          <p>
            Adiance is an original equipment manufacturing company specializing
            in the production of high-quality camera and video imaging hardware
            equipment. We have a team of in-house experts with great knowledge
            of the current marketing trends and imaging requirements faced by
            companies and organizations across different sectors. Get in touch
            with our support team here to discuss and find solutions to queries
            regarding our products. Our portal will put you directly in touch
            with our experts to enquire about any issues with the functioning of
            our products providing you instant service to remedy them.
          </p>
          <p>
            New clients interested in our products can explore our online portal
            to identify the best fit for their setups. We offer online
            demonstrations of our products to help you visualize their potential
            and application in your office setups. These demonstrations display
            the various capabilities of products and their ability to withstand
            weathering and rough environments to function efficiently. Online
            demonstrations can also provide you with intelligent insights on the
            kind of surveillance requirements your organization would require
            helping you in quick decision making.
          </p>
          <p>
            Our online support portal is also dedicated to publishing the
            whitepapers of our products detailing their unique features and
            performance. We release detailed descriptions of the individual
            capabilities of our wide range of products and the different ways
            they can be applied efficiently. This will expand your view on the
            general efficiency of CCTV products and their efficiency in
            improvising your surveillance systems. Our whitepapers will cover
            important statistical and hardware information based on our
            performance with different organizations and sectors helping
            establish a clear vision of the extent of our abilities.
          </p>
        </div>
        <div className="support-column">
          <p>
            The support portal serves as a medium for communication between our
            clientele and Adiance. You can give your feedback about our
            products, services and interaction with your organizations helping
            us evolve and improvise our products and services to better serve
            your needs. This portal helps you gain insights about the response
            of our clients to different products and services to provide you
            first-hand information regarding the working performance of our
            products. You can choose the ideal hardware solution for your needs
            after exploring the huge oasis of information available in our
            whitepapers and customer feedback.
          </p>
          <p>
            Get in touch with Adiance at our online portal to discover the wide
            variety of advancements in the field of camera and imaging hardware.
            Enjoy the best standards in our equipment and integrate advanced
            software solutions to our products to unleash their true potential.
            Adiance offers the highest standards of hardware products to elevate
            your monitoring and surveillance letting you enjoy a safe and secure
            life.
          </p>
        </div>
        <style jsx>{`
          .support-container {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 20px;
            padding: 20px;
            margin: 5% 10%;
          }

          .support-column {
            // border: 1px solid #ccc;
            // border-radius: 10px;
            padding: 20px;
            text-align: justify;
            // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          @media screen and (min-width: 768px) {
            .support-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }
        `}</style>
      </div>
      {/* <AboutSlider /> */}
      <Footer />
    </div>
  );
};

export default Support;
