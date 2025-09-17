import React from "react";

interface HeroSectionProps {
  title: string;
  imageBack: string;
  image: string;
}

const ServiceHero: React.FC<HeroSectionProps> = ({ title, imageBack, image }) => {
  return (
    <div className="flex relative h-[392px] bg-primary px-[150px]  align-middle pt-25"> 
        <img src={imageBack} alt="background" className="absolute inset-0 w-full h-full object-cover opacity-20"/>
        {/* Overlay */}
        <div className="absolute gradient-hero"></div>
        <h2 className="w-2/5 text-6xl font-bold text-white leading-[76px] z-10">{title}</h2>
        <img
          src={image}
          alt={title}
          className="absolute w-3/5 right-0 bottom-[-204px] full h-[456px] object-cover rounded-tl-[80px]"
        />
    </div>
  );
};

export default ServiceHero;
