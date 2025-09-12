import { homeHero } from '../../../exports'
import Button from '../../module/button/Button'

const HeroSection = () => {
  return (
    <div className='relative bg-primary h-[680px] px-[150px] pt-[52px]'>
        <img className='w-3/5 h-[456px] z-1 absolute bottom-[-160px] right-0 rounded-tl-[80px] object-cover' src={homeHero} alt='hero-section'/>
       
        <div className=' w-full flex justify-between'>
            <div className='w-[66%] text-white text-[80px] leading-[96px] font-bold'>
                <h1>Guiding Legal Solutions Through All Life Phases</h1>
                <Button 
                   text="Book a Consultation" 
                   onClick={() => alert("Navigating to form...")} 
                   className="mt-10 w-fit !text-primary !bg-Yellow"
                 />
            </div>
            <div className='w-7/20 pt-[168px]'>
                <p className='text-base text-white opacity-50'>At ABD Law Corporation, integrity, clarity, and care guide our comprehensive legal services. From family transitions and estate planning to business growth and property law, our team is by your side at every phase.</p>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
