import { pttHero } from '../../exports'
import TaxIntro from '../../components/taxCalculator/introduction/TaxIntro'
import CalculatorSection1 from '../../components/taxCalculator/calculatorSection1/CalculatorSection1'
import CalculatorSection2 from '../../components/taxCalculator/calculatorSection2/CalculatorSection2'
import CalculatorSection3 from '../../components/taxCalculator/calculatorSection3/CalculatorSection3'
import Testimonials from '../../components/home/testimonials/Testimonials'
import PagesHero from '../../components/module/pagesHero/PagesHero'

const TaxCalculator = () => {
  return (
    <div>
      <PagesHero
        title="Property Transfer Tax (PTT)" 
        imageBack={pttHero} 
      />
      <TaxIntro/>
      <CalculatorSection1/>
      <CalculatorSection2/>
      <CalculatorSection3/>
      <Testimonials/>
    </div>
  )
}

export default TaxCalculator
