import React, { useState } from "react";
import Button from "../button/Button";

const PttCalculator: React.FC = () => {
  const [propertyType, setPropertyType] = useState<"Residential" | "Commercial">("Residential");
  const [amount, setAmount] = useState<number | "">("");
  const [taxBreakdown, setTaxBreakdown] = useState({
    first200k: 0,
    nextUpTo2M: 0,
    nextUpTo3M: 0,
    over3M: 0,
    total: 0,
  });

  const calculateTax = () => {
    if (amount === "" || amount <= 0) {
      setTaxBreakdown({ first200k: 0, nextUpTo2M: 0, nextUpTo3M: 0, over3M: 0, total: 0 });
      return;
    }

    let remaining = amount;
    let first200k = 0,
      nextUpTo2M = 0,
      nextUpTo3M = 0,
      over3M = 0;

    // 1% on first $200,000
    if (remaining > 200000) {
      first200k = 200000 * 0.01;
      remaining -= 200000;
    } else {
      first200k = remaining * 0.01;
      remaining = 0;
    }

    // 2% on next $1.8M (200,000 → 2,000,000)
    if (remaining > 0) {
      const portion = Math.min(1800000, remaining);
      nextUpTo2M = portion * 0.02;
      remaining -= portion;
    }

    // 3% on next $1M (2M → 3M)
    if (remaining > 0) {
      const portion = Math.min(1000000, remaining);
      nextUpTo3M = portion * 0.03;
      remaining -= portion;
    }

    // Extra 2% (residential only) on amount > $3M
    if (remaining > 0 && propertyType === "Residential") {
      over3M = remaining * 0.02;
    }

    const total = first200k + nextUpTo2M + nextUpTo3M + over3M;

    setTaxBreakdown({ first200k, nextUpTo2M, nextUpTo3M, over3M, total });
  };

  return (
    <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden">

      {/* Header */}
      <div className="bg-primary  text-white text-center py-3 font-semibold">
        Spagnuolo PTT Calculator
      </div>

      <div className="p-3">
        {/* Property Type */}
        <label className="block mb-2 font-medium">Property type</label>
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value as "Residential" | "Commercial")}
          className="w-full max-w-full p-2 border border-serviceBorder rounded mb-4"
        >
          <option className="w-4/5" value="Residential">Residential</option>
          <option className="w-4/5" value="Commercial">Commercial</option>
        </select>

        {/* Amount Input */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
          className="w-full p-2 border rounded mb-4"
          placeholder="$"
        />

        {/* Calculate Button */}
        
        <Button text="Calculate" onClick={calculateTax} className="w-full !bg-Yellow text-white py-2 rounded hover:bg-yellow-600 transition"/>    

        {/* Tax Breakdown */}
        <div className="mt-6 flex flex-row flex-wrap gap-3 justify-between">
          <div className="w-11/25" >
            <p className="text-base text-Black font-semibold">${taxBreakdown.first200k.toLocaleString()}</p>
            <p className="text-base text-text-secondary">Tax on amount under $200,000{" "}</p>           
          </div>
          <div className="w-11/25">
            <p className="text-base text-Black font-semibold">${taxBreakdown.nextUpTo2M.toLocaleString()}</p>
            <p className="text-base text-text-secondary">Tax on amount over $200,000 &amp; up to $2,000,000{" "}</p>
          </div>
          <div className="w-11/25">
            <p className="text-base text-Black font-semibold">${taxBreakdown.nextUpTo3M.toLocaleString()}</p>
            <p className="text-base text-text-secondary">Tax on amount over $2,000,000 &amp; up to $3,000,000{" "}</p>         
          </div>
          <div className="w-11/25">
            <p className="text-base text-Black font-semibold">${taxBreakdown.over3M.toLocaleString()}</p>
            <p className="text-base text-text-secondary">Tax on amount over $3,000,000{" "}</p>           
          </div>
        </div>
        <div className="mt-4 p-2 flex flex-row justify-between  bg-white">
          <p className="font-bold text-lg">
            Total Tax: 
          </p>
          <p className="font-bold text-lg">
            ${taxBreakdown.total.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PttCalculator;
