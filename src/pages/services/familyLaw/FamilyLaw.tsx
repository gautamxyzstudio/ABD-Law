import Testimonials from "../../../components/home/testimonials/Testimonials";
import ServiceHero from "../../../components/services/serviceHero/ServiceHero";
import ServiceCard from "../../../components/services/serviceCard/ServiceCard";

import { adoption, divorce, guardianship, image1, image2, property, serviceFamily, spouseSupport, violence } from "../../../exports";

export default function FamilyLaw() {
  return (
    <div>
      <ServiceHero
        title="Family Law Services" 
        imageBack={serviceFamily} 
        image={serviceFamily} 
      />
      <div className="relative xl:mt-95 md:mt-105 mt-48 xl:px-[150px] md:px-13 px-6 flex flex-col xl:gap-40 md:gap-31 gap-16 xl:pb-38 md:pb-31 pb-16">

        <img className='w-[150px] h-[209px] z-1 xl:block hidden absolute top-[-142px] left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
        <img className='w-[150px] h-[209px] z-1 xl:block hidden absolute bottom-184 right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>

        <ServiceCard
           image={divorce}
           title="Divorce & Separation"
           description1="We provide compassionate guidance through every stage of divorce and separation. Whether you are seeking a peaceful resolution or require strong advocacy in court, we protect your rights and strive for the best outcome for you and your family."
        />
        <ServiceCard
           image={guardianship}
           title="Guardianship & Access"
           description1="The well-being of your children is our priority. We help parents navigate guardianship and access matters with fairness and sensitivity, ensuring arrangements reflect the best interests of your children."
           className="md:!flex-row-reverse flex-col-reverse"
        />
      </div>
      <div className="xl:px-[150px] md:px-13 px-6 xl:pt-[138px] xl:pb-[114px] md:py-20 py-6 bg-servicesB">
        <ServiceCard
           image={spouseSupport}
           title="Spousal & Child Support"
           description1="We provide compassionate guidance through every stage of divorce and separation. Whether you are seeking a peaceful resolution or require strong advocacy in court, we protect your rights and strive for the best outcome for you and your family."
        />
      </div>
      <div className="relative xl:mt-44 md:mt-31 mt-16 xl:px-[150px] md:px-13 px-6 flex flex-col xl:gap-40 md:gap-31 gap-16 xl:pb-38 md:pb-31 pb-16">

        <img className='w-[150px] h-[209px] z-1 xl:block hidden absolute top-100 left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
        <img className='w-[150px] h-[209px] z-1 xl:block hidden absolute bottom-29 right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>

        <ServiceCard
           image={property}
           title="Property Division"
           description1="Dividing assets and liabilities during separation can be complex. We work to ensure you receive a fair and equitable distribution, safeguarding your long-term financial interests."
           className="md:!flex-row-reverse flex-col-reverse"
        />
        <ServiceCard
           image={adoption}
           title="Adoption"
           description1="Whether you’re pursuing a private, step-parent, or Ministry adoption, we provide supportive, knowledgeable guidance to help you grow your family with confidence and care."
        />    
      </div>
      <div className="xl:px-[150px] md:px-13 px-6 xl:pt-[138px] xl:pb-[114px] md:py-20 py-6 bg-servicesB">
        <ServiceCard
           image={violence}
           title="Family Violence & Protection Orders"
           description1="Your safety matters. We assist individuals in obtaining protection orders and navigating the legal system in cases of family violence, harassment, or threats—ensuring peace of mind and legal protection."
           className="md:!flex-row-reverse flex-col-reverse"
        />
      </div>
      <Testimonials/>

    </div>
  );
}
