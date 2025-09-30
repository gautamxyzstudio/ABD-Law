import React from "react";
import { image1 } from "../../../exports";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface HeroProps {
  title: string;
  imageBack: string;
}

const PagesHero: React.FC<HeroProps> = ({ title, imageBack }) => {
  return (
    <div className="flex relative xl:h-118 md:h-93 h-113 bg-primary xl:px-[150px] md:px-13 px-6  align-middle items-center -mt-20"> 
        <img className='w-[150px] h-[209px] xl:block hidden z-1 absolute bottom-20 right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>
        <LazyLoadImage src={imageBack} alt="background" className="absolute inset-0 w-full h-full object-cover opacity-50"/>
        {/* Overlay */}
        <h2 className="md:w-4/5 w-full xl:text-6xl md:text-[52px] text-4xl font-bold text-white xl:leading-19 md:leading-15 leading-11 z-10">{title}</h2>
    </div>
  );
};

export default PagesHero;
