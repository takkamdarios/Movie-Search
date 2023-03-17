import React from "react";
import { Movie } from "../types";

// Define the props that the MovieDetails component will accept.
// The props will include a single movie object of type Movie.
type MovieDetailsProps = {
  movie: Movie;
};

// Define the MovieDetails component as a functional component.
// The component will accept a single prop of type MovieDetailsProps.
const MovieDetails = ({ movie }: MovieDetailsProps) => {
  return (
    // Render the details of the movie.
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <p>Released: {movie.Released}</p>
      <p>Runtime: {movie.Runtime}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Rated: {movie.Rated}</p>
      <p>Plot: {movie.Plot}</p>
      <p>Director: {movie.Director}</p>
      <p>Writer: {movie.Writer}</p>
      <p>Actors: {movie.Actors}</p>
      <p>IMDB Rating: {movie.imdbRating}</p>
    </div>
  );
};

// Export the MovieDetails component as the default export of this module.
export default MovieDetails;
