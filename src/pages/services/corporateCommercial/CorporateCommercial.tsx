import Testimonials from "../../../components/home/testimonials/Testimonials";
import ServiceHero from "../../../components/services/serviceHero/ServiceHero";
import ServiceCard from "../../../components/services/serviceCard/ServiceCard";
import {image1, image2, incorporation, serviceCommercial, startups} from "../../../exports";

export default function CorporateCommercial() {
  return (
    <>
      <ServiceHero
        title="Corporate & Commercial Law" 
        imageBack={serviceCommercial} 
        image={serviceCommercial} 
      />
      <div className="relative xl:mt-95 md:mt-105 mt-48 xl:px-[150px] md:px-13 px-6 flex flex-col xl:pb-38 md:pb-31 pb-16">

        <img className='w-[150px] h-[209px] z-1 xl:block hidden absolute top-[-142px] left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
        <img className='w-[150px] h-[209px] z-1 xl:block hidden absolute bottom-12 right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>

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
      
      <div className="xl:px-[150px] md:px-13 px-6 xl:pt-[138px] xl:pb-[114px] md:py-20 py-6 bg-servicesB">
        <ServiceCard
           image={incorporation}
           title="Incorporation Services"
           description1="Incorporating your business is a key milestone. We guide you through decisions about share structure, director powers, and business planning—ensuring your incorporation supports your goals now and into the future."
           className="!flex-row-reverse"
        />
      </div>
      <Testimonials/>

    </>
  );
}
