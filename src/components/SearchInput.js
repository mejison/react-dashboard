import React from 'react';
// import { SearchIcon } from './icons';

const SearchInput = () => {
  return (
    <div className="search-input">
      <input
        type="search"
        placeholder="Search by product name"
        // style={{ backgroundImage: `url(${(<SearchInputIcon />)})` }}
      />
      {/* <div className="input-search-icon">
        <SearchIcon />
      </div> */}
    </div>
  );
};
export default SearchInput;
