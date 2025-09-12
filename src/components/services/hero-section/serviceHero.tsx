import React from "react";

interface HeroSectionProps {
  title: string;
  image: string;
}

const ServiceHero: React.FC<HeroSectionProps> = ({ title, image }) => {
  return (
    <div className="flex relative h-[392px] bg-primary px-[150px]  align-middle pt-25">      
        <h2 className="w-2/5 text-6xl font-bold text-white leading-[76px]">{title}</h2>
        <img
          src={image}
          alt={title}
          className="absolute right-0 bottom-[-204px] w-3/5 h-[456px] object-cover rounded-tl-[80px]"
        />

    </div>
  );
};

export default ServiceHero;
