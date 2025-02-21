import { useMovieContext } from "../context/MovieContext";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { movies, selectMovie } = useMovieContext();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onClick={() => selectMovie(movie.imdbID)}
        />
      ))}
    </div>
  );
};
export default MovieList;
