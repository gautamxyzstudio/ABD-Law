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
    <footer className="xl:px-[150px] md:px-13 px-6 xl:mt-38 md:mt-8 mt-12 w-full bg-Black">
      <div className="container">
        {/* Logo-block */}
        <div className="pt-12 relative flex flex-col items-center">
          <p className="text-white xl:text-[90px] md:text-[60px] text-3xl tracking-tight text-nowrap text-center w-full xl:leading-[94px] md:leading-[60px] font-bold opacity-6">
            ABD LAW CORPORATION
          </p>
          <img
            src={logo}
            alt="ABD Law Logo"
            className="xl:h-200 xl:w-70 md:w-70 md:h-20 h-15 w-55 absolute xl:top-10.5 md:top-8 top-10"
          />
        </div>

        {/* Divider */}
        <div className="bg-Orange opacity-20 mt-5 xl:w-3/4 w-full mx-auto h-0.25 md:block hidden"></div>

        {/* Footer-content */}
        <div className="xl:py-12 md:py-6 pt-10 pb-6 flex md:flex-row flex-col gap-6 justify-between w-full">
          {/* About-us */}
          <div className="flex flex-col gap-[20px] xl:w-1/4 md:w-2/10 ">
            <h3 className="text-white text-xl font-semibold">About Us</h3>
            <p className="text-white xl:text-base text-sm opacity-80">
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
          <div className="flex flex-col gap-[20px] xl:w-1/5 md:w-2/10">
            <h3 className="text-white text-xl font-semibold">Services</h3>
            <ul className="text-white xl:text-base text-sm flex flex-col gap-[15px] opacity-80">
              <li>Family Law</li>
              <li>Real Estate Law</li>
              <li>Corporate & Commercial Law</li>
              <li>Wills & Estate Planning</li>
              <li>Notary & Immigration Services</li>
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-[20px] xl:w-1/7 md:w-3/20">
            <h3 className="text-white text-xl font-semibold">Links</h3>
            <ul className="text-white xl:text-base text-sm flex flex-col gap-[15px] opacity-80">
              <li><Link to={"/blogs"}>Blogs</Link></li>
              <li>Term of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-[20px] xl:w-1/3.5 md:w-1/4">
            <h3 className="text-white text-xl font-semibold">Contact Us</h3>
            <div className="text-white xl:text-base text-sm flex flex-col gap-[15px] opacity-80">
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
        <div className="flex justify-between xl:pt-6 xl:pb-7 md:pt-4 md:pb-8 pt-3 pb-5 border-t border-white opacity-80">
          <p className="mb-0 opacity-60 text-white xl:text-base text-sm">
            ABD LAW CORPORATION © {new Date().getFullYear()} | All rights reserved.
          </p>
          <p className="mb-0 opacity-60 text-white xl:text-base text-sm">
            Designed & Developed by <a href="https://www.xyz.studio/">XYZ Studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
