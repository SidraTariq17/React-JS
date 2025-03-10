import { useState } from "react";
import Birthday from "./birthday";

const PrevD = () => {
  const [donatedPreviously, setDonatedPreviously] = useState(""); // Default to empty string

  return (
    <div className="mb-5">
      {/* Have you donated previously? */}
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">
        Have you donated previously?
      </h2>
      <div className="flex flex-col space-y-2">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="donatedPreviously"
            value="yes"
            checked={donatedPreviously === "yes"}
            onChange={(e) => setDonatedPreviously(e.target.value)} // Correct event handling
            className="h-4 w-4"
          />
          <span className="text-gray-900">Yes</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="donatedPreviously"
            value="no"
            checked={donatedPreviously === "no"}
            onChange={(e) => setDonatedPreviously(e.target.value)} // Correct event handling
            className="h-4 w-4"
          />
          <span className="text-gray-900">No</span>
        </label>
      </div>

      {/* Show Date Input if User Selected Yes */}
      {donatedPreviously === "yes" && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">
            What was the last time you donated blood?
          </h2>
          <Birthday />
          <p className="text-sm text-gray-500 text-left mt-1">Date</p>
        </div>
      )}
    </div>
  );
};

export default PrevD;
