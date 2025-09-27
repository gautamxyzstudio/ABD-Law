import Testimonials from "../../../components/home/testimonials/Testimonials";
import ServiceHero from "../../../components/services/serviceHero/ServiceHero";
import ServiceCard from "../../../components/services/serviceCard/ServiceCard";

import {futurePlan, image1, image2, serviceWills} from "../../../exports";

export default function WillsEstate() {
  return (
    <>
      <ServiceHero
        title="Wills & Estate Planning" 
        imageBack={serviceWills}
        image={serviceWills} 
      />
      <div className="relative xl:mt-95 md:mt-105 mt-48 xl:px-[150px] md:px-13 px-6 flex flex-col ">

        <img className='w-[150px] h-[209px] z-1 md:block hidden absolute top-[-142px] left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
        <img className='w-[150px] h-[209px] z-1 md:block hidden absolute bottom-[-100px] right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>

        <ServiceCard
           image={futurePlan}
           title="Plan for the future with peace of mind."
           title2="Our estate law services include:"
           points={[
             "Will drafting and updates",
             "Estate and trust planning",
             "Powers of attorney and representation agreements",
             "Committeeship and guardianship applications",
           ]} 
           description2="We work with financial professionals to ensure your assets are protected and your wishes are honored."        
        />
      </div>
      
      <Testimonials/>

    </>
  );
}
