import React from 'react';
import { TableViewIcon } from './icons';

const ButtonView = ({ changeView, show, title }) => {
  return (
    <div
      className={`button-wrapper d-flex justify-content-between align-items-center ${
        show ? 'active-button' : ''
      }
      `}
      onClick={!show ? changeView : null}
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
