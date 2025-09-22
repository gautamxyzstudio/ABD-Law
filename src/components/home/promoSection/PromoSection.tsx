import { consult } from "../../../exports"
import Button from "../../module/button/Button"

const PromoSection = () => {
  return (
    <div className=" xl:mt-38 md:mt-31 relative w-full xl:h-[524px] md:h-[324px] flex items-center justify-between">
      <div className="w-8/20 h-full "></div>
      <img
        src={consult}
        alt="Law background"
        className="w-12/20 h-full object-cover inset-0 object-[50%_30%]"
      />

      {/* Content */}
      <div className="absolute z-10 w-full xl:py-[135px] md:pt-12 gradient h-full text-white xl:pl-[150px] md:pl-13 pl-6 ">
        <h1 className="text-3xl xl:text-5xl md:text-4xl font-bold xl:leading-[52px] md:leading-[42px] w-3/5">Turning Challenges into <br /> Solutions</h1>
        <p className="mt-4 xl:text-base text-sm text-white w-3/5">
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
