import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';

type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

type SearchResult = {
  Search: Movie[];
};

const API_KEY = 'd37dede0';

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const handleSearch = async (searchTerm: string) => {
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`;
    const response = await fetch(url);
    const data: SearchResult = await response.json();

    if (data.Search) {
      setSearchResults(data.Search);
    }
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default App;
