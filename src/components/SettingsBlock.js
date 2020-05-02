import React, { useState } from 'react';
import { SettingsIcon } from './icons';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import { connect } from 'react-redux';
import { setAppState } from '../actions/app';
import CheckboxCustom from './../components/CheckboxCustom/CheckboxCustom';

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
    <div className=" position-relative">
      <div
        className={`icon-settings-block ${showBlock ? 'active-button' : ''}`}
        onClick={onChangeShowBlock}
      >
        <SettingsIcon fill={`${showBlock ? '#ffffff' : '#607990'}`} />
      </div>
      {showBlock ? (
        // --DropDown Settings Block --
        <div className="dropdown-settings-block position-absolute">
          <div className="buttons-block">
            <button className="settings-button-view">Essentials</button>
            <button className="settings-button-view">Compact view</button>
            <button className="settings-button-view">Default</button>
          </div>
          {/* -- ToggleSwitch -- */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="title-toggleSwitch">Custom Settings</span>
            <ToggleSwitch value={value} onChange={(val) => setValue(val)} />
          </div>
          <div>
            {/* -- form-checkbox -- */}
            {columnsProducts.map((item, index) => {
              return (
                <div className="mt-2" key={index}>
                  <CheckboxCustom
                    handleChangeCheckbox={handleChangeCheckbox(item.key)}
                    filterColumns={!filterColumns.includes(item.key)}
                    title={item.title}
                  />
                </div>
              );
            })}
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
