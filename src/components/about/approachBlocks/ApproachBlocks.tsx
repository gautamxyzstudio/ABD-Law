import { tick } from "../../../exports";

export default function ApproachBlocks() {
  const features = [
    {
      title: "Transparency",
      description: "We keep you informed throughout the process.",
    },
    {
      title: "Personalized Solutions",
      description:
        "No two cases are alike — we tailor our advice to your situation.",
    },
    {
      title: "Dedication",
      description:
        "We are passionate about achieving the best possible outcomes for you.",
    },
  ];

  return (
    <div className="mt-6 xl:px-[150px] md:px-13 px-6">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-Gray1/30 rounded-xl p-3 bg-servicesB flex flex-col items-start gap-3"
          >
            <div className="flex xl:gap-2 gap-1">
              <img src={tick} className="w-6 h-6"/>
              <h4 className="font-semibold xl:text-base text-sm text-Black">{feature.title}</h4>
            </div>
            <p className="text-sm text-Black/80">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
