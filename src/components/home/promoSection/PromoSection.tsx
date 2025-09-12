import { consult } from "../../../exports"
import Button from "../../module/button/Button"

const PromoSection = () => {
  return (
    <div className=" mt-38 relative w-full h-[524px] flex items-center justify-between">
      <div className="w-8/20 h-full "></div>
      <img
        src={consult}
        alt="Law background"
        className="w-12/20 h-full object-cover inset-0 object-[50%_30%]"
      />

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#00422E] via-[#00422E]/80 to-transparent" /> */}

      {/* Content */}
      <div className="absolute z-10 w-full py-[135px] gradient h-full text-white pl-[150px] ">
        <h1 className="text-3xl md:text-5xl font-bold leading-[52px] w-3/5">Turning Challenges into <br /> Solutions</h1>
        <p className="mt-4 text-base text-white w-3/5">
          Every legal matter is different, but you don’t have to face it alone.
          With our team, you can move ahead with confidence.
        </p>
        <Button
            text="Book a Consultation"
            className="bg-white !text-primary mt-6 border-white"
            onClick={() => alert("Consultation booked!")}
          />
      </div>

    </div>
  )
}

export default PromoSection
