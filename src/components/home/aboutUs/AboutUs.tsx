import {about1, about2, about3, about4, image1, image2} from '../../../exports'
import Button from '../../module/button/Button'
const AboutUs = () => {
  return (
    <div className=' relative w-full xl:pt-[314px] md:pt-64 pt-26 xl:px-[150px] md:px-13 px-6  flex md:flex-row flex-col-reverse xl:gap-13 md:gap-10 gap-8 justify-between'>
        <img className='w-[150px] xl:block hidden h-[209px] z-1 absolute top-10 left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
        <img className='w-[150px] xl:block hidden h-[209px] z-1 absolute bottom-5 right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>

      {/* Left-side */}
      <div className='xl:w-1/2 md:w-11/20 w-full xl:h-[557px] h-83 md:h-104 relative xl:pt-[113px] md:pt-21 pt-16'>
        <img className='w-[70.4%] xl:h-[270px] md:h-50 h-40 z-1 absolute top-0 left-0 rounded-2xl object-cover' src={about2} alt='books'/>
        <img className='w-[70.4%] xl:h-[270px] md:h-50 h-40 z-1 absolute bottom-0 right-0 rounded-2xl object-cover' src={about1} alt='books'/>
        <div className='w-full z-0 relative xl:h-[314px] md:h-59 h-46 bg-Yellow rounded-2xl'>
            <img className='w-[26%] xl:h-[158px] h-23 md:h-29 absolute top-0 right-0 rounded-2xl object-cover' src={about3} alt='books'/>
            <img className='w-[26%] xl:h-[139px] h-20 md:h-26 absolute bottom-0 left-0 rounded-2xl object-cover' src={about4} alt='books'/>
        </div>
        
      </div>

      {/* Right-side */}
      <div className='xl:w-48/100 md:w-9/20 flex flex-col justify-center'>
        <h2 className="text-Black xl:text-5xl md:text-4xl text-2xl font-semibold text-left w-full mx-auto">
        About Us
      </h2>

      <div className="bg-Orange mt-0.5 xl:w-1/4 md:w-2/5 w-18/100 h-0.5"></div>

      <p className='mt-4 xl:text-base text-sm text-Black'>At ABD Law Corporation, we’re here to give you clear, trustworthy legal support that fits your situation and puts your mind at ease. Our knowledgeable team works with care and dedication to protect what matters most, your rights, your assets, and your future</p>

      <Button 
        text="Read More" 
        onClick={() => alert("Navigating to services...")} 
        className="mt-8 w-fit"
      />
      </div>

    </div>
  )
}

export default AboutUs
