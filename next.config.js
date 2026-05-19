/** @type {import('next').NextConfig} */
const legacyRedirects = {
  "/the-top-10-cctv-camera-manufacturers-in-the-usa": "/blog",
  "/future-and-growth": "/about",
  "/sustainability": "/about",
  "/index.html": "/",
  "/360-approach": "/about",
  "/feedback": "/contact-us",
  "/partner-with-us": "/partner",
  "/2022/02/17": "/blog",
  "/smart-anpr-lpr-cctv-camera": "/products/anpr-lpr-cameras",
  "/best-5-emerging-trends-in-ai-based-cctv-surveillance-technology": "/blog",
  "/edge-ai-based-ptz-anpr-bullet-camera-vm-72bptz5aive-2": "/products/ptz-cameras",
  "/smart-thermal-cctv-camera": "/products/thermal-cameras",
  "/hello-world": "/blog",
  "/tag/wifi-camera-manufacturer": "/products/wifi-cameras",
  "/wp-content/plugins/revslider/public/assets/js": "/",
  "/nvr-series": "/products/nvr",
  "/indoor-cctv-": "/products/dome-cameras",
  "/video-surveillance-": "/solutions",
  "/top-5-company-thermal-camera-": "/products/thermal-cameras",
  "/voipgateway.html": "/",
  "/2023/07/27": "/blog",
  "/news": "/blog",
  "/panoramic": "/products/ptz-cameras",
  "/video-surveillance-manufacturer-in-the-usa": "/about",
  "/adiance-": "/",
  "/edge-ai-based-face-recognition": "/solutions/face-recognition",
  "/wireless-ip-cctv-camera-manufacturer-supplier": "/products/wifi-cameras",
  "/5g-edge-ai-camera-s-series-surveillance": "/products/5g-cameras",
  "/adiance-leading-supplier-for-cctv-surveillance": "/about",
  "/dome-cctv-camera-manufacturer": "/products/dome-cameras",
  "/4g-dome-camera": "/products/4g-cameras",
  "/edge-ai-based-object-face-detection-cameras-2": "/solutions/object-detection",
  "/smart-edge-ai-cloud-cctv-camera": "/solutions/cloud-storage",
  "/bullet-cctv-camera-manufacturer": "/products/bullet-cameras",
  "/adiances-next-generation-factory-building-a-smart-surveillance-camera-family": "/about",
  "/adiance-cloud-based-thermal-camera": "/products/thermal-cameras",
  "/smart-anpr-lpr": "/products/anpr-lpr-cameras",
  "/smart-wifi-cloud-cctv-camera": "/products/wifi-cameras",
};

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
  async redirects() {
    const dynamic = [
      { source: "/anrpcamera", destination: "/anpr-camera", permanent: true },
      {
        source: "/s-series",
        destination: "/5g-edge-ai-camera-s-series-surveillance",
        permanent: true,
      },
    ];
    const legacy = Object.entries(legacyRedirects).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
    return [...dynamic, ...legacy];
  },
};

module.exports = nextConfig;
