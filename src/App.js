import { Suspense, useEffect } from "react";
import "./N_Component/Style.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import routes from "./components/routes";
import RedirectManager from "./RedirectManager";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const CombinedRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
  let targetPath = location.pathname;

    // Redirect specific path
    if (targetPath === "/anrpcamera") {
      navigate("/anpr-camera", { replace: true });
      return;
    }

    // Redirect short S Series path to full slug
    if (targetPath === "/s-series") {
      navigate("/5g-edge-ai-camera-s-series-surveillance", { replace: true });
      return;
    }

    // Lowercase redirect
    const lowercasePath = targetPath.toLowerCase();
    if (targetPath !== lowercasePath) {
      targetPath = lowercasePath;
    }

    // Trailing slash redirect
    if (targetPath !== "/" && targetPath.endsWith("/")) {
      targetPath = targetPath.slice(0, -1);
    }

    if (targetPath !== location.pathname) {
      navigate(targetPath, { replace: true });
    }
  }, [location, navigate]);

  return null;
};



function App() {
  return (
    <Router>
      <ScrollToTop />
      <RedirectManager />
      {/* <EventMainDash /> */}
      <CombinedRedirect />
      <Suspense fallback={null}>
        <Routes>
          {routes.map(({ path, element }, index) => {
            // console.log("Checking route:", path);
            return <Route key={index} path={path} element={element} replace />;
          })}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
