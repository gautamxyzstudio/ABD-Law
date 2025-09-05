import React from "react";
import { family, realEstate, willEstate, notary, corporate, image1, image2 } from "../../../exports";
import ServiceCard from "../../module/serviceCard/ServiceCard";

const servicesData = [
  {
    image: family,
    alt: "Family Law",
    title: "Family Law",
    services: [
      "Divorce & Separation",
      "Guardianship & Access",
      "Spousal & Child Support",
      "Adoption Family Violence",
      "Protection Orders",
      "Separation agreements",
    ],
  },
  {
    image: realEstate,
    alt: "Real Estate Law",
    title: "Real Estate Law",
    services: [
      "Conveyancing & Transfer",
      "Sale & Purchase Agreements",
      "Refinancing",
      "Independent Legal Advice",
      "Lawyer’s Approval",
    ],
  },
  {
    image: corporate,
    alt: "corporate & Commercial Law",
    title: "Corporate & Commercial Law",
    services: [
      "Business Formation",
      "Annual Filings",
      "Incorporation",
      "Strategic Planning",
      "Corporate Governance",
    ],
  },
  {
    image: willEstate,
    alt: "Wills & Estate Planning",
    title: "Wills & Estate Planning",
    services: [
      "Will Drafting & Updates",
      "Estate & Trust Planning",
      "Powers Of Attorney",
    ],
  },
  {
    image: notary,
    alt: "Notary & Immigration Services",
    title: "Notary & Immigration Services",
    services: [
      "Visa & Citizenship Applications",
      "Travel Consent Letters",
      "Permanent Resident Documents",
    ],
  },
];

const Services: React.FC = () => {
  return (
    <div className=" relative w-full py-31 bg-servicesB px-[150px] mt-23">
      <img className='w-[150px] h-[209px] z-1 absolute top-30 left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
      <img className='w-[150px] h-[209px] z-1 absolute bottom-5 right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>
      <h2 className="text-Black text-5xl font-semibold text-center w-1/2 mx-auto">
        Our Services
      </h2>

      <div className="bg-Orange mt-1 w-1/6 mx-auto h-0.5"></div>

      {/* Cards Grid */}
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {servicesData.map((service, idx) => (
          <ServiceCard
            key={idx}
            image={service.image}
            alt={service.alt}
            title={service.title}
            services={service.services}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
