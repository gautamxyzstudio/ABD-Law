import Testimonials from "../../../components/home/testimonials/Testimonials";
import ServiceHero from "../../../components/services/serviceHero/ServiceHero";
import ServiceCard from "../../../components/services/serviceCard/ServiceCard";
import { image1, image2, legal, serviceEstate } from "../../../exports";

export default function RealEstate() {
  return (
    <>
      <ServiceHero
        title="Real Estate Law" 
        imageBack={serviceEstate}
        image={serviceEstate} 
      />
      <div className="relative xl:mt-95 md:mt-108 mt-48 xl:px-[150px] md:px-13 px-6 flex flex-col">

        <img className='w-[150px] h-[209px] z-1 xl:block hidden absolute top-[-142px] left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
        <img className='w-[150px] h-[209px] z-1 xl:block hidden absolute bottom-[-80px] right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>

        <ServiceCard
           image={legal}
           title="Real Estate Legal Services"
           description1="Buying or selling property can be overwhelming—especially in a fast-moving market. Our team ensures every detail of your residential or commercial real estate transaction is handled thoroughly and efficiently, protecting your investment at every step."
        />
      </div>
      
      <Testimonials/>

    </>
  );
}
