import React from "react";
import { logoY, callH, mailH, hamburger, menuClose } from "../../exports";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { useState } from "react";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full sticky top-0 z-20">
      {/* Top Bar */}
      <div className="bg-Yellow xl:flex hidden text-white xl:text-sm text-xs justify-between items-center xl:px-[150px] px-13 py-4">
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
      
      <nav className="bg-transparent text-white xl:flex hidden justify-between items-center px-[150px] py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logoY} // replace with your logo path
            alt="ABD Law Corporation"
            className="h-10"
          />
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

      {/* Main Navigation - Tab/Mob */}
      
      <div className="bg-transparent xl:hidden text-Yellow md:px-13 px-6 py-3 flex justify-between items-center">
        
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={logoY}
          alt="Law Logo"
          className="h-9 w-30"
        />
      </div>

      {/* Hamburger Button (Tablet + Mobile only) */}
      <div className="flex flex-row gap-3">
        <Link
          to="/contact"
          className="bg-Yellow md:block hidden text-white px-12 py-4 rounded-md font-medium hover:bg-yellow-700"
        >
          Contact Us
        </Link>  
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden"
      >
        <img
         src= {hamburger}
         alt="Menu"
         className="md:h-13 md:w-13 h-6 w-6"
  />
      </button>
      </div>
      {/* Mobile / Tablet Sidebar */}
      
      {isOpen && (
        <div className="fixed inset-0 bg-primary z-50  flex flex-col">
          
          <div className="flex flex-row justify-between md:px-13 px-6 py-3 mb-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 ">
            <img src={logoY} alt="Law Logo" className="h-9 w-30" />
          </div>

          {/* Close Button */}
          <button
            className="ml-auto text-Yellow"
            onClick={() => setIsOpen(false)}
          >
            <img
             src= {menuClose}
             alt="Menu"
             className="md:h-13 md:w-13 h-6 w-6"
            />
          </button>
          </div>
          {/* Links */}
          <nav className="flex flex-col space-y-6 text-white/80 md:px-13 px-6 hover:text-white">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Family Law</a>
            <a href="#">Real Estate</a>
            <a href="#">Corporate</a>
            <a href="#">Wills</a>
            <a href="#">Notary</a>
            <a href="#">Tax Calculator</a>
          </nav>

          {/* Contact Button */}
          <div className="px-6">
          <a
            href="#"
            className="md:hidden block w-full mt-6 bg-Yellow text-white text-center py-3 px-auto rounded-md"
          >
            Contact Us
          </a>
          </div>
        </div>
      )}
    </div>
   

    </header>
  );
};

export default Header;
