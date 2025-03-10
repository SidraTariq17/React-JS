const AddressForm = () => {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">
        Address:
      </h2>
      <input
        type="text"
        className="block w-full rounded-md border-0 bg-transparent py-2 px-3 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
      />
      <p className="text-sm text-gray-500 text-left">Street Address</p>

      <input
        type="text"
        className="block w-full rounded-md border-0 bg-transparent py-2 px-3 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
      />
      <p className="text-sm text-gray-500 text-left">Street Address Line 02</p>
    </div>
  );
};

export default AddressForm;
