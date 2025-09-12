import Testimonials from "../../../components/home/testimonials/Testimonials";
import ServiceHero from "../../../components/services/hero-section/ServiceHero";
import ServiceCard from "../../../components/services/serviceCard/ServiceCard";

import {image1, image2, serviceNotary, wideRange} from "../../../exports";

export default function NotaryImmigration() {
  return (
    <div>
      <ServiceHero
        title="Notary & Immigration Services" 
        image={serviceNotary} 
      />
      <div className="relative mt-95 px-[150px] flex flex-col gap-40">

        <img className='w-[150px] h-[209px] z-1 absolute top-[-142px] left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
        <img className='w-[150px] h-[209px] z-1 absolute bottom-[-100px] right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>

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
