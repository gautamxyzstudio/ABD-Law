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
      <div className="relative mt-95 px-[150px] flex flex-col gap-40 pb-38">

        <img className='w-[150px] h-[209px] z-1 absolute top-[-142px] left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
        <img className='w-[150px] h-[209px] z-1 absolute bottom-184 right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>

        <ServiceCard
           image={divorce}
           title="Divorce & Separation"
           description1="We provide compassionate guidance through every stage of divorce and separation. Whether you are seeking a peaceful resolution or require strong advocacy in court, we protect your rights and strive for the best outcome for you and your family."
        />
        <ServiceCard
           image={guardianship}
           title="Guardianship & Access"
           description1="The well-being of your children is our priority. We help parents navigate guardianship and access matters with fairness and sensitivity, ensuring arrangements reflect the best interests of your children."
           className="flex-row-reverse"
        />
      </div>
      <div className="px-[150px] pt-[138px] pb-[114px] bg-servicesB">
        <ServiceCard
           image={spouseSupport}
           title="Spousal & Child Support"
           description1="We provide compassionate guidance through every stage of divorce and separation. Whether you are seeking a peaceful resolution or require strong advocacy in court, we protect your rights and strive for the best outcome for you and your family."
        />
      </div>
      <div className="relative mt-44 px-[150px] flex flex-col gap-40 pb-38">

        <img className='w-[150px] h-[209px] z-1 absolute top-100 left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
        <img className='w-[150px] h-[209px] z-1 absolute bottom-29 right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>

        <ServiceCard
           image={property}
           title="Property Division"
           description1="Dividing assets and liabilities during separation can be complex. We work to ensure you receive a fair and equitable distribution, safeguarding your long-term financial interests."
           className="flex-row-reverse"
        />
        <ServiceCard
           image={adoption}
           title="Adoption"
           description1="Whether you’re pursuing a private, step-parent, or Ministry adoption, we provide supportive, knowledgeable guidance to help you grow your family with confidence and care."
        />    
      </div>
      <div className="px-[150px] pt-[138px] pb-[114px] bg-servicesB">
        <ServiceCard
           image={violence}
           title="Family Violence & Protection Orders"
           description1="Your safety matters. We assist individuals in obtaining protection orders and navigating the legal system in cases of family violence, harassment, or threats—ensuring peace of mind and legal protection."
           className="flex-row-reverse"
        />
      </div>
      <Testimonials/>

    </div>
  );
}
