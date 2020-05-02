import React from 'react';

const CheckboxContainer = ({ handleChangeCheckbox, filterColumns, title }) => {
  return (
    <div>
      <label className="checkbox-container">
        <span className="checkbox-title">{title}</span>
        <input
          type="checkbox"
          onChange={handleChangeCheckbox}
          checked={filterColumns}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default CheckboxContainer;
