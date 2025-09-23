import React from "react";

interface MissionSectionProps {
  title: string;
  description: string;
  image: string;
}

const MissionSection: React.FC<MissionSectionProps> = ({ title, description, image }) => {
  return (
    <div className="w-full xl:px-[150px] md:px-13 px-6">

      {/* Title & Description */}
      <div className="flex md:flex-row flex-col justify-between xl:mb-14 mb-8">
        <div>
            <h2 className="text-3xl font-bold text-Black">{title}</h2>
            <div className="bg-Orange mt-0.5 md:w-4/5 w-2/5 h-0.5"></div>
        </div>
        <p className="text-base text-Black80 md:w-3/5 w-full md:mt-0 mt-4 ">{description}</p>
      </div>

      {/* Image */}
      <div className="rounded-2xl overflow-hidden xl:h-[511px] h-113">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default MissionSection;
