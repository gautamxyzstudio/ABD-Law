// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("✅ Route changed:", pathname);

    // Scroll window
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Scroll main container if it exists
    const main = document.querySelector("main");
    if (main) {
      console.log("Found <main>, current scrollTop:", main.scrollTop);
      main.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
