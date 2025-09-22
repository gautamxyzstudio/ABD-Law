import React from "react";

interface HeroSectionProps {
  title: string;
  imageBack: string;
  image: string;
}

const ServiceHero: React.FC<HeroSectionProps> = ({ title, imageBack, image }) => {
  return (
    <div className="flex relative xl:h-[472px] h-93 bg-primary xl:px-[150px] md:px-13 px-6 align-middle xl:pt-51 md:pt-35 pt-45 -mt-20"> 
        <img src={imageBack} alt="background" className="absolute inset-0 w-full h-full object-cover opacity-50"/>
        {/* Overlay */}
        <div className="absolute gradient-hero"></div>
        <h2 className="xl:w-2/5 w-full xl:text-6xl md:text-5xl text-4xl font-bold text-white xl:leading-19 md:leading-14 leading-11 z-10">{title}</h2>
        <img
          src={image}
          alt={title}
          className="absolute xl:w-3/5 md:w-47/50 w-19/20 right-0 xl:bottom-[-204px] md:-bottom-73 -bottom-33 xl:h-114 md:h-100 h-57 object-cover xl:rounded-tl-[80px] md:rounded-tl-[70px] rounded-tl-[52px]"
        />
    </div>
  );
};

export default ServiceHero;
