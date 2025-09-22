import { contactCall, contactLocation, contactMail } from "../../../exports";

export default function ContactInfo() {
  const contacts = [
    {
      icon: contactMail, 
      title: "Quick Contact",
      text: "office@qbdlaw.ca",
    },
    {
      icon: contactCall,
      title: "Phone Number",
      text: "604 743 3110",
    },
    {
      icon: contactLocation,
      title: "Office Address",
      text: "Unit 202, 2760 Trethewey St, Abbotsford BC V2T 3R3",
    },
  ];

  return (
    <div className="bg-servicesB xl:px-[150px] md:px-13 px-6 xl:py-20 md:py-10 py-6 md:mt-31 mt-10">
      <div className="max-w-6xl mx-auto grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {contacts.map((item, index) => (
          <div key={index} className={`${index === 2 ? "md:col-span-2 xl:col-span-1 ":"flex"}`}>
            <div className="flex flex-row gap-3 items-start">
            <img src={item.icon} alt={item.title} className="w-10 h-10" />
            <div>
              <h4 className="font-semibold xl:text-2xl text-lg xl:leading-8 leading-[26px] text-gray-800">{item.title}</h4>
              <p className="text-base leading-6 text-gray-600">{item.text}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
