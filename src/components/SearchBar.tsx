import React, { useState } from 'react';

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for a movie" value={searchTerm} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};
