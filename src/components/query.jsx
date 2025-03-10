import { useState } from "react";
import PrevD from "./prevd";

const QueryForm = () => {
  const [userType, setUserType] = useState(""); // Default to empty string
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <div className="text-gray-900">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">
        Are you registering as a donor?
      </h2>
      <div className="flex flex-col space-y-2">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="Donor"
            value="yes"
            checked={userType === "yes"}
            onChange={(e) => setUserType(e.target.value)}
            className="h-4 w-4"
          />
          <span className="text-gray-900">Yes</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="Donor"
            value="no"
            checked={userType === "no"}
            onChange={(e) => setUserType(e.target.value)}
            className="h-4 w-4"
          />
          <span className="text-gray-900">No</span>
        </label>
      </div>

      {userType === "yes" && (
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">
            In the last six months have you had any of the following?
          </h2>
          <div className="space-y-2">
            {["Tattooing", "Ear piercing", "Dental extraction"].map((item) => (
              <label key={item} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={item}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <div className="mb-5">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">
              Do you suffer from or have suffered from any of the following
              diseases?
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Heart Disease",
                "Diabetes",
                "Sexually Transmitted Diseases",
                "Lung Disease",
                "Allergic Disease",
                "Epilepsy (Charay rog)",
                "Jaundice (last one year)",
                "Fainting spells",
                "Cancer/Malignant Disease",
                "Hepatitis B/C",
                "Typhoid (last one year) (Antay joro)",
                "Tuberculosis",
                "Kidney Disease",
                "Abnormal Bleeding tendency",
                "Malaria (six months)",
              ].map((item) => (
                <label key={item} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">
              Are you taking or have you taken any of these in the past 72
              hours?
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Antibiotics",
                "Aspirin",
                "Alcohol",
                "Steroids",
                "Vaccinations",
                "Dog bite Rabies vaccine (1 year)",
              ].map((item) => (
                <label key={item} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">
              Is there any history of surgery or blood transfusion in the past
              six months?
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {["Major", "Minor", "Blood Transfusion"].map((item) => (
                <label key={item} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <PrevD></PrevD>
          </div>
        </div>
      )}
    </div>
  );
};

export default QueryForm;
