import { Movie } from "../types";
import { MovieListItem } from '../components/MovieDetails;
// Define the props for the MovieList component
interface MovieListProps {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

// Define the MovieList component
function MovieList({ movies, onMovieClick }: MovieListProps) {
  // Render a list of movies using the movies prop and the MovieListItem component
  return (
    <ul>
      {movies.map((movie) => (
        <MovieListItem
          key={movie.imdbID} // Use the movie's imdbID as the key
          movie={movie}
          onClick={() => onMovieClick(movie)}
        />
      ))}
    </ul>
  );
}

// Define the props for the MovieListItem component
interface MovieListItemProps {
  movie: Movie;
  onClick: () => void;
}

// Define the MovieListItem component
function MovieListItem({ movie, onClick }: MovieListItemProps) {
  // Render a single movie item with the movie's title, release year, and poster (if available)
  return (
    <li onClick={onClick}>
      <h2>{movie.Title}</h2>
      <p>Released: {movie.Year}</p>
      {movie.Poster !== "N/A" && (
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
      )}
    </li>
  );
}
