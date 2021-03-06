import React from 'react';
import './ToggleSwitch.scss';
import cn from 'classnames';

const ToggleSwitch = ({ value, onChange }) => {
  const handleChange = ({ target: { checked } }) => {
    onChange(checked);
  };
  return (
    <>
      <input
        checked={value}
        onChange={handleChange}
        className={cn('react-switch-checkbox', { checked: value })}
        id="react-switch-new"
        type="checkbox"
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default ToggleSwitch;
