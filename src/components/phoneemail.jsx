const PhoneEmailForm = () => {
  return (
    <div className="mb-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">
            Phone Number:
          </h2>
          <input
            type="text"
            name="PhoneNumber"
            id="PhoneNumber"
            className="block w-full rounded-md border-0 bg-transparent py-2 px-3 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            placeholder="0-000-0000000"
          />
          <p className="text-sm text-gray-500 text-left">
            Please enter a valid phone number.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">
            Email:
          </h2>
          <input
            type="text"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 bg-transparent py-2 px-3 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            placeholder="xyz@gmail.com"
          />
          <p className="text-sm text-gray-500 text-left">
            Please enter a valid email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhoneEmailForm;
