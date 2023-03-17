import React, { useState, useEffect } from 'react';
import { SearchBar } from '../src/components/SearchBar';
import { MovieList } from '../src/components/MovieList';
import { MovieDetails } from '../src/components/MovieDetails';
import { Movie } from '../src/types';
//run the command 'npm install react-bootsrap' so as to benefit from react-bootstrap
import { Container, Row, Col, Alert } from 'react-bootstrap';

const API_KEY = 'd37dede0';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<string | null>(null);

  // This useEffect hook runs when the selectedMovie state changes, and updates the document title accordingly
  useEffect(() => {
    document.title = selectedMovie ? selectedMovie.Title : 'Movie Search';
  }, [selectedMovie]);

  // This function fetches movie data from the OMDb API based on the search term, and sets the movies state accordingly
  const searchMovies = async (searchTerm: string) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
        setError(null);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (error) {
      console.error(error);
      setMovies([]);
      setError('An error occurred while searching for movies. Please try again later.');
    }
  };

  // This function fetches detailed information about a selected movie from the OMDb API, and sets the selectedMovie state accordingly
  const selectMovie = async (movie: Movie) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}&plot=full`);
      const data = await response.json();
      setSelectedMovie(data);
      setError(null);
    } catch (error) {
      console.error(error);
      setSelectedMovie(null);
      setError('An error occurred while retrieving movie details. Please try again later.');
    }
  };

  // This function unselects the currently selected movie, and sets the selectedMovie state to null
  const unselectMovie = () => {
    setSelectedMovie(null);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Movie Search</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <SearchBar onSearch={searchMovies} />
        </Col>
      </Row>
      {error && (
        <Row>
          <Col>
            <Alert variant="danger">{error}</Alert>
          </Col>
        </Row>
      )}
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onClose={unselectMovie} />
      ) : (
        <MovieList movies={movies} onMovieClick={selectMovie} />
      )}
    </Container>
  );
}

export default App;
