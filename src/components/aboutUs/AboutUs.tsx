import {about1, about2, about3, about4} from '../../exports'
const AboutUs = () => {
  return (
    <div className='w-full pt-[314px]  px-[150px] flex flex-row gap-13 justify-between'>

      {/* Left-side */}
      <div className='w-1/2 h-[557px] relative pt-[113px]'>
        <img className='w-[70.4%] h-[270px] z-1 absolute top-0 left-0 rounded-2xl object-cover' src={about2} alt='books'/>
        <img className='w-[70.4%] h-[270px] z-1 absolute bottom-0 right-0 rounded-2xl object-cover' src={about1} alt='books'/>
        <div className='w-full z-0 relative h-[314px] bg-Yellow rounded-2xl'>
            <img className='w-[26%] h-[158px] absolute top-0 right-0 rounded-2xl object-cover' src={about3} alt='books'/>
            <img className='w-[26%] h-[139px] absolute bottom-0 left-0 rounded-2xl object-cover' src={about4} alt='books'/>
        </div>
        
      </div>

      {/* Right-side */}
      <div className='w-48/100 flex flex-col justify-center'>
        <h2 className="text-Black text-5xl font-semibold text-left w-full mx-auto">
        About Us
      </h2>

      <div className="bg-Orange mt-0.5 w-1/4 h-0.5"></div>

      <p className='mt-4 text-base text-Black'>At ABD Law Corporation, we’re here to give you clear, trustworthy legal support that fits your situation and puts your mind at ease. Our knowledgeable team works with care and dedication to protect what matters most, your rights, your assets, and your future</p>

      
      </div>

    </div>
  )
}

export default AboutUs
