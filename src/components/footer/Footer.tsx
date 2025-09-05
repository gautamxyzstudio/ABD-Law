import React from "react";
import {
  facebook,
  instagram,
  logo,
  linkedin,
  twitter,
  call,
  message,
  location,
} from "../../exports";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="px-20 mt-38 w-full bg-Black">
      <div className="container">
        {/* Logo-block */}
        <div className="pt-12 relative">
          <p className="text-white text-[94px] leading-[94px] font-bold opacity-6">
            ABD LAW CORPORATION
          </p>
          <img
            src={logo}
            alt="ABD Law Logo"
            className="h-20 w-70 absolute left-106.5 top-10.5"
          />
        </div>

        {/* Divider */}
        <div className="bg-Orange opacity-20 mt-5 w-9/12 mx-auto h-0.25"></div>

        {/* Footer-content */}
        <div className="pt-12 pb-12 flex flex-row justify-between w-full">
          {/* About-us */}
          <div className="flex flex-col gap-[20px] w-1/4">
            <h3 className="text-white text-xl font-semibold">About Us</h3>
            <p className="text-white text-base opacity-80">
              Trusted legal guidance for life’s important decisions. Here to
              protect what matters most to you.
            </p>
            <div className="flex gap-4">
              <img
                className="w-[24px] h-[24px]"
                src={facebook}
                alt="facebook"
              />
              <img
                className="w-[24px] h-[24px]"
                src={instagram}
                alt="instagram"
              />
              <img
                className="w-[24px] h-[24px]"
                src={linkedin}
                alt="linkedin"
              />
              <img className="w-[24px] h-[24px]" src={twitter} alt="twitter" />
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-[20px] w-1/5">
            <h3 className="text-white text-xl font-semibold">Services</h3>
            <ul className="text-white text-base flex flex-col gap-[15px] opacity-80">
              <li>Family Law</li>
              <li>Real Estate Law</li>
              <li>Corporate & Commercial Law</li>
              <li>Wills & Estate Planning</li>
              <li>Notary & Immigration Services</li>
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-[20px] w-1/7">
            <h3 className="text-white text-xl font-semibold">Links</h3>
            <ul className="text-white text-base flex flex-col gap-[15px] opacity-80">
              <li><Link to={"/blogs"}>Blogs</Link></li>
              <li>Term of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-[20px] w-1/3.5">
            <h3 className="text-white text-xl font-semibold">Contact Us</h3>
            <div className="text-white text-base flex flex-col gap-[15px] opacity-80">
              <div className="flex gap-4">
                <img className="w-[24px] h-[24px]" src={call} alt="call" />
                604 743 3110
              </div>
              <div className="flex gap-4">
                <img
                  className="w-[24px] h-[24px]"
                  src={location}
                  alt="address"
                />
                +7889 Mechanic Rd.Miami, FL 33125
              </div>
              <div className="flex gap-4">
                <img className="w-[24px] h-[24px]" src={message} alt="email" />
                office@abdlaw.ca
              </div>
            </div>
          </div>
        </div>

        {/* Bottom-bar */}
        <div className="flex justify-between pt-6 pb-7 border-t border-white opacity-80">
          <p className="mb-0 opacity-60 text-white">
            ABD LAW CORPORATION © {new Date().getFullYear()} | All rights reserved.
          </p>
          <p className="mb-0 opacity-60 text-white">
            Designed & Developed by <a href="https://www.xyz.studio/">XYZ Studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
