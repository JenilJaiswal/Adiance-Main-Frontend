import Script from "next/script";
import Providers from "./providers";
import "./globals.css";
import "../src/App.css";
import "../src/N_Component/Style.css";

export const metadata = {
  metadataBase: new URL("https://www.adiance.com"),
  title: "NDAA Compliant OEM Camera Manufacturer | White Label CCTV | Adiance",
  description:
    "Adiance is an NDAA compliant OEM camera manufacturer in India. White-label CCTV, AI-powered surveillance, and custom security solutions for US/global markets.",
  alternates: {
    canonical: "/",
    languages: {
      en: "https://www.adiance.com/",
      "x-default": "https://www.adiance.com/",
    },
  },
  openGraph: {
    title:
      "NDAA Compliant OEM Camera Manufacturer | White Label CCTV | Adiance",
    description:
      "Adiance is an NDAA compliant OEM camera manufacturer in India. White-label CCTV, AI-powered surveillance, and custom security solutions for US/global markets.",
    type: "website",
    url: "https://www.adiance.com",
    siteName: "Adiance Technologies",
    images: ["https://www.adiance.com/images/Logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@adiancetech",
    title:
      "NDAA Compliant OEM Camera Manufacturer | White Label CCTV | Adiance",
    description:
      "Adiance is an NDAA compliant OEM camera manufacturer in India. White-label CCTV, AI-powered surveillance, and custom security solutions for US/global markets.",
    images: ["https://www.adiance.com/images/Logo.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/Logo.webp",
  },
  manifest: "/manifest.json",
  verification: {
    google: "ToZv5ontdwBZWArKbClqliVv4Zzduzs5-CbhZxgxaE4",
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad",
    "theme-color": "#000000",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Adiance Technologies",
  alternateName: "Adiance",
  url: "https://www.adiance.com",
  logo: "https://www.adiance.com/images/Logo.webp",
  description:
    "Adiance Technologies is an NDAA compliant OEM camera manufacturer in India. We provide white-label CCTV cameras, AI-powered surveillance solutions, NVRs, cloud VMS, and custom OEM/ODM/JDM electronics manufacturing services for global markets.",
  foundingDate: "2003",
  parentOrganization: {
    "@type": "Organization",
    name: "VMukti Solutions",
    url: "https://www.vmukti.com",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "7, Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380054",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+91-9687779999",
      email: "sales@adiance.com",
      areaServed: "Global",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/adiancetechnologies",
    "https://www.linkedin.com/company/adiancetechnologies",
    "https://x.com/adiancetech",
    "https://www.instagram.com/adiancetech/",
    "https://youtube.com/@adiancetechnologies",
  ],
  knowsAbout: [
    "NDAA compliant cameras",
    "OEM CCTV manufacturing",
    "white-label surveillance",
    "AI-powered security cameras",
    "Made in India cameras",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Adiance Technologies",
  url: "https://www.adiance.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.adiance.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.adiance.com/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is NDAA compliance for security cameras?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NDAA Section 889 prohibits US federal agencies from purchasing telecommunications and surveillance equipment from specific Chinese manufacturers including Hikvision and Dahua. Adiance cameras are NDAA compliant, manufactured in India with non-Chinese chipsets, and approved for US government use.",
      },
    },
    {
      "@type": "Question",
      name: "Does Adiance offer white-label camera manufacturing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Adiance provides full white-label and private-label CCTV camera manufacturing. We handle hardware design, firmware, packaging, and branding so you can launch your own camera brand without building a factory.",
      },
    },
    {
      "@type": "Question",
      name: "What SoC chipsets does Adiance use in its cameras?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adiance uses non-Chinese SoC platforms including Novatek, Sigmastar, and other NDAA-safe chipsets. This ensures compliance for US government and enterprise deployments.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Adiance headquartered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adiance Technologies is headquartered in Ahmedabad, Gujarat, India. We are a subsidiary of VMukti Solutions and operate manufacturing and R&D facilities in India.",
      },
    },
    {
      "@type": "Question",
      name: "Does Adiance offer AI-powered surveillance cameras?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Adiance offers AI Edge cameras with on-device analytics including people counting, intrusion detection, ANPR, face recognition, and smart motion detection — all processed at the edge without cloud dependency.",
      },
    },
    {
      "@type": "Question",
      name: "Which regions does Adiance serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adiance serves global markets including the United States, Europe, Middle East, Southeast Asia, and India. Our cameras are deployed in 20+ countries through OEM and distribution partners.",
      },
    },
  ],
};

const srOnlyH1Style = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  border: 0,
};

const hideChatWidgetsCss = `
.zsiq-float,.zsiq-flexM,.zsiq_cnt,#zsiq_float,[id*="zsiq"],[class*="zsiq"],[class*="salesiq"]{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important;}
[id*="chat"],[class*="chat-widget"],[class*="chatbot"],[class*="tawk"],[class*="intercom"],[class*="drift"]{display:none!important;visibility:hidden!important;}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua&family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua&family=Roboto:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          as="image"
          href="/N_Images/Slider1.webp"
          fetchPriority="high"
        />
        <link rel="preload" as="image" href="/images/innovation-header.webp" />
        <link rel="preload" as="image" href="/images/product-header.webp" />
        <style dangerouslySetInnerHTML={{ __html: hideChatWidgetsCss }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        <h1 style={srOnlyH1Style}>
          NDAA Compliant OEM Camera Manufacturer | White Label CCTV Cameras |
          Adiance India
        </h1>
        <Providers>{children}</Providers>
        <Script id="gtm-loader" strategy="afterInteractive">{`
(function(){var gtmLoaded=false;function loadGTM(){if(gtmLoaded)return;gtmLoaded=true;(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M7PMRCM');['scroll','mousemove','keydown','touchstart','click'].forEach(function(e){window.removeEventListener(e,loadGTM);});}['scroll','mousemove','keydown','touchstart','click'].forEach(function(e){window.addEventListener(e,loadGTM,{once:true,passive:true});});setTimeout(loadGTM,7000);})();
`}</Script>
        <Script id="fb-pixel-loader" strategy="afterInteractive">{`
function loadFBPixel(){!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1453314838088467');fbq('track','PageView');}
if('requestIdleCallback' in window){requestIdleCallback(loadFBPixel,{timeout:5000});}else{window.addEventListener('load',function(){setTimeout(loadFBPixel,3000);});}
`}</Script>
      </body>
    </html>
  );
}
