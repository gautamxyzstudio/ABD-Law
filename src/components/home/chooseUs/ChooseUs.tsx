import { experienced, legalSupport, clientFocused, guidance, support, image1, image2 } from "../../../exports";
import ChooseCard, { type CardProps } from "../../module/chooseCard/ChooseCard";

const features: CardProps[] = [
  {
    icon: experienced,
    alt: "experienced and trusted",
    title: "Experienced & Trusted",
    description:
      "Our lawyers bring years of knowledge and real-world experience to every case, giving you confidence that you’re in capable hands.",
  },
  {
    icon: legalSupport,
    alt: "legal support",
    title: "All-in-One Legal Support",
    description:
      "From family law to business, real estate, and estate planning, we handle a wide range of legal matters, so you don’t have to go anywhere else.",
  },
  {
    icon: clientFocused,
    alt: "client focused",
    title: "Client-Focused Care",
    description:
      "We put people first. With clear communication and solutions tailored to your needs, you’ll always feel supported and understood.",
  },
  {
    icon: guidance,
    alt: "guidance you can rely on",
    title: "Guidance You Can Rely On",
    description:
      "We explain your options in plain language and walk with you through every step, so you never feel lost in the process.",
  },
  {
    icon: support,
    alt: "your rights, our support",
    title: "Your Rights, Our Support",
    description:
      "Whether in negotiation or court, we’ve got your back—working tirelessly to secure the best outcome in a way that's easy to understand and reassuring.",
  },
];

const ChooseUs = () => {
  return (
    <div className="relative xl:mt-38 md:mt-31 mt-16 w-full flex flex-col align-middle xl:px-[150px] md:px-13 px-6">
      <img className='w-[150px] h-[209px] xl:block hidden z-1 absolute top-0 left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
      <img className='w-[150px] h-[209px] xl:block hidden z-1 absolute bottom-[-93px] right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>
      <h2 className="text-Black xl:text-5xl md:text-4xl text-2xl text font-semibold text-center w-1/2 mx-auto">
        Why Choose ABD Law Corporation?
      </h2>

      <div className="bg-Orange mt-1 w-1/6 mx-auto h-0.5"></div>

      <div className="xl:mt-14 md:mt-9 mt-8 flex flex-wrap justify-center md:gap-6 gap-4">
        {features.map((feature, idx) => (
            // {/* Card component */}
            <ChooseCard key={idx}
            icon={feature.icon}
            alt={feature.alt}
            title={feature.title}
            description={feature.description}/>
        ))}

      </div>
    </div>
  );
};

export default ChooseUs;
