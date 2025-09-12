import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LowercaseRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const lowercasePath = location.pathname.toLowerCase();
    if (location.pathname !== lowercasePath) {
      navigate(lowercasePath, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default LowercaseRedirect;