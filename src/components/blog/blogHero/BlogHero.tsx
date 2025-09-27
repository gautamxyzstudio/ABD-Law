import React from "react";
import { blogHero, image1 } from "../../../exports";

// const categories = [
//   "Family Law",
//   "Real Estate",
//   "Corporate",
//   "Wills",
//   "Notary",
//   "AI Barista",
//   "AI Barista",
//   "AI Barista",
// ];

const BlogHero: React.FC = () => {
  return (
    <section className="relative bg-primary text-white xl:pt-41 md:pt-33 pt-47 xl:px-[150px] md:px-13 px-6 text-center xl:h-118 md:h-93 h-113 -mt-20">

      <img className='w-[150px] h-[209px] z-1 absolute bottom-[157px] right-0 rounded-2xl object-cover opacity-40' src={image1} alt='ellipse'/>
      <img src={blogHero} alt="background" className="absolute inset-0 w-full h-full object-cover opacity-50"/>
      {/* Heading */}
      <h1 className="xl:text-[80px] md:text-[52px] text-4xl xl:leading-[96px] md:leading-16 leading:11 font-bold mb-6 z-10 relative">
        Our Latest Blog
      </h1>

      {/* Categories */}
      {/* <div className="flex flex-wrap justify-center gap-4 z-10 relative">
        {categories.map((cat, index) => (
          <button
            key={index}
            className="bg-white/20 text-white text-sm px-6 py-3 rounded-md"
          >
            {cat}
          </button>
        ))}
      </div> */}
    </section>
  );
};

export default BlogHero;
