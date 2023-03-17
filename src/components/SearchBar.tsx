import React, { useState } from 'react';

// Define the props that the SearchBar component will accept.
// The props will include a single function called onSearch
type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

// Define the SearchBar component as a functional component.
// The component will accept a single prop of type SearchBarProps.
export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  // Declare a state variable called 'searchTerm' using the useState hook.
  const [searchTerm, setSearchTerm] = useState('');

  // Define a function called 'handleSubmit' that will be called when the
  // user submits the search form. The function will prevent the default
  // form submission behavior and call the 'onSearch' function with the
  // current value of the 'searchTerm' state variable.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  // Define a function called 'handleChange' that will be called when the
  // user types into the search input. The function will update the
  // 'searchTerm' state variable to the current value of the search input.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Render a search form that contains an input field for the user to
  // enter a search term and a submit button to initiate the search.

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for a movie" value={searchTerm} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};
