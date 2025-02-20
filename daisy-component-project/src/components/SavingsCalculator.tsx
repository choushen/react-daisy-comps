// import React, { useState } from "react";

const SavingsCalculator: React.FC = () => {

        return (

                <div id="savings-calcuator" className="mx-auto grid grid-rows-3 grid-cols-6 gap-6 w-full max-w-2xl border border-gray-200 rounded-lg p-6 shadow-md">

                    {/* Row 1: Label */}
                    <div id="savings-calculator-header" className="col-span-6 text-center">
                        <div className="p-3 text-2xl">Savings Calculator</div>
                        <div className="divider"></div>
                    </div>

                    {/* Row 2: Spinner & Input Fields */}
                    <div  id="savings-calculator-main" className="col-span-6 grid gap-4 grid-cols-6 items-center">  
                        
                        {/* Spinner (Left 3 Columns) */}
                        <div id="savings-calculator-loaded-content" className="col-span-3 flex justify-center items-center">
                        <span className="loading loading-spinner loading-x"></span>
                        </div>

                        {/* Labels and Input (Right 3 Columns) */}
                        <div  id="savings-calculator-buttons" className="col-span-3 flex flex-col gap-4 items-end">
                            <label className="input">
                                <span className="label">House Value</span>
                                <input type="text" placeholder="URL" />
                            </label>
                            <label className="input">
                                <span className="label">Postcode</span>
                                <input type="text" placeholder="URL" />
                            </label>
                        </div>
                    </div>

                    {/* Row 3: Buttons */}
                    <div id="savings-calculator-buttons" className="col-span-6 grid grid-cols-6 gap-4">
                        <button className="btn btn-primary col-span-3">Calculate</button>
                        <button className="btn btn-secondary col-span-3">Clear</button>
                        <div className="divider col-span-6"></div>
                    </div>
                </div>

    );

}

export default SavingsCalculator