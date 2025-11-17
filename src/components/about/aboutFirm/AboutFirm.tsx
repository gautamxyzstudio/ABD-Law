import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  about1,
  about2,
  about3,
  about4,
  image1,
  image2,
} from "../../../exports";
const AboutFirm = () => {
  return (
    <div className=" relative w-full xl:mt-38 md:mt-23 mt-16 xl:px-[150px] md:px-13 px-6 flex md:flex-row flex-col-reverse md:gap-13 gap-8 justify-between">
      <img
        className="w-[150px] h-[209px] xl:block hidden z-1 absolute top-[-80px] left-0 rounded-2xl object-cover"
        src={image2}
        alt="ellipse"
      />
      <img
        className="w-[150px] h-[209px] xl:block hidden z-1 absolute bottom-[-80px] right-0 rounded-2xl object-cover"
        src={image1}
        alt="ellipse"
      />

      {/* Left-side */}
      <div className="xl:w-1/2 md:w-11/20 w-full xl:h-[557px] h-83 md:h-104 relative xl:pt-[113px] md:pt-21 pt-16">
        <LazyLoadImage
          className="w-[70.4%] xl:h-[270px] md:h-50 h-40 z-1 absolute top-3 left-0 rounded-2xl  object-cover object-[12%_28%]  "
          src={about2}
          alt="books"
        />
        <LazyLoadImage
          className="w-[70.4%] xl:h-[270px] md:h-50 h-40 z-1 absolute bottom-0 right-0 top-72 rounded-2xl object-cover object-[12%_28%] "
          src={about1}
          alt="books"
        />
        <div className="w-full z-0 relative xl:h-[314px] md:h-59 h-46 bg-Yellow rounded-2xl">
          <LazyLoadImage
            className="w-[26%] xl:h-[158px] h-23 md:h-29 absolute top-0 right-0 rounded-2xl object-cover"
            src={about3}
            alt="books"
          />
          <LazyLoadImage
            className="w-[26%] xl:h-[139px] h-20 md:h-26 absolute bottom-0 left-0 rounded-2xl object-cover"
            src={about4}
            alt="books"
          />
        </div>
      </div>

      {/* Right-side */}
      <div className="md:w-1/2 w-full flex flex-col justify-center">
        <h2 className="text-Black xl:text-5xl md:text-4xl text-2xl font-semibold text-left w-full mx-auto">
          ABD Law Corporation
        </h2>

        <div className="bg-Orange md:mt-0.5 md:w-1/4 w-1/5 h-0.5"></div>

        <p className="mt-4 mb-2 xl:text-base text-sm text-Black">
          At ABD Law Corporation, we believe that legal services should be more
          than just solving problems — they should guide you confidently through
          life’s most important moments.
        </p>
        <p className="mt-4 mb-2 xl:text-base text-sm text-Black">
          Founded with a commitment to integrity, professionalism, and results,
          we have built a reputation for delivering effective legal solutions
          tailored to each client’s unique needs. Whether you are buying a home,
          starting a business, planning your estate, or facing a challenging
          family matter, our mission is to stand by you at every step.
        </p>
      </div>
    </div>
  );
};

export default AboutFirm;
