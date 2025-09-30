import React from "react";
import { tick } from "../../../exports";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    <div className={`flex md:flex-row flex-col-reverse items-center xl:gap-17 md:gap-9 gap-11 ${className}`}>

        {/* Image */}
      <div className="relative  md:w-10/20 w-full">
        <div className=" z-10 relative">
        <LazyLoadImage
          src={image}
          alt={title}
          className="xl:rounded-xl rounded-lg xl:w-full w-[96%] xl:h-[511px] md:h-85 h-78 object-cover"
        />
        </div>
        <div className="absolute xl:-top-6 xl:-right-6 -top-4 right-0  xl:w-[194px] md:w-32 w-30 xl:h-[194px] md:h-32 h-30 bg-Yellow xl:rounded-tr-2xl rounded-tr-[10px] z-0"></div>
      </div>

      {/* Text */}
      <div className="md:w-10/20 w-full">
        <h2 className="xl:text-5xl md:text-3xl text-2xl text-Black font-bold xl:leading-[52px] md:leading-10 leading-8">{title}</h2>
        {title2 && <h4 className="xl:text-xl text-base text-Black font-semibold xl:leading-[28px] leading-6 xl:mt-6 mt-4">{title2}</h4>}
        {description1 && <p className="xl:text-base text-sm text-Black80 xl:mt-6 mt-4 xl:leading-[24px] leading-[22px]">{description1}</p>}

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
