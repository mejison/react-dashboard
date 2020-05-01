import React, { useState } from 'react';
import { SettingsIcon } from './icons';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';

const SettingsBlock = () => {
  const [value, setValue] = useState(true);
  return (
    <div className="settings-block">
      <div className="icon-wrapper">
        <SettingsIcon />
      </div>
      <div className="buttons-block">
        <button>Essentials</button>
        <button>Compact view</button>
        <button>Default</button>
      </div>
      <div className="d-none">
        <ToggleSwitch value={value} onChange={(val) => setValue(val)} />
      </div>
      <div style={{ display: 'none' }}>Checkboxes</div>
    </div>
  );
};
export default SettingsBlock;
