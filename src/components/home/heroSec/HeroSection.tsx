import { LazyLoadImage } from 'react-lazy-load-image-component';
import { homeHero, homeHeroBack } from '../../../exports'
import Button from '../../module/button/Button'
import { useNavigate } from "react-router-dom"; 

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className='relative bg-primary md:h-[758px] h-188 xl:px-[150px] md:pt-33 pt-32 -mt-20 md:px-13 px-6'>
        <LazyLoadImage className='xl:w-3/5 w-[95%] xl:h-[456px] md:h-100 h-61 z-1 transform scale-x-[-1] absolute xl:bottom-[-160px] md:-bottom-33 -bottom-13 md:w-94/100 right-0 xl:rounded-tr-[80px] md:rounded-tr-[70px] rounded-tr-[52px] object-cover' src={homeHero} alt='hero-section'/>
        <LazyLoadImage src={homeHeroBack} alt="background" className="absolute inset-0 w-full h-full object-cover opacity-50"/>
         
        <div className=' w-full flex justify-between relative xl:items-start items-end'>
            <div className='xl:w-[66%] md:w-14/20 w-full'>
                <h1  className='text-white md:w-full w-4/5 xl:text-[80px] md:text-[52px] text-[32px] xl:leading-[96px] md:leading-[60px] leading-11 font-bold'>Guiding Legal Solutions Through All Life Phases</h1>
                <div className='w-full md:hidden flex mt-4 mb-10'>
                  <p className='text-base text-white opacity-80'>At ABD Law Corporation, integrity, clarity, and care guide our comprehensive legal services. From family transitions and estate planning to business growth and property law, our team is by your side at every phase.</p>
                </div>
                <Button 
                   text="Book a Consultation" 
                   onClick={() => {navigate("/contact");window.scrollTo(0, 0)} } 
                   className="md:mt-10 md:w-fit w-full !text-primary !bg-Yellow"
                 />
            </div>
            <div className='relative w-8/20 md:flex xl:pt-45 hidden'>
                <p className='xl:text-base md:text-sm text-white opacity-80'>At ABD Law Corporation, integrity, clarity, and care guide our comprehensive legal services. From family transitions and estate planning to business growth and property law, our team is by your side at every phase.</p>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
