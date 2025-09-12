import React from "react";
import { tick } from "../../../exports";

interface ServiceSectionProps {
  image: string;
  title: string;
  title2?: string;
  description1?: string;
  points?: string[];
  description2?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceSectionProps> = ({
  image,
  title,
  title2,
  description1,
  points,
  description2,
  className = "",
}) => {
  return (
    <div className={`flex flex-row items-center gap-17 ${className}`}>

        {/* Image */}
      <div className="relative  w-10/20">
        <div className=" z-10 relative">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-full h-[511px] object-cover"
        />
        </div>
        <div className="absolute top-[-24px] right-[-24px] w-[194px] h-[194px] bg-Yellow rounded-tr-2xl z-0"></div>
      </div>

      {/* Text */}
      <div className="w-10/20">
        <h2 className="text-5xl text-Black font-bold leading-[52px]">{title}</h2>
        {title2 && <h4 className="text-xl text-Black font-semibold leading-[28px] mt-6">{title2}</h4>}
        {description1 && <p className="text-base text-Black80 mt-6 leading-[24px]">{description1}</p>}

        {points && (
          <ul className="space-y-3 text-base text-Black80 mt-4">
            {points.map((point, index) => (
              <li key={index}><div className="flex flex-row gap-2"><img className="w-[24px] h-[24px]" src={tick}/>{point}</div></li>
            ))}
          </ul>
        )}

        {description2 && <p className="text-base text-Black80 mt-6 leading-[24px]">{description2}</p>}
      </div>
    </div>
  );
};

export default ServiceCard;
