import React from 'react';
import './ToggleSwitch.scss';

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
      />
      <label className="react-switch-label" htmlFor="react-switch-new">
        <span className="react-switch-button" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
