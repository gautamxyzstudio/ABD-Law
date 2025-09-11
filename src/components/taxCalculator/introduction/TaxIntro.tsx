import {about1, about2, about3, about4, image1, image2} from '../../../exports'

const TaxIntro = () => {
  return (
    <div className=' relative w-full pt-31 px-[150px] flex flex-row gap-13 justify-between'>
        <img className='w-[150px] h-[209px] z-1 absolute bottom-13 left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
        <img className='w-[150px] h-[209px] z-1 absolute top-17 right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>

      {/* Left-side */}
      <div className='w-48/100 flex flex-col justify-center'>
        <h2 className="text-Black text-5xl font-semibold text-left w-full mx-auto">What is Property Transfer Tax (PTT)? </h2>
        <p className='mt-4 text-base text-Black'>Property Transfer Tax is a one-time tax you pay to the B.C. government when you buy or receive an interest in real estate registered at the Land Title Office. It’s based on the fair market value of the property on the registration date, unless you qualify for an exemption.</p>
        <h3 className="mt-7 text-Black text-2xl font-semibold text-left w-full mx-auto">How is it calculated?</h3>
        <p className='mt-4 text-base text-Black'>PTT uses tiered rates on the property’s fair market value: 1% on the first $200,000, 2% from $200,000 to $2,000,000, and 3% above $2,000,000. For residential value over $3,000,000, a further 2% applies. Some buyers may also owe an additional tax in specified areas.</p>
      </div>
      {/* Right-side */}
      <div className='w-1/2 h-[557px] relative pt-[113px]'>
        <img className='w-[70.4%] h-[270px] z-1 absolute top-0 left-0 rounded-2xl object-cover' src={about2} alt='books'/>
        <img className='w-[70.4%] h-[270px] z-1 absolute bottom-0 right-0 rounded-2xl object-cover' src={about1} alt='books'/>
        <div className='w-full z-0 relative h-[314px] bg-Yellow rounded-2xl'>
            <img className='w-[26%] h-[158px] absolute top-0 right-0 rounded-2xl object-cover' src={about3} alt='books'/>
            <img className='w-[26%] h-[139px] absolute bottom-0 left-0 rounded-2xl object-cover' src={about4} alt='books'/>
        </div>
        
      </div>  

    </div>
  )
}

export default TaxIntro
