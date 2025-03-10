import { useState } from "react";

const BloodTypeSelector = () => {
  const [selectedBloodType, setSelectedBloodType] = useState("");

  const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left w-full">
        Select Your Blood Type:
      </h2>

      <div className="grid grid-cols-4 gap-4 justify-start m-10">
        {bloodTypes.map((type) => (
          <label
            key={type}
            className="flex flex-col items-center cursor-pointer"
          >
            <input
              type="radio"
              name="bloodType"
              value={type}
              checked={selectedBloodType === type}
              onChange={() => setSelectedBloodType(type)}
              className="hidden peer"
            />
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full border-2 text-gray-900
              ${selectedBloodType === type ? "border-red-500 bg-red-600 text-white" : "border-gray-300"}
              transition-all duration-200`}
            >
              {type}
            </div>
          </label>
        ))}
      </div>

      {selectedBloodType && (
        <p className="mt-4 text-lg font-semibold text-gray-900">
          Selected Blood Type:{" "}
          <span className="text-red-600">{selectedBloodType}</span>
        </p>
      )}
    </>
  );
};

export default BloodTypeSelector;
