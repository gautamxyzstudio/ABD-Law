import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import React from "react";
import TestimonialCard from "../../module/testimonialCard/TestimonialCard";
import { image2, image1 } from "../../../exports";

const testimonials = [
  {
    text: `From the very beginning, when i discussed about my case ,ABD law corporation gave me solution and heard on every situation with full attention to detail, and a deep understanding of the law. With brilliant experience and a sharp legal mind. 
 `,
    name: "Bikram Dhillon",
    rating: 5,
  },
  {
    text: `I had a great experience with ABD law corporation. Mrs. Aman Brar was professional, knowledgeable, always available to answer my questions. She handled my case with care and efficiency. Highly recommend her service to anyone in need of legal help! 
Manmeet Sandhu`,
    name: "Manmeet kaur ",
    rating: 5,
  },
  {
    text: "I highly recommend Mrs. Aman Brar to anyone seeking reliable, high-quality service. Her dedication and attention to detail set her apart from the rest. Thank you for such a wonderful experience! .",
    name: "Prabhjot Dhaliwal",
    rating: 5,
  },
  {
    text: "Excellent first experience. Amandeep was professional, helpful, and explained everything clearly. Highly recommended.",
    name: "Jag Mann ",
    rating: 5,
  },

];

const Testimonials: React.FC = () => {
  return (
    <div className="relative xl:mt-38 md:mt-31 mt-16 w-full flex-col align-middle xl:px-38 md:px-13 px-6">
      <img
        className="w-[150px] h-[209px] xl:block hidden z-1 absolute top-0 left-0 rounded-2xl object-cover"
        src={image2}
        alt="ellipse"
      />
      <img
        className="w-[150px] h-[209px] xl:block hidden z-1 absolute bottom-[-93px] right-0 rounded-2xl object-cover"
        src={image1}
        alt="ellipse"
      />
      <h2 className="text-Black xl:text-5xl md:text-4xl text-2xl font-semibold text-center mx-auto">
        Our customers are saying
      </h2>

      <div className="bg-Orange mt-1 w-1/6 mx-auto h-0.5"></div>

      <div className="w-full mx-auto xl:mt-13 md:mt-6 max-w-screen-2xl h-[450px] flex items-center">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="my-swiper  w-full h-full"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
