import React from "react";
import { FaStar } from "react-icons/fa";
import { comma } from "../../../exports";

interface TestimonialProps {
  text: string;
  name: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ text, name, rating }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col h-[320px]">
      
      <img className="w-12 h-12 mb-6" src={comma} alt="Quote Icon" />

      <p className="text-gray-700 text-base leading-relaxed flex-grow">{text}</p>

      {/* Rating */}
      <div className="mt-5 flex flex-row justify-between">
      <div className="flex items-center gap-1 text-yellow-500">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      {/* Name */}
      <p className="font-semibold text-gray-900">{name}</p>
    </div>
    </div>
  );
};

export default TestimonialCard;
