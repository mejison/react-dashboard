import React, { useState } from 'react';
import { SettingsIcon } from './icons';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import { connect } from 'react-redux';
import { setAppState } from '../actions/app';
import './CheckboxContainer/CheckboxContainer.scss';
import CheckboxContainer from './../components/CheckboxContainer/CheckboxContainer';

const SettingsBlock = ({ dispatch, filterColumns, columnsProducts }) => {
  const [value, setValue] = useState(true);
  const [showBlock, setShowBlock] = useState(true);
  const onChangeShowBlock = () => {
    setShowBlock(!showBlock);
  };
  const handleChangeCheckbox = (field) => ({ target: { checked } }) => {
    console.log(checked, field);
    const list = !checked
      ? [...filterColumns, field]
      : filterColumns.filter((key) => key !== field);
    dispatch(setAppState('filterColumns', list));
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
            {/* -- form-checkbox -- */}

            {columnsProducts.map((item, index) => {
              return (
                <CheckboxContainer
                  key={index}
                  handleChangeCheckbox={handleChangeCheckbox(item.key)}
                  filterColumns={!filterColumns.includes(item.key)}
                  title={item.title}
                />
              );
            })}

            {/* <div>
              <label className="checkbox-container">
                <span className="checkbox-title">date</span>
                <input
                  type="checkbox"
                  onChange={handleChangeCheckbox('date')}
                  checked={!filterColumns.includes('date')}
                />
                <span className="checkmark"></span>
              </label>
            </div> */}

            {/*-- /form-checkbox -- */}
          </div>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ app }) => ({
  filterColumns: app.filterColumns,
});

export default connect(mapStateToProps)(SettingsBlock);
