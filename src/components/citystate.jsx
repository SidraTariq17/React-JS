const CityStateForm = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-5">
      <div>
        <input
          type="text"
          placeholder="City"
          className="border border-gray-300 rounded w-full p-2"
        />
        <p className="text-sm text-gray-500">City</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="State / Province"
          className="border border-gray-300 rounded w-full p-2"
        />
        <p className="text-sm text-gray-500">State / Province</p>
      </div>
    </div>
  );
};

export default CityStateForm;
