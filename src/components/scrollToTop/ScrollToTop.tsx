<<<<<<< HEAD
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
=======
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

useEffect(() => {
  const container = document.querySelector("main");
  if (container) {
    container.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}, [pathname]);
>>>>>>> parent of bad11e7 (scroll issue)

  return null;
}
