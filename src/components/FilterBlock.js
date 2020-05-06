import React, { useState } from 'react';
import { FilterIcon } from './icons';

const FilterBlock = ({ dispatch, filterColumns, columnsProducts }) => {
  const [showBlock, setShowBlock] = useState(false);
  const onChangeShowBlock = () => {
    setShowBlock(!showBlock);
  };
  return (
    <div className=" position-relative">
      {/* Button with dropdown */}
      <div
        className={`button-with-dropdown ${showBlock ? 'active-button' : ''}`}
        onClick={onChangeShowBlock}
      >
        <FilterIcon fill={`${showBlock ? '#ffffff' : '#607990'}`} />
      </div>
      {showBlock ? (
        // --DropDown Block --
        <div className="dropdown-block position-absolute"></div>
      ) : null}
    </div>
  );
};

export default FilterBlock;
