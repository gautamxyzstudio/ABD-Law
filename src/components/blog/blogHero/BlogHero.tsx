import React from "react";
import { image1 } from "../../../exports";

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

      {/* Heading */}
      <h1 className="text-[80px] leading-[96px] font-bold mb-6">
        Our Latest Blog
      </h1>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4">
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
