import PttCalculator from '../../module/pttCalculator/PttCalculator'

const CalculatorSection2 = () => {
  return (
    <div className='w-full flex md:flex-row flex-col xl:gap-30 gap-5 justify-between xl:px-[150px] md:px-13 px-6 md:py-31 py-16'>
      <div className='md:w-1/2 w-full flex flex-col justify-center'>
          <h2 className="text-Black xl:text-5xl text-2xl xl:leading-14 leading-8 font-semibold text-left w-full mx-auto">First Time Home Buyer Exemption (FTHB)</h2>
          <ul className="list-disc pl-5 space-y-1 mt-4 xl:text-base text-Black text-sm xl:leading-6 leading-[22px]">
            <li>Buyer must be a Canadian citizen or permanent resident and meet B.C. residency history rules.</li>
            <li>Property must be your principal residence, 0.5 hectares or less, and fair market value ≤ $835,000 (effective April 1, 2024).</li>
            <li>When fully eligible, PTT on the first $500,000 of the purchase price is exempt.</li>
            <li>Partial exemption if fair market value is more than $835,000 but less than $860,000.</li>
            <li>Occupancy requirements apply (move in and live there for the first year) or the exemption can be clawed back.</li>

          </ul>
      </div>
      <div className='md:w-1/2 w-full'>
        <PttCalculator title='Spagnuolo First Time Home Buyers Exemption Calculator 2024 April'/>
      </div>
    </div>
  )
}

export default CalculatorSection2
