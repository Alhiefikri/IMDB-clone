import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      <MovieCard />
    </div>
  );
};
export default MovieList;
