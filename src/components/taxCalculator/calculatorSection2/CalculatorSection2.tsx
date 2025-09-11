import PttCalculator from '../../module/pttCalculator/PttCalculator'

const CalculatorSection2 = () => {
  return (
    <div className='w-full flex flex-row gap-30 justify-between px-[150px]  py-31'>
      <div className='w-11/20 flex flex-col justify-center'>
          <h2 className="text-Black text-5xl font-semibold text-left w-full mx-auto">First Time Home Buyer Exemption (FTHB)</h2>
          <ul className="list-disc pl-5 space-y-1 mt-4">
            <li>Buyer must be a Canadian citizen or permanent resident and meet B.C. residency history rules.</li>
            <li>Property must be your principal residence, 0.5 hectares or less, and fair market value ≤ $835,000 (effective April 1, 2024).</li>
            <li>When fully eligible, PTT on the first $500,000 of the purchase price is exempt.</li>
            <li>Partial exemption if fair market value is more than $835,000 but less than $860,000.</li>
            <li>Occupancy requirements apply (move in and live there for the first year) or the exemption can be clawed back.</li>

          </ul>
      </div>
      <div className='w-9/20'>
        <PttCalculator/>
      </div>
    </div>
  )
}

export default CalculatorSection2
