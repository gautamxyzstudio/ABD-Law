import React from "react";
import {tick} from "../../../exports";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ServiceCardProps {
  image: string;
  alt: string;
  title: string;
  services: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, alt, title, services }) => {
  return (
    <div className= "rounded-2xl border border-serviceBorder overflow-hidden xl:w-[48.5%] md:w-[47%] w-full p-5">

      <img src={image} alt={alt} className="rounded-xl w-full xl:h-76 h-50 object-cover" />

      <h3 className="mt-5 xl:text-3xl md:text-2xl text-xl font-bold text-Black">{title}</h3>

      <div className="mt-4 w-full grid xl:grid-cols-2 md:grid-cols-1 xl:gap-4 gap-3 text-Black ">
        {services.map((service, idx) => (
          <div key={idx} className="flex items-center gap-1.5 xl:text-base text-sm">
            <LazyLoadImage className="xl:w-6 xl:h-6 w-5 h-5" src={tick} alt={alt} />{service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
