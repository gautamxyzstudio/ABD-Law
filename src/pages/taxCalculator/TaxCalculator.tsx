import { image1 } from '../../exports'
import TaxIntro from '../../components/taxCalculator/introduction/TaxIntro'
import CalculatorSection1 from '../../components/taxCalculator/calculatorSection1/CalculatorSection1'
import CalculatorSection2 from '../../components/taxCalculator/calculatorSection2/CalculatorSection2'
import CalculatorSection3 from '../../components/taxCalculator/calculatorSection3/CalculatorSection3'
import Testimonials from '../../components/home/testimonials/Testimonials'

const TaxCalculator = () => {
  return (
    <div>
      <div className="relative px-[150px] bg-primary w-full h-[392px] pt-[119px]">
        <h1 className="text-6xl text-white font-bold leading-[77px] text-left">Property Transfer Tax (PTT)</h1> 
        <img className='w-[150px] h-[209px] z-1 absolute top-10 right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>
      </div>
      <TaxIntro/>
      <CalculatorSection1/>
      <CalculatorSection2/>
      <CalculatorSection3/>
      <Testimonials/>
    </div>
  )
}

export default TaxCalculator
