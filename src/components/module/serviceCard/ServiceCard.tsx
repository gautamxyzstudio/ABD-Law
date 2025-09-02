import React from "react";
import {tick} from "../../../exports";

interface ServiceCardProps {
  image: string;
  alt: string;
  title: string;
  services: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, alt, title, services }) => {
  return (
    <div className= "rounded-2xl border border-serviceBorder overflow-hidden w-full md:w-[48.5%] p-5">

      <img src={image} alt={alt} className="rounded-xl w-full h-76 object-cover" />

      <h3 className="mt-5 text-3xl font-bold text-Black">{title}</h3>

      <div className="mt-4 w-full grid grid-cols-2 gap-4 text-Black">
        {services.map((service, idx) => (
          <div key={idx} className="flex items-center gap-1.5 text-base">
            <img className="w-[24px] h-[24px]" src={tick} alt={alt} />{service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
