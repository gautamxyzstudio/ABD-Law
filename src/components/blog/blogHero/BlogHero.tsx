import React from "react";
import { blogHero, image1 } from "../../../exports";

const categories = [
  "Family Law",
  "Real Estate",
  "Corporate",
  "Wills",
  "Notary",
  "AI Barista",
  "AI Barista",
  "AI Barista",
];

const BlogHero: React.FC = () => {
  return (
    <section className="relative bg-primary text-white pt-[124px] px-[150px] text-center h-[392px]">

      <img className='w-[150px] h-[209px] z-1 absolute bottom-[157px] right-0 rounded-2xl object-cover opacity-40' src={image1} alt='ellipse'/>
      <img src={blogHero} alt="background" className="absolute inset-0 w-full h-full object-cover opacity-50"/>
      {/* Heading */}
      <h1 className="text-[80px] leading-[96px] font-bold mb-6 z-10 relative">
        Our Latest Blog
      </h1>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 z-10 relative">
        {categories.map((cat, index) => (
          <button
            key={index}
            className="bg-white/20 text-white text-sm px-6 py-3 rounded-md"
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};

export default BlogHero;
