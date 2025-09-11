import PttCalculator from '../../module/pttCalculator/PttCalculator'

const CalculatorSection1 = () => {
  return (
    <div className='w-full flex flex-row gap-30 justify-between bg-servicesB mt-38 px-[150px]  py-20'>
      <div className='w-1/2 flex flex-col justify-center'>
          <h2 className="text-Black text-5xl font-semibold text-left w-full mx-auto">Standard Calculator </h2>
          <p className='mt-4 text-base text-Black'>B.C.’s online Property Transfer Tax calculator estimates your tax from the home’s fair market value and basic details. It also factors in the extra 2% on residential value over $3M and the additional tax for foreign entities when applicable. Use examples for complex cases.</p>
          <ul className="list-disc pl-5 space-y-1 mt-4">
            <li>It’s an estimate tool that actual tax can change with exemptions or mixed-use property.</li>
            <li>It applies to the “further 2%” and the additional tax only when relevant answers are selected.</li>
            <li>For unusual scenarios (partial interests, mixed classes), review the government’s calculation examples.</li>
          </ul>
      </div>
      <div className='w-1/2'>
        <PttCalculator title='Spagnuolo PTT Calculator'/>
      </div>
    </div>
  )
}

export default CalculatorSection1
