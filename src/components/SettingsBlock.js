import React from 'react';
import { SettingsIcon } from './icons';

const SettingsBlock = () => {
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
      <div style={{ display: 'none' }}>Checkboxes</div>
    </div>
  );
};
export default SettingsBlock;
