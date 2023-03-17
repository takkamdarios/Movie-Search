interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
  }
  
  interface MovieListProps {
    movies: Movie[];
  }
  
  function MovieList({ movies }: MovieListProps) {
    return (
      <ul>
        {movies.map((movie) => (
          <MovieListItem key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    );
  }
  
  interface MovieListItemProps {
    movie: Movie;
  }
  
  function MovieListItem({ movie }: MovieListItemProps) {
    return (
      <li>
        <h2>{movie.Title}</h2>
        <p>Released: {movie.Year}</p>
        {movie.Poster !== "N/A" && (
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
        )}
      </li>
    );
  }
  