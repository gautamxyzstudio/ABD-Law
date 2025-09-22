import React from "react";

 export interface CardProps {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

const ChooseCard: React.FC<CardProps> = ({ icon, alt, title, description }) => {
  return (
    <div className="border-GrayL border rounded-2xl flex flex-col items-center p-6 w-full w-[48%] lg:w-[31.5%] shadow-sm hover:shadow-md transition">
      {/* Icon */}
      <img className="w-[64px] h-[64px]" src={icon} alt={alt} />

      {/* Title */}
      <h3 className="text-Black text-xl xl:text-2xl md:text-xl font-semibold mt-4 mb-3 text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="text-Black xl:text-base text-sm text-center">{description}</p>
    </div>
  );
};

export default ChooseCard;
