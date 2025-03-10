const Birthday = () => {
  return (
    <div className="flex flex-col mb-5">
      <input
        type="date"
        name="birthday"
        id="birthday"
        className="mt-1 block w-full rounded-md border-0 bg-transparent py-1.5 px-2 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
      />
    </div>
  );
};

export default Birthday;
