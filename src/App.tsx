import React, { useState } from 'react';
import './App.css';

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

interface MovieDetails {
  Plot: string;
  Runtime: string;
  Genre: string;
  imdbRating: string;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async () => {
    const apiKey = 'd37dede0';
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`);
    const data = await response.json();

    if (data.Search) {
      setSearchResults(data.Search);
    }
  };

  const handleMovieClick = async (imdbID: string) => {
    const apiKey = 'd37dede0';
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`);
    const data = await response.json();

    setSelectedMovie(data);
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Search App</h1>
      </header>
      <main>
        <form onSubmit={(event) => {
          event.preventDefault();
          handleSearchSubmit();
        }}>
          <input type="text" value={searchTerm} onChange={handleSearchInputChange} placeholder="Enter movie title" />
          <button type="submit">Search</button>
        </form>
        <ul>
          {searchResults.map(movie => (
            <li key={movie.imdbID} onClick={() => handleMovieClick(movie.imdbID)}>
              <h3>{movie.Title} ({movie.Year})</h3>
              {movie.Poster && <img src={movie.Poster} alt={`Poster for ${movie.Title}`} />}
            </li>
          ))}
        </ul>
        {selectedMovie && (
          <div>
            <h2>{selectedMovie.Plot}</h2>
            <p>Runtime: {selectedMovie.Runtime}</p>
            <p>Genre: {selectedMovie.Genre}</p>
            <p>IMDb Rating: {selectedMovie.imdbRating}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
