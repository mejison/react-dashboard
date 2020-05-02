import React, { useState } from 'react';
import { SettingsIcon } from './icons';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import { connect } from 'react-redux'
import { setAppState } from '../actions/app'

const SettingsBlock = ({dispatch, filterColumns}) => {
  const [value, setValue] = useState(true);
  const [showBlock, setShowBlock] = useState(true);
  const onChangeShowBlock = () => {
    setShowBlock(!showBlock);
  };
  const handleChangeCheckbox = field => ({target: {checked}}) => {
    console.log(checked, field)
    const list = !checked ? [...filterColumns, field] : filterColumns.filter(key => key !== field)
    dispatch(setAppState('filterColumns', list))
  }
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
                onChange={handleChangeCheckbox('date')}
                checked={!filterColumns.includes('date')}
                id="defaultCheck1"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                date
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

const mapStateToProps = ({app}) => ({
  filterColumns: app.filterColumns,
})

export default connect(mapStateToProps)(SettingsBlock)
