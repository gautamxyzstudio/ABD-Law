import Testimonials from "../../../components/home/testimonials/Testimonials";
import ServiceHero from "../../../components/services/hero-section/ServiceHero";
import ServiceCard from "../../../components/services/serviceCard/ServiceCard";
import {image1, image2, incorporation, serviceCommercial, startups} from "../../../exports";

export default function CorporateCommercial() {
  return (
    <div>
      <ServiceHero
        title="Corporate & Commercial Law" 
        image={serviceCommercial} 
      />
      <div className="relative mt-95 px-[150px] flex flex-col gap-40 pb-38">

        <img className='w-[150px] h-[209px] z-1 absolute top-[-142px] left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
        <img className='w-[150px] h-[209px] z-1 absolute bottom-12 right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>

        <ServiceCard
           image={startups}
           title="From startups to established businesses"
           title2="We offer strategic legal advice tailored to your needs. Our corporate services include:"
           points={[
             "Business formation and incorporation",
             "Corporate governance and annual filings",
             "Strategic planning and compliance",
           ]} 
           description2="We take a hands-on approach to help you build a strong legal foundation for long-term success."
          
        />
      </div>
      
      <div className="px-[150px] pt-[138px] pb-[114px] bg-servicesB">
        <ServiceCard
           image={incorporation}
           title="Incorporation Services"
           description1="Incorporating your business is a key milestone. We guide you through decisions about share structure, director powers, and business planning—ensuring your incorporation supports your goals now and into the future."
           className="flex-row-reverse"
        />
      </div>
      <Testimonials/>

    </div>
  );
}
