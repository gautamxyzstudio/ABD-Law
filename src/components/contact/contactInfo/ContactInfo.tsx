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
    <div className="bg-servicesB px-[150px] py-20 mt-31">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {contacts.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <img src={item.icon} alt={item.title} className="w-10 h-10" />
            <div>
              <h4 className="font-semibold text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
