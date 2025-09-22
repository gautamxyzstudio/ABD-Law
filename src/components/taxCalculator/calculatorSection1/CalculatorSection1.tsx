import PttCalculator from '../../module/pttCalculator/PttCalculator'

const CalculatorSection1 = () => {
  return (
    <div className='w-full flex md:flex-row flex-col xl:gap-30 gap-5 justify-between bg-servicesB xl:mt-38 md:mt-31 mt-16 xl:px-[150px] md:px-13 px-6 md:py-20 py-13'>
      <div className='md:w-1/2 w-full flex flex-col justify-center'>
          <h2 className="text-Black xl:text-5xl text-2xl xl:leading-14 leading-8 font-semibold text-left w-full mx-auto">Standard Calculator </h2>
          <p className='mt-4 xl:text-base text-Black text-sm xl:leading-6 leading-[22px]'>B.C.’s online Property Transfer Tax calculator estimates your tax from the home’s fair market value and basic details. It also factors in the extra 2% on residential value over $3M and the additional tax for foreign entities when applicable. Use examples for complex cases.</p>
          <ul className="list-disc pl-5 space-y-1 mt-4 xl:text-base text-Black text-sm xl:leading-6 leading-[22px]">
            <li>It’s an estimate tool that actual tax can change with exemptions or mixed-use property.</li>
            <li>It applies to the “further 2%” and the additional tax only when relevant answers are selected.</li>
            <li>For unusual scenarios (partial interests, mixed classes), review the government’s calculation examples.</li>
          </ul>
      </div>
      <div className='md:w-1/2 w-full'>
        <PttCalculator title='Spagnuolo PTT Calculator'/>
      </div>
    </div>
  )
}

export default CalculatorSection1
