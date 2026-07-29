import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const redirects = {
  "/the-top-10-cctv-camera-manufacturers-in-the-usa": "/blog",
  "/future-and-growth": "/about",
  "/sustainability": "/about",
  "/index.html": "/",
  "/360-approach": "/about",
  "/feedback": "/contact-us",
  "/partner-with-us": "/partner",
  "/2022/02/17": "/blog",
  "/smart-anpr-lpr-cctv-camera": "/anpr-camera",
  "/best-5-emerging-trends-in-ai-based-cctv-surveillance-technology": "/blog",
  "/edge-ai-based-ptz-anpr-bullet-camera-vm-72bptz5aive-2": "/4k-bullet-anpr-ptz-camera",
  "/smart-thermal-cctv-camera": "/thermal-camera",
  "/hello-world": "/blog",
  "/thanks": null,
  "/tag/wifi-camera-manufacturer": "/wifi-ptz-camera",
  "/wp-content/plugins/revslider/public/assets/js": "/",
  "/nvr-series": "/cloudxvr",
  "/indoor-cctv-": "/4g-dome-ptz-camera",
  "/video-surveillance-": "/innovation",
  "/top-5-company-thermal-camera-": "/thermal-camera",
  "/voipgateway.html": "/",
  "/2023/07/27": "/blog",
  "/panoramic": "/4g-dome-ptz-camera",
  "/video-surveillance-manufacturer-in-the-usa": "/about",
  "/adiance-": "/",
  "/edge-ai-based-face-recognition": "/4k-face-recognition-camera",
  "/wireless-ip-cctv-camera-manufacturer-supplier": "/wifi-ptz-camera",
  "/5g-edge-ai-camera-s-series-surveillance": "/4gcamera",
  "/adiance-leading-supplier-for-cctv-surveillance": "/about",
  "/dome-cctv-camera-manufacturer": "/4g-dome-ptz-camera",
  "/4g-dome-camera": "/4g-dome-ptz-camera",
  "/edge-ai-based-object-face-detection-cameras-2": "/edge-ai-based-object-n-face-detection-cameras",
  "/smart-edge-ai-cloud-cctv-camera": "/cloud-application",
  "/bullet-cctv-camera-manufacturer": "/4k-bullet-anpr-ptz-camera",
  "/adiances-next-generation-factory-building-a-smart-surveillance-camera-family": "/about",
  "/adiance-cloud-based-thermal-camera": "/thermal-camera",
  "/smart-anpr-lpr": "/anpr-camera",
  "/smart-wifi-cloud-cctv-camera": "/wifi-ptz-camera",
  "/scalable-and-cloud-ready-xvr": "/cloudxvr",
  "/adianance-4g-mini-bullet-camera": "/4g-mini-bullet-camera",
  "/adiance-4g-mini-bullet-camera": "/4g-mini-bullet-camera",
  "/cctv-manufacturer-ahmedabad": "/about",
  "/how-is-ai-technology-making-video-surveillance-systems-smarter": "/blog",
  "/white-label-home-security-camera": "/white-label-cctv-camera-manufacturer",
  "/japan-cctv-camera-manufacturer": "/cctv-camera-manufacturer-japan",
  "/h265-4g-dome-ptz-camera": "/4g-dome-ptz-camera",
  "/industries/smart-cities": "/smart-cities",
  "/products/arcis-bridge": "/",
  "/industries/education": "/education",
  "/oem-cctv-manufacturer-india": "/oem-cctv-camera-manufacturer-usa",
  "/industries/public-transport": "/public-transport",
  "/products/edge-ai-camera": "/edgeaicamera",
  "/products/robotic-arm": "/robotics",
  "/industries/bank-finance": "/bank-finance",
  "/products/eco-series": "/eco-series",
  "/products/cloud-vms": "/cloud-application",
  "/products/nvr": "/cloudxvr",
  "/white-label-vs-branded-cctv-cameras": "/blog",
  "/supply-chain-diversification-cctv-manufacturing": "/blog",
  "/how-to-choose-oem-cctv-manufacturer": "/blog",
  "/ndaa-compliant-cctv-cameras-buyers-guide": "/blog",
  "/oem-cctv-camera-moq-explained": "/blog",
  "/industries/public-safety": "/public-safety",
  "/industries/retail": "/retail",
  "/top-5-things-to-know-before-starting-cctv-manufacturing": "/blog",
  "/blog/661921c42125c9f9e2d81608": "/blog",
  "/wifi-camera-manufacturer": "/wifi-ptz-camera",
  "/adianance-cloud-based-thermal-camera-f": "/adiance-thermal-camera-f",
  "/blog/679cbf82eec2800b46544898": "/blog",
  "/adiance-cloud-based-thermal-camera-f": "/adiance-thermal-camera-f",
  "/edge-ai-based-ptz-anpr-bullet-camera-vm-72bptz5aive-3": "/4k-bullet-anpr-ptz-camera",
  "/4g-camera": "/4gcamera",
}

const RedirectManager = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname;
    if (redirects.hasOwnProperty(currentPath)) {
      const newPath = redirects[currentPath];
      if (newPath) {
        navigate(newPath, { replace: true });
      }
    }
  }, [location, navigate]);

  return null;
}

export default RedirectManager;
