import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'     
import React from 'react'
import TestimonialCard from '../../module/testimonialCard/TestimonialCard';
import { image2, image1 } from '../../../exports';

const testimonials = [
  {
    text: "I had an excellent experience working with ABD Law throughout our contract negotiations. The team was highly professional, always reachable, and clearly explained each step.",
    name: "Roxanne",
    rating: 5,
  },
  {
    text: "Buying our first home was really hard, until ABD Law helped us. They took care of everything, from purchase agreements to registry paperwork. No surprises, just peace of mind.",
    name: "Morgan",
    rating: 5,
  },
  {
    text: "Working with ABD Law during our separation made a huge difference. They explained custody and support arrangements clearly and with kindness. I’m so thankful for their support.",
    name: "Olivia",
    rating: 5,
  },
  {
    text: "Working with ABD Law during our separation made a huge difference. They explained custody and support arrangements clearly and with kindness. I’m so thankful for their support.",
    name: "Olivia",
    rating: 5,
  },
  {
    text: "Working with ABD Law during our separation made a huge difference. They explained custody and support arrangements clearly and with kindness. I’m so thankful for their support.",
    name: "Olivia",
    rating: 5,
  },
];

const Testimonials : React.FC = () => {
  return (
    <div className="relative xl:mt-38 md:mt-31 mt-16 w-full flex flex-col align-middle xl:px-38 md:px-13 px-6">
      <img className='w-[150px] h-[209px] xl:block hidden z-1 absolute top-0 left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
      <img className='w-[150px] h-[209px] xl:block hidden z-1 absolute bottom-[-93px] right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>
      <h2 className="text-Black xl:text-5xl md:text-4xl text-2xl font-semibold text-center mx-auto">
        Our customers are saying
      </h2>

      <div className="bg-Orange mt-1 w-1/6 mx-auto h-0.5"></div>

      <div className='w-full mx-auto xl:mt-13 md:mt-6 max-w-screen-2xl h-[400px] max-h-[420px] flex items-center'>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className='my-swiper w-full h-full'
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>


  )
}

export default Testimonials
