import React from 'react';
import './CheckboxCustom.scss';

const CheckboxCustom = ({ handleChangeCheckbox, filterColumns, title }) => {
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

export default CheckboxCustom;
