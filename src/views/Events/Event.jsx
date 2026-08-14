"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EventMidSection from "./EventMidSection";
import { Helmet } from "react-helmet";

export default function Event() {

  return (
    <div>
      <Helmet>
        <title>Insights from Adiance at Industry Events, Expos & Global Manufacturing</title>
        <meta
          name="description"
          content="Connect with the Adiance team at leading cctv manufacturing, OEM, and security hardware events. Stay updated on upcoming expos and explore our latest product showcases."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Insights from Adiance at Industry Events, Expos & Global Manufacturing" />
        <meta
          property="og:description"
          content="Connect with the Adiance team at leading cctv manufacturing, OEM, and security hardware events. Stay updated on upcoming expos and explore our latest product showcases."
        />
        <meta property="og:image" content="https://www.adiance.com/images/event_carousel_1.webp" />
        <meta property="og:url" content="https://www.adiance.com/event" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <meta name="twitter:title" content="Insights from Adiance at Industry Events, Expos & Global Manufacturing" />
        <meta
          name="twitter:description"
          content="Connect with the Adiance team at leading cctv manufacturing, OEM, and security hardware events. Stay updated on upcoming expos and explore our latest product showcases."
        />
        <meta name="twitter:image" content="https://www.adiance.com/images/ifsec-event.webp" />

        {/*
          Canonical and WebPage JSON-LD come from buildMetadata() and
          <PageSchema> on the server. Emitting them again here duplicated the
          WebPage entity and added a second canonical.
        */}
      </Helmet>
      <Header />
      <EventMidSection />
      <Footer />
    </div>
  );
}