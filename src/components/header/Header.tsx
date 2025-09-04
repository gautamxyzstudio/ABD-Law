import React from "react";
import { logoY, callH, mailH } from "../../exports";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const Header: React.FC = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-Yellow text-white text-sm flex justify-between items-center px-[150px] py-2">
        <p>
          Trusted legal guidance for families, businesses, and individuals
          across British Columbia
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:office@abdlaw.ca"
            className="flex items-center gap-1 hover:opacity-80"
          >
            <img src={mailH} alt="Mail" className="w-4 h-4" />
            office@abdlaw.ca
          </a>
          <a
            href="tel:6047433110"
            className="flex items-center gap-1 hover:opacity-80"
          >
            <img src={callH} alt="Phone" className="w-4 h-4" />
            604 743 3110
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-primary text-white flex justify-between items-center px-[150px] py-3">
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
    </header>
  );
};

export default Header;
