import {
  contactCall,
  contactLocation,
  contactMail,
  linkImg,
} from "../../../exports";
import { Link } from "react-router-dom";

export default function ContactInfo() {
  const contacts = {
    column1: [
      {
        icon: contactMail,
        title: "Quick Contact",
        text: "office@abdlaw.ca",
        link: "mailto:office@qbdlaw.ca",
      },
      {
        icon: contactCall,
        title: "Phone Number",
        text: "604 743 3110",
        link: "tel:+16047433110",
      },
    ],
    column2: {
      icon: contactLocation,
      title: "Office Address",
      text: "Unit 202, 2760 Trethewey St, Abbotsford BC V2T 3R3",
      link: "https://maps.app.goo.gl/DVExFL5Lc9PZCVP88",
      image: linkImg,
    },
  };

  return (
    <div className="bg-servicesB  xl:px-[150px] md:px-13 px-6 xl:py-20 md:py-10 py-6 md:mt-31 mt-10 flex flex-row items-center flex-wrap">
      <div className="flex flex-col gap-6 md:w-1/2  w-full ">
        {contacts.column1.map((item, index) => (
          <Link
            key={index}
            className="flex flex-row gap-3 items-start"
            to={item.link}
          >
            <img src={item.icon} alt={item.title} className="w-10 h-10" />
            <div>
              <h4 className="font-semibold xl:text-2xl text-lg text-gray-800">
                {item.title}
              </h4>
              <p className="text-base leading-6 text-black">{item.text}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex relative md:w-1/2 w-full overflow-hidden h-full rounded-lg mt-[10]">
        <Link
          className="flex flex-row gap-3 items-start w-full h-full"
          to={contacts.column2.link}
        >
          <img
            src={contacts.column2.image}
            alt="office map"
            className="rounded-lg w-full h-full "
          />
          <div className="absolute w-full bottom-0 p-3 bg-gradient-to-b  to-60% to-gray-800">
            <h4 className="font-semibold xl:text-xl text-xl text-white">
              {contacts.column2.title}
            </h4>
            <p className="text-base leading-6 text-white">
              {contacts.column2.text}
            </p>
          </div>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
}
