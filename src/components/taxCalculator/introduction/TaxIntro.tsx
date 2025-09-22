import {about1, about2, about3, about4, image1, image2} from '../../../exports'

const TaxIntro = () => {
  return (
    <div className=' relative w-full md:pt-31 pt-16 xl:px-[150px] md:px-13 px-6 flex md:flex-row flex-col-reverse xl:gap-13 md:gap-10 gap-12 justify-between'>
        <img className='w-[150px] h-[209px] z-1 xl:block hidden absolute bottom-13 left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
        <img className='w-[150px] h-[209px] z-1 xl:block hidden absolute top-17 right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>

      {/* Left-side */}
      <div className='xl:w-1/2 md:w-3/5 xl:h-[557px] md:h-104 h-82 flex relative xl:pt-[113px] md:pt-21 pt-16'>
        <img className='w-[70.4%] xl:h-[270px] md:h-50 h-[158px] z-1 absolute top-0 left-0 md:rounded-2xl rounded-lg object-cover' src={about2} alt='books'/>
        <img className='w-[70.4%] xl:h-[270px] md:h-50 h-[158px] z-1 absolute bottom-0 right-0 md:rounded-2xl rounded-lg object-cover' src={about1} alt='books'/>
        <div className='w-full z-0 relative xl:h-[314px] md:h-59 h-46 bg-Yellow md:rounded-2xl rounded-lg'>
            <img className='w-[26%] xl:h-[158px] md:h-29 h-23 absolute top-0 right-0 md:rounded-2xl rounded-lg object-cover' src={about3} alt='books'/>
            <img className='w-[26%] xl:h-[139px] md:h-26 h-20 absolute bottom-0 left-0 md:rounded-2xl rounded-lg object-cover' src={about4} alt='books'/>
        </div>        
      </div> 

       {/* Right-side */}
      <div className='xl:w-48/100 md:w-2/5 flex flex-col justify-center'>
        <h2 className="text-Black xl:text-5xl text-2xl xl:leading-14 leading-8 font-semibold text-left w-full mx-auto">What is Property Transfer Tax (PTT)? </h2>
        <p className='xl:mt-4 md:mt-3 mt-4 xl:text-base text-sm text-Black'>Property Transfer Tax is a one-time tax you pay to the B.C. government when you buy or receive an interest in real estate registered at the Land Title Office. It’s based on the fair market value of the property on the registration date, unless you qualify for an exemption.</p>
        <h3 className="xl:mt-7 md:mt-3 mt-6 text-Black xl:text-2xl text-xl xl:leading-8 leading-7 font-semibold text-left w-full mx-auto">How is it calculated?</h3>
        <p className='xl:mt-4 md:mt-3 mt-4 xl:text-base text-sm text-Black'>PTT uses tiered rates on the property’s fair market value: 1% on the first $200,000, 2% from $200,000 to $2,000,000, and 3% above $2,000,000. For residential value over $3,000,000, a further 2% applies. Some buyers may also owe an additional tax in specified areas.</p>
      </div>

     
      

    </div>
  )
}

export default TaxIntro
