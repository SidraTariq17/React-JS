import React from "react";

const DonorCard = ({ name, age, city, imageUrl, bloodgroup }) => (
  <li className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="p-6">
      <div className="flex items-center space-x-6">
        <img
          alt={name}
          src={imageUrl}
          className="h-24 w-24 rounded-full object-cover ring-4 ring-red-500/30 hover:ring-red-500/50 transition-all"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 truncate">{name}</h3>
          <p className="text-sm text-gray-500">{city}</p>
          <p className="text-sm text-gray-500">{age} years old</p>
          <p className="text-sm font-semibold text-red-600">
            Blood Group: {bloodgroup}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold shadow-md hover:shadow-lg">
          Connect Now
        </button>
      </div>
    </div>
  </li>
);

export default DonorCard;
