import React, { useState, useRef } from 'react';
import { SearchIcon } from './icons';
import cn from 'classnames'

const SearchInput = ({value, onChange}) => {
  const [active, setActive] = useState(false)
  const input = useRef(null)
  const handleChange = ({target: {value}}) => {
    onChange(value)
  }
  const handleFocus = () => {
    if (!active) {
      setActive(true)
    }
  }
  const handleBlur = () => {
    if (active && !value) {
      setActive(false)
    }
  }
  return (
    <div className={cn('search-input', {active})}>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="search"
        value={value}
        ref={ref => input.current = ref}
        onChange={handleChange}
        placeholder="Search by product name"
      />
      <div className="input-search-icon" onClick={() => input.current.focus()}>
        <SearchIcon />
      </div>
    </div>
  );
};
export default SearchInput;
