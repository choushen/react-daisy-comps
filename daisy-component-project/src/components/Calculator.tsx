import React, { useState } from "react";

const Calculator: React.FC = () => {

    const [postcode, setPostcode] = useState<string>("");
    const [savings, setSavings] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    
        // Mock savings calculation
        const calculateSavings = (postcode: string) => {
        if (!/^$/.test(postcode)) {
            setError("Invalid postcode. Please enter a valid one.");
            setSavings(null);
            return;
        }
    
        setError(null);
    
        // Mock: Generate a random savings amount between £100 and £500
        const generatedSavings = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
        setSavings(generatedSavings);
        };
    
        return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-2xl font-semibold mb-4">Find Out Your Savings</h2>
    
            {/* Input Field */}
            <input
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="Enter your postcode"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
    
            {/* Button */}
            <button
                onClick={() => calculateSavings(postcode)}
                className="mt-4 w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
            >
                Calculate Savings
            </button>
    
            {/* Error Message */}
            {error && <p className="text-red-500 mt-3">{error}</p>}
    
            {/* Savings Result */}
            {savings !== null && (
                <p className="text-lg font-semibold mt-4">
                You could save <span className="text-green-500">£{savings}</span>!
                </p>
            )}
            </div>
        </div>
    );

}

export default Calculator