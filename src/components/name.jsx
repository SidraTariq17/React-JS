const Name = () => {
  return (
    <div className="flex flex-col mb-5">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">
        Full Name:
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="block w-full rounded-md border-0 bg-transparent py-2 px-3 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
          placeholder="First Name"
        />

        <input
          type="text"
          name="lastName"
          id="lastName"
          className="block w-full rounded-md border-0 bg-transparent py-2 px-3 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
          placeholder="Last Name"
        />
      </div>
    </div>
  );
};

export default Name;
