import React from "react";
import DonorCard from "./DonorCard";

const DonorsList = ({ people }) => (
  <div className="container mx-auto px-4 py-12">
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {people.map((person, index) => (
        <DonorCard key={index} {...person} />
      ))}
    </ul>
  </div>
);

export default DonorsList;
