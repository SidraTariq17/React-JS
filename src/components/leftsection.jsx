import React from "react";

const LeftSection = () => (
  <div className="hidden md:flex md:w-1/2 bg-red-600 items-center">
    <div className="p-12 text-white">
      <h1 className="text-5xl font-bold mb-4">Give Blood,</h1>
      <h2 className="text-3xl font-semibold mb-6">Save Lives</h2>
      <p className="text-xl mb-12">
        Your donation can help save up to three lives. Join our community of
        life-savers today.
      </p>

      <div className="grid grid-cols-2 gap-6">
        <StatisticsCard title="5000+" subtitle="Donors" />
        <StatisticsCard title="15000+" subtitle="Lives Saved" />
      </div>
    </div>
  </div>
);

const StatisticsCard = ({ title, subtitle }) => (
  <div className="bg-red-500/50 p-6 rounded-lg">
    <h3 className="text-3xl font-bold mb-2">{title}</h3>
    <p className="text-lg">{subtitle}</p>
  </div>
);

export default LeftSection;
