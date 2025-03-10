import React from "react";
import { FaUserPlus, FaTint, FaHeart, FaHandsHelping } from "react-icons/fa";
import donate from "../assets/images/donate.jpg";

const Achievement = () => {
  return (
    <div className="flex h-screen bg-black">
      {/* Left Section - Blood Donation Achievements */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-red-600 to-red-800 text-white items-center justify-center p-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 animate-pulse">
            Give Blood, Save Lives
          </h1>
          <p className="text-xl mb-8">
            Every drop counts. Your donation makes a difference.
          </p>

          <div className="grid grid-cols-2 gap-8">
            {/* Achievement Cards */}
            <div className="bg-white/20 p-6 rounded-lg flex flex-col items-center shadow-md">
              <FaUserPlus className="text-5xl mb-2" />
              <h3 className="text-4xl font-bold">5,000+</h3>
              <p className="text-lg">Registered Donors</p>
            </div>

            <div className="bg-white/20 p-6 rounded-lg flex flex-col items-center shadow-md">
              <FaTint className="text-5xl mb-2" />
              <h3 className="text-4xl font-bold">10,000+</h3>
              <p className="text-lg">Liters Donated</p>
            </div>

            <div className="bg-white/20 p-6 rounded-lg flex flex-col items-center shadow-md">
              <FaHeart className="text-5xl mb-2" />
              <h3 className="text-4xl font-bold">15,000+</h3>
              <p className="text-lg">Lives Saved</p>
            </div>

            <div className="bg-white/20 p-6 rounded-lg flex flex-col items-center shadow-md">
              <FaHandsHelping className="text-5xl mb-2" />
              <h3 className="text-4xl font-bold">2,000+</h3>
              <p className="text-lg">Volunteers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Motivation & Call to Action */}
      <div
        className="w-full md:w-1/2 flex flex-col items-center justify-center p-12 bg-cover bg-center bg-no-repeat shadow-lg"
        style={{ backgroundImage: `url(${donate})` }}
      >
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-12 bg-white shadow-lg">
          <div className="max-w-lg text-center">
            <h2 className="text-4xl font-bold text-red-600 mb-6">
              Be a Hero Today
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              "The blood you donate gives someone another chance at life. One
              day, that someone may be a loved one."
            </p>

            <div className="bg-red-100 border-l-4 border-red-600 text-red-800 p-4 mb-6">
              <p className="text-lg font-semibold">
                🩸 Every two seconds, someone needs blood. You can make a
                difference.
              </p>
            </div>

            <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition">
              Join the Movement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
