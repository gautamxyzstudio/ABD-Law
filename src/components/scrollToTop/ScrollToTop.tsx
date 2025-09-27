import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {

    // Scroll main container if it exists
    const main = document.querySelector("main");
    if (main) {
       console.log("✅ Route main changed:", pathname);
      console.log('Height', main.scrollHeight)
      console.log('Height Clent', main.clientHeight)
      
      main.scrollTo({ top: 0, left: 0, behavior:"smooth" });
    } else {
      console.log("✅ Route changed:", pathname);
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
