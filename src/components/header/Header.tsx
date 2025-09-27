import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logoY, callH, mailH, hamburger, menuClose } from "../../exports";
import { routes } from "../../routes";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let scrollContainer: Window | HTMLElement = window;
    const main = document.querySelector("main");
    if (main) {
      const style = window.getComputedStyle(main);
      const isScrollable =
        main.scrollHeight > main.clientHeight ||
        style.overflowY === "auto" ||
        style.overflowY === "scroll";
      if (isScrollable) scrollContainer = main;
    }

    const getScrollTop = () =>
      scrollContainer === window
        ? window.pageYOffset || document.documentElement.scrollTop || 0
        : (scrollContainer as HTMLElement).scrollTop;

    const handleScroll = () => {
      const top = getScrollTop();
      setScrolled(top > 50);
    };

    // call once to set initial state (important for back/forward pages)
    handleScroll();

    const opts = { passive: true } as AddEventListenerOptions;

    if (scrollContainer === window) {
      window.addEventListener("scroll", handleScroll, opts);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      (scrollContainer as HTMLElement).addEventListener(
        "scroll",
        handleScroll,
        opts
      );
      return () =>
        (scrollContainer as HTMLElement).removeEventListener(
          "scroll",
          handleScroll
        );
    }
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-20 transition-colors duration-300 ${
        scrolled ? "bg-primary shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`bg-Yellow xl:flex hidden text-white xl:text-sm text-xs justify-between items-center xl:px-[150px] px-13 py-4 transition duration-300`}
      >
        <p>
          Trusted legal guidance for families, businesses, and individuals
          across British Columbia
        </p>
        <div className="flex items-center gap-3">
          <a
            href="mailto:office@abdlaw.ca"
            className="flex items-center text-xs gap-1 hover:opacity-80"
          >
            <img src={mailH} alt="Mail" className="xl:w-4 xl:h-4 w-3 h-3" />
            office@abdlaw.ca
          </a>
          <a
            href="tel:6047433110"
            className="flex items-center text-xs gap-1 hover:opacity-80"
          >
            <img src={callH} alt="Phone" className="w-4 h-4" />
            604 743 3110
          </a>
        </div>
      </div>

      {/* Main Navigation - Desktop */}
      <nav
        className={` text-white bg-transparent xl:flex hidden justify-between items-center px-[150px] py-3 transition-colors duration-300`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logoY} alt="ABD Law Corporation" className="h-10" />
        </div>

        {/* Menu from routes array */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="hover:text-Yellow transition-colors duration-300"
            >
              {route.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="bg-Yellow text-white px-4 py-2 rounded-md font-medium hover:bg-yellow-700"
        >
          Contact Us
        </Link>
      </nav>

      {/* Main Navigation - Tab/Mobile */}
      <div
        className={`${
          scrolled ? "text-black" : "text-Yellow"
        } bg-transparent xl:hidden md:px-13 px-6 py-3 flex justify-between items-center transition-colors duration-300`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logoY} alt="Law Logo" className="h-9 w-30" />
        </div>

        {/* Right Side */}
        <div className="flex flex-row gap-3 items-center-safe">
          <Link
            to="/contact"
            className="bg-Yellow md:block hidden text-white px-6 py-2 rounded-md font-medium hover:bg-yellow-700"
          >
            Contact Us
          </Link>
          {/* Hamburger */}
          <button onClick={() => setIsOpen(true)} className="xl:hidden block">
            <img
              src={hamburger}
              alt="Menu"
              className="md:h-13 md:w-13 h-6 w-6"
            />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-500 
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full md:w-2/3 w-full bg-primary z-50 flex flex-col transform transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header inside sidebar */}
        <div className="flex flex-row justify-between md:px-13 px-6 py-3 mb-10">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logoY} alt="Law Logo" className="h-9 w-30" />
          </div>

          {/* Close Button */}
          <button
            className="ml-auto text-Yellow"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={menuClose}
              alt="Close Menu"
              className="md:h-13 md:w-13 h-6 w-6"
            />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col space-y-6 text-white/80 md:px-13 px-6 hover:text-white">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              onClick={() => setIsOpen(false)} // close after clicking
              className="hover:text-Yellow transition-colors"
            >
              {route.name}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="px-6 mt-8">
          <Link
            to="/contact"
            className="md:hidden block w-full bg-Yellow text-white text-center py-3 px-auto rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
