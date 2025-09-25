import { consult } from "../../../exports"
import Button from "../../module/button/Button"
import { useNavigate } from "react-router-dom"; 

const PromoSection = () => {
  const navigate = useNavigate();
  return (
    <div className=" xl:mt-38 md:mt-31 mt-16 relative w-full xl:h-[524px] md:h-[324px] h-131 flex md:flex-row flex-col items-center justify-between">
      <div className="md:w-8/20 md:h-full w-full h-50 "></div>
      <img
        src={consult}
        alt="Law background"
        className="md:w-12/20 w-full md:h-full h-81 object-cover inset-0 object-[50%_30%]"
      />

      {/* Content */}
      <div className="absolute z-10 w-full xl:py-[135px] md:pt-12 pt-6 gradient gradient-mob h-full text-white xl:pl-[150px] md:pl-13 px-6 ">
        <h1 className="text-3xl xl:text-5xl md:text-4xl font-bold xl:leading-[52px] md:leading-[42px] md:w-3/5 w-full md:text-left text-center">Turning Challenges into <br /> Solutions</h1>
        <p className="mt-4 xl:text-base text-sm text-white md:w-3/5 w-full md:text-left text-center">
          Every legal matter is different, but you don’t have to face it alone.
          With our team, you can move ahead with confidence.
        </p>
        <Button
            text="Book a Consultation"
            className="bg-white !text-primary mt-6 border-white md:w-auto w-full"
            onClick={() => {navigate("/contact"); window.scrollTo(0, 0)}} 
          />
      </div>

    </div>
  )
}

export default PromoSection
