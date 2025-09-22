import React from "react";
import { image1 } from "../../../exports";

interface HeroProps {
  title: string;
  imageBack: string;
}

const PagesHero: React.FC<HeroProps> = ({ title, imageBack }) => {
  return (
    <div className="flex relative xl:h-118 h-93 bg-primary xl:px-[150px] md:px-13 px-6  align-middle xl:pt-51 md:pt-48 pt-35 -mt-20"> 
        <img className='w-[150px] h-[209px] xl:block hidden z-1 absolute bottom-20 right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>
        <img src={imageBack} alt="background" className="absolute inset-0 w-full h-full object-cover opacity-50"/>
        {/* Overlay */}
        <h2 className="w-4/5 text-6xl font-bold text-white leading-[76px] z-10">{title}</h2>
    </div>
  );
};

export default PagesHero;
