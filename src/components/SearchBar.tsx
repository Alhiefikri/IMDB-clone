const SearchBar = () => {
  return (
    <form className="flex items-center space-x-4 p-4">
      <input
        className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full"
        type="text"
      />
      <button
        type="submit"
        className="bg-red-600 py-2 rounded-lg text-white px-4"
      >
        Search
      </button>
    </form>
  );
};
export default SearchBar;
