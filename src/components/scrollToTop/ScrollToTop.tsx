// src/components/scrollToTop/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll the window to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // If your pages are inside a container, scroll that too
    const container = document.querySelector(".container");
    if (container) {
      container.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
