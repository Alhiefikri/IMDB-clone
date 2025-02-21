import { useState } from "react";
import { useMovieContext } from "../context/MovieContext";

const SearchBar = () => {
  const { searchMovies } = useMovieContext();
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      searchMovies(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4 p-4">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
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
