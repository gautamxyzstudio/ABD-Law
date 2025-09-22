import { homeHero, homeHeroBack } from '../../../exports'
import Button from '../../module/button/Button'

const HeroSection = () => {
  return (
    <div className='relative bg-primary md:h-[758px] xl:px-[150px] md:pt-33 md:-mt-20 md:px-13 px-6'>
        <img className='xl:w-3/5 xl:h-[456px] md:h-100 z-1 transform scale-x-[-1] absolute xl:bottom-[-160px] md:-bottom-33 md:w-94/100 right-0 xl:rounded-tr-[80px] md:rounded-tr-[70px] object-cover' src={homeHero} alt='hero-section'/>
         <img src={homeHeroBack} alt="background" className="absolute inset-0 w-full h-full object-cover opacity-50"/>
         
        <div className=' w-full flex justify-between relative md:items-end'>
            <div className='xl:w-[66%] md:w-14/20 text-white xl:text-[80px] md:text-[52px] xl:leading-[96px] md:leading-[60px] font-bold'>
                <h1>Guiding Legal Solutions Through All Life Phases</h1>
                <Button 
                   text="Book a Consultation" 
                   onClick={() => alert("Navigating to form...")} 
                   className="md:mt-10 w-fit !text-primary !bg-Yellow"
                 />
            </div>
            <div className='relative w-8/20'>
                <p className='xl:text-base md:text-sm text-white opacity-80'>At ABD Law Corporation, integrity, clarity, and care guide our comprehensive legal services. From family transitions and estate planning to business growth and property law, our team is by your side at every phase.</p>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
