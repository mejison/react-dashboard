import React from 'react';
// import { SearchInputIcon } from './icons';

const SearchInput = () => {
  return (
    <div className="search-input">
      <input
        type="search"
        placeholder="Search by product name"
        // style={{ backgroundImage: `url(${(<SearchInputIcon />)})` }}
      />
    </div>
  );
};
export default SearchInput;
