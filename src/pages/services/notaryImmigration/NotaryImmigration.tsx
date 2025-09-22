import Testimonials from "../../../components/home/testimonials/Testimonials";
import ServiceHero from "../../../components/services/serviceHero/ServiceHero";
import ServiceCard from "../../../components/services/serviceCard/ServiceCard";

import {image1, image2, serviceNotary, wideRange} from "../../../exports";

export default function NotaryImmigration() {
  return (
    <div>
      <ServiceHero
        title="Notary & Immigration Services" 
        imageBack={serviceNotary} 
        image={serviceNotary}
      />
      <div className="relative xl:mt-95 md:mt-105 mt-48 xl:px-[150px] md:px-13 px-6 flex flex-col ">

        <img className='w-[150px] h-[209px] z-1 xl:block hidden absolute top-[-142px] left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
        <img className='w-[150px] h-[209px] z-1 xl:block hidden absolute bottom-[-100px] right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>

        <ServiceCard
           image={wideRange}
           title="We offer a wide range of notary services"
           title2="With a focus on immigration-related documentation, including:"
           points={[
             "Visa and citizenship applications",
             "Travel consent letters",
             "Permanent resident documents",
             "Immigration appeals",
             "Solemn declarations and more",
           ]} 
           description2="Our notary team ensures your documents are accurate, compliant, and completed on time."
          
        />
      </div>
      
      <Testimonials/>

    </div>
  );
}
