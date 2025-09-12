import PttCalculator from '../../module/pttCalculator/PttCalculator'

const CalculatorSection3 = () => {
  return (
    <div className='w-full flex flex-row gap-30 justify-between bg-servicesB px-[150px]  py-20'>
      <div className='w-1/2 flex flex-col justify-center'>
          <h2 className="text-Black text-5xl font-semibold text-left w-full mx-auto">Newly Built Home Exemption (NBHE) </h2>
          <ul className="list-disc pl-5 space-y-1 mt-4">
            <li>Helps eligible buyers of new principal residences save PTT.</li>
            <li>For properties registered on/after April 1, 2024, full exemption applies when fair market value less than $1,100,000.</li>
            <li>Partial exemption phases out from $1,100,000 to $1,150,000.</li>
            <li>Applies to qualifying “newly built” homes, including new condos and homes built on vacant land, when used as your principal residence.</li>
            <li>Property size and non-residential improvements can affect the exempt amount; special rules apply if the lot exceeds 0.5 hectares.</li>
            <li>If only some purchasers qualify, the exemption is prorated by the eligible ownership share.</li>
          </ul>
      </div>
      <div className='w-1/2'>
        <PttCalculator title='Spagnuolo Newly Built Home Exemption Calculator 2024 April'/>
      </div>
    </div>
  )
}

export default CalculatorSection3
