import React, { useState } from 'react';
import { SettingsIcon } from './icons';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';

const SettingsBlock = () => {
  const [value, setValue] = useState(true);
  const [showBlock, setShowBlock] = useState(true);
  const onChangeShowBlock = () => {
    setShowBlock(!showBlock);
  };
  return (
    <div className="settings-block position-relative">
      <div
        className={`icon-wrapper ${showBlock ? 'active-button' : ''}`}
        onClick={onChangeShowBlock}
      >
        <SettingsIcon fill={`${showBlock ? '#ffffff' : '#607990'}`} />
      </div>
      {showBlock ? (
        <div className="dropdown-settings-block position-absolute">
          <div className="buttons-block">
            <button className="settings-button">Essentials</button>
            <button className="settings-button">Compact view</button>
            <button className="settings-button">Default</button>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span>Custom Settings</span>
            <ToggleSwitch value={value} onChange={(val) => setValue(val)} />
          </div>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Default checkbox
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Default checkbox
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Default checkbox
              </label>
            </div>
          </div>
        </div>
      ) : null}
      {/* <div className="dropdown-block position-absolute">
        <div className="buttons-block">
          <button>Essentials</button>
          <button>Compact view</button>
          <button>Default</button>
        </div>
        <div className="d-none">
          <ToggleSwitch value={value} onChange={(val) => setValue(val)} />
        </div>
        <div style={{ display: 'none' }}>Checkboxes</div>
      </div> */}
    </div>
  );
};
export default SettingsBlock;
