const Gender = () => {
  return (
    <div className="flex flex-col mb-5">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">
        Gender:
      </h2>
      <div className="flex gap-6 mt-2">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="male"
            className="hidden peer"
          />
          <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-300 peer-checked:border-indigo-600 peer-checked:bg-indigo-600 text-white">
            ✔
          </div>
          <span className="text-gray-900">Male</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="female"
            className="hidden peer"
          />
          <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 text-white">
            ✔
          </div>
          <span className="text-gray-900">Female</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="other"
            className="hidden peer"
          />
          <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-300 peer-checked:border-gray-500 peer-checked:bg-gray-500 text-white">
            ✔
          </div>
          <span className="text-gray-900">Other</span>
        </label>
      </div>
    </div>
  );
};

export default Gender;
