import React from 'react';
import { TableViewIcon } from './icons';

const ButtonView = ({ changeView, show, title, icon }) => {
  return (
    <div
      className={`button-wrapper d-flex justify-content-between align-items-center ${
        show ? 'active-button' : ''
      }
      `}
      onClick={changeView}
    >
      <div>
        <p>{title}</p>
      </div>
      <div className="d-flex align-items-center">
        <TableViewIcon fill={`${show ? '#ffffff' : '#607990'}`} />
      </div>
    </div>
  );
};

export default ButtonView;
