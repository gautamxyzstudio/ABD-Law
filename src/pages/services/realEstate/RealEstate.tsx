import Testimonials from "../../../components/home/testimonials/Testimonials";
import ServiceHero from "../../../components/services/hero-section/ServiceHero";
import ServiceCard from "../../../components/services/serviceCard/ServiceCard";
import { image1, image2, legal, serviceEstate } from "../../../exports";

export default function RealEstate() {
  return (
    <div>
      <ServiceHero
        title="Real Estate Law" 
        image={serviceEstate} 
      />
      <div className="relative mt-95 px-[150px] flex flex-col gap-40 pb-38">

        <img className='w-[150px] h-[209px] z-1 absolute top-[-142px] left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
        <img className='w-[150px] h-[209px] z-1 absolute bottom-[-80px] right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>

        <ServiceCard
           image={legal}
           title="Real Estate Legal Services"
           description1="Buying or selling property can be overwhelming—especially in a fast-moving market. Our team ensures every detail of your residential or commercial real estate transaction is handled thoroughly and efficiently, protecting your investment at every step."
        />
      </div>
      
      <Testimonials/>

    </div>
  );
}
